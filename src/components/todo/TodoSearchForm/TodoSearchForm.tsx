import React from 'react';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { ITextInputController, useTextInput } from '@/hooks/ui/inputs/useTextInput.ts';
import TextInput from '@/components/ui/inputs/TextInput/TextInput.tsx';
import { Filter } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';
import Collapse from '@/components/ui/containers/Collapse/Collapse.tsx';
import P from '@/components/ui/text/P/P.tsx';
import LabelItem from '@/components/ui/list/items/LabelItem/LabelItem.tsx';
import Checkbox from '@/components/ui/buttons/Checkbox/Checkbox.tsx';
import {
    useSearchFormToggleCallback,
} from '@/hooks/todo/search-form/useSearchFormToggleCallback.ts';


export type TodoSearchFormProps = {
    filter: Filter<Todo>,
    setFilter: React.Dispatch<React.SetStateAction<Filter<Todo>>>
};

const TodoSearchForm: React.FC<TodoSearchFormProps> = (props) => {
    const { filter, setFilter }             = props;
    const searchInput: ITextInputController = useTextInput({
        initialValue: filter.title?.value,
        debounce    : 500,
        validator   : (value) => {
            if (value.length < 3) {
                return 'Длина должна быть 3 и более символов';
            }
            return '';
        },
        onChange    : (value, errorMessage) => !errorMessage && setFilter((prev) => ({
            ...prev,
            title: {
                type: 'match',
                value,
            },
        })),
    });

    const toggleCompletedTodoStatusCallback    = useSearchFormToggleCallback(setFilter, true);
    const toggleNotCompletedTodoStatusCallback = useSearchFormToggleCallback(setFilter, false);

    return (
        <Section
            size="extra-small"
        >
            <TextInput
                controller={ searchInput }
                label="Поиск по задачам"
                placeholder="Введите заголовок"
            />
            <Collapse title="Больше фильтров">
                <Section size="extra-small">
                    <Section size="extra-small" type="main">
                        <P type="second">Состояние</P>
                        <LabelItem label="Выполненные">
                            <Checkbox
                                onToggle={ toggleCompletedTodoStatusCallback }
                                value={ filter.status?.value === true || !filter.status }
                            />
                        </LabelItem>
                        <LabelItem label="Не выполненные">
                            <Checkbox
                                onToggle={ toggleNotCompletedTodoStatusCallback }
                                value={ filter.status?.value === false || !filter.status }
                            />
                        </LabelItem>
                    </Section>
                </Section>
            </Collapse>
        </Section>
    );
};

export default React.memo(TodoSearchForm);