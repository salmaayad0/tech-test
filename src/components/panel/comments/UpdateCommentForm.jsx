import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../redux/slices/comments";

const UpdateCommentForm = (props) => {
  const comment = props.comment;
  const { id } =props.comment;
  const error = props.error;
  const loading = props.loading;

  const [postId, setPostId] = useState(comment.postId);
  const [name, setName] = useState(comment.name);
  const [body, setBody] = useState(comment.body);
  const [email, setEmail] = useState(comment.email);

  const dispatch = useDispatch();
    

      const clearForm =_=>{
        setEmail('');
        setName('');
        setPostId(0);
        setBody('');
      }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateComment({id, obj: {postId, name, email, body} }));
    clearForm();
  };
  return (
    <form className="mx-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="htmlForm-group">
          <label htmlFor="postId">Update Post Id</label>
          <input
            type="number"
            className="form-control"
            id="postId"
            aria-describedby="postId"
            placeholder="Enter post id"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Update name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Update your comment</label>
          <input
            type="text"
            className="form-control"
            id="body"
            aria-describedby="body"
            placeholder="Enter post content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Update your E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

      <button type="submit" className="btn btn-primary">
        Update Comment
      </button>
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
      {error && <span className="error text-danger">{error}</span>}
    </form>
  );
};

export default UpdateCommentForm;
