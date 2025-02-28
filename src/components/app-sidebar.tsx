"use client"

import type * as React from "react"
import {
  BarChart,
  Home,
  LineChart,
  Settings,
  Shield,
  User,
  BookOpen,
  Newspaper,
  TrendingUp,
  MessageSquare,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

const data = {
  user: {
    name: "John Trader",
    email: "john@carbonstream.com",
    avatar: "/avatars/john-trader.jpg",
    subscription: "premium", // Can be 'free', 'premium', or 'enterprise'
  },
  teams: [
    { name: "Personal", logo: User, plan: "Premium" },
    { name: "Carbonstream Inc", logo: Shield, plan: "Enterprise" },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: Home,
      items: [{ title: "Dashboard", url: "/dashboard" }],
    },
    {
      title: "Trades",
      url: "/trades",
      icon: BarChart,
      items: [
        { title: "Active Trades", url: "/trades/active" },
        { title: "Trade History", url: "/trades/history" },
      ],
    },
    {
      title: "Journal",
      url: "/journal",
      icon: BookOpen,
      items: [
        { title: "Trading Journal", url: "/journal" },
        { title: "Notes", url: "/journal/notes" },
      ],
    },
    {
      title: "News and Updates",
      url: "/news",
      icon: Newspaper,
      items: [
        { title: "Market News", url: "/news" },
        { title: "Economic Calendar", url: "/news/economic-calendar" },
      ],
    },
    {
      title: "Market Analysis",
      url: "/analysis",
      icon: TrendingUp,
      items: [
        { title: "Technical Analysis", url: "/analysis/technical" },
        { title: "Fundamental Analysis", url: "/analysis/fundamental" },
      ],
    },
    {
      title: "AI Chat",
      url: "/ai-chat",
      icon: MessageSquare,
      items: [{ title: "AI Assistant", url: "/ai-chat" }],
    },
    {
      title: "Trading",
      url: "/trading",
      icon: LineChart,
      items: [
        { title: "Strategies", url: "/trading/strategies" },
        { title: "Backtesting", url: "/trading/backtesting" },
      ],
    },
    {
      title: "Profile",
      url: "/profile",
      icon: User,
      items: [
        { title: "My Profile", url: "/profile" },
        { title: "Performance", url: "/profile/performance" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        { title: "Account", url: "/settings/account" },
        { title: "Preferences", url: "/settings/preferences" },
        { title: "Billing", url: "/settings/billing" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

