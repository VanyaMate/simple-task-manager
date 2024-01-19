import React from 'react';
import css from './WindowPopup.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';
import Button from '../../buttons/Button/Button';
import Section from '../../containers/Section/Section';


export interface IWindowPopupController {
    opened: boolean;
    close: () => any;
    open: () => any;
}

export type WindowPopupProps = {
    children: React.ReactNode | string;
    controller: IWindowPopupController;
}

const WindowPopup: React.FC<WindowPopupProps> = (props) => {
    const {
              children,
              controller,
          } = props;

    return (
        <div className={ cn(css.container, controller.opened && css.opened) }>
            <div onClick={ controller.close } className={ css.background }/>
            <Section
                tag={ 'div' }
                type={ 'main' }
                className={ css.viewport }
            >
                <Button
                    className={ css.closeButton }
                    onClick={ controller.close }
                    styleType={ 'danger' }
                >
                    <span className="material-symbols-outlined">close</span>
                </Button>
                <div className={ css.content }>
                    { children }
                </div>
            </Section>
        </div>
    );
};

export default React.memo(WindowPopup);