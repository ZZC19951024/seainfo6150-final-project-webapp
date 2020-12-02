import React from "react";
import PropTypes from "prop-types";
import styles from "./Election1.module.css";
const Election1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[0].title}</h1>  
        <address>{props.articles[0].author}</address>
        <time dateTime={props.articles[0].timeStamp}>{props.articles[0].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[0].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[0].text }}/>
	</article>
  );
};

Election1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election1;