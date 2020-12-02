import React from "react";
import PropTypes from "prop-types";
import styles from "./International3.module.css";
const International3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[10].title}</h1>  
        <address>{props.articles[10].author}</address>
        <time dateTime={props.articles[10].timeStamp}>{props.articles[10].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[10].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[10].text }}/>
	</article>
  );
};

International3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default International3;
