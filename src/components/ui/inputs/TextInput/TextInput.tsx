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
            className={ cn(css.container, controller.errorMessage && css.error) }
            size="extra-small"
        >
            {
                label ? <P className={ css.label } type="invisible">{ label }</P> : null
            }
            <input
                className={ css.input }
                onChange={ (e) => controller.setValue(e.target.value) }
                placeholder={ placeholder }
                value={ controller.showValue }
            />
            {
                controller.errorMessage
                ? <P
                    className={ css.message }
                    type="second"
                >{ controller.errorMessage }</P>
                : null
            }
        </Section>
    );
};

export default React.memo(TextInput);