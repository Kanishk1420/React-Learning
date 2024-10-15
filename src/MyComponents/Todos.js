import React from "react";
import PropTypes from 'prop-types';
export const Todos = (props) => {
return(
    <>Todos Works{props.title}</>
)
}
Todos.propTypes= {
    title:PropTypes.array
}