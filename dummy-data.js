export const dummyData = {
  dashboard: {
    totalBalance: 45231.89,
    activeTrades: 12,
    profitLoss: 892.5,
    winRate: 68,
  },
  trades: [
    { id: 1, symbol: "AAPL", entry: 150.25, current: 155.3, pnl: 3.36, type: "Long" },
    { id: 2, symbol: "TSLA", entry: 700.0, current: 695.5, pnl: -0.64, type: "Long" },
    { id: 3, symbol: "GOOGL", entry: 2800.0, current: 2850.0, pnl: 1.79, type: "Long" },
  ],
  journal: {
    entries: [
      {
        id: 1,
        date: "2023-05-15",
        content: "Market showed strong bullish trends today. Considering increasing positions in tech stocks.",
      },
      {
        id: 2,
        date: "2023-05-14",
        content: "Closed AAPL position for a 5% gain. Need to work on holding winners longer.",
      },
    ],
  },
  news: [
    { id: 1, title: "Fed Announces Interest Rate Decision", category: "Economic", time: "2 hours ago" },
    { id: 2, title: "Tech Stocks Rally on Positive Earnings", category: "Market", time: "4 hours ago" },
    { id: 3, title: "Oil Prices Surge Amid Geopolitical Tensions", category: "Commodities", time: "6 hours ago" },
  ],
  marketAnalysis: {
    technicalIndicators: [
      { name: "Moving Average", value: "Bullish" },
      { name: "RSI", value: "Overbought" },
      { name: "MACD", value: "Bullish Crossover" },
    ],
    marketSentiment: "Positive",
    keyLevels: {
      support: 3950,
      resistance: 4050,
    },
  },
}

