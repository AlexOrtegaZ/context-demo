import React from 'react';
import "./styles.css";
import Category from "./Category/Category";
import withCategoriesHOC from "../WithCategoryHOC";

function Categories({ categories, fetchCategories }) {
  
  React.useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ul>
        {
          categories.map(category => (
            <Category category={category} />
          ))
        }
      </ul>
    </div>
  );
}

export default withCategoriesHOC(Categories);
