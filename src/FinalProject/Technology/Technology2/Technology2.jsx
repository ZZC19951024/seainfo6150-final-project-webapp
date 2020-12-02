import React from "react";
import PropTypes from "prop-types";
import styles from "./Technology2.module.css";
const Technology2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[13].title}</h1>  
        <address>{props.articles[13].author}</address>
        <time dateTime={props.articles[13].timeStamp}>{props.articles[13].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[13].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[13].text }}/>
	</article>
  );
};

Technology2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Technology2;
