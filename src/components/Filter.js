import React from "react";

function filter({onCategoryChange}) {
    function handleChange(e) {
        onCategoryChange(e.target.value);
    }

    return(
        <select name="filter" onChange={handleChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    );
}

export default filter;