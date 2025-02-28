import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"
import { dummyData } from "./dummy-data.js"

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

const PORT = process.env.hdgrs_PROXY_API_PORT || 5000
const USE_REAL_API = process.env.hdgrs_PROXY_USE_REAL_API === "true"

app.use(cors())
app.use(express.json())

// Helper function to get data (dummy or real)
const getData = async (endpoint, params = {}) => {
  if (USE_REAL_API) {
    // TODO: Implement real API call
    // return await fetch(`http://real-api-url/${endpoint}`, { params });
    throw new Error("Real API not implemented yet")
  }
  return dummyData[endpoint] || { error: "Endpoint not found" }
}

// REST API routes
app.get("/api/dashboard", async (req, res) => {
  try {
    const data = await getData("dashboard")
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/api/trades", async (req, res) => {
  try {
    const data = await getData("trades")
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post("/api/journal", async (req, res) => {
  try {
    const data = await getData("journal", req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/api/news", async (req, res) => {
  try {
    const data = await getData("news")
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/api/market-analysis", async (req, res) => {
  try {
    const data = await getData("marketAnalysis")
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// WebSocket connection
io.on("connection", (socket) => {
  console.log("A user connected")

  socket.on("subscribe", async (channel) => {
    console.log(`User subscribed to ${channel}`)

    // Simulate real-time data updates
    setInterval(async () => {
      try {
        const data = await getData(channel)
        socket.emit(channel, data)
      } catch (error) {
        socket.emit("error", { message: error.message })
      }
    }, 5000) // Send updates every 5 seconds
  })

  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
})

server.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`)
  console.log(`Using real API: ${USE_REAL_API}`)
})

