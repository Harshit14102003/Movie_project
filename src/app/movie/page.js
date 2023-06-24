import Link from "next/link";
import React from "react";
import MovieCard from "@/app/components/movieCard";
import styles from "@/app/styles/common.module.css" 
const movie = async() => {
  //wait two second so that i see loading button
await new Promise(resolve => {
  setTimeout(resolve,2000)
});
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee737a906emshebcfa1f6d23de24p1ac9bdjsnb8f0fb737276',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
const res=await fetch(url,options);
const data=await res.json();
const main_data=data.titles;
    return ( 
        <>
        <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series and Movies </h1>
            <div className={styles.card_section}>
           {
            main_data.map((currEle=>{
                return <MovieCard key={currEle.id}{...currEle}/>
            })) 
           }
           </div>
           </div>
           </section>
        </>
     );
}
 
export default movie;