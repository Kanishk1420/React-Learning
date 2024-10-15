import React from 'react'
import PropTypes from 'prop-types';
import {a} from '../Test1.mjs'
export default function Header(props){
    return(
        <div>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/navbar">Todo list {a}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/dropdownnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home {props.number}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/link">{props.title} About </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>
        </div>
    )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};