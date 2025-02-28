import { Separator } from "@/components/ui/separator"

interface DashboardHeaderProps {
  title: string
  description: string
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <Separator className="my-4" />
    </div>
  )
}

