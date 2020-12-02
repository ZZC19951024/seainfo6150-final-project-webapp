import React from "react";
import PropTypes from "prop-types";
import styles from "./COVID2.module.css";
const COVID2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[5].title}</h1>  
        <address>{props.articles[5].author}</address>
        <time dateTime={props.articles[5].timeStamp}>{props.articles[5].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[5].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[5].text }}/>
	</article>
  );
};

COVID2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default COVID2;
