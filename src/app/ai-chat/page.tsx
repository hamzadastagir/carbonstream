"use client"

import { useState } from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function AIChat() {
  const [messages, setMessages] = useState(
    [\
    { role: 'assistant\', content: \'Hello! How can I assist you with

 setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you with your trading today?' },
  ],
  )
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      // Here you would typically call an AI service to get a response
      // For this example, we'll just simulate a response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "I understand. Can you provide more details about your trading strategy?" },
        ])
      }, 1000)
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">AI Chat</h1>
          <Card>
            <CardHeader>
              <CardTitle>Chat with AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`rounded-lg p-2 max-w-[70%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

