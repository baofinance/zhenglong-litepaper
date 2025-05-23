import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Capital Efficient Design",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Zhenglong delivers 100% capital efficiency with a three-token system
        that operates without reliance on external liquidity pools. A single
        deposit of collateral simultaneously backs both stable and leveraged
        tokens.
      </>
    ),
  },
  {
    title: "Re-balancing Leverage",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        steamedTOKENS offer leveraged exposure without forced position closures
        or funding costs. Market risks are absorbed by the protocol's Stability
        Pools through a shared, proportional re-balancing process.
      </>
    ),
  },
  {
    title: "Fully Backed Pegged Tokens",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        zheTOKENS are always 100% collateralized by yield-bearing assets and can
        be redeemed 1:1, providing stable value with integrated yield from the
        underlying collateral.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
