import React from 'react'
import { Card } from 'react-bootstrap'
import CommentCard from './CommentCard'
import { useSelector } from 'react-redux';

const PostCard = (props) => {
    const { id, userId, title, body } = props.post;

    const { loading, error, comments } = useSelector( state => state.commentsSlice );

    const filterCommments = comments.filter(comment => comment.postId === id);

  return (
    <div className='col-12 col-md-6 col-lg-4 my-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title 
          className="text-center text-primary"
          style={{ height: "2rem", overflow: "hidden", fontSize: "0.875rem" }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle 
          className="mb-2 text-muted" 
          style={{fontSize: "0.75rem"}}
        >
          user id: {userId}
        </Card.Subtitle>
        <Card.Text
          style={{ height: "4.688rem", overflow: "hidden" }}
        >
         {body}
        </Card.Text>

        <Card.Subtitle 
          className="mb-2 text-muted" 
          style={{fontSize: "0.75rem"}}
        >
          Comments
        </Card.Subtitle>

        {error && !loading && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
       {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : ( 
             filterCommments.map(comment => <CommentCard key={comment.id} comment={comment} /> ) 
      )}
      </Card.Body>
    </Card>
    </div>
  )
}

export default PostCard