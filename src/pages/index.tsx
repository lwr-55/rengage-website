import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import { CATContent, aboutContent, ecosystemContent, featuresContent, herobanner, worksContent } from './index.data';
import ArrowLeft from '@site/static/img/homepage/homepage-arrow-left.svg';
import ArrowRight from '@site/static/img/homepage/homepage-arrow-right.svg';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // feature
  function getTypeClass(type: 'solid' | 'fill', isText?: boolean) {
    if (isText) {
      if (type === 'solid') {
        return styles['text-property-solid']
      } else {
        return styles['text-property-fill']
      }
    } else {
      if (type === 'solid') {
        return styles['feature-container-solid']
      } else {
        return styles['feature-container-fill']
      }
    }
  }

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles['homepage-container']}>
        {/* herobanner */}
        <div className={styles['hero-banner-container']}>
          <div className={styles['banner-ellipse']}></div>
          <div className={styles['banner-text']}>
            <div className={styles['title']}>
              {herobanner.title} <span className={styles['highlight']}>{herobanner.emphasize}</span>
            </div>
            <div className={styles['small']}>
              {herobanner.desc}
            </div>
            <div>
              <Link className={clsx('button button--lg', styles['primary-btn'])}>
                {herobanner.button}
              </Link>
            </div>
          </div>
          <div className={styles['banner-img']}>
          </div>
        </div>
        {/* features */}
        <div className={styles['features-container']} >
          <div className={styles['features-text']}>
            <h2>{featuresContent.title}</h2>
            <p>{featuresContent.desc}</p>
          </div>
          <div className={styles['features-content']}>
            {featuresContent.features.map((feature, index) => (
              <div key={index} className={clsx(styles['feature-container'], getTypeClass(feature.type, false))} style={feature.containerStyle ?? {}}>
                <div className={styles['content-text']}>
                  <div className={clsx(styles['text-property'], getTypeClass(feature.type, true))}>
                    {feature.small}
                  </div>
                  <div className={styles['text-action']}>{feature.feature}</div>
                  <div className={styles['text-paragraph']}>{feature.purpose}</div>
                </div>
                <div className={styles['content-card']}>
                  <feature.svg />
                </div>
                {/* <Link className={clsx('button button--lg', styles['primary-btn'], styles['btn'])}>
                  Learn more
                </Link> */}
              </div>
            ))}
          </div>
        </div>
        {/* works */}
        <div className={styles['works-container']}>
          <div className={styles['works-text']}>
            <h2 className={styles['works-text-title']}>
              {worksContent.title}
            </h2>
            <div className={styles['works-text-desc']}>
              {worksContent.desc}
            </div>
          </div>
          <div className={styles['works-content']}>
            <div className={styles['work-ellipse1']}></div>
            {worksContent.works.map((e, idx) => {
              return (
                <div key={idx} className={styles['content-item']}>
                  <div className={styles['content-item-svg']}>
                    <e.svg />
                  </div>
                  <div className={styles['content-item-title']}>
                    {e.title}
                  </div>
                  <div className={styles['content-item-desc']}>
                    {e.desc}
                  </div>
                </div>
              )
            })}
            <div className={styles['work-ellipse2']}></div>
          </div>
        </div>
        {/* AboutUs */}
        <div className={styles['aboutus-container']}>
          {/* div */}
          <div className={styles['testimonial']}>
            <div className={styles['text']}>
              <h2 className={styles['title']}>{aboutContent.title}</h2>
              <p className={styles['description']}>{aboutContent.desc}</p>
            </div>
            <div className={styles['content']}>
              <div className={styles['cards']}>
                {/* background */}
                <div className={styles['ellipse']}></div>
                {aboutContent.cards.map((card, index) => (
                  <div key={index} className={styles['card']}>
                    <div className={styles['comment']}>
                      {card.comment}
                    </div>
                    <div className={styles['user']}>
                      <img src={card.avatar} className={styles['avatar']} />
                      <div className={styles['info']}>
                        <div className={styles['name']}>
                          {card.name}
                        </div>
                        <div className={styles['position']}>
                          {card.position}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles['arrows']}>
                <div className={styles['arrow-left']}>
                  <ArrowLeft className={styles['arrow']} />
                </div>
                <div className={styles['arrow-right']}>
                  <ArrowRight className={styles['arrow']} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles['shadow-left']}></div>
          <div className={styles['shadow-right']}></div> */}
        </div>
        {/* Integration */}
        <div className={styles['integration-container']}>
          <div className={styles['ellipse']}></div>
          <div className={styles['text']}>
            <div className={styles['text-content']}>
              <div className={styles['title']}>{ecosystemContent.title}</div>
              <div className={styles["desc"]}>{ecosystemContent.desc}</div>
            </div>
            <Link className={clsx('button button--lg', styles['primary-btn'], styles['btn'])}>
              {ecosystemContent.btn}
            </Link>
          </div>
          <div className={styles['content']}>
            {ecosystemContent.cards.map((card, idx) => (
              <div key={idx} className={styles['card']}>
                <div className={styles['card-logo']}>
                  <div className={styles['logo-ellipse']}></div>
                  <div className={styles['logo-logo']}>
                    <card.svg style={{ width: "40px", height: "40px" }} />
                  </div>
                </div>
                <div className={styles['card-text']}>
                  <div className={styles['text-title']}>
                    {card.title}
                  </div>
                  <div className={styles['text-desc']}>
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CAT */}
        <div className={styles['cat-container']}>
          {/* ep */}
          <div className={styles["ellipse-1"]}></div>
          <div className={styles['ellipse-2']}></div>
          <div className={styles["ellipse-3"]}></div>
          <div className={styles["ellipse-4"]}></div>
          {/* content */}
          <div className={styles['content-container']}>
            <div className={styles['content']}>
              <div className={styles['content-picture']}>
                <CATContent.svg />
              </div>
            </div>
            <div className={styles['text']}>
              <div className={styles['text-content']}>
                <div className={styles['title']}>{CATContent.title}</div>
                <div className={styles["desc"]}>{CATContent.desc}</div>
              </div>
              <Link className={clsx('button button--lg', styles['primary-btn'], styles['btn'])}>
                {CATContent.btn}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
