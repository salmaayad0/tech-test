import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../../redux/slices/comments';
import Swal from 'sweetalert2';

const RowComments = (props) => {
    const { id, postId, name, email, body } = props.comment;

    const dispatch = useDispatch();

      const handleDelete = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteComment(id));
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
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