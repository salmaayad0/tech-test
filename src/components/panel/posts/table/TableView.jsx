import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from './TableRow'

const TableView = () => {
  const { loading, error, posts } = useSelector(state => state.postsSlice)

  return (
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">User Id</th>
        <th scope="col-2">Title</th>
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
            posts.map(post => <TableRow key={post.id} post={post} /> )
          }
        </tbody>
      )}
  </table>
  )
}

export default TableView