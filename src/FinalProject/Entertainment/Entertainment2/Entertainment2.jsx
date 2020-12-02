import React from "react";
import PropTypes from "prop-types";
import styles from "./Entertainment2.module.css";
const Entertainment2 = (props) => {

  return (
	<article className={styles.article}>
	  <header>
        <h1>{props.articles[17].title}</h1>  
        <address>{props.articles[17].author}</address>
        <time dateTime={props.articles[17].timeStamp}>{props.articles[17].pubDate}</time>
	  </header>
	  <img className={styles.pic} src={props.articles[17].image} alt="pic"/>
	  <div dangerouslySetInnerHTML={{ __html: props.articles[17].text }}/>
	</article>
  );
};

Entertainment2.propTypes = {
	articles: PropTypes.array.isRequired
}
export default Entertainment2;
