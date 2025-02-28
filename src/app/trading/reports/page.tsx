import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function TradingReports() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Trading Reports</h1>
          <p>This page is under construction. Trading reports will be generated here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

