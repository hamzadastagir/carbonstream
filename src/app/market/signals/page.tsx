import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function TradeSignals() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Trade Signals</h1>
          <p>This page is under construction. Trade signals will be displayed here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

