import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../redux/slices/posts";
import { useParams } from "react-router-dom";

const UpdateForm = (props) => {
  const { postId } = useParams();
  const post = props.post;

  const [userId, setUserId] = useState(post.userId);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.postsSlice);

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const clearForm = () => {
    setUserId(0);
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({id: postId, obj: {userId, title, body} }));
    clearForm();
  };
  return (
    <form className="mx-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="htmlForm-group">
        <label htmlFor="userId">Update User Id</label>
        <input
          type="number"
          className="form-control"
          id="userId"
          aria-describedby="userId"
          placeholder="Enter user id"
          value={userId}
          onChange={(e) => handleUserId(e)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Update Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="title"
          placeholder="Enter post hook"
          value={title}
          onChange={(e) => handleTitle(e)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Update Body</label>
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

      <button type="submit" className="btn btn-primary">
        Update
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

export default UpdateForm;
