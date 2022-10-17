import designSvg from '../assets/design.svg';
import engineeringSvg from '../assets/engineering.svg';
import analyticsSvg from '../assets/analytics.svg';
import marketingSvg from '../assets/marketing.svg';
import strategySvg from '../assets/strategy.svg';
import venturesSvg from '../assets/ventures.svg';

type Link = {
    name: string;
    imageSrc?: string;
}

export const menu: Array<Link> = [
    {
        name: 'Solutions'
    },
    {
        name: 'Our Work'
    },
    {
        name: 'About'
    },
    {
        name: 'Blog'
    },
    {
        name: 'Careers'
    },
    {
        name: 'Contact'
    },
];

export const services: Array<Link> = [
    {
        name: 'Design',
        imageSrc: designSvg
    },
    {
        name: 'Engineering',
        imageSrc: engineeringSvg
    },
    {
        name: 'Analytics',
        imageSrc: analyticsSvg
    },
    {
        name: 'Marketing',
        imageSrc: marketingSvg
    },
    {
        name: 'Strategy',
        imageSrc: strategySvg
    },
    {
        name: 'Ventures',
        imageSrc: venturesSvg
    },
]