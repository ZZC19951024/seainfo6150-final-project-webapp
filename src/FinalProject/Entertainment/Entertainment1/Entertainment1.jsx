import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment1.module.css";
const Entertainment1 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[16].title}</h1>  
        <address>{props.articles[16].author}</address>
        <time dateTime={props.articles[16].timeStamp}>{props.articles[16].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[16].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[16].text }}/>
	</article>
  );
};

Entertainment1.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Entertainment1;
