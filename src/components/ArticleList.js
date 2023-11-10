import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {
  console.log(posts);

  // Check if posts is an array before mapping over it
  //if (!Array.isArray()) {
  // console.error('Error: "posts" is not an array');
  // return null; // or handle the error in another way
  //}
  return (
    <div className="ArticleList">
      {posts.map((blogData) => (
       < Article key={blogData.id} 
          title={blogData.title}
          date={blogData.date}
          preview={blogData.preview}
          minutes={blogData.minutes}
          />
      ))}
    </div>
  );
}


export default ArticleList