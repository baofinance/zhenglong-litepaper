---
sidebar_position: 8
---

# Post-Genesis Operations: Minting, Redemption, and Dynamic Fees

Once a new market launches via a Genesis Vault, Zhenglong enters its regular operating mode. From here on out, users can mint new tokens or redeem existing ones at any time, depending on what kind of exposure they want.

This flexibility comes with guardrails: Zhenglong uses a dynamic fee system to keep things balanced and prevent destabilizing behavior. Let's break it down.

## Minting After Genesis: Two Paths

Users can choose which type of token they want to mint:

### 1. Mint zheTOKENS (Pegged Assets)

- Deposit collateral (e.g., ETH or stETH) and receive zheTOKENS like zheUSD or zheTSM.
- This increases the system's total "debt" (i.e., the amount of zheTOKENS in circulation).
- The protocol ensures the system stays above the minimum collateral ratio.
- If too many zheTOKENS are minted and the ratio starts dipping toward the danger zone, minting zheTOKENS becomes more expensive, thanks to rising fees.

### 2. Mint steamedTOKENS (Leveraged Assets)

- Deposit collateral and get steamedTOKENS directly.
- This gives you variable leveraged exposure without borrowing stablecoins.
- It's a clean way to go long with leverage, without margin calls.

## Redemption: How the Peg Is Maintained

If you hold zheTOKENS, you can redeem them at any time for a proportional share of the collateral. This keeps the peg stable:

- If zheTOKENS trades below $1, arbitrageurs can buy it cheaply and redeem it for $1 worth of collateral - pushing the price back up.
- If zheTOKENS trades above $1, users can mint more zheTOKENS and sell it - bringing the price down.

Redemptions and mints happen at the oracle value with minimal slippage, making arbitrage smooth and effective.

## Dynamic Fees: Built-In Market Regulation

Zhenglong uses a real-time, responsive fee system for all mints and redemptions. It works like a pressure valve:

- Under normal conditions, fees are low - maybe 0.25% for minting zheTOKENS and 1% for minting steamedTOKENS.
- If the system is at risk (e.g., someone tries to mint a large amount of zheTOKENS), fees scale up in proportion to how much stress the action would cause.
- If the system needs help - for example, to improve its collateral ratio - it can offer zero or even negative fees, essentially paying users to take helpful actions like minting steamedTOKENS.

Fees are tiered: if a large transaction pushes the system past certain thresholds, higher fees apply to the portion that causes the most stress. This makes things fair - users only pay for the impact they actually cause.

## Why It Works: A Feedback Loop That Balances Demand

This fee system creates a self-correcting market:

- If everyone wants zheTOKENS, it becomes increasingly expensive to mint zheTOKENS and cheaper to mint steamedTOKENS, encouraging balance.
- If everyone wants leverage, the opposite happens - zheTOKENS minting becomes cheaper, drawing users to the stable side.

Arbitrageurs and advanced users will step in to exploit these dynamics, ensuring no imbalance goes unchecked.

Together with Stability Pools (which manage ongoing systemic risk), the dynamic fee system helps Zhenglong maintain both flexibility and robustness. User behavior is steered gently - but powerfully - through financial incentives at the entry and exit points.
