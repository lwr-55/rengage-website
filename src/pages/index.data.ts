import { ComponentType, SVGProps } from "react";
import BannerSvg from '@site/static/img/homepage/homepage-banner.svg'
import MomentSvg from '@site/static/img/homepage/homepage-moments.svg'
import BuilderSvg from '@site/static/img/homepage/homepage-builder.svg'
import InsSvg from '@site/static/img/homepage/homepage-ins.svg'
import CollectSvg from '@site/static/img/homepage/homepage-collect.svg'
import BuildSvg from '@site/static/img/homepage/homepage-build.svg'
import OptimizeSvg from '@site/static/img/homepage/homepage-optimize.svg'
import aboutAvatar from '@site/static/img/homepage/homepage-about-avatar.png'
import SnowflakeSvg from '@site/static/img/homepage/homepage-snowflake-logo.svg'
import TwilioSvg from '@site/static/img/homepage/homepage-twilio-logo.svg'
import SegmentSvg from '@site/static/img/homepage/homepage-segment-logo.svg'
import FaceBookSvg from '@site/static/img/homepage/homepage-facebook-logo.svg'
import CATSvg from '@site/static/img/homepage/homepage-cta-picture.svg'



interface IFeature {
    feature: string;
    purpose: string;
    small: string;
    type: 'solid' | 'fill'
    containerStyle?: React.CSSProperties | undefined;
    svg: ComponentType<SVGProps<SVGSVGElement>> | any
}

interface IWorkContent {
    title: string;
    desc: string;
    svg: any
}

interface IAboutCard {
    comment: string;
    avatar: string;
    name: string;
    position: string;
}

interface IEcosystemCard {
    title: string;
    desc: string;
    svg: any
}

export const herobanner = {
    title: "Rengage - the single source of truth for your",
    emphasize: "customer journey",
    desc: "Transform customer interactions into personalized experiences that drive loyalty and growth",
    button: "watch how it works",
    img: BannerSvg
}

export const featuresContent = {
    title: "Dive into the world of Rengage",
    desc: "Rengage is your comprehensive solution for managing and enhancing customer journeys, delivering insights and measurable outcomes",
    features: [
        {
            feature: 'Journey Moments',
            purpose: 'Instant Journey Insights: No Data Expertise Needed',
            small: 'Accessibility',
            type: 'solid',
            svg: MomentSvg,
            containerStyle: {
                borderRadius: '20px 0 20px 20px'
            }
        },
        {
            feature: 'Journey Builder',
            purpose: 'Simplify interactions across channels with an intuitive machine',
            small: 'Streamline',
            type: 'fill',
            svg: BuilderSvg
        },
        {
            feature: 'Journey Insights',
            purpose: 'Transform data into actionable insights with Rangage',
            small: 'Automatization',
            type: 'solid',
            svg: InsSvg,
            containerStyle: {
                borderRadius: '0 20px 20px 20px'
            }
        }
    ] as IFeature[]
}

export const worksContent = {
    title: "How it works",
    desc: "Discover the seamless orchestration and powerful features that drive unparalleled customer engagement and business success",
    works: [
        {
            title: "Collect",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: CollectSvg
        },
        {
            title: "Build",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: BuildSvg
        },
        {
            title: "Optimize",
            desc: "Easily create personalized customer journeys using our intuitive drag-and-drop builder, engaging customers across channels based on their behaviors and preferences.",
            svg: OptimizeSvg
        }
    ] as IWorkContent[]
}

export const aboutContent = {
    title: "What they say about us",
    desc: "See how companies like yours are succeeding with Rengage",
    cards: [
        {
            comment: "Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.",
            name: "Mary Jane Foster",
            position: "CEO of IT company",
            avatar: aboutAvatar
        },
        {
            comment: "Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.",
            name: "Mary Jane Foster",
            position: "CEO of IT company",
            avatar: aboutAvatar
        },
        {
            comment: "Rangage transformed my business, enabling me to effortlessly automate complex processes with their user-friendly platform. The flexibility of their no-code tools exceeded my expectations, empowering me to take control of my digital operations with impressive results.",
            name: "Mary Jane Foster",
            position: "CEO of IT company",
            avatar: aboutAvatar
        }
    ] as IAboutCard[]
}

export const ecosystemContent = {
    title: "Seamless Integration Ecosystem",
    desc: "Seamlessly integrate Rengage with your existing raw data and it will extract all the various touchpoints across your customer journey",
    btn: "Explore more",
    cards: [
        {
            title: 'Snowflake',
            desc: "This powerful collaboration ensures streamlined data management, unlocking actionable insights for impactful customer journeys.",
            svg: SnowflakeSvg
        },
        {
            title: 'Twilio',
            desc: "This powerful collaboration ensures streamlined data management, unlocking actionable insights for impactful customer journeys.",
            svg: TwilioSvg
        },
        {
            title: 'Snowflake',
            desc: "This powerful collaboration ensures streamlined data management, unlocking actionable insights for impactful customer journeys.",
            svg: SegmentSvg
        },
        {
            title: 'Snowflake',
            desc: "This powerful collaboration ensures streamlined data management, unlocking actionable insights for impactful customer journeys.",
            svg: FaceBookSvg
        },
    ] as IEcosystemCard[]
}

export const CATContent = {
    title: "Ready to elevate your marketing strategy?",
    desc: "Start your journey with Rengage today.",
    btn: "Book a demo",
    svg: CATSvg
}