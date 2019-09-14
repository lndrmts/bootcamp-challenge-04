import React from "react";

const PostComments = ({ author, content }) => {
  return (
    <article className="post--comment">
      <img src="https://i.pravatar.cc/150?img=32" />
      <p>
        <strong>{author.name}</strong> {content}
      </p>
    </article>
  );
};

export default PostComments;
