import React from "react";
import PropTypes from "prop-types";
import styles from "./International2.module.css";
const International2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[9].title}</h1>  
        <address>{props.articles[9].author}</address>
        <time dateTime={props.articles[9].timeStamp}>{props.articles[9].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[9].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[9].text }}/>
	</article>
  );
};

International2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default International2;
