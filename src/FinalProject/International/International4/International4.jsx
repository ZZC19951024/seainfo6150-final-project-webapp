import React from "react";
import PropTypes from "prop-types";
import styles from "./International4.module.css";
const International4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[11].title}</h1>  
        <address>{props.articles[11].author}</address>
        <time dateTime={props.articles[11].timeStamp}>{props.articles[11].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[11].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[11].text }}/>
	</article>
  );
};

International4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default International4;
