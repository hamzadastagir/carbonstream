import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TradingStrategies() {
  const strategies = [
    {
      id: 1,
      name: "Moving Average Crossover",
      description: "A trend-following strategy based on the crossover of two moving averages.",
    },
    {
      id: 2,
      name: "RSI Overbought/Oversold",
      description: "A mean reversion strategy using the Relative Strength Index (RSI) indicator.",
    },
    {
      id: 3,
      name: "Breakout Trading",
      description: "A strategy that aims to enter the market when the price breaks above or below a significant level.",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Trading Strategies</h1>
          {strategies.map((strategy) => (
            <Card key={strategy.id} className="mb-4">
              <CardHeader>
                <CardTitle>{strategy.name}</CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

