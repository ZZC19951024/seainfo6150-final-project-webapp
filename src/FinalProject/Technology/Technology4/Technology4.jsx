import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology4.module.css";
const Technology4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[15].title}</h1>  
        <address>{props.articles[15].author}</address>
        <time dateTime={props.articles[15].timeStamp}>{props.articles[15].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[15].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[15].text }}/>
	</article>
  );
};

Technology4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Technology4;
