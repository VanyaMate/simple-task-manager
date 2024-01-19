import React from 'react';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { useFetchTodoMockList } from '@/hooks/todo/fetch/useFetchTodoMockList.ts';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem/TodoPreviewItem.tsx';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {}       = props;
    const { data } = useFetchTodoMockList();


    return (
        <Section>
            {
                data.map((todoItem) => (
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

export default React.memo(HomePage);