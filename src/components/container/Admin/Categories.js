import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookTableAdmin from "../Book Table/BookTableAdmin";
import BookTableUser from "../Book Table/BookTableUser";
import CategoriesContainer from "../Categories Container/CategoriesContainer";

const Categories = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admincategories" component={CategoriesContainer} />
        <Route exact path="/:id/books" render={()=><BookTableUser isAdmin={true}/>} />
      </Switch>
    </Router>
  );
};

export default Categories;
