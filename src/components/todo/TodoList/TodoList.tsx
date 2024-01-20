import React from 'react';
import Section from '@/components/ui/containers/Section/Section.tsx';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem/TodoPreviewItem.tsx';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodoListProps = {
    todos: Todo[];
    process: boolean;
    error: string | null;
};

const TodoList: React.FC<TodoListProps> = (props) => {
    const { process, error, todos } = props;

    if (process) {
        return 'loading';
    }

    if (error) {
        return 'Error: ' + error;
    }

    if (!todos.length) {
        return 'not found';
    }

    return (
        <Section>
            {
                todos.map((todoItem) => (
                    <TodoPreviewItem
                        key={ todoItem.id }
                        todo={ todoItem }
                        onCardClick={ () => {
                        } }
                    />
                ))
            }
        </Section>
    );
};

export default React.memo(TodoList);