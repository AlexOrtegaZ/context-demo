import React from "react";

const withCategoriesHOC = WrappedComponent => {

  function WithCategories() {
    const [categories, setCategories] = React.useState([]);

    const fetchCategories = async () => {
      const response = await fetch(
        'https://api.chucknorris.io/jokes/categories'
      );
      const categories = await response.json();
      setCategories(categories);
    };
    return (
      <WrappedComponent categories={categories} fetchCategories={fetchCategories} /> 
    );
  }
  return WithCategories;
};

export default withCategoriesHOC;
