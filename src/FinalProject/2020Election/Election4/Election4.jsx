import React from "react";
import PropTypes from "prop-types";
import styles from "./Election4.module.css";
const Election4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[3].title}</h1>  
        <address>{props.articles[3].author}</address>
        <time dateTime={props.articles[3].timeStamp}>{props.articles[3].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[3].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[3].text }}/>
	</article>
  );
};

Election4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election4;