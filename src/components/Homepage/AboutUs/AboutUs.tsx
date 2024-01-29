import styles from './AboutUs.module.scss'
import ArrowLeft from '../static/img/left.svg'
import ArrowRight from '../static/img/right.svg'
import avatar from '../static/img/avatar.png'

export default function AboutUs() {
    return (
        <div className={styles['aboutus-container']}>
            {/* background */}
            <div className={styles['ellipse']}>

            </div>
            {/* div */}
            <div className={styles['testimonial']}>
                <div className={styles['text']}>
                    <h2 className={styles['title']}>What they say about us</h2>
                    <p className={styles['description']}>See how companies like yours are succeeding with Rengage</p>
                </div>
                <div className={styles['content']}>
                    <div className={styles['cards']}>
                        <div className={styles['card']}>
                            <div className={styles['comment']}>
                                Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.
                            </div>
                            <div className={styles['user']}>
                                <img src={avatar} className={styles['avatar']} />
                                <div className={styles['info']}>
                                    <p className={styles['name']}>Mary Jane Foster</p>
                                    <p className={styles['position']}>CEO of IT company</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <div className={styles['comment']}>
                                Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.
                            </div>
                            <div className={styles['user']}>
                                <img src={avatar} className={styles['avatar']} />
                                <div className={styles['info']}>
                                    <p className={styles['name']}>Mary Jane Foster</p>
                                    <p className={styles['position']}>CEO of IT company</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <div className={styles['comment']}>
                                Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.
                            </div>
                            <div className={styles['user']}>
                                <img src={avatar} className={styles['avatar']} />
                                <div className={styles['info']}>
                                    <p className={styles['name']}>Mary Jane Foster</p>
                                    <p className={styles['position']}>CEO of IT company</p>
                                </div>
                            </div>
                        </div>
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
            {/* shadow-left */}
            <div className={styles['shadow-left']}>

            </div>
            {/* shadow-rigth */}
            <div className={styles['shadow-right']}>
            </div>
        </div>
    )
}
