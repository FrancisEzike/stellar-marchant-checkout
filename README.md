# Stellar Merchant Checkout

Responsive static website concept inspired by the Stellar network. Built with plain HTML, CSS, and JavaScript.

## Run
Open `index.html` in a browser. No build step or dependencies are required.

## Included
- Responsive dark landing page and checkout card
- Interactive XLM / USDC selection
- Demo checkout confirmation modal

## Important: frontend demo only
This version does **not** connect a wallet, submit Stellar transactions, calculate live asset conversions, or verify payments. The confirmation modal is not proof of payment.

Before accepting real payments, add a supported Stellar wallet signing flow, server-created orders, transaction verification for the destination/asset/amount/reference and network, and pending/confirmed/expired states. Keep secret keys out of frontend code. Test on Stellar testnet before considering mainnet.

## Deploy
Publish the repository root with GitHub Pages or another static hosting provider.
