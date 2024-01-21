import React from 'react';
import css from './LabelItem.module.scss';
import P from '@/components/ui/text/P/P.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';


export type LabelItemProps = {
    label: string;
    children: React.ReactNode;
};

const LabelItem: React.FC<LabelItemProps> = (props) => {
    const { label, children } = props;

    return (
        <Section className={ css.container } size="extra-small" type="default">
            <P type="invisible">{ label }</P>
            <div className={ css.content }>
                { children }
            </div>
        </Section>
    );
};

export default React.memo(LabelItem);