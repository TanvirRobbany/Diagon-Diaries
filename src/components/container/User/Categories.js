import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookTableUser from "../Book Table/BookTableUser";
import CategoriesContainer from "../Categories Container/CategoriesContainer";

const Categories = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/usercategories" component={CategoriesContainer} />
        <Route exact path="/bookcategory" component={BookTableUser} isAdmin={false}/>
      </Switch>
    </Router>
  );
};

export default Categories;
