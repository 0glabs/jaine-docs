---
title: What are Perpetuals?
sidebar_position: 1
---

# What are Perpetuals?

Perpetual futures (perps) are crypto derivatives that allow you to trade with leverage without an expiry date. Jaine's perp DEX features an off-chain CLOB with on-chain settlement for optimal performance.

## Overview

### Perpetual Swap Contract

The perpetual swap contracts are swaps where traders post margin in quote currency (stablecoins) and receive exposure to price movements of the underlying token.

| Feature | Specification |
|---------|--------------|
| **Margining** | Portfolio-margin with USDT collateral |
| **Settlement** | Cash-settled in USDT |
| **Expiration** | Perpetual (no expiry date) |
| **Oracle** | Chainlink & Substream |
| **Update Frequency** | Real-time via oracle |
| **Max Leverage** | 20x (Phase 1), 50x+ (Phase 2) |

## Key Features

### No Expiration
Unlike traditional futures, perpetuals never expire. You can hold positions indefinitely as long as you maintain sufficient margin.

### Leverage Trading
- **Phase 1**: Up to 20x leverage
- **Phase 2**: Expandable to 50x+ leverage
- **Initial Margin**: 5% minimum (1/20th of position value)
- **Maintenance Margin**: 3% (liquidation threshold)
- **Margin Type**: Cross-margin across all positions

### Position Limits
| Limit Type | Value | Notes |
|------------|-------|-------|
| **Individual Position** | $1,000,000 USD | Phase 1 limit |
| **Total Open Interest** | $50,000,000 USD | Expandable based on liquidity |
| **New Position Restriction** | 90% of OI cap | Prevents overload |

## How Perpetuals Work

### Price Discovery
Perpetuals track the underlying asset price through a funding mechanism that incentivizes convergence between the perpetual price and spot price.

### Funding Mechanism
Periodic payments between longs and shorts ensure the perpetual price stays anchored to the spot price:
- **Positive funding**: Longs pay shorts (perp trading above spot)
- **Negative funding**: Shorts pay longs (perp trading below spot)
- **Payment frequency**: Every 8 hours

### Order Book System
Jaine utilizes off-chain matching with on-chain settlement:
- **Fast execution**: Off-chain order matching for speed
- **Security**: All settlements occur on-chain
- **Future**: Transition to fully on-chain orderbook planned

## Supported Assets

Jaine supports various perpetual swap contracts, with leverage varying based on risk profile:

| Asset Type | Examples | Max Leverage |
|------------|----------|--------------|
| **Major Cryptos** | BTC, ETH | 20x |
| **Large Caps** | SOL, AVAX | 15x |
| **Mid Caps** | Various | 10x |
| **High Risk** | New listings | 5x |

*Asset listings are determined by the executive management team based on liquidity and risk assessment.*

## Benefits

### For Traders
- **Capital Efficiency**: Control large positions with less capital
- **Hedging**: Protect spot holdings against price movements
- **Flexibility**: Go long or short on any supported asset
- **24/7 Markets**: Trade anytime without market closes
- **No Asset Custody**: No need to hold underlying tokens

### Compared to Spot Trading

| Aspect | Perpetuals | Spot |
|--------|------------|------|
| **Capital Required** | Low (with leverage) | Full amount |
| **Direction** | Long & Short | Long only |
| **Profit Potential** | Amplified by leverage | 1:1 with price |
| **Risk Level** | Higher (liquidation risk) | Lower |
| **Holding Period** | Indefinite (with funding) | Indefinite |

## Risk Considerations

:::warning Important Risks
- **Liquidation Risk**: Positions can be forcibly closed if margin falls below maintenance level
- **Funding Costs**: Holding positions long-term incurs funding payments
- **Leverage Risk**: Losses are amplified just like gains
- **Volatility**: Crypto markets can move rapidly
:::

## Getting Started

### Prerequisites
1. **USDT Collateral**: Deposit USDT as margin
2. **Risk Understanding**: Familiarize yourself with leverage trading
3. **Account Setup**: Complete KYC if required (mainnet)

### First Steps
1. [Understand Leverage & Margin](./leverage-margin)
2. [Learn about Funding Rates](./funding-rates)
3. [Review Liquidation System](./liquidations)
4. [Start with How to Trade](./how-to-trade)

## Advanced Features

### Order Types Available
- **Market Orders**: Immediate execution at best price
- **Limit Orders**: Execute at specified price or better
- **Stop-Loss Orders**: Automatic risk management
- **Take-Profit Orders**: Lock in gains automatically

### Coming in Phase 2
- Post-only orders
- Fill-or-Kill orders
- Iceberg orders
- Advanced order combinations

## Related Topics

- [Leverage & Margin Requirements](./leverage-margin)
- [Mark Price Calculation](./mark-price)
- [Funding Rate Mechanism](./funding-rates)
- [Liquidation System](./liquidations)
- [PnL Calculation](./pnl-calculation)
- [How to Trade Perpetuals](./how-to-trade)
