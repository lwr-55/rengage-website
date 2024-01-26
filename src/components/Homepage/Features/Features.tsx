import clsx from 'clsx';
import styles from './Features.module.scss'
import MomentSvg from '@site/src/components/Homepage/static/img/moments.svg'
import BuilderSvg from '@site/src/components/Homepage/static/img/builder.svg'
import Ins1Png from '@site/src/components/Homepage/static/img/ins1.png'
import Ins2Png from '@site/src/components/Homepage/static/img/ins2.png'
import { ComponentType, SVGProps } from 'react';

interface IFeature {
    feature: string;
    purpose: string;
    small: string;
    type: 'solid' | 'fill'
    containerStyle?: React.CSSProperties | undefined;
    svg: ComponentType<SVGProps<SVGSVGElement>> | any
}

export default function Features() {

    const features: IFeature[] = [
        {
            feature: 'Journey Moments',
            purpose: 'Instant Journey Insights: No Data Expertise Needed',
            small: 'Accessibility',
            type: 'solid',
            svg: <MomentSvg />,
            containerStyle: {
                borderRadius: '20px 0 20px 20px'
            }
        },
        {
            feature: 'Journey Builder',
            purpose: 'Simplify interactions across channels with an intuitive machine',
            small: 'Streamline',
            type: 'fill',
            svg: <BuilderSvg />
        },
        {
            feature: 'Journey Insights',
            purpose: 'Transform data into actionable insights with Rangage',
            small: 'Automatization',
            type: 'solid',
            svg: (
                <>
                    <img src={Ins1Png} className={clsx(styles['ins'], styles['ins1'])} />
                    <img src={Ins2Png} className={clsx(styles['ins'], styles['ins2'])} />
                </>
            ),
            containerStyle: {
                borderRadius: '0 20px 20px 20px'
            }
        }
    ]

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
        <div className={styles['features-container']} >
            <div className={styles['features-text']}>
                <h2>Dive into the world of Rengage</h2>
                <p>Rengage is your comprehensive solution for managing and enhancing customer journeys, delivering insights and measurable outcomes</p>
            </div>
            <div className={styles['features-content']}>
                {features.map((feature, index) => (
                    <div key={index} className={clsx(styles['feature-container'], getTypeClass(feature.type, false))} style={feature.containerStyle ?? {}}>
                        <div className={styles['content-text']}>
                            <div className={clsx(styles['text-property'], getTypeClass(feature.type, true))}>
                                {feature.small}
                            </div>
                            <div className={styles['text-action']}>{feature.feature}</div>
                            <div className={styles['text-paragraph']}>{feature.purpose}</div>
                        </div>
                        <div className={styles['content-card']}>
                            {feature.svg}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
