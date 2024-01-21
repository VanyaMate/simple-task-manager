import React, { useCallback } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';
import Title from '@/components/ui/text/Title/Title.tsx';
import P from '@/components/ui/text/P/P.tsx';
import css from './TodoPreviewItem.module.scss';
import Section from '@/components/ui/containers/Section/Section.tsx';


export type TodoItemProps = {
    todo: Todo;
    onCardClick?: (todo: Todo) => any;
    extraPrefix?: React.ReactNode;
    extraPostfix?: React.ReactNode;
};

const TodoPreviewItem: React.FC<TodoItemProps> = (props) => {
    const { todo, onCardClick, extraPostfix, extraPrefix } = props;

    const onCardClickHandler = useCallback(() => {
        onCardClick && onCardClick(todo);
    }, [ todo, onCardClick ]);

    return (
        <Section
            className={ css.container }
            size="extra-small"
            tag="article"
        >
            {
                extraPrefix ? <Section className={ css.extra } type="main">
                    { extraPrefix }
                </Section> : null
            }
            <Section
                className={ css.todo }
                onClick={ onCardClickHandler }
                size="extra-small"
                type="main"
            >
                <Title lines={ 2 }>{ todo.title }</Title>
                <P lines={ 4 } type="second">{ todo.description }</P>
                <P type="invisible">{ todo.date }</P>
            </Section>
            {
                extraPostfix ? <Section className={ css.extra } type="main">
                    { extraPostfix }
                </Section> : null
            }
        </Section>
    );
};

export default React.memo(TodoPreviewItem);