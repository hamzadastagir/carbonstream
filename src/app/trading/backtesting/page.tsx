import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Backtesting() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Backtesting</h1>
          <p>This page is under construction. Backtesting tools will be available here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

