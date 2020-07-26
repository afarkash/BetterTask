import React from 'react';

const Comments = ({props}) => {

  props.comments.data.map((comment) => {
    console.log(comment.body)})
  //<li>{comment.body}</li>
  //console.log(props.comments.data)
  //props.comments.map((comment) => {
  //  console.log(comment)})

var comments = props.comments.data.map((comment) => {
  return(
  <li>
    {comment.body}
    </li>
  )
})


	return(
    <ul>{comments}</ul>
    
      )
    }

export default Comments