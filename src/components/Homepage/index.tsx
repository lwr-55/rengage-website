import AboutUs from './AboutUs/AboutUs'
import Features from './Features/Features'
import Herobanner from './Herobanner/Herobanner'
import Works from './Works/Works'
import styles from './index.module.scss'

export default function Homepage() {
    return (
        <div className={styles['homepage-container']}>
            {/* herobanner */}
            <Herobanner />
            {/* features */}
            <Features />
            {/* works */}
            <Works />
            {/* AboutUs */}
            <AboutUs />
        </div>
    )
}
