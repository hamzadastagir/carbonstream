import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Billing() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Billing</h1>
          <p>This page is under construction. You'll be able to manage your billing information here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

