import React from "react";
import PostCard from "../components/landing/PostCard";
import { useSelector } from "react-redux";

const Landing = () => {
  const { loading, error, posts } = useSelector((state) => state.postsSlice);

  return (
    <>
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
        <section className="container p-1 my-5">
          <div className="row">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Landing;
