import React from 'react';
import { Options } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';
import Collapse from '@/components/ui/containers/Collapse/Collapse.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import LabelItem from '@/components/ui/list/items/LabelItem/LabelItem.tsx';
import Button from '@/components/ui/buttons/Button/Button.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';
import {
    useSearchOptionsFormSelectSortCallback,
} from '@/hooks/todo/search-options-form/useSearchOptionsFormSelectSortCallback.ts';


export type TodoSearchOptionsFormProps = {
    options: Options<Todo>;
    setOptions: React.Dispatch<React.SetStateAction<Options<Todo>>>;
};

const TodoSearchOptionsForm: React.FC<TodoSearchOptionsFormProps> = (props) => {
    const { options, setOptions } = props;

    const toggleDateAscSort  = useSearchOptionsFormSelectSortCallback(setOptions, 'asc');
    const toggleDateDescSort = useSearchOptionsFormSelectSortCallback(setOptions, 'desc');

    return (
        <Collapse title="Настройки поиска">
            <Section type="main">
                <LabelItem label="Сортировка по дате:">
                    <Button
                        onClick={ toggleDateAscSort }
                        prefix={ <IconM>arrow_upward</IconM> }
                        quad
                        styleType={ (options.sort[0] === 'date' && options.sort[1] === 'asc')
                                    ? 'main' : 'default' }
                    />
                    <Button
                        onClick={ toggleDateDescSort }
                        prefix={ <IconM>arrow_downward</IconM> }
                        quad
                        styleType={ (options.sort[0] === 'date' && options.sort[1] === 'desc')
                                    ? 'main' : 'default' }
                    />
                </LabelItem>
            </Section>
        </Collapse>
    );
};

export default React.memo(TodoSearchOptionsForm);