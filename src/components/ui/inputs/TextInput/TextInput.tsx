import React from 'react';


export type TextInputProps = {};

const TextInput: React.FC<TextInputProps> = (props) => {
    const {} = props;

    return (
        <div>
            TextInputComponent
        </div>
    );
};

export default React.memo(TextInput);