import React from 'react';
import css from './PageLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import Title from '@/components/ui/text/Title/Title.tsx';
import P from '@/components/ui/text/P/P.tsx';
import Link from '@/components/ui/links/Link/Link.tsx';


export type PageLayoutProps = {};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const {} = props;

    return (
        <div className={ css.container }>
            <Section className={ cn(css.content, css.content_width) }>
                <Section size="extra-small" type="main">
                    <Title size="medium">Simple task manager</Title>
                </Section>
                <Outlet/>
            </Section>
            <Section className={ cn(css.footer, css.content_width) } type="main">
                <P type="invisible">
                    <Link
                        target="_blank"
                        to="https://github.com/VanyaMate"
                    >VanyaMate</Link> developer
                </P>
                <P type="invisible">
                    project <Link
                    target="_blank"
                    to="https://github.com/VanyaMate/simple-task-manager"
                >GitHub</Link>
                </P>
            </Section>
        </div>
    );
};

export default React.memo(PageLayout);