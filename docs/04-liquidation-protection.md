---
sidebar_position: 5
---

# Liquidation Protection

Zhenglong is built to protect its users from the chaos often seen in leveraged trading. Instead of sudden margin calls and forced position closures, it takes a proactive, multi-layered approach to risk - giving users more time and tools to react while keeping the system stable.

## Layer 1: Dynamic Fees That React to Market Conditions

The first line of defense is a dynamic fee system that adjusts based on how healthy the market is:

- When everything's running smoothly, positive fees are applied to discourage excessive leverage that could unbalance the system.
- If things get shaky, and the protocol activates its stability mechanisms, fees can go negative - which means users are paid to help rebalance the system (e.g., by redeeming zheTOKENS or minting steamedTOKENS). This smart mechanism nudges users toward helpful behaviors before problems escalate.

## Layer 2: Stability Pools That Auto-Rebalance

If the market continues to deteriorate, Stability Pools step in as the protocol's second line of defense:

- When the collateral ratio falls below a conservative safety threshold (based on real-world volatility data), the system triggers its stability mechanisms.
- Pegged tokens (zheTOKENS) in Stability Pools are redeemed for collateral to shore up the system's backing.
- As re-balancing occurs, the total amount of zheTOKENS in the pool decreases while the reward rate remains similar, causing the APR for depositors to automatically increase. This higher yield gives users a reason to deposit more into the pool quickly when it's needed most.

To make this process even smoother, vault strategies (like auto-compounding Stability Pool returns, inspired by projects like Concentrator) can be built to help users maximize rewards and deepen liquidity.

## Layer 3: Conservative Safety Triggers

Zhenglong plays it safe by setting early warning thresholds well before things get bad:

- Stability mechanisms are triggered before the system hits a breaking point, using thresholds that exceed even the worst daily market swings in DeFi history.
- This ensures users and arbitrageurs have time to respond - redeem, rebalance, or inject new collateral before the situation escalates.

## Summary: Collective, Automated Protection

Zhenglong transforms the scary concept of forced position closures into a collective, automated, and transparent re-balancing process. Rather than punishing individual users, the system rewards those who support stability:

- Fees guide behavior dynamically.
- Stability Pools act as a liquidity shock absorber.
- Early thresholds ensure timely reactions.

In the end, Zhenglong provides the resilience of traditional risk systems - without the pain of individual position closures or reliance on centralized actors. It's a smarter, safer foundation for leveraged DeFi.
