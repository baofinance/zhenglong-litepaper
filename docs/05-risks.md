---
sidebar_position: 6
---

# Risks: What if Bad Stuff Happens?

While Zhenglong is designed with multiple layers of protection, it's important to understand the risks and edge cases that could affect the system. This transparency helps users make informed decisions about their participation.

## Black Swan Events

Even with all the safeguards described in the previous section, Zhenglong recognizes that black swan events - like a sudden collapse in collateral value or a sharp spike in zheTOKENS price - could still happen.

In such cases:

- The system enters Graceful Degradation Mode. zheTOKENS may temporarily lose their full backing, effectively becoming pegged to the collateral, and steamedTOKENS will be worth 0.
- However, this isn't the end. If collateral values recover, the protocol can return to full collateralization:
  - zheTOKENS would regain their peg.
  - steamedTOKENS may recover in value as excess collateral returns.

## Oracle Failures and Manipulation

Zhenglong relies on price oracles to maintain accurate pegs and calculate appropriate collateralization ratios:

- In case of oracle downtime or manipulation, the protocol implements a powerful circuit breaker called "Stem" that can immediately pause specific functions. With a single transaction, we can block any or all upgradeable contracts, causing calls to those contracts to revert.
- This mechanism allows us to quickly stem issues with price oracles, minter contracts, stability pools, or any other component in the system.
- To restore functionality, we can reverse the process with another transaction, pointing the proxy back to the original implementation or to a new fixed version if needed.

This brutal but effective failsafe ensures that even in worst-case oracle scenarios, the protocol can immediately freeze vulnerable components to protect user funds while solutions are implemented.

## Liquidity Crises

During extreme market conditions, several risks can emerge:

- **Insufficient Stability Pool Depth**: If Stability Pools are depleted during severe downturns, the system's ability to absorb shocks is diminished.
- **Collateral Liquidity Concerns**: Successful redemptions require sufficient collateral liquidity as redeemers may want to swap their collateral to other assets, particularly bots etc. To mitigate this we only use assets that are highly liquid or are able to easily unwind to highly liquid assets.
- **Gridlock Scenarios**: Extreme volatility might lead to network congestion, making it difficult for users or even the protocol's automated mechanisms to execute critical transactions.

To mitigate these risks, Zhenglong employs progressive fee structures that make it increasingly expensive to take actions that would harm the system during stressed periods.

## Smart Contract Risks

As with any blockchain protocol:

- Smart contracts may contain unknown vulnerabilities despite thorough auditing.
- Zhenglongs contracts are tested using industry best practices by highly experienced team members with a combined 30+ years in traditional finance and 10+ years in crypto.

## Regulatory and External Risks

The synthetic asset space faces unique challenges:

- Regulatory changes could impact certain markets or trading of specific synthetic assets.
- Changes in underlying blockchain networks or economic conditions could affect protocol operations.
- Competitive pressures might require adaptation of the protocol's mechanisms over time.

## Risk Mitigation Strategy

Zhenglong takes a multi-faceted approach to risk management:

1. **Conservative Parameters**: Initial collateralization ratios and stability thresholds are set conservatively.
2. **Diversification**: Supporting multiple collateral types reduces dependency on any single asset.
3. **Insurance Reserves**: A portion of protocol revenue can be directed to build insurance reserves.
4. **Gradual Scaling**: New markets are introduced with lower caps that increase as stability is proven.
5. **Governance Oversight**: veSTEAM holders can vote to adjust risk parameters based on observed conditions.

The protocol is designed to be resilient through market cycles, but users should always understand the risks and size their positions accordingly. No financial system is entirely risk-free, especially in the innovative DeFi space.
