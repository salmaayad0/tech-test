import React from 'react'
import { useSelector } from 'react-redux'
import UpdateCommentForm from './UpdateCommentForm';

const UpdateComment = () => {
  const { loading, error, comment } = useSelector(state => state.commentsSlice );

  return (
    <div style={{ width: "43.75rem" }}>
        <h4 className='text-center'>Update Comment no. {comment.id}</h4>
        {error && !loading && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>)}

      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    ) : ( <UpdateCommentForm comment={comment} />  )}
    </div>
  )
}

export default UpdateComment