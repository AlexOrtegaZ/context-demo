import React from "react";
import { CategoriesContext } from './CategoriesContext'

const WithCategory = ({ children }) => {
  return (
    <CategoriesContext.Consumer>
      {
        ({ setCategory, category: categorySelected }) => children({ setCategory, categorySelected})
      }
    </CategoriesContext.Consumer>
  );
};

export default WithCategory;
