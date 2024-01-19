import React, { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './Section.module.scss';


export type SectionSize =
    'small'
    | 'medium'
    | 'large'
    | 'extra-small';

export type SectionTag =
    'article'
    | 'section'
    | 'header'
    | 'footer'
    | 'div';

export type SectionType =
    'main'
    | 'second'
    | 'default'
    | true;

export type SectionProps =
    React.HTMLAttributes<HTMLDivElement>
    & {
        size?: SectionSize;
        tag?: SectionTag;
        type?: SectionType;
    };

const Section: React.FC<SectionProps> = (props) => {
    const { className, size, tag, type, ...other } = props;

    const classNames = useMemo(() => {
        return cn(
            css.container,
            className,
            type && css.item,
            type === 'main' && css.main,
            type === 'second' && css.second,
            type === 'default' && css.default,
            size === 'medium' && css.medium,
            size === 'large' && css.large,
            size === 'extra-small' && css.extra_small,
            (size === 'small' || !size) && css.small,
        );
    }, [ size, type, className ]);

    if (tag === 'article') {
        return <article className={ classNames } { ...other }/>;
    } else if (tag === 'section') {
        return <section className={ classNames } { ...other }/>;
    } else if (tag === 'footer') {
        return <footer className={ classNames } { ...other }/>;
    } else if (tag === 'header') {
        return <header className={ classNames } { ...other }/>;
    } else {
        return <div className={ classNames } { ...other }/>;
    }
};

export default React.memo(Section);