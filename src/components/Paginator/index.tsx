import React from 'react';

interface PaginatorProps {
    rowsPerPage: number;
    totalRows: number;
    currentPage: number;
    onPageChange: ( page: number ) => void;
    jumpFirst?: boolean;
    jumpLast?: boolean;
}

const Paginator = ( {
    rowsPerPage,
    totalRows,
    currentPage = 1,
    onPageChange,
    jumpFirst = false,
    jumpLast = false,
}: PaginatorProps ) => {
    const [ page, setPage ] = React.useState( currentPage );
    const totalPages = Math.ceil( totalRows / rowsPerPage );

    const firstPage = () => {
        setPage( 1 );
        onPageChange && onPageChange( 1 );
    };

    const previousPage = () => {
        if ( page > 1 ) {
            setPage( page - 1 );
            onPageChange && onPageChange( page - 1 );
        }
    };

    const nextPage = () => {
        console.log( 'nextPage', page, totalPages );
        if ( page < totalPages ) {
            setPage( page + 1 );
            onPageChange && onPageChange( page + 1 );
        }
    };

    const lastPage = () => {
        setPage( totalPages );
        onPageChange && onPageChange( totalPages );
    };

    return (
        <div className="liwe3-paginator">
            {jumpFirst &&
                <button onClick={firstPage} disabled={page === 1}>
                    First
                </button>
            }
            <button onClick={previousPage} disabled={page === 1}>
                Previous
            </button>
            <div className="content">
                <span>
                    Page {page} of {totalPages}
                </span>
            </div>
            <button onClick={nextPage} disabled={page === totalPages}>
                Next
            </button>
            {jumpLast &&
                <button onClick={lastPage} disabled={page === totalPages}>
                    Last
                </button>
            }
        </div>
    );
};

export default Paginator;