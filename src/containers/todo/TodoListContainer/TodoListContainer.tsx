import React, { useCallback, useContext, useState } from 'react';
import TodoSearchForm from '@/components/todo/TodoSearchForm/TodoSearchForm.tsx';
import TodoCreateForm from '@/components/todo/TodoCreateForm/TodoCreateForm.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { TodosContext } from '@/contexts/todos/TodosContext.ts';
import { useTodoActions } from '@/hooks/todo/useTodoActions.ts';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem/TodoPreviewItem.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';
import FetchButton from '@/components/ui/buttons/FetchButton/FetchButton.tsx';
import { Todo } from '@/services/todo/todo.types.ts';
import { useWindowPopupController } from '@/hooks/ui/popup/useWindowPopupController.tsx';
import WindowPopup from '@/components/ui/popup/WindowPopup/WindowPopup.tsx';
import TodoModalPreview from '@/components/todo/TodoModalPreview/TodoModalPreview.tsx';
import { TodosFilterContext } from '@/contexts/todos/TodosFilterContext.ts';
import Pagination from '@/components/common/Pagination/Pagination.tsx';
import { TodosOptionsContext } from '@/contexts/todos/TodosOptionsContext.ts';
import TodoNotFound from '@/components/todo/TodoNotFound/TodoNotFound.tsx';
import TodoSearchOptionsForm
    from '@/components/todo/TodoSearchOptionsForm/TodoSearchOptionsForm.tsx';


export type TodoListContainerProps = {};

const TodoListContainer: React.FC<TodoListContainerProps> = (props) => {
    const {}                      = props;
    const { filter, setFilter }   = useContext(TodosFilterContext);
    const { options, setOptions } = useContext(TodosOptionsContext);

    const { todos, pending, count }  = useContext(TodosContext);
    const { create, update, remove } = useTodoActions();

    const [ selectedTodo, setSelectedTodo ] = useState<Todo | null>(null);
    const todoModalController               = useWindowPopupController();
    const onCardClickHandler                = useCallback((todo: Todo) => {
        setSelectedTodo(todo);
        todoModalController.open();
    }, [ setSelectedTodo, todoModalController ]);

    const onPageChangeHandler = useCallback((page: number, offset: number) => {
        setOptions((prev) => ({ ...prev, offset }));
    }, [ setOptions ]);

    return (
        <Section size="large">
            <WindowPopup controller={ todoModalController }>
                <TodoModalPreview todo={ selectedTodo }/>
            </WindowPopup>
            <TodoCreateForm
                onCreate={ create }
            />
            <Section>
                <TodoSearchForm
                    filter={ filter }
                    setFilter={ setFilter }
                />
                <TodoSearchOptionsForm
                    options={ options }
                    setOptions={ setOptions }
                />
            </Section>
            <Section>
                <Pagination
                    amount={ count }
                    initialPage={ Math.ceil(options.offset / options.limit) + 1 }
                    limit={ options.limit }
                    onPageChange={ onPageChangeHandler }
                />
                <Section className={ pending ? '' : '' }>
                    {
                        todos.length
                        ? todos.map((todo) => (
                            <TodoPreviewItem
                                extraPostfix={
                                    <FetchButton
                                        onClick={ () => remove(todo.id) }
                                        prefix={ <IconM>delete</IconM> }
                                        quad
                                        styleType="danger"
                                    />
                                }
                                extraPrefix={
                                    <FetchButton
                                        onClick={ () => update(todo.id, { status: !todo.status }) }
                                        prefix={ <IconM>{ todo.status ? 'check'
                                                                      : 'remove' }</IconM> }
                                        quad
                                        styleType={ todo.status ? 'main' : 'default' }
                                    />
                                }
                                key={ todo.id }
                                onCardClick={ onCardClickHandler }
                                todo={ todo }
                            />
                        ))
                        : <TodoNotFound/>
                    }
                </Section>
            </Section>
        </Section>
    );
};

export default React.memo(TodoListContainer);