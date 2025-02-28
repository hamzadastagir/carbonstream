import { Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BillingPage() {
  // This would typically come from a database or API
  const user = {
    name: "John Trader",
    email: "john@minktrader.com",
    subscription: "free",
  }

  const plans = [
    {
      name: "Free",
      price: "$0/month",
      features: ["Basic market data", "Limited portfolio tracking", "Standard charts"],
      current: user.subscription === "free",
    },
    {
      name: "Premium",
      price: "$29.99/month",
      features: ["Real-time market data", "Advanced portfolio analytics", "AI-powered insights"],
      current: user.subscription === "premium",
    },
    {
      name: "Enterprise",
      price: "$99.99/month",
      features: ["Institutional-grade tools", "Dedicated support", "Custom integrations"],
      current: user.subscription === "enterprise",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Subscription Management</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the {user.subscription} plan</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plan</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan) => (
                    <TableRow key={plan.name}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>{plan.price}</TableCell>
                      <TableCell>
                        {plan.current ? (
                          <span className="text-green-600 font-semibold">Active</span>
                        ) : (
                          <span className="text-gray-500">Inactive</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {plan.current ? (
                          <Button variant="outline" disabled>
                            Current Plan
                          </Button>
                        ) : (
                          <Button variant="default">{user.subscription === "free" ? "Upgrade" : "Switch"}</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">Plan Comparison</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant={plan.current ? "outline" : "default"}>
                    {plan.current ? "Current Plan" : "Select Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

