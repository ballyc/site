import Link from 'next/link'

export const metadata = {
  title: 'Pomodoro Timer — Chloe Bally',
}

export default function PomodoroPage() {
  return (
    <main>
      <p style={{ marginBottom: '1.5rem' }}>
        <Link href="/">← back</Link>
      </p>

      <h1># Pomodoro Timer</h1>

      <p style={{ margin: '1rem 0' }}>
        <span className="proj">*pomodoro*</span> Yet another project description (2022)
      </p>

      <iframe
        src="https://claude.site/public/artifacts/93e69597-7ca1-490e-b5ac-0a8356a8db71/embed"
        title="Pomodoro Timer with Sound and Session Tracking"
        width="100%"
        height="600"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
        style={{ marginTop: '1rem', display: 'block' }}
      />
    </main>
  )
}