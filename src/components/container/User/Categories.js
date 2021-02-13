import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookTableUser from "../Book Table/BookTableUser";
import CategoriesContainer from "../Categories Container/CategoriesContainer";

const Categories = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/user/categories" component={CategoriesContainer} />
        <Route exact path="/user/:id/books" component={BookTableUser} isAdmin={false}/>
      </Switch>
    </Router>
  );
};

export default Categories;
