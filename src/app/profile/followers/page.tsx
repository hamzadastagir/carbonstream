import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Followers() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Followers</h1>
          <p>This page is under construction. Your followers will be listed here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

