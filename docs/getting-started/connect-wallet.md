---
title: Connect Your Wallet
sidebar_position: 2
---

# Connect Your Wallet

To start using JAINE, you need a supported crypto wallet connected to the 0G network.

## Supported Wallets

| Wallet | Desktop | Mobile | WalletConnect |
|--------|---------|--------|---------------|
| **MetaMask** | ✅ | ✅ | ✅ |
| **Rabby Wallet** | ✅ | ❌ | ❌ |
| **OKX Wallet** | ✅ | ✅ | ✅ |
| **WalletConnect** | ✅ | ✅ | ✅ |

## Connection Steps

### Step 1: Access Jaine

Navigate to [test.jaine.app](https://test.jaine.app) and locate the **Connect Wallet** button in the top-right corner.

### Step 2: Select Your Wallet

Choose your preferred wallet from the supported options. If using a mobile wallet, select WalletConnect.

### Step 3: Choose Network

Select the appropriate network:

| Network | Purpose | Status |
|---------|---------|--------|
| **0G Testnet** | Testing and development | ✅ Active |
| **0G Mainnet** | Production use | 🔜 Coming Soon |

### Step 4: Confirm Connection

Approve the connection request in your wallet popup. Ensure you're connecting to the correct network.


<details>
<summary><b>Manual Network Setup</b></summary>

If the network isn't automatically added, configure it manually:

### 0G Testnet Configuration

| Parameter | Value |
|-----------|-------|
| **Network Name** | 0G Galileo Testnet |
| **RPC URL** | `https://evmrpc-testnet.0g.ai` |
| **Chain ID** | 16601 |
| **Currency Symbol** | OG |
| **Block Explorer** | `https://chainscan-galileo.0g.ai` |

### 0G Mainnet Configuration
*Coming soon - details will be provided at mainnet launch*

</details>

## Security Best Practices

:::warning Important Security Tips
- **Verify URL**: Always ensure you're on `https://test.jaine.app`
- **Never share**: Keep your seed phrase and private keys secure
- **Double-check**: Review all transaction details before signing
- **Use hardware wallets**: For significant amounts
:::

## Next Steps

After connecting your wallet:

1. **[Get Testnet Tokens](./get-testnet-tokens)**  
   Claim free tokens from the faucet for testing

2. **[Make Your First Swap](./first-swap)**  
   Start trading on Jaine

3. **[Explore Features](../trading/token-swaps)**  
   Discover advanced trading options

## Troubleshooting

<details>
<summary><b>Wallet Not Connecting</b></summary>

- Ensure your wallet extension is unlocked
- Check that you're on the correct network
- Try refreshing the page
- Clear your browser cache if issues persist

</details>

<details>
<summary><b>Wrong Network</b></summary>

- Your wallet will typically prompt you to switch
- Manually switch networks within your wallet interface
- Verify the network indicator on Jaine matches your wallet

</details>

<details>
<summary><b>Transaction Failures</b></summary>

- Check your gas balance
- Ensure sufficient token balance
- Verify network congestion status

</details>

## Need Help?

- Check our [FAQ](../resources/faq) for common questions
- Join our community for support
- Review the troubleshooting section above

{/* TODO: Add video tutorial for wallet connection */}
{/* TODO: Add support details for additional wallets */}