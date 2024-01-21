import React, { useCallback, useState } from 'react';
import Section, { SectionType } from '@/components/ui/containers/Section/Section.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './Collapse.module.scss';
import Title from '@/components/ui/text/Title/Title.tsx';
import IconM from '@/components/ui/icons/IconM/IconM.tsx';


export type CollapseProps = {
    opened?: boolean;
    title: React.ReactNode | string;
    children: React.ReactNode | string;
    type?: SectionType;
}

const Collapse: React.FC<CollapseProps> = (props) => {
    const {
              opened,
              title,
              children,
              type,
          }                 = props;
    const [ open, setOpen ] = useState<boolean>(opened ?? false);
    const toggle            = useCallback(() => {
        setOpen((prev) => !prev);
    }, [ setOpen ]);
    /*    const ref                                 = useRef<HTMLDivElement | null>(null);
     const [ contentHeight, setContentHeight ] = useState<number>(0);

     useEffect(() => {
     if (ref.current) {
     const child: HTMLElement | null = ref.current?.querySelector('article');
     setContentHeight(ref.current?.querySelector('article')?.scrollHeight ?? 0);
     } else {
     setContentHeight(0);
     }
     }, [ ref.current ]);*/

    return (
        <Section
            className={ cn(css.container, open && css.opened) }
            size="small"
            tag="section"
            type={ type }
        >
            {
                title
                ? <Title
                    className={ cn(css.title, type === 'main' && css.item) }
                    onClick={ toggle }
                    size="small"
                >
                    <span className={ css.text }>{ title }</span>
                    <IconM className={ css.icon }>expand_more</IconM>
                </Title> : null
            }
            <div
                className={ css.content }
                /*ref={ ref }
                 style={ { height: open ? `${ contentHeight }px` : '0px' } }*/
            >
                { children }
            </div>
        </Section>
    );
};

export default React.memo(Collapse);