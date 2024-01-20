import React from 'react';
import { CreateTodo } from '@/services/todo/todo.types.ts';
import Section from '@/components/ui/containers/Section/Section.tsx';
import TextInput from '@/components/ui/inputs/TextInput/TextInput.tsx';
import { ITextInputController, useTextInput } from '@/hooks/ui/inputs/useTextInput.ts';
import Button from '@/components/ui/buttons/Button/Button.tsx';
import { useTextInputsValidator } from '@/hooks/ui/inputs/useTextInputsValidator.ts';


export type TodoCreateFormProps = {
    onCreate: (createData: CreateTodo) => void;
    // todo: temp
    // eslint-disable-next-line react/no-unused-prop-types
    process?: boolean;
};

const TodoCreateForm: React.FC<TodoCreateFormProps> = (props) => {
    const { onCreate }                           = props;
    const titleInput: ITextInputController       = useTextInput({
        required : true,
        validator: (value) => {
            if (value.length < 4) {
                return 'Название задачи должно содержать более 3-х символов';
            }

            return '';
        },
    });
    const descriptionInput: ITextInputController = useTextInput({});
    const activeButton: boolean                  = useTextInputsValidator(titleInput, descriptionInput);

    return (
        <Section size="small">
            <TextInput
                controller={ titleInput }
                label="Заголовок задачи"
                placeholder="Введите заголовок"
            />
            <TextInput
                controller={ descriptionInput }
                label="Описание задачи"
                placeholder="Введите описание"
            />
            <Button disabled={ !activeButton } onClick={ () => {
                onCreate({
                    id         : Math.random().toString(),
                    title      : titleInput.currentValue,
                    description: descriptionInput.currentValue,
                    date       : new Date().toLocaleString(),
                    status     : false,
                });
            } } styleType="main">Создать</Button>
        </Section>
    );
};

export default React.memo(TodoCreateForm);