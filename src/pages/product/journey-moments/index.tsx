import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import AskAI from "/static/img/product/journey-moments/askAI.svg";
import ErrorLess from "/static/img/product/journey-moments/effortLess.svg";
import Holistic from "/static/img/product/journey-moments/holistic.svg";
import RealTime from "/static/img/product/journey-moments/realTime.svg";
import Person from "/static/img/product/journey-moments/person.svg";
import Wind from "/static/img/product/journey-moments/wind.svg";
import PingPong from "/static/img/product/journey-moments/pingPong.svg";
import LeftBtn from "/static/img/product/journey-moments/leftBtn.svg";
import RightBtn from "/static/img/product/journey-moments/rightBtn.svg";
import SlackTag from "/static/img/product/journey-moments/swipeSlack.svg";
import DoordashTag from '/static/img/product/journey-moments/swipeDoordash.svg';
import ReduceTag from '/static/img/product/journey-moments/swipeReduc.svg'

const deepColumn = [
  {
    icon: <Person />,
    title: "Personalized Customer Experiences",
    description:
      "Journey Moments serves as your central hub for understanding customer paths, preferences, and pain points.",
  },
  {
    icon: <Wind />,
    title: "Visualization and Actionability",
    description:
      "Visualize the customer journey like never before, and make data-driven decisions with ease.",
  },
  {
    icon: <PingPong />,
    title: "Single Source of Truth",
    description:
      "Journey Moments serves as your central hub for understanding customer paths, preferences, and pain points.",
  },
];
const swiperColumn = [
  {
    tag: <SlackTag />,
    title: "Increasing Customer Activation",
    description:
      "TechStart Inc., a tech leader, saw a 40% boost in new customer activation through Rengage's Journey Builder, transforming their approach and driving substantial user engagement growth.",
  },
  {
    tag:<DoordashTag />,
    title:"Driving Customer Retention",
    description:"TechStart Inc., a tech leader, saw a 40% boost in new customer activation through Rengage's Journey Builder, transforming their approach and driving substantial user engagement growth."
  },
  {
    tag:<ReduceTag/>,
    title:"Reducing Customer Churn",
    description:"TechStart Inc., a tech leader, saw a 40% boost in new customer activation through Rengage's Journey Builder, transforming their approach and driving substantial user engagement growth."
  }
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
              <button className={styles.button}>
                <span className={styles.text}>Explore Journey Moments</span>
              </button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.images}></div>
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
            <div className={styles.empty_purple}></div>
            <div className={styles.empty_blue}></div>
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
          <div className={styles.page_transform}>
            <div className={styles.label}>
              <div className={styles.text}>
                <p className={styles.title}>
                  Transforming Customer Journeys with Rengage
                </p>
                <p className={styles.description}>
                  Explore our success stories where Rengage's innovative
                  solutions have catalyzed transformative growth for diverse
                  businesses.
                </p>
              </div>
              <div className={styles.button}>
                <button>
                  <LeftBtn />
                </button>
                <button>
                  <RightBtn />
                </button>
              </div>
            </div>
            <div className={styles.swipe}>
              {swiperColumn.map(item => (
                <div className={styles.swipe_item}>
                <div className={styles.tag}>
                  {item.tag}
                </div>
                <div className={styles.text}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                  <button>Read more</button>
                </div>
              </div>
              ))}
            </div>
            <div className={styles.empty}></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
