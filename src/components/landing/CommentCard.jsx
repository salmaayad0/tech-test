import React from 'react'
import { Card } from 'react-bootstrap'

const CommentCard = (props) => {
    const { email, body } = props.comment;
  return (
    <Card className='my-2'>
      <Card.Body>
      <Card.Subtitle 
       className="mb-2 text-primary" 
       style={{ height: "1.875rem", overflow: "hidden", fontSize: "0.875rem" }}
      >
        {email}
      </Card.Subtitle>
    <Card.Text
      style={{ height: "1.563rem", overflow: "hidden" }} 
    >
      {body}
    </Card.Text>
      </Card.Body>
  </Card>
  )
}

export default CommentCard