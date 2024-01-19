import React, { useCallback } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';
import Title from '@/components/ui/text/Title/Title.tsx';
import P from '@/components/ui/text/P/P.tsx';
import css from './TodoPreviewItem.module.scss';
import Section from '@/components/ui/containers/Section/Section.tsx';


export type TodoItemProps = {
    todo: Todo;
    onCardClick: (todo: Todo) => any;
    extraPrefix?: React.ReactNode;
    extraPostfix?: React.ReactNode;
};

const TodoPreviewItem: React.FC<TodoItemProps> = (props) => {
    const { todo, onCardClick, extraPostfix, extraPrefix } = props;

    const onCardClickHandler = useCallback(() => {
        onCardClick(todo);
    }, [ todo, onCardClick ]);

    return (
        <Section
            tag={ 'article' }
            size={ 'extra-small' }
            className={ css.container }
        >
            {
                extraPrefix &&
                <Section type={ 'main' } className={ css.extra }>
                    { extraPrefix }
                </Section>
            }
            <Section
                type={ 'main' }
                size={ 'extra-small' }
                className={ css.todo }
                onClick={ onCardClickHandler }
            >
                <Title lines={ 2 }>{ todo.title }</Title>
                <P lines={ 4 } type={ 'second' }>{ todo.description }</P>
                <P type={ 'invisible' }>{ todo.date }</P>
            </Section>
            {
                extraPostfix &&
                <Section type={ 'main' } className={ css.extra }>
                    { extraPostfix }
                </Section>
            }
        </Section>
    );
};

export default React.memo(TodoPreviewItem);