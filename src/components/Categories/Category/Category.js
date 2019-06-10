import React from 'react';
import classNames from "classnames";
import WithCategory from '../../WithCategory';

const Category = ({ category }) => {
    return (
        <WithCategory>
            {
                ({ setCategory, categorySelected }) => (
                    <li
                    className={classNames({ selected: category === categorySelected })}
                    onClick={() => setCategory(category)} >
                        { category }
                    </li>
                )
            }
        </WithCategory>
    )
}

export default Category;
