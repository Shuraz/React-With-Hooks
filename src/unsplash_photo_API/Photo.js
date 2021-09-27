import React from "react";
import moduleCSS from './Unsplash.module.css'
const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className={moduleCSS.photo}>
      <img src={regular} alt={alt_description}/>
      <div className={moduleCSS.photoinfo}>
        <h4>{likes}</h4>
        <p>{name}</p>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className={moduleCSS.userimage} />
        </a>
      </div>
    </article>
  );
};

export default Photo;
