import { ITextInputController } from '@/hooks/ui/inputs/useTextInput.ts';


export const useTextInputsValidator = function (...inputs: ITextInputController[]): boolean {
    return inputs.every((input) => !((input.required && !input.currentValue) || input.errorMessage || input.process));
};