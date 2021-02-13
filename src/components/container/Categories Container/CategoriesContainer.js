import React from "react";
import { Link } from "react-router-dom";
import { categoryName } from "./category";

const CategoriesContainer = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>

            <div className='row' style={{ height: "150px" }}>
                {categoryName.map((category, index) =>
                    <div className='col s12 m6 l4' style={{ marginBottom: "2rem" }}>
                        <Link to={`${category.name}/books`}
                            className={`waves-effect waves-light btn-large ${category.color}`}
                            style={{
                                width: "100%",
                                height: "125px",
                                fontSize: "22px",
                                padding: "38px 0px 0px 0px",
                                margin: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            {category.name}
                        </Link>

                    </div>
                )}

            </div>
        </div>
    )
}

export default CategoriesContainer;
