import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Preferences() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Preferences</h1>
          <p>This page is under construction. You'll be able to set your preferences here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

