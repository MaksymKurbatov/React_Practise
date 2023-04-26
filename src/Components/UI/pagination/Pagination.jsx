import React from 'react';
import Mybutton from "../button/Mybutton";
import {getPageArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPageArray(totalPages);
    return (
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'countButton page__current': 'countButton' }>
                         <Mybutton >{p}</Mybutton>
                    </span>
                )}
            </div>
    );
};

export default Pagination;