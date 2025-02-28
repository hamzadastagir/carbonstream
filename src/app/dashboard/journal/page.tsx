"use client"

import { useState } from "react"
import { Calendar, Filter, Search, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TradingJournal() {
  const [selectedTab, setSelectedTab] = useState("all")

  // This would typically come from a database or API
  const trades = [
    {
      id: 1,
      date: "2023-05-01",
      asset: "AAPL",
      type: "Buy",
      price: 150.25,
      quantity: 10,
      pnl: 52.3,
      notes: "Bullish trend identified",
    },
    {
      id: 2,
      date: "2023-05-02",
      asset: "TSLA",
      type: "Sell",
      price: 180.75,
      quantity: 5,
      pnl: -25.5,
      notes: "Taking profits before earnings",
    },
    {
      id: 3,
      date: "2023-05-03",
      asset: "GOOGL",
      type: "Buy",
      price: 2750.0,
      quantity: 2,
      pnl: 120.0,
      notes: "Oversold after market overreaction",
    },
    {
      id: 4,
      date: "2023-05-04",
      asset: "AMZN",
      type: "Sell",
      price: 3300.5,
      quantity: 3,
      pnl: 75.8,
      notes: "Reached target price",
    },
    {
      id: 5,
      date: "2023-05-05",
      asset: "MSFT",
      type: "Buy",
      price: 280.1,
      quantity: 8,
      pnl: 42.6,
      notes: "Accumulating for long-term hold",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Trading Journal</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Trade
            </Button>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Trade Log</CardTitle>
              <CardDescription>A detailed record of your trading activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search trades..." className="w-64" />
                  <Button variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Assets</SelectItem>
                      <SelectItem value="AAPL">AAPL</SelectItem>
                      <SelectItem value="TSLA">TSLA</SelectItem>
                      <SelectItem value="GOOGL">GOOGL</SelectItem>
                      <SelectItem value="AMZN">AMZN</SelectItem>
                      <SelectItem value="MSFT">MSFT</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>

              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All Trades</TabsTrigger>
                  <TabsTrigger value="buy">Buy Orders</TabsTrigger>
                  <TabsTrigger value="sell">Sell Orders</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>P&L</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trades.map((trade) => (
                        <TableRow key={trade.id}>
                          <TableCell>{trade.date}</TableCell>
                          <TableCell>{trade.asset}</TableCell>
                          <TableCell>{trade.type}</TableCell>
                          <TableCell>${trade.price.toFixed(2)}</TableCell>
                          <TableCell>{trade.quantity}</TableCell>
                          <TableCell className={trade.pnl >= 0 ? "text-green-600" : "text-red-600"}>
                            ${Math.abs(trade.pnl).toFixed(2)}
                          </TableCell>
                          <TableCell>{trade.notes}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="buy">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trades
                        .filter((trade) => trade.type === "Buy")
                        .map((trade) => (
                          <TableRow key={trade.id}>
                            <TableCell>{trade.date}</TableCell>
                            <TableCell>{trade.asset}</TableCell>
                            <TableCell>${trade.price.toFixed(2)}</TableCell>
                            <TableCell>{trade.quantity}</TableCell>
                            <TableCell>{trade.notes}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="sell">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>P&L</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trades
                        .filter((trade) => trade.type === "Sell")
                        .map((trade) => (
                          <TableRow key={trade.id}>
                            <TableCell>{trade.date}</TableCell>
                            <TableCell>{trade.asset}</TableCell>
                            <TableCell>${trade.price.toFixed(2)}</TableCell>
                            <TableCell>{trade.quantity}</TableCell>
                            <TableCell className={trade.pnl >= 0 ? "text-green-600" : "text-red-600"}>
                              ${Math.abs(trade.pnl).toFixed(2)}
                            </TableCell>
                            <TableCell>{trade.notes}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trade Analysis</CardTitle>
              <CardDescription>Visualize and analyze your trading performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Select defaultValue="7d">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1d">Last 24 hours</SelectItem>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Custom Date Range
                </Button>
              </div>
              <div className="h-80 bg-muted rounded-md flex items-center justify-center">
                Trade performance chart placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

