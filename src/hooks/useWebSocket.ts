"use client"

import { useEffect, useState } from "react"
import io from "socket.io-client"

const PROXY_URL = process.env.NEXT_PUBLIC_PROXY_URL || "https://carbonstream.vercel.app"
const socket = io(PROXY_URL)

export function useWebSocket(channel: string) {
  const [data, setData] = useState(null)

  useEffect(() => {
    socket.emit("subscribe", channel)

    socket.on(channel, (newData) => {
      setData(newData)
    })

    return () => {
      socket.off(channel)
    }
  }, [channel])

  return data
}

