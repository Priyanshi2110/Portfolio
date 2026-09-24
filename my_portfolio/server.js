import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import crypto from 'crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.join(__dirname, 'data')
const dataPath = path.join(dataDir, 'visitors.json')

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify({ count: 0 }, null, 2))
}

const app = express()
const port = process.env.PORT || 4000

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

const readVisitors = () => {
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  } catch (error) {
    return { count: 0 }
  }
}

const saveVisitors = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}

app.get('/api/visitors', (req, res) => {
  const data = readVisitors()
  res.json({ count: Number(data.count || 0) })
})

app.post('/api/visitors', (req, res) => {
  const data = readVisitors()
  const existingVisitorId = req.cookies?.visitorId

  if (existingVisitorId) {
    return res.json({ count: Number(data.count || 0) })
  }

  const visitorId = crypto.randomUUID()
  const nextCount = Number(data.count || 0) + 1

  saveVisitors({ count: nextCount })

  res.cookie('visitorId', visitorId, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: false,
  })

  res.json({ count: nextCount })
})

app.listen(port, () => {
  console.log(`Visitor tracker running on http://localhost:${port}`)
})
