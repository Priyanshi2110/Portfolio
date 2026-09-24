import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const isAdminView = new URLSearchParams(window.location.search).get('admin') === 'priyanshi'

  useEffect(() => {
    if (!isAdminView) {
      setLoading(false)
      setCount(0)
      return
    }

    const namespace = import.meta.env.VITE_VISITOR_NAMESPACE || 'priyanshi-portfolio'
    const storageKey = `portfolio-visitor-counted-${namespace}`
    const hitUrl = `https://api.countapi.xyz/hit/${namespace}/portfolio_visits`
    const getUrl = `https://api.countapi.xyz/get/${namespace}/portfolio_visits`

    const trackVisit = async () => {
      try {
        const alreadyCounted = localStorage.getItem(storageKey)

        if (!alreadyCounted) {
          await fetch(hitUrl, { method: 'GET' })
          localStorage.setItem(storageKey, 'true')
        }

        const response = await fetch(getUrl)
        const data = await response.json()
        setCount(Number(data?.value || 0))
      } catch (error) {
        console.error('Visitor tracking unavailable:', error)
        setCount(0)
      } finally {
        setLoading(false)
      }
    }

    trackVisit()
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
