"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! How can I assist you with your trading today?"
    }
  ])
  
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      { role: "user", content: input }
    ]
    setMessages(newMessages)
    setInput("")

    // TODO: Add API call to handle AI response
    // For now, just simulate a response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "I'm a demo response. The AI integration is coming soon!"
        }
      ])
    }, 1000)
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Trading Assistant</CardTitle>
          <CardDescription>
            Chat with our AI to get trading insights and analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

