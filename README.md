# Stellar Merchant Checkout

A polished, responsive merchant checkout concept inspired by the Stellar ecosystem. Built with plain HTML, CSS, and JavaScript—no build step or package installation required.

## Features

- Responsive landing page with mobile navigation
- Interactive XLM / USDC asset selector
- Checkout preview modal with clear demo-only messaging
- Merchant overview with illustrative volume, payment metrics, and transaction table
- Expandable FAQ section
- Accessible button labels, selected states, and keyboard dismissal for the modal
- Separate structure, styling, and interaction files

## Project structure

- `index.html` — page structure and content
- `styles.css` — responsive layout, theme, components, and visual styling
- `app.js` — asset selection, demo modal, FAQ accordion, and mobile navigation

## Run locally

Open `index.html` in a browser. No build step or dependencies are required.

## Important: frontend demo only

This project does **not** connect a wallet, submit Stellar transactions, calculate live asset conversions, or verify payments. Dashboard figures and transaction rows are sample data. The confirmation modal is not proof of payment, and no funds are moved.

Before accepting real payments, implement a supported Stellar wallet-signing flow, server-created orders, transaction verification for destination, asset, amount, reference, and network, plus pending/confirmed/expired states. Keep secret keys out of frontend code. Test on Stellar testnet before considering mainnet.

## Deploy

Publish the repository root with GitHub Pages or another static hosting provider.
