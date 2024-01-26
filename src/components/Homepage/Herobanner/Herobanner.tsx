import Link from '@docusaurus/Link'
import styles from './Herobanner.module.scss'
import clsx from 'clsx'
import BannerImage from '@site/src/components/Homepage/static/img/banner.svg'
import { useMemo } from 'react'
import useNavHeight from '@site/src/hooks/useNavHeight'

export default function Homepage() {

    const { navHeight } = useNavHeight()

    const heroBannerStyle = useMemo(() => {
        return {
            height: `calc(100vh - ${navHeight}px)`,
            paddingBottom: `${navHeight}px`
        }
    }, [navHeight])

    return (
        <div className={styles['hero-banner-container']} style={heroBannerStyle}>
            <div className={styles['banner-ellipse']}></div>
            <div className={styles['banner-text']}>
                <div className={styles['title']}>
                    Rengage - the single source of truth for your <span className={styles['highlight']}>customer journey</span>
                </div>
                <div className={styles['small']}>
                    Transform customer interactions into personalized experiences that drive loyalty and growth
                </div>
                <Link className={clsx('button button--lg primary-btn')}>watch how it works</Link>
            </div>
            <div className={styles['banner-img']}>
                <BannerImage />
            </div>
        </div>
    )
}
