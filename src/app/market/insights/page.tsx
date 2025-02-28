import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function MarketInsights() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Market Insights</h1>
          <p>This page is under construction. Market insights will be displayed here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

