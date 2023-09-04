import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deletePost, onePost } from '../../../../redux/slices/posts';


const TableRow = (props) => {
  const { id, userId, title, body } = props.post;

  const dispatch = useDispatch();
  
  const handleUpdate = () =>{
    dispatch(onePost(id))
  }

  const handleDelete = () => {
    dispatch(deletePost(id));
  }

  
  return (
    <tr>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
        <Link 
            to={`/panel/posts/update/${id}`}
            className="btn btn-info btn-sm"
            onClick={handleUpdate}
        >
              Update
        </Link>
        </td>
        <td>
        <button 
            className="btn btn-sm"
            onClick={handleDelete}
        >
              <BsFillTrashFill color="red" size={30} />
        </button>
        </td>
    </tr>
  )
}

export default TableRow