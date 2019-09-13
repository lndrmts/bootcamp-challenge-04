import React from "react";

function PostItem({ author, date, content }) {
  return (
    <article className="post">
      <img src={author.avatar} className="post--avatar" />
      <p>
        <span className="post-author--name">{author.name}</span> <br />
        <span className="post--date">{date}</span>
      </p>
      <p className="post--content">{content}</p>
    </article>
  );
}
export default PostItem;
