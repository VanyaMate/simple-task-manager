import React from 'react';
import css from './PageLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { cn } from '@vanyamate/helpers/react/classname';


export type PageLayoutProps = {};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const {} = props;

    return (
        <div className={ css.container }>
            <div className={ cn(css.content, css.content_width) }>
                <Outlet/>
            </div>
            <Section className={ cn(css.footer, css.content_width) } type="main">
                footer
            </Section>
        </div>
    );
};

export default React.memo(PageLayout);