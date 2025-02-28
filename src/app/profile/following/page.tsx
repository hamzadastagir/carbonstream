import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Following() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Following</h1>
          <p>This page is under construction. The users you're following will be listed here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

