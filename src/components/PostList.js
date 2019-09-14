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
              name: "Aline",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content:
              "Sim, sempre estão contratando, então dedique-se aos estudos."
          },
          {
            id: 1,
            author: {
              name: "Pietro",
              avatar: "https://i.pravatar.cc/150?img=24"
            },
            content:
              "É isso mesmo, estão sempre contratando e por isso que estou estudando bastante, para conseguir minha vaga lá"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Lourenna Emanuele",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "As coisas estão ficando interessante por aqui, o que acham?",
        comments: [
          {
            id: 1,
            author: {
              name: "Leandro",
              avatar: "https://i.pravatar.cc/150?img=14"
            },
            content: "Sim, condordo com você estão super, demais demais."
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
