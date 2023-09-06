import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateCommentForm from './UpdateCommentForm';
import { oneComment } from '../../../redux/slices/comments';
import { useParams } from 'react-router-dom';

const UpdateComment = () => {
  const { commentId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => { dispatch(oneComment(commentId)) },[])

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
    ) : ( <UpdateCommentForm comment={comment} error={error} loading={loading} />  )}
    </div>
  )
}

export default UpdateComment