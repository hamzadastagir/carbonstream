import { TableCell } from "@/components/ui/table"
import { TableBody } from "@/components/ui/table"
import { TableHead } from "@/components/ui/table"
import { TableRow } from "@/components/ui/table"
import { TableHeader } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import { useState } from "react"
import { CalendarIcon, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function TradingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // This would typically come from a database or API
  const events = [
    { id: 1, title: "US CPI Release", date: "2023-05-10", type: "economic", category: "Market Event" },
    { id: 2, title: "AAPL Earnings Call", date: "2023-05-15", type: "earnings", category: "Market Event" },
    { id: 3, title: "FOMC Meeting", date: "2023-05-20", type: "economic", category: "Market Event" },
    { id: 4, title: "Review Trading Strategy", date: "2023-05-12", type: "task", category: "Personal Task" },
    {
      id: 5,
      title: "Webinar: Advanced Technical Analysis",
      date: "2023-05-18",
      type: "education",
      category: "Personal Event",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Trading Calendar</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Event
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Schedule trades, tasks, and track market events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Important dates and scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge variant={event.category === "Market Event" ? "default" : "secondary"}>
                        {event.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Manage and filter your events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="market">Market Events</SelectItem>
                    <SelectItem value="personal">Personal Events</SelectItem>
                    <SelectItem value="task">Tasks</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Export Calendar
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.title}</TableCell>
                      <TableCell>
                        <Badge variant={event.category === "Market Event" ? "default" : "secondary"}>
                          {event.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

