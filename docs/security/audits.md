---
title: Security Audits
sidebar_position: 1
---

# Security Audits

Security is paramount at Jaine. Our smart contracts undergo rigorous auditing by leading security firms.

## JAINE Audit Status

### Current Status: Ongoing

The JAINE team is collaborating with independent security experts to review and verify the core smart contracts deployed on 0G Chain.

### Audit Scope

The comprehensive audit includes:
- **Formal verification** of JAINE's V3-style AMM core contracts
- **Perp DEX Contracts** security review
- **Numerical error analysis** to ensure mathematical precision in liquidity & fee computation
- **Security review** of router and periphery logic
- **Design recommendations** to ensure long-term composability and DeFi safety

:::info Audit Reports
Full audit reports will be published here upon completion.
:::

## Vertex Protocol Audits

Jaine's architecture is based on battle-tested protocols. Here are the historical audits from Vertex Protocol:

### Vertex Audit Reports

| Audit | Auditor | Year | Report |
|-------|---------|------|--------|
| Vertex Audit #1 | OtterSec | 2022 | [View Report](https://drive.google.com/file/d/1JMe7Nc-LG-XjVNvea0Fhclpy2GxjoiZo/view?usp=sharing) |
| Vertex Audit #2 | OtterSec | 2023 | [View Report](https://drive.google.com/file/d/1umxs2b7ik8nfz2CGjiTw3QChVSNjztjm/view?usp=sharing) |
| Vertex Audit #3 | OtterSec | 2024 | [View Report](https://drive.google.com/file/d/1PSStw3iwjM8EJtniaUhgjMDY2fs-FO3o/view?usp=sharing) |
| Vertex Audit #4 | Three Sigma | 2024 | [View Report](https://drive.google.com/file/d/1txk3NA8jp5VnU9SiSMia67n-a0RpippL/view?usp=sharing) |

## Security Best Practices

### For Users
- Always verify contract addresses before interacting
- Check for audit badges in the UI
- Start with small amounts when testing new features
- Monitor your positions regularly

### For Developers
When integrating with JAINE:
- Refer to our [Developer Integration Guide](../developers/smart-contracts)
- Use our audited contracts & router
- Never rely solely on in-pool pricing without off-chain validation if value at risk is high
- Implement proper slippage protection
- Use price oracles where possible
- Trade in high-volume pools to minimize manipulation risk

## Integration Security Considerations

### Static Errors (Execution-level Risks)
- Ensure slippage protection: trades should include minimum return checks
- Do not assume on-chain quotes are safe without pre-trade simulations
- Consider transaction batching implications on state accuracy

### Dynamic Risks (Runtime Manipulation)
- On-chain pricing can be manipulated in low-liquidity pools
- Sandwich attacks or flashloan-induced volatility are common threats

### Recommended Mitigations
- Using price oracles where possible
- Trading in high-volume pools
- Implementing slippage limits and transaction deadlines

## Responsible Disclosure

Found a vulnerability? Please report it through our responsible disclosure process.

## Contact

For security-related inquiries:
- Email: [TODO: Add security email]
- Check our [FAQ](../resources/faq) for more information

## Updates

This page will be updated as new audits are completed and security measures are enhanced.