import React, { useContext } from 'react';
import TodoSearchForm from '@/components/todo/TodoSearchForm/TodoSearchForm.tsx';
import TodoCreateForm from '@/components/todo/TodoCreateForm/TodoCreateForm.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { TodosContext } from '@/contexts/todos/TodosContext.ts';
import { useTodoActions } from '@/hooks/todo/useTodoActions.ts';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem/TodoPreviewItem.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';
import FetchButton from '@/components/ui/buttons/FetchButton/FetchButton.tsx';


export type TodoListContainerProps = {};

const TodoListContainer: React.FC<TodoListContainerProps> = (props) => {
    const {}                         = props;
    /**
     *  Можно сделать через ContextProvider-ы.
     *  Будет 3 контекста.
     *  1. Фильтры
     *  2. Опции
     *  3. Список задач
     *
     *  При измении в фильтрах или опциях - получить список задач.
     *  Так же в списке задач будет process и error.
     *  Так же там можно указать количество задач по фильтрам.
     */

    const { todos, pending, count }  = useContext(TodosContext);
    const { create, update, remove } = useTodoActions();

    return (
        <Section size="large">
            <TodoCreateForm
                onCreate={ create }
            />
            <TodoSearchForm
                onChange={ (value, errorMessage) => !errorMessage && console.log(value) }
            />
            <Section className={ pending ? 'pending-container' : '' }>
                {
                    todos.map((todo) => (
                        <TodoPreviewItem
                            extraPostfix={
                                <FetchButton
                                    block
                                    onClick={ () => remove(todo.id) }
                                    prefix={ <IconM>delete</IconM> }
                                    styleType="danger"
                                />
                            }
                            extraPrefix={
                                <FetchButton
                                    block
                                    onClick={ () => update(todo.id, { status: !todo.status }) }
                                    prefix={ <IconM>check</IconM> }
                                    styleType={ todo.status ? 'main' : 'default' }
                                />
                            }
                            key={ todo.id }
                            todo={ todo }
                        />
                    ))
                }
            </Section>
            {
                /**
                 *             // TodoSearchForm
                 *             // TodoCreateForm
                 *             // TodoList
                 *             // Pagination
                 */
            }
        </Section>
    );
};

export default React.memo(TodoListContainer);