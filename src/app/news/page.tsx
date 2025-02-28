import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsAndUpdates() {
  const news = [
    { id: 1, title: "Fed Announces Interest Rate Decision", category: "Economic", time: "2 hours ago" },
    { id: 2, title: "Tech Stocks Rally on Positive Earnings", category: "Market", time: "4 hours ago" },
    { id: 3, title: "Oil Prices Surge Amid Geopolitical Tensions", category: "Commodities", time: "6 hours ago" },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">News and Updates</h1>
          {news.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{item.title}</CardTitle>
                  <Badge>{item.category}</Badge>
                </div>
                <CardDescription>{item.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

