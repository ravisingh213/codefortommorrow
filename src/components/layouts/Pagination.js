import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ pageCount, onPageChange }) {
    return (
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    )
}
