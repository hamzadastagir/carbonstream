"use client"

import { useState } from "react"
import { Search, Filter, ExternalLink, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketNews() {
  const [selectedTab, setSelectedTab] = useState("all")

  // This would typically come from a database or API
  const news = [
    {
      id: 1,
      title: "Fed Announces Interest Rate Decision",
      source: "Financial Times",
      date: "2023-05-10",
      summary:
        "The Federal Reserve has decided to maintain current interest rates, citing stable inflation and continued economic growth.",
      category: "Economic",
      impact: "High",
      likes: 245,
      dislikes: 12,
      comments: 89,
    },
    {
      id: 2,
      title: "Tech Giants Report Strong Q2 Earnings",
      source: "Wall Street Journal",
      date: "2023-05-09",
      summary:
        "Major technology companies have reported better-than-expected earnings for Q2, driving stock prices higher in after-hours trading.",
      category: "Earnings",
      impact: "Medium",
      likes: 189,
      dislikes: 8,
      comments: 56,
    },
    {
      id: 3,
      title: "Oil Prices Surge Amid Geopolitical Tensions",
      source: "Bloomberg",
      date: "2023-05-08",
      summary:
        "Crude oil prices have spiked due to escalating tensions in the Middle East, potentially impacting global energy markets.",
      category: "Commodities",
      impact: "High",
      likes: 132,
      dislikes: 15,
      comments: 78,
    },
    {
      id: 4,
      title: "New Trade Deal Announced Between US and EU",
      source: "Reuters",
      date: "2023-05-07",
      summary:
        "The United States and European Union have reached a new trade agreement, aiming to boost economic cooperation and reduce tariffs.",
      category: "Economic",
      impact: "Medium",
      likes: 201,
      dislikes: 19,
      comments: 67,
    },
    {
      id: 5,
      title: "Cryptocurrency Market Sees Major Correction",
      source: "CoinDesk",
      date: "2023-05-06",
      summary:
        "The cryptocurrency market experienced a significant downturn, with major coins losing up to 20% of their value in 24 hours.",
      category: "Crypto",
      impact: "High",
      likes: 278,
      dislikes: 31,
      comments: 112,
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Market News and Updates</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Latest Market News</CardTitle>
              <CardDescription>Stay informed with the most recent market developments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search news..." className="w-64" />
                  <Button variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="economic">Economic</SelectItem>
                      <SelectItem value="earnings">Earnings</SelectItem>
                      <SelectItem value="commodities">Commodities</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
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
                  <TabsTrigger value="all">All News</TabsTrigger>
                  <TabsTrigger value="high-impact">High Impact</TabsTrigger>
                  <TabsTrigger value="medium-impact">Medium Impact</TabsTrigger>
                  <TabsTrigger value="low-impact">Low Impact</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  {news.map((item) => (
                    <Card key={item.id} className="mb-4">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                              {item.source} • {item.date}
                            </CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">{item.summary}</p>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <div>Category: {item.category}</div>
                          <div>Impact: {item.impact}</div>
                          <div className="flex space-x-4">
                            <span className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {item.likes}
                            </span>
                            <span className="flex items-center">
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              {item.dislikes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {item.comments}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="high-impact">
                  {news
                    .filter((item) => item.impact === "High")
                    .map((item) => (
                      <Card key={item.id} className="mb-4">
                        {/* Repeat the card content structure from above */}
                      </Card>
                    ))}
                </TabsContent>
                <TabsContent value="medium-impact">
                  {news
                    .filter((item) => item.impact === "Medium")
                    .map((item) => (
                      <Card key={item.id} className="mb-4">
                        {/* Repeat the card content structure from above */}
                      </Card>
                    ))}
                </TabsContent>
                <TabsContent value="low-impact">
                  {news
                    .filter((item) => item.impact === "Low")
                    .map((item) => (
                      <Card key={item.id} className="mb-4">
                        {/* Repeat the card content structure from above */}
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

