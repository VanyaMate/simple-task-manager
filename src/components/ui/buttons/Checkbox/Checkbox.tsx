import React from 'react';
import Button from '@/components/ui/buttons/Button/Button.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';


export type CheckboxProps = {
    value: boolean;
    onToggle: (value: boolean) => any;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { value, onToggle } = props;

    return (
        <Button
            onClick={ () => {
                onToggle(!value);
            } }
            prefix={
                <IconM>{ value ? 'check' : 'remove' }</IconM>
            }
            quad
            styleType={ value ? 'main' : 'default' }
        />
    );
};

export default React.memo(Checkbox);