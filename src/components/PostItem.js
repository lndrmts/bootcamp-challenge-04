import React from "react";
import PostComments from "./PostComments";

function PostItem({ comments, author, date, content }) {
  return (
    <article className="post">
      <img src={author.avatar} className="post--avatar" />
      <p className="post--header">
        <span className="post-author--name">{author.name}</span> <br />
        <span className="post--date">{date}</span>
      </p>
      <p className="post--content">{content}</p>
      <br />
      <div className="post--comments">
        {comments.map(comment => (
          <PostComments key={comment.id} {...comment} />
        ))}
      </div>
    </article>
  );
}
export default PostItem;
