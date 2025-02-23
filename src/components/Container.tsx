export default function Container() {
  return <article></article>
}

function Header({ title }: { title: string }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <div></div>
    </>
  )
}

function Tabs({ tabs }: { tabs: any[] }) {
  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>{tab.title}</li>
        ))}
      </ul>
    </nav>
  )
}

Container.Header = Header
Container.Tabs = Tabs
