import React from "react";
import style from "./Panel.module.css";
import Select from "./Select";
import { useSelector } from "react-redux";

const Option = () => {
  const { posts } = useSelector(state => state.postsSlice);
  const { comments } = useSelector(state => state.commentsSlice);

  const shownData = [{
    name: 'Posts',
    num: posts.length,
    url: '/panel/posts'
  },{
    name: 'Comments',
    num: comments.length,
    url: '/panel/comments'
  }]

  return (
    <section className="m-3">
      <div className={`row d-flex justify-content-around ` + style.contain}>
        <Select data={shownData[0]} />
        <Select data={shownData[1]} />
      </div>
    </section>
  );
};

export default Option;
