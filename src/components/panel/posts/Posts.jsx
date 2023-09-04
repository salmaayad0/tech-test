import React from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <section>
      <ul className="nav nav-tabs justify-content-center bg-light">
        <li className="nav-item ">
          <Link 
           to={"/panel/posts/control"} 
           className="nav-link"
           style={{fontSize: '1.25rem'}}
          >
            add new post
          </Link>
        </li>
        <li className="nav-item">
          <Link 
           to={"/panel/posts/all"} 
           className="nav-link" 
           style={{fontSize: '1.25rem'}}
          >
            view all and update post
          </Link>
        </li>
      </ul>

      <div className='container w-100 my-4 d-flex justify-content-center'>
      <Outlet />
      </div>
    </section>
  );
};

export default Posts;
