import React from 'react'
import { useSelector } from 'react-redux'
import RowComments from './RowComments'

const TableComments = () => {
    const { loading, error, comments } = useSelector(state => state.commentsSlice);

  return (
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Post Id</th>
        <th scope="col">Name</th>
        <th scope="col">E-mail</th>
        <th scope="col-2">Body</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
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
        <tbody>
          {
            comments.map(comment => <RowComments key={comment.id} comment={comment} /> )
          }
        </tbody>
      )}
  </table>
  )
}

export default TableComments