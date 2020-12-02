import React from "react";
import PropTypes from "prop-types";
import styles from "./Political2.module.css";
const Political2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[21].title}</h1>  
        <address>{props.articles[21].author}</address>
        <time dateTime={props.articles[21].timeStamp}>{props.articles[21].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[21].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[21].text }}/>
	</article>
  );
};

Political2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Political2;
