import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Monica Adriana",
          avatar: "https://i.pravatar.cc/150?img=16"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}
export default PostList;
