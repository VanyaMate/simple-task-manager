import React from 'react';
import Section from '@/components/ui/containers/Section/Section.tsx';
import { ITextInputController, useTextInput } from '@/hooks/ui/inputs/useTextInput.ts';
import TextInput from '@/components/ui/inputs/TextInput/TextInput.tsx';


/**
 * TODO: Заменить onChange на фильтры, думаю
 */
export type TodoSearchFormProps = {
    onChange: (value: string, errorMessage: string) => void;
};

const TodoSearchForm: React.FC<TodoSearchFormProps> = (props) => {
    const { onChange }                      = props;
    const searchInput: ITextInputController = useTextInput({
        initialValue: '',
        debounce    : 500,
        validator   : (value) => {
            if (value.length < 3) {
                return 'Длина должна быть 3 и более символов';
            }
            return '';
        },
        onChange    : onChange,
    });

    return (
        <Section
            size="extra-small"
        >
            <TextInput
                controller={ searchInput }
                label="Поиск по задачам"
                placeholder="Введите заголовок"
            />
        </Section>
    );
};

export default React.memo(TodoSearchForm);