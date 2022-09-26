import { FC, useEffect, useMemo, useState } from 'react'
import { PaginationItem, PaginationWrapper } from './index.style';

interface Props {
    totalPages: number;
    onChange?: (page: number) => void;
}

export const Pagination: FC<Props> = (props) => {
    const [currenPage, setCurrentPage] = useState(1);

    const mountPages = useMemo(() => {
        const pages = [];

        const maxPages = Math.min(props.totalPages, 7);
        const startPage = Math.max(1, Math.min(currenPage - 3, props.totalPages - maxPages + 1));
        const endPage = Math.min(props.totalPages, startPage + maxPages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    }, [props.totalPages, currenPage]);

    useEffect(() => {
        if (props.onChange) props.onChange(currenPage - 1);
    }, [currenPage]);

    return <PaginationWrapper >
        {
            mountPages.map(page => {
                return <PaginationItem
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    active={currenPage === page}
                >
                    {page}
                </PaginationItem>
            })
        }
    </PaginationWrapper>;
};
