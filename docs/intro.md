---
sidebar_position: 1
slug: /
---

# Introduction

Zhenglong is a decentralized platform for issuing and trading data-pegged synthetic assets - tokens that track real-world or on-chain data feeds without holding the underlying assets. At its core is a three-token system that delivers 100% capital efficiency and operates without reliance on external liquidity pools. This means a single deposit of collateral simultaneously backs two distinct tokens: a zheTOKENS (a stable, pegged asset) and a steamedTOKEN (a leveraged asset), giving users the option of two sides of exposure from the same input.

In practical terms, this allows anyone to mint:

- A zheTOKENS that stays closely pegged to a target price (like a currency or an index), or
- A steamedTOKEN that offers amplified, leveraged exposure to price movements.

The protocol's structure is reinforced by on-chain Stability Pools and a smart dynamic fee and reward system, ensuring that zheTOKENS hold their peg and steamedTOKENS stay healthy - all without traditional forced position closures. This results in a balanced market where two user types thrive:

- Yield-seekers can hold fully-backed, yield-generating assets.
- Risk-takers can pursue leverage without fear of sudden margin calls.

All of this is managed automatically, with re-balancing actions shared proportionally across pool participants, keeping the system solvent and stable around the clock.

## Technical Foundation

Zhenglong is a friendly fork of Aladdin DAO's FX protocol, built with significant modifications and improvements to enhance performance, flexibility, and user experience. Our development team has:

- Refactored the codebase to reduce gas costs and enable easier upgrades
- Implemented refined fee logic that handles collateral ratio changes more smoothly
- Simplified pegged token mechanisms so that any token with protected mint and burn functions can be used, creating more flexibility for future markets
- Created a streamlined leveraged token system with optimizations around the beta value (which was used for fETH), as it is always 0 for our implementation and vision

These technical enhancements allow Zhenglong to maintain the core principles of the original design while extending its capabilities and efficiency. By building on proven concepts while implementing our own improvements, we've created a protocol that's both battle-tested and forward-looking.
