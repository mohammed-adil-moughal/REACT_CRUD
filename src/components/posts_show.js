import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from '../actions';
import { Link } from 'react-router-dom';
class PostsShow extends Component {

    componentDidMount()
    {   
        const {id}= this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick()
    {
        const {id}= this.props.match.params;

        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        });

    }
    render() {
        const post =this.props.post;
        
        if(!post){
            return<div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button
                className="btn  pull-right"
                onClick={this.onDeleteClick.bind(this)}>
                Delete
                </button>
           <h1>{post.title}</h1>
           <h1>{post.categories}</h1>
           <h1>{post.content}</h1>
           
     </div>
        )
    }
}

function mapStateToProps({ posts },ownProps){
return { post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchPost,deletePost })(PostsShow);