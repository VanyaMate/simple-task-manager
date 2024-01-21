import React from 'react';
import { Todo } from '@/services/todo/todo.types.ts';
import Title from '@/components/ui/text/Title/Title.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import P from '@/components/ui/text/P/P';


export type TodoModalPreviewProps = {
    todo: Todo | null;
};

const TodoModalPreview: React.FC<TodoModalPreviewProps> = (props) => {
    const { todo } = props;

    if (todo === null) {
        return <Title>Вы не выбрали задачу</Title>;
    }

    return (
        <Section>
            <Title divider>{ todo.title }</Title>
            <Section>
                <P type={ 'invisible' }>{ todo.date }</P>
            </Section>
            <P>{ todo.description }</P>
        </Section>
    );
};

export default React.memo(TodoModalPreview);