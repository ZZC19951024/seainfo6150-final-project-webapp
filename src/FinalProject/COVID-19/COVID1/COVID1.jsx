import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID1.module.css";
const COVID1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[4].title}</h1>  
        <address>{props.articles[4].author}</address>
        <time dateTime={props.articles[4].timeStamp}>{props.articles[4].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[4].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[4].text }}/>
	</article>
  );
};

COVID1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID1;
