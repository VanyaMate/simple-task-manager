import React from 'react';
import TodoListContainer from '@/containers/todo/TodoListContainer/TodoListContainer.tsx';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {} = props;

    return (
        <TodoListContainer/>
    );
};

export default React.memo(HomePage);