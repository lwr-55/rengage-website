import { ImgHTMLAttributes, ReactElement, SVGProps } from 'react';
import styles from './Works.module.scss'
import CollectSvg from '@site/src/components/Homepage/static/img/collect.svg'
// import CollectPng from '@site/src/components/Homepage/static/img/collect.png'
import BuildSvg from '@site/src/components/Homepage/static/img/build.svg'
import OptimizeSvg from '@site/src/components/Homepage/static/img/optimize.svg'

interface IWorkContent {
    title: string;
    desc: string;
    svg: ReactElement<SVGProps<SVGElement>, any> | ReactElement<ImgHTMLAttributes<HTMLImageElement>, any>;
}

export default function Works() {
    const textContent = {
        title: "How it works",
        desc: "Discover the seamless orchestration and powerful features that drive unparalleled customer engagement and business success"
    }

    const worksContent: IWorkContent[] = [
        {
            title: "Collect",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: <CollectSvg />
        },
        {
            title: "Build",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: <BuildSvg />
        },
        {
            title: "Optimize",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: <OptimizeSvg />
        }
    ]
    return (
        <div className={styles['works-container']}>
            <div className={styles['works-text']}>
                <h2 className={styles['works-text-title']}>
                    {textContent.title}
                </h2>
                <div className={styles['works-text-desc']}>
                    {textContent.desc}
                </div>
            </div>
            <div className={styles['works-content']}>
                <div className={styles['work-ellipse1']}></div>
                {worksContent.map((e, idx) => {
                    return (
                        <div key={idx} className={styles['content-item']}>
                            <div className={styles['content-item-svg']}>
                                {e.svg}
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
    )
}
