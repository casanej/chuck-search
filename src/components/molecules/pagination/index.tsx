import { FC, useEffect, useMemo, useState } from 'react'

interface Props {
    totalPages: number;
    onChange?: (page: number) => void;
}

export const Pagination: FC<Props> = (props) => {
    const [currenPage, setCurrentPage] = useState(1);

    const mountPages = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= props.totalPages; i++) {
            pages.push(i);
        }

        return pages;
    }, [props.totalPages]);

    useEffect(() => {
        if (props.onChange) props.onChange(currenPage - 1);
    }, [currenPage]);

    return <div style={{ display: 'flex', gap: 10 }}>
        {
            mountPages.map(page => {
                return <div key={page} onClick={() => setCurrentPage(page)} style={{ color: currenPage === page ? 'red' : 'blue', cursor: 'pointer'}}>{page}</div>
            })
        }
    </div>;
};
