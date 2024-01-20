import React from 'react';
import { ITextInputController } from '@/hooks/ui/inputs/useTextInput.ts';
import P from '@/components/ui/text/P/P.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import css from './TextInput.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type TextInputProps = {
    controller: ITextInputController,
    label?: string
    placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
    const { controller, label, placeholder } = props;

    return (
        <Section
            size={ 'extra-small' }
            className={ cn(css.container, controller.errorMessage && css.error) }
        >
            {
                label &&
                <P type={ 'invisible' } className={ css.label }>{ label }</P>
            }
            <input
                value={ controller.showValue }
                onChange={ (e) => controller.setValue(e.target.value) }
                className={ css.input }
                placeholder={ placeholder }
            />
            {
                controller.errorMessage &&
                <P type={ 'second' }
                   className={ css.message }>{ controller.errorMessage }</P>
            }
        </Section>
    );
};

export default React.memo(TextInput);