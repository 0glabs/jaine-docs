---
title: Impermanent Loss
sidebar_position: 4
---

# Impermanent Loss

Understand the risks of providing liquidity and how to manage them.

## What is Impermanent Loss?

Impermanent loss (IL) occurs when the price ratio of your deposited tokens changes compared to when you deposited them. The greater the change, the more IL you experience.

### Key Points
- It's "impermanent" because losses only become permanent when you withdraw
- Can be offset by trading fees earned
- More significant in volatile pairs
- Less impact on stable pairs

## How It Works

### Example Scenario
```
Initial Deposit:
- 1 ETH @ $2,000 = $2,000
- 2,000 USDT = $2,000
- Total Value: $4,000

Price Changes (ETH → $4,000):
- Pool rebalances automatically
- You now have: 0.707 ETH + 2,828 USDT
- Total Value: $5,656

If you had just held:
- 1 ETH @ $4,000 = $4,000
- 2,000 USDT = $2,000
- Total Value: $6,000

Impermanent Loss: $344 (5.7%)
```

## IL Calculator

{/* TODO: Add interactive IL calculator tool */}
{/* TODO: Add graphical IL curves */}

### Quick Reference Table

| Price Change | IL % |
|-------------|------|
| 1.25x | 0.6% |
| 1.50x | 2.0% |
| 2.00x | 5.7% |
| 3.00x | 13.4% |
| 4.00x | 20.0% |
| 5.00x | 25.5% |

## Risk Factors

### High Risk Pairs
- Volatile token pairs (e.g., MEME/ETH)
- New token launches
- Low liquidity pools
- Uncorrelated assets

### Low Risk Pairs
- Stablecoins (USDT/USDC)
- Correlated assets (stETH/ETH)
- Pegged tokens
- High-volume established pairs

## Mitigation Strategies

### 1. Choose Stable Pairs
✅ Lower price volatility = Lower IL
✅ Stablecoin pairs have minimal IL
✅ Correlated assets move together

### 2. Concentrated Liquidity Ranges
✅ Set tight ranges around current price
✅ Earn more fees to offset IL
✅ Requires active management

### 3. Wait for Mean Reversion
✅ Prices often return to previous levels
✅ IL becomes "impermanent" again
✅ Continue earning fees while waiting

### 4. Consider Fee APR vs IL
✅ High-volume pools generate more fees
✅ Fees can outweigh IL over time
✅ Calculate break-even point

## Real Examples

{/* TODO: Add historical IL examples from mainnet */}
{/* TODO: Add case studies of successful LP strategies */}

### ETH/USDT Pool (30 Days)
```
Example Performance:
- IL Incurred: -3.2%
- Fees Earned: +5.8%
- Net Return: +2.6%
```

## When IL Doesn't Matter

### Long-term Holding
If you plan to hold both tokens anyway:
- IL is just paper loss
- You earn fees on top
- Better than idle holding

### Range Orders
Using liquidity as limit orders:
- Intentional conversion
- Earn fees during execution
- Better than simple swaps

## Tools & Resources

### IL Protection
Some protocols offer IL protection:
- Insurance protocols
- Protected pools
- Options strategies

{/* TODO: Add links to IL protection protocols */}
{/* TODO: Add advanced IL hedging strategies */}

## Key Takeaways

⚠️ **Remember**:
- IL is a risk, not guaranteed loss
- Can be offset by trading fees
- Varies by pair volatility
- Only realized on withdrawal
- Part of the LP trade-off

## FAQ

### Q: Can I lose all my money from IL?
**A:** No, IL reduces your gains but doesn't cause total loss. You'll always have some tokens, just in different ratios.

### Q: Is IL the same for all pools?
**A:** No, it varies based on price volatility. Stable pairs have minimal IL.

### Q: Can IL be positive?
**A:** IL is always a loss compared to holding. However, total returns (IL + fees) can be positive.

## Related Topics

- [Add Liquidity](./add-liquidity)
- [Concentrated Liquidity](./concentrated-liquidity)
- [LP Strategies](./lp-strategies)
- [Remove Liquidity](./remove-liquidity)