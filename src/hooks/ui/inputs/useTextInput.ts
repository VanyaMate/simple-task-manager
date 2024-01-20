import { useCallback, useEffect, useMemo, useState } from 'react';


export type TextInputValidator = (value: string) => string;

export type UseTextInputProps = {
    onChange?: (value: string, errorMessage: string) => any;
    required?: boolean;
    initialValue?: string;
    debounce?: number;
    validator?: TextInputValidator;
}

export interface ITextInputController {
    showValue: string;
    currentValue: string;
    setValue: (value: string) => void;
    process: boolean;
    required: boolean;
    errorMessage: string;
}

export const useTextInput = function (props: UseTextInputProps): ITextInputController {
    const [ showValue, setShowValue ]       = useState<string>(props.initialValue ?? '');
    const [ currentValue, setCurrentValue ] = useState<string>(showValue);
    const [ errorMessage, setErrorMessage ] = useState<string>(
        (props.validator && showValue) ? props.validator(showValue) : '',
    );
    const [ process, setProcess ]           = useState<boolean>(false);

    /**
     * Функция устанавливает showValue, а так же, если нету debounce, усталавливает и всё остальное
     * @type {(value: string) => void}
     */
    const setValue = useCallback((value: string) => {
        setShowValue(value);
        if (!props.debounce && value !== currentValue) {
            setCurrentValue(value);
            let message: string = '';
            if (value && props.validator) {
                message = props.validator(value);
            }
            setErrorMessage(message);
            props.onChange && props.onChange(value, message);
        }
    }, [ currentValue, props ]);

    /**
     * Дебаунс
     */
    useEffect(() => {
        if (props.debounce && showValue !== currentValue) {
            setProcess(true);
            const timeout = setTimeout(() => {
                setCurrentValue(showValue);
                let message: string = '';
                if (showValue && props.validator) {
                    message = props.validator(showValue);
                }
                setErrorMessage(message);
                props.onChange && props.onChange(showValue, message);
                setProcess(false);
            }, props.debounce);

            return () => clearTimeout(timeout);
        }
    }, [ showValue, currentValue, props ]);

    return useMemo(() => ({
        showValue,
        currentValue,
        setValue,
        process,
        errorMessage,
        required: props.required ?? false,
    }), [ showValue, currentValue, setValue, process, errorMessage, props.required ]);
};