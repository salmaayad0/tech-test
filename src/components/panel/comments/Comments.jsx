import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Comments = () => {
  return (
    <section>
      <ul className="nav nav-tabs justify-content-center bg-light">
        <li className="nav-item ">
          <Link 
           to={"/panel/comments/control"} 
           className="nav-link"
           style={{fontSize: '1.25rem'}}
          >
            add new comment
          </Link>
        </li>
        <li className="nav-item">
          <Link 
           to={"/panel/comments/all"} 
           className="nav-link" 
           style={{fontSize: '1.25rem'}}
          >
            view all comments
          </Link>
        </li>
      </ul>
      <div className='container w-100 my-4 d-flex justify-content-center'>
      <Outlet />
      </div>
    </section>
  )
}

export default Comments;