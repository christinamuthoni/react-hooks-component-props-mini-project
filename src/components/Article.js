import React from 'react'

function Article({ title, date, preview, minutes }) {
  console.log(title, date, preview, minutes);
  return (
    <div className="Article" >
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{minutes}</p>  
    </div>
  );
}

export default Article