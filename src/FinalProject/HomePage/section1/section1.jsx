import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./section1.module.css";
import {Link} from "react-router-dom"
const Section1 = (props) => {
  const [count, setCount]=useState(0)
  let left;
  let right
  if (props.articles.length){
	  left = (
      <ul className={styles.left}>
        {props.articles.slice(0,7).map((article) => (
          <li key={article.slug}>
		    <Link to={article.slug}>{article.title}</Link>
		  </li>
        ))}
      </ul>
    );
  }
  console.log(count);
  function next(){
	if (count < props.articles.length-1){
		setCount(count+1);
	}
  }
  
  function previous(){
	if (count > 0){
		setCount(count-1);
	}
  }
  return (
    <div className={styles.wrapper}>
		{left}
		<div className={styles.right}>
		  <button className={styles.button} onClick={previous}> 《 </button>
		  <div className={styles.news}>
			<img className={styles.newsPic} src={props.articles[count].image} alt="newsPic"/>
			<Link to={props.articles[count].slug} dangerouslySetInnerHTML={{ __html: props.articles[count].shortText }} />
		  </div>
		  <button className={styles.button} onClick={next}> 》 </button>
		</div>
	</div>
  );
};

Section1.propTypes = {
	 articles: PropTypes.array.isRequired
}
export default Section1;