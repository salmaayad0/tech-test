import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../redux/slices/comments';

const AddComment = () => {
    const [postId, setPostId] = useState(0);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.commentsSlice);

    const handlePostId = (e) => {
        setPostId(e.target.value);
      };
    
      const handleName = (e) => {
        setName(e.target.value);
      };
    
      const handleBody = (e) => {
        setBody(e.target.value);
      };

      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const clearForm =_=>{
        setEmail('');
        setName('');
        setPostId(0);
        setBody('');
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({ postId, name, body, email }));
        clearForm();
      };

  return (
    <div style={{ width: "43.75rem" }}>
        <h4 className='text-center'>Add New Comment</h4>
      <form className="mx-5" onSubmit={e => handleSubmit(e)}>
        <div className="htmlForm-group">
          <label htmlFor="postId">Add Post Id</label>
          <input
            type="number"
            className="form-control"
            id="postId"
            aria-describedby="postId"
            placeholder="Enter post id"
            value={postId}
            onChange={(e) => handlePostId(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Add name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => handleName(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Add your comment</label>
          <input
            type="text"
            className="form-control"
            id="body"
            aria-describedby="body"
            placeholder="Enter post content"
            value={body}
            onChange={(e) => handleBody(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Add your comment</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmail(e)}
            required
          />
        </div>

        <button type="submit" 
         className="btn btn-primary"
         >
          Add comment
        </button>
        {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              )}
        { error && <span className="error text-danger">{error}</span>}
      </form>
    </div>
  )
}

export default AddComment