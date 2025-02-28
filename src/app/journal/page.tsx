import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export default function TradingJournal() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Trading Journal</h1>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>New Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Write your trading thoughts here..." className="mb-4" />
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Entry
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">May 15, 2023</h3>
                  <p className="text-sm text-muted-foreground">
                    Market showed strong bullish trends today. Considering increasing positions in tech stocks.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">May 14, 2023</h3>
                  <p className="text-sm text-muted-foreground">
                    Closed AAPL position for a 5% gain. Need to work on holding winners longer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

