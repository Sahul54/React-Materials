import React, { useContext } from 'react'
import Spinner from './Spinner';

const Blog = () => {

  // consume
  const {posts,loading} = useContext(AppContext); 

  return (
    <div>
       loading ? 
       (<Spinner/>) : 
       (
        posts.length === 0 ? (
          <div>No post Found</div>
        ) : 
        (posts.map( (post) => (
          <div>
             <p>{posts.title}</p>
             <p>
              By <span>{ posts.author }</span> on <span>{posts.category}</span>
             </p>
             <p>Posted on {posts.date}</p>
             <p>{posts.content}</p>
             <div>
              {posts.tags.map( (tag) => {
                return <span>{`#${tag}`}</span>
              })}
             </div>
          <div/>
        )))
       )
    </div>
  )
}

export default Blog;