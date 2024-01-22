import React from 'react';
import { CreateTodo } from '@/services/todo/todo.types.ts';
import Section from '@/components/ui/containers/Section/Section.tsx';
import TextInput from '@/components/ui/inputs/TextInput/TextInput.tsx';
import { ITextInputController, useTextInput } from '@/hooks/ui/inputs/useTextInput.ts';
import { useTextInputsValidator } from '@/hooks/ui/inputs/useTextInputsValidator.ts';
import FetchButton from '@/components/ui/buttons/FetchButton/FetchButton.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';
import Title from '@/components/ui/text/Title/Title.tsx';


export type TodoCreateFormProps = {
    onCreate: (createData: CreateTodo) => Promise<any>;
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
        <Section size="small" type="main">
            <Title>Создать задачу</Title>
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
            <FetchButton
                disabled={ !activeButton }
                onClick={ () =>
                    onCreate({
                        id         : Math.random().toString(),
                        title      : titleInput.currentValue,
                        description: descriptionInput.currentValue,
                        date       : new Date().toLocaleString(),
                        status     : false,
                    })
                        .then(() => {
                            titleInput.setValue('');
                            descriptionInput.setValue('');
                        })
                }
                prefix={ <IconM>check</IconM> }
                styleType="main"
            >
                Создать
            </FetchButton>
        </Section>
    );
};

export default React.memo(TodoCreateForm);