---
sidebar_position: 3
---

# Three-Token Model and 100% Collateral Efficiency

At the heart of Zhenglong is a smart three-token structure that powers each market: a Collateral Token, a zheTOKENS (the stable, pegged asset), and a steamedTOKEN (the leveraged asset). This design ensures 100% of your collateral is always put to use - nothing sits idle.

## Collateral Tokens: The Fuel Behind the System

These are yield-generating assets that users deposit - think of things like staked ETH (stETH) or other interest-bearing tokens. All collateral is pooled globally (not tied to individual users) and continually generates yield. That yield is distributed as rewards to various participants, such as those in Stability Pools. To ensure solvency, the market enforces a minimum global collateral ratio - say, 130% - to back all issued tokens safely.

## zheTOKENS: Pegged, Redeemable, and Yield-Enabled

zheTOKENS are synthetic assets pegged 1:1 to real-world prices like USD, BTC, TSM (TSMC) stock, and more - tracked through trusted oracles. These tokens:

- Are fully redeemable at face value for the underlying collateral.
- Maintain their peg via arbitrage and built-in rebalancing tools.
- Share the same collateral base as leveraged tokens.

By depositing zheTOKENS into a Stability Pool, users can earn real yield generated from the market's underlying collateral, making these tokens far more powerful than typical stablecoins. As tokens are fully redeemable at face value, the protocol does not need to pay for expensive liquidity on external AMMs to ensure the market can operate effectively.

## steamedTOKENS: Re-balancing Leverage

steamedTOKENS represent a leveraged claim on the collateral - what's left over after accounting for the zheTOKENS (debt). For example:

- If ETH is the collateral and zheUSD is the peg, a steamedETH token acts like a leveraged long on ETH vs USD.
- As ETH rises in price, steamedETH increases in value faster than ETH.
- As ETH falls, steamedETH drops faster in value.

But here's the key innovation: no margin calls, no forced position closures. Instead, market risks are absorbed by the protocol's Stability Pools. That said, re-balancing ≠ risk-free - these tokens can still drop to zero in extreme crashes. The difference is, positions are rebalanced over time by the system through a shared, proportional process - not forcibly closed at the worst possible moment for individual users.

## Why It Matters

This model gives you the best of both worlds:

- A stable, yield-bearing synthetic asset (zheTOKENS)
- A high-risk, high-reward leveraged token (steamedTOKENS)

And it does this without needing external borrowing, loans, or AMM liquidity. Every dollar of collateral is split into a productive pair - ensuring that all capital is always working within the system.
