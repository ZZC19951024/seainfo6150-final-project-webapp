import React from "react";
import PropTypes from "prop-types";
import styles from "./Political4.module.css";
const Political4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[23].title}</h1>  
        <address>{props.articles[23].author}</address>
        <time dateTime={props.articles[23].timeStamp}>{props.articles[23].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[23].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[23].text }}/>
	</article>
  );
};

Political4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Political4;
