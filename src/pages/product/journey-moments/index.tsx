import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.scss";
import FramecardPC from "./images/unlockPc.svg";
import AskAI from "./images/askAI.svg";
import ErrorLess from "./images/effortLess.svg";
import Holistic from "./images/holistic.svg";
import RealTime from "./images/realTime.svg";
import Person from "./images/person.svg";
import Wind from "./images/wind.svg";
import PingPong from "./images/pingPong.svg";

const deepColumn = [
  {
    icon: <Person />,
    title: "Personalized Customer Experiences",
    description:
      "Journey Moments serves as your central hub for understanding customer paths, preferences, and pain points.",
  },
  {
    icon: <Wind />,
    title: (<span>Visualization and <br />  Actionability</span>),
    description:
      "Visualize the customer journey like never before, and make data-driven decisions with ease.",
  },
  {
    icon: <PingPong />,
    title: (
      <span>
        Single Source 
        <br /> 
        of Truth
      </span>
    ),
    description:
      "Journey Moments serves as your central hub for understanding customer paths, preferences, and pain points.",
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.moments}>
          <div className={styles.page_unlock}>
            <div className={styles.top}>
              <p>
                Unlock the Power of Every Customer Interaction with{" "}
                <span>Journey Moments</span>
              </p>
              <p>
                Take Control of the Customer Journey:Uncover Hidden Insights and
                Optimize Impack
              </p>
              <div className={styles.button}>
                <div className={styles.text}>Explore Journey Moments</div>
              </div>
            </div>
            <div className={styles.bottom}>
              <FramecardPC />
            </div>
          </div>
          <div className={styles.page_chat}>
            <div className={styles.text}>
              <p className={styles.title}>Chat with Your Segment!</p>
              <p className={styles.description}>
                Chat naturally with your data in Journey Moments to effortlessly
                create audiences and uncover real-time insights. Our
                conversational AI stitches together your data to bring you
                relevant intelligence through simple, intuitive conversations.
              </p>
            </div>
            <div className={styles.img}>
              {/* TODO: 解决svg只出现一部分问题 */}
              <AskAI />
            </div>
          </div>
          <div className={styles.page_customer}>
            <div className={styles.text}>
              <p className={styles.title}>
                Unprecedented visibility into customer segments
              </p>
              <p className={styles.description}>
                Journey Moments is not just a feature; it's a game-changer in
                the realm of customer engagement. Finally, gain the clarity and
                actionable insights you need to optimize each step of the
                journey.
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.effort}>
                {/* TODO: 解决svg只出现一部分问题 */}
                <ErrorLess />
              </div>
              <div className={styles.holistic}>
                <Holistic />
              </div>
              <div className={styles.real}>
                <RealTime />
              </div>
            </div>
          </div>
          <div className={styles.page_deep}>
            <div className={styles.text}>
              <div className={styles.title}>Deep Dive into Features</div>
              <div className={styles.description}>
                Uncover the Magic of Journey Moments in a Deep Dive into
                Rengage's Feature-rich Universe. Elevate your understanding of
                customer interactions and patterns for proactive strategies.
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.feature}>
                {deepColumn?.map((item) => (
                  <div className={styles.detail}>
                    <div className={styles.icon}>{item.icon}</div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
