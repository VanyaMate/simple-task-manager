import React, { useCallback, useEffect, useMemo, useState, MouseEvent } from 'react';
import css from './Pagination.module.scss';
import Button from '@/components/ui/buttons/Button/Button.tsx';
import Section from '@/components/ui/containers/Section/Section.tsx';
import P from '@/components/ui/text/P/P.tsx';


export type PaginationProps = {
    amount: number;
    limit: number;
    onPageChange: (page: number, offset: number) => any;
    initialPage?: number;
};

const Pagination: React.FC<PaginationProps> = (props) => {
    const { amount, limit, onPageChange, initialPage } = props;
    const [ currentPage, setCurrentPage ]              = useState<number>(initialPage ?? 1);
    const buttons: number[]                            = useMemo(() => {
        return new Array(Math.ceil(amount / limit)).fill(0).map((_, index) => index + 1);
    }, [ amount, limit ]);

    useEffect(() => {
        const maxPage: number = Math.ceil(amount / limit);
        const page: number    = initialPage ?? 1;

        if ((maxPage < page) && (maxPage > 0)) {
            setCurrentPage(maxPage);
            onPageChange(maxPage, limit * (maxPage - 1));
        } else {
            setCurrentPage(page);
        }
    }, [ amount, limit, initialPage, onPageChange ]);

    const onButtonClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        const page: number = Number(event.currentTarget.textContent);
        setCurrentPage(page);
        onPageChange(page, limit * (page - 1));
    }, [ setCurrentPage, onPageChange, limit ]);

    return (
        <Section size="extra-small">
            <P type="invisible">Страницы</P>
            <Section className={ css.container } type="main">
                {
                    buttons.length ?
                    buttons.map((page) => (
                        <Button
                            key={ page }
                            onClick={ onButtonClick }
                            quad
                            styleType={ currentPage === page ? 'selected' : 'main' }
                        >{ page }</Button>
                    )) :
                    <P>Ничего не найдено</P>
                }
            </Section>
        </Section>
    );
};

export default React.memo(Pagination);