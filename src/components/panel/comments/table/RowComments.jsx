import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteComment, oneComment } from '../../../../redux/slices/comments';

const RowComments = (props) => {
    const { id, postId, name, email, body } = props.comment;

    const dispatch = useDispatch();

    const handleUpdate = () =>{
        dispatch(oneComment(id))
      }
    
      const handleDelete = () => {
        dispatch(deleteComment(id));
      }
    
  return (
    <tr>
        <td>{postId}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{body}</td>
        <td>
        <Link 
            to={`/panel/comments/update/${id}`}
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

export default RowComments