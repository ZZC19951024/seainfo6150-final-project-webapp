import React from "react";
import PropTypes from "prop-types";
import styles from "./Election3.module.css";
const Election3 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[2].title}</h1>  
        <address>{props.articles[2].author}</address>
        <time dateTime={props.articles[2].timeStamp}>{props.articles[2].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[2].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[2].text }}/>
	</article>
  );
};

Election3.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election3;