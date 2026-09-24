import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const isAdminView = new URLSearchParams(window.location.search).get('admin') === 'priyanshi'

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const response = await fetch('/api/visitors', {
          method: 'POST',
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error('Failed to track visitor')
        }

        const data = await response.json()
        setCount(Number(data.count || 0))
      } catch (error) {
        console.error('Visitor tracking unavailable:', error)

        try {
          const fallbackResponse = await fetch('/api/visitors', { credentials: 'include' })
          const fallbackData = await fallbackResponse.json()
          setCount(Number(fallbackData.count || 0))
        } catch {
          setCount(0)
        }
      } finally {
        setLoading(false)
      }
    }

    if (isAdminView) {
      trackVisit()
    } else {
      setLoading(false)
      setCount(0)
    }
  }, [isAdminView])

  if (!isAdminView) {
    return null
  }

  return (
    <section className="visitor-counter" aria-live="polite">
      <div className="visitor-counter-card">
        <p className="section-kicker">Portfolio analytics</p>
        <h2>Visitors tracked</h2>
        <div className="visitor-number" aria-label="Total portfolio visitors">
          {loading ? 'Loading...' : count.toLocaleString()}
        </div>
        <span className="visitor-label">total visits</span>
      </div>
    </section>
  )
}

export default VisitorCounter
