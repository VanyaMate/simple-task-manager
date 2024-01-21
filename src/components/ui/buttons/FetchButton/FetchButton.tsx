import React, { useCallback, useState } from 'react';
import Button, { ButtonProps } from '@/components/ui/buttons/Button/Button.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';


export type FetchButtonProps =
    {
        onClick: () => Promise<any>,
    }
    & Omit<ButtonProps, 'onClick'>;

const FetchButton: React.FC<FetchButtonProps> = (props) => {
    const [ pending, setPending ]                = useState<boolean>(false);
    const { onClick, postfix, prefix, ...other } = props;

    const onClickHandler = useCallback(() => {
        setPending(true);
        onClick().finally(() => setPending(false));
    }, [ setPending, onClick ]);

    return (
        <Button
            { ...other }
            onClick={ onClickHandler }
            postfix={
                postfix ? pending ? <IconM className="loading">refresh</IconM> : postfix
                        : null
            }
            prefix={
                prefix ? pending ? <IconM className="loading">refresh</IconM> : prefix
                       : null
            }
        />
    );
};

export default React.memo(FetchButton);