import React from 'react';
import TodoSearchForm from '@/components/todo/TodoSearchForm/TodoSearchForm.tsx';
import TodoCreateForm from '@/components/todo/TodoCreateForm/TodoCreateForm.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';


export type TodoListContainerProps = {};

const TodoListContainer: React.FC<TodoListContainerProps> = (props) => {
    const {} = props;
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

    return (
        <Section size={ 'large' }>
            <TodoCreateForm
                onCreate={ (data) => {
                    console.log(data);
                } }
            />
            <TodoSearchForm
                onChange={ (value, errorMessage) => !errorMessage && console.log(value) }
            />
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