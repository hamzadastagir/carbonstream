import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TechnicalAnalysis() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Technical Analysis</h1>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Chart Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Symbol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AAPL">AAPL</SelectItem>
                    <SelectItem value="GOOGL">GOOGL</SelectItem>
                    <SelectItem value="MSFT">MSFT</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1D">1 Day</SelectItem>
                    <SelectItem value="1W">1 Week</SelectItem>
                    <SelectItem value="1M">1 Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">Chart placeholder</div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

