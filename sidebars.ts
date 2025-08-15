import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Main sidebar following Structure 1: User Journey-Focused (Progressive Disclosure)
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome to Jaine',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/connect-wallet',
          label: 'Connect Your Wallet',
        },
        {
          type: 'doc',
          id: 'getting-started/get-testnet-tokens',
          label: 'Get Testnet Tokens',
        },
        {
          type: 'doc',
          id: 'getting-started/first-swap',
          label: 'Your First Swap',
        },
      ],
    },
    {
      type: 'category',
      label: 'Basic Trading',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'trading/token-swaps',
          label: 'Token Swaps',
        },
        {
          type: 'doc',
          id: 'trading/slippage',
          label: 'Understanding Slippage',
        },
        {
          type: 'doc',
          id: 'trading/fees',
          label: 'Trading Fees',
        },
        {
          type: 'doc',
          id: 'trading/price-limits',
          label: 'Setting Price Limits',
        },
      ],
    },
    {
      type: 'category',
      label: 'Liquidity Provision',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'liquidity/what-is-liquidity',
          label: 'What is Liquidity Provision?',
        },
        {
          type: 'doc',
          id: 'liquidity/add-liquidity',
          label: 'Adding Liquidity',
        },
        {
          type: 'doc',
          id: 'liquidity/manage-positions',
          label: 'Managing Positions',
        },
        {
          type: 'doc',
          id: 'liquidity/claim-rewards',
          label: 'Claiming Rewards',
        },
        {
          type: 'doc',
          id: 'liquidity/impermanent-loss',
          label: 'Impermanent Loss Guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Trading',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'perps/what-are-perps',
          label: 'Perpetual Swaps',
        },
        {
          type: 'doc',
          id: 'perps/leverage-margin',
          label: 'Leverage Trading',
        },
        {
          type: 'doc',
          id: 'perps/mark-price',
          label: 'Mark Price & Funding',
        },
        {
          type: 'doc',
          id: 'perps/funding-rates',
          label: 'Funding Rates',
        },
        {
          type: 'doc',
          id: 'perps/liquidations',
          label: 'Liquidation System',
        },
        {
          type: 'doc',
          id: 'perps/how-to-trade',
          label: 'Advanced Order Types',
        },
        {
          type: 'doc',
          id: 'trading/multi-hop-swaps',
          label: 'Multi-Hop Swaps',
        },
        {
          type: 'doc',
          id: 'trading/trading-strategies',
          label: 'Trading Strategies',
        },
        {
          type: 'doc',
          id: 'liquidity/concentrated-liquidity',
          label: 'Concentrated Liquidity',
        },
        {
          type: 'doc',
          id: 'liquidity/range-selection',
          label: 'Range Selection',
        },
        {
          type: 'doc',
          id: 'liquidity/rebalancing',
          label: 'Rebalancing Positions',
        },
        {
          type: 'doc',
          id: 'liquidity/lp-strategies',
          label: 'LP Strategies',
        },
      ],
    },
    {
      type: 'category',
      label: 'Rewards & Growth',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'rewards/overview',
          label: 'Points System',
        },
        {
          type: 'doc',
          id: 'rewards/referral-program',
          label: 'Referral Program',
        },
        {
          type: 'doc',
          id: 'rewards/liquidity-mining',
          label: 'Community Events',
        },
        {
          type: 'doc',
          id: 'rewards/staking',
          label: 'Staking Rewards',
        },
        {
          type: 'doc',
          id: 'rewards/trading-rewards',
          label: 'Trading Rewards',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Integration',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'developers/overview',
          label: 'Development Environment',
        },
        {
          type: 'doc',
          id: 'developers/api-reference',
          label: 'Implementing Swaps',
        },
        {
          type: 'doc',
          id: 'developers/sdk',
          label: 'Liquidity Integration',
        },
        {
          type: 'doc',
          id: 'developers/subgraph',
          label: 'Perp Integration',
        },
        {
          type: 'doc',
          id: 'developers/smart-contracts',
          label: 'Contract References',
        },
        {
          type: 'doc',
          id: 'developers/integration-guides',
          label: 'Integration Examples',
        },
      ],
    },
    {
      type: 'category',
      label: 'Security & Trust',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'security/audits',
          label: 'Audit Reports',
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'resources/faq',
          label: 'FAQ',
        },
        {
          type: 'doc',
          id: 'resources/glossary',
          label: 'Glossary',
        },
        {
          type: 'doc',
          id: 'resources/links',
          label: 'Useful Links',
        },
        {
          type: 'doc',
          id: 'getting-started/key-features',
          label: 'Platform Features',
        },
        {
          type: 'doc',
          id: 'liquidity/remove-liquidity',
          label: 'Remove Liquidity',
        },
      ],
    },
  ],
};

export default sidebars;