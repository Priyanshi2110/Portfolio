import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const isAdminView = new URLSearchParams(window.location.search).get('admin') === 'priyanshi'

  useEffect(() => {
    const hostname = window.location.hostname || 'localhost'
    const key = hostname.replace(/\./g, '-') || 'portfolio'
    const hitUrl = `https://api.countapi.xyz/hit/${key}/portfolio-views`
    const getUrl = `https://api.countapi.xyz/get/${key}/portfolio-views`
    const storageKey = `portfolio-visitor-counted-${key}`

    const recordVisit = async () => {
      try {
        const hasCountedThisSession = sessionStorage.getItem(storageKey)

        if (!hasCountedThisSession) {
          await fetch(hitUrl)
          sessionStorage.setItem(storageKey, 'true')
        }

        const response = await fetch(getUrl)
        const data = await response.json()
        setCount(data?.value ?? 0)
      } catch (error) {
        console.error('Visitor count unavailable:', error)
        setCount(0)
      } finally {
        setLoading(false)
      }
    }

    recordVisit()
  }, [])

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
