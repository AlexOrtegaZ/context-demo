import React from "react";
import Categories from './Categories';

export const CategoriesContext = React.createContext(null);

export const CategoriesProvider = ({ setCategory, category }) => {
    const values = {
        setCategory, category
    }
    return (
        <CategoriesContext.Provider value={values}>
            <Categories />
        </CategoriesContext.Provider>
    );
};
