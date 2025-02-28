import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>
          <Card>
            <CardHeader>
              <CardTitle>Trader Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/avatars/01.png" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">Professional Trader</p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <p>
                  <strong>Email:</strong> john.doe@example.com
                </p>
                <p>
                  <strong>Location:</strong> New York, USA
                </p>
                <p>
                  <strong>Trading Experience:</strong> 5 years
                </p>
                <p>
                  <strong>Preferred Markets:</strong> Stocks, Forex
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

