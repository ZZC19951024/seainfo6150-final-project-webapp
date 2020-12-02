import React from "react";
import PropTypes from "prop-types";
import styles from "./Election2.module.css";
const Election2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[1].title}</h1>  
        <address>{props.articles[1].author}</address>
        <time dateTime={props.articles[1].timeStamp}>{props.articles[1].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[1].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[1].text }}/>
	</article>
  );
};

Election2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Election2;