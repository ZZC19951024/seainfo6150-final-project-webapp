import React from "react";
import PropTypes from "prop-types";
import styles from "./NotFound.module.css";

const NotFound = () => {

  return (
	<div className={styles.nf}>
	  <h1>OOPS! PAGE UNAVAILABLE</h1>
	  <p>This page either does not exist or is currently unavaliable.</p>
	</div>
  );
};

//NotFound.propTypes = {


export default NotFound;
