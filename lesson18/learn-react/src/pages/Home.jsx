import React from 'react';
import './../components/Post/Post.css'

class Home extends React.Component {
    state = {
        posts: []
    };

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({ posts });
        })
    };


    render = () => {
        return (
            <div>
              {this.state.posts.map(post => (
                <article className="Post">
                  <h2 className="Post__title">{post.title}</h2>
                  <p className="Post__description">{post.body}</p>
                </article>
              ))}
            </div>
        );
    };
}

export default Home
