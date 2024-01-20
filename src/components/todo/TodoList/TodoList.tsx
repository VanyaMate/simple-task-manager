import React from 'react';
import Section from '@/components/ui/containers/Section/Section.tsx';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem/TodoPreviewItem.tsx';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos } = props;

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