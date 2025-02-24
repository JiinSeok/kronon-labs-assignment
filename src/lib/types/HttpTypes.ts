export const HttpStatus = {
  UNAUTHORIZED: {
    code: '401',
    message: '인증 오류. 다시 로그인 해주세요.',
  },
  FORBIDDEN: {
    code: '403',
    message: '접근이 금지되었습니다. The WAF Limit (Web Application Firewall) has been violated.',
  },
  NOT_FOUND: {
    code: '404',
    message: '요청한 자원을 찾을 수 없습니다.',
  },
  CONFILCT: {
    code: '409',
    message: '이미 존재하는 자원입니다. A cancelReplace order partially succeeds.',
  },
  TOO_MANY_REQUESTS: {
    code: '429',
    message:
      '요청이 너무 많습니다. 잠시 후 다시 시도해주세요. A request rate limit is broken. If you continue to send requests, an IP would be auto-banned.',
  },
  INTERNAL_SERVER_ERROR: {
    code: '500',
    message: '서버에서 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
  DEFAULT: {
    code: '0',
    message: '문제가 발생했습니다. 다시 시도해 주세요.',
  },
} as const

// HttpStatus 객체의 모든 키를 나열하는 타입
export type HttpStatusType = keyof typeof HttpStatus
