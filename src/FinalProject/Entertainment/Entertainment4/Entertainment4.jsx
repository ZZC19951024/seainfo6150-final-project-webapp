import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment4.module.css";
const Entertainment4 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[19].title}</h1>  
        <address>{props.articles[19].author}</address>
        <time dateTime={props.articles[19].timeStamp}>{props.articles[19].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[19].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[19].text }}/>
	</article>
  );
};

Entertainment4.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Entertainment4;
