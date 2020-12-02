import React from "react";
import PropTypes from "prop-types";
import styles from "./International1.module.css";
const International1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[8].title}</h1>  
        <address>{props.articles[8].author}</address>
        <time dateTime={props.articles[8].timeStamp}>{props.articles[8].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[8].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[8].text }}/>
	</article>
  );
};

International1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default International1;
