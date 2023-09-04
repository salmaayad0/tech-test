import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../redux/slices/posts";

const AddPost = () => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector(state => state.postsSlice)

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const clearForm =_=>{
    setUserId(0);
    setTitle('');
    setBody('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({userId, title, body}));
    clearForm();
  };

  return (
    <div style={{ width: "43.75rem" }}>
        <h4 className="text-center">Add New Post</h4>
      <form className="mx-5" onSubmit={e => handleSubmit(e)}>
        <div className="htmlForm-group">
          <label htmlFor="userId">Add User Id</label>
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
          <label htmlFor="title">Add Title</label>
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
          <label htmlFor="body">Add Body</label>
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

        <button type="submit" 
         className="btn btn-primary"
         >
          Add post
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
  );
};

export default AddPost;
