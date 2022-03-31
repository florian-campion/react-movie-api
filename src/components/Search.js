// components/Search.js
import React from "https://cdn.skypack.dev/react";
import PropTypes from "https://cdn.skypack.dev/prop-types";

const Search = props => (
    <form className="search" onInput={event => props.onInput(event.target.value)}>
        <input type="search" value={props.query} placeholder={props.placeholder} />
    </form>
    );
    
    Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
    };
    
    export default Search;