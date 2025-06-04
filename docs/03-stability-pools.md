---
sidebar_position: 4
---

# Stability Pools

One of Zhenglong's most important concepts is its on-chain Stability Pools - automated mechanisms that act as a safety net for the entire protocol. These pools are what make re-balancing possible for steamedTOKENS, while also keeping zheTOKENS stable and properly collateralized. In other systems, external re-balancers and arbitrageurs manage this process. In Zhenglong, it happens preemptively and transparently, with no middlemen.

## Two Types of Stability Pools

Zhenglong offers two complementary pools for zheTOKENS holders to deposit into. Each helps the system stay balanced in different ways:

### 1. Collateral Stability Pool

- Users deposit zheTOKENS here.
- If the system's global collateral ratio falls below a safe level (like 130%), this pool kicks in.
- Deposited zheTOKENS is swapped 1:1 for collateral, effectively removing debt from the system and restoring balance.
- Depositors act like automated "value buyers," scooping up collateral when its price is low.
- If the market later recovers, they stand to profit from acquiring discounted collateral.

### 2. steamedTOKEN (Leveraged) Stability Pool

- Also funded with zheTOKENS deposits.
- Used when the system needs to offload risky steamedTOKENS during market downturns.
- zheTOKENS from the pool is exchanged for these volatile assets, removing leverage from the system.
- Over time, if the market recovers, those steamedTOKENS may gain value, rewarding depositors for helping during turbulence.

## How Rebalancing Works

When things are calm and the system is over-collateralized, Stability Pools simply earn passive yield. But when things go sideways - say, the price of collateral drops or the pegged token rises in price sharply - the system triggers its stability mechanisms.

Here's what happens:

1. An algorithmic trigger launches a rebalancing transaction (which anyone can call, including bots, in exchange for a reward).
2. The system uses the deposited zheTOKENS in Stability Pools to either:
   - Burn zheTOKENS (reduce debt), or
   - Absorb excess volatility by acquiring discounted steamedTOKENS.
3. The process continues until the system's collateral ratio is safely restored.

As re-balancing occurs, the total amount of zheTOKENS in the pool decreases while the reward rate remains similar, causing the APR for depositors to automatically increase. This higher yield incentivizes new deposits exactly when the system needs them most.

Importantly, this re-balancing process is shared proportionally across all participants in the stability pool, making it a collective action rather than targeting individual positions.

## Why Users Participate: Real Yield + STEAM Rewards

Zhenglong makes it worth your while to support system stability:

- Collateral (e.g., stETH) is earning yield, that native yield is passed through to you when you deposit zheTOKENS into a Stability Pool.
- Effectively, your zheTOKENS becomes a yield-bearing asset, simply by sitting in the pool.
- On top of that, you earn STEAM governance tokens, giving you a say in protocol direction and boosting your future rewards.

This dual incentive structure ensures there's always enough zheTOKENS in the pools to keep the protocol safe, even in volatile markets.
