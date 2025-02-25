import handleError from '@/lib/utils/errorHandler'
import { useCallback, useEffect, useRef, useState } from 'react'

interface BinanceWsOptions {
  reconnect?: boolean // 연결 끊김 시 자동 재연결 여부
  reconnectInterval?: number // 재연결 시도 간격(ms)
}

export function useBinanceWebSocket(
  url: string,
  { reconnect = true, reconnectInterval = 5000 }: BinanceWsOptions = {},
) {
  const [messages, setMessages] = useState<unknown[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimer = useRef<NodeJS.Timeout | null>(null)

  // 메시지 전송 함수
  const sendMessage = useCallback((data: object | string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const payload = typeof data === 'string' ? data : JSON.stringify(data)
      wsRef.current.send(payload)
    } else {
      console.warn('WebSocket is not open. Cannot send message.')
    }
  }, [])

  // 연결 로직
  const connect = useCallback(() => {
    const ws = new WebSocket(url)
    wsRef.current = ws

    ws.onopen = () => {
      console.log('WebSocket connected:', url)
      setIsConnected(true)
    }

    ws.onmessage = (event) => {
      // 예: Binance Trade Stream은 JSON 형태의 데이터를 전송
      try {
        const data = JSON.parse(event.data)
        setMessages((prev) => [...prev, data])
      } catch (error) {
        console.error('Failed to parse message:', event.data)
        handleError(error)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    ws.onclose = (e) => {
      console.warn('WebSocket closed:', e.reason)
      setIsConnected(false)
      // 재연결 옵션이 true라면 일정 시간 후 재시도
      if (reconnect) {
        reconnectTimer.current = setTimeout(() => {
          console.log('Reconnecting WebSocket...')
          connect()
        }, reconnectInterval)
      }
    }
  }, [url, reconnect, reconnectInterval])

  useEffect(() => {
    connect()
    return () => {
      // 언마운트 시 WebSocket 및 타이머 정리
      if (wsRef.current) {
        wsRef.current.close()
      }
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current)
      }
    }
  }, [connect])

  return {
    messages, // 받은 메시지 배열
    isConnected, // 연결 상태
    sendMessage, // 메시지 전송 함수
  }
}
