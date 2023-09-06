import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UpdateForm from './UpdateForm';
import { useParams } from 'react-router-dom';
import { onePost } from '../../../redux/slices/posts';

const UpdatePost = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => { dispatch(onePost(postId)) },[])

  const { loading, error, post } = useSelector(state => state.postsSlice )

  return (
    <div style={{ width: "43.75rem" }}>
        <h4 className='text-center'>Update Post no. {post.id}</h4>
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
    ) : ( 
    <UpdateForm post={post}  error={error} loading={loading} />
     )}
    </div>
  )
}

export default UpdatePost