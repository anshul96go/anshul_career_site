---
title: "Trading on Earnings Date Using Price Action"
date: "2024-06-27"
---

In this experiment, I explored whether you can trade stocks profitably just using **price behavior around earnings announcements** — without needing to forecast actual earnings outcomes.

### 🔍 Summary

- The strategy identifies stocks with **upcoming earnings** and looks for price breakouts just after the report.
- Signals were generated based on the stock breaking a certain % above its open price on earnings day.
- A simple holding period (2–3 days) and volatility filters were tested to control downside risk.
- The early version had large drawdowns due to **unpredictable earnings reactions**, but refinements using **volatility thresholds and liquidity filters** helped improve results.

### 🧪 Sample Strategy Logic (QuantConnect, C#)

```csharp
if (price > open * 1.01 && security.Volatility < 0.02)
{
    SetHoldings(symbol, 0.1);
    ScheduleLiquidation(symbol, Time + TimeSpan.FromDays(2));
}
```

This approach tried to capture **momentum surprises** from earnings while filtering out low-probability events.

### 🧠 Learnings

- Earnings reactions are often unpredictable — **timing edges** exist but are fragile.
- **Combining earnings with price filters** might yield alpha, especially on small caps or volatile names.
- **Backtest robustness** is key — I plan to test with trailing stops, dynamic sizing, and post-earnings drift signals.

👉 [View the full strategy and discussion on QuantConnect](https://www.quantconnect.com/forum/discussion/18125/using-price-data-to-trade-on-earnings-date/p1)
