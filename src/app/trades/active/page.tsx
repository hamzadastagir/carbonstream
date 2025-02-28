"use client"

import { useEffect, useState } from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function ActiveTrades() {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/trades")
      .then((response) => response.json())
      .then((data) => setTrades(data))
      .catch((error) => console.error("Error fetching trades:", error))
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Active Trades</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Entry Price</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>P&L</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell className="font-medium">{trade.symbol}</TableCell>
                  <TableCell>${trade.entry.toFixed(2)}</TableCell>
                  <TableCell>${trade.current.toFixed(2)}</TableCell>
                  <TableCell className={trade.pnl >= 0 ? "text-green-600" : "text-red-600"}>
                    {trade.pnl.toFixed(2)}%
                  </TableCell>
                  <TableCell>{trade.type}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Close
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

