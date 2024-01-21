import React from 'react';
import Title from '@/components/ui/text/Title/Title.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import css from './TodoNotFound.module.scss';


export type TodoNotFoundProps = {};

const TodoNotFound: React.FC<TodoNotFoundProps> = (props) => {
    const {} = props;

    return (
        <Section className={ css.container } size="large" type="main">
            <Title>Ничего не найдено</Title>
        </Section>
    );
};

export default React.memo(TodoNotFound);