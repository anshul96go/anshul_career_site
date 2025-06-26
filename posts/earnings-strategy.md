---
title: "Trading Earnings with Price Action Only"
date: "2024-06-01"
---

This blog summarizes my public QuantConnect research into building a trading strategy based **only on price action around earnings dates**.

### 📌 Approach:
- Universe: U.S. equities with earnings today
- Entry: Buy if intraday price breaks 1% above open
- Exit: T+2
- Filters: Optional volatility and liquidity screens

```csharp
if (price > open * 1.01 && security.Volatility < 0.02)
{
    SetHoldings(symbol, 0.1);
    ScheduleLiquidation(symbol, Time + TimeSpan.FromDays(2));
}
```

🔗 [View Full Strategy on QuantConnect](https://www.quantconnect.com/research/18125/using-price-data-to-trade-on-earnings-date/p1)
