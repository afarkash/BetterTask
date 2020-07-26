import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Comments from "./Comments"

const UserView = () => (
  <Query
    query={gql`
{
  user(id: 1){
    posts{
      data{
        title
        comments{
          data{
            body
          }
        }
      }
    }
  }
}

    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error){
        console.log(error)
        return <p>Error :(</p>;
      }
      
      //data.user.posts.data.map((currentTL) => (
       // console.log(currentTL.comments.data)))
        //data.user.posts.data.map((currentTL) => (
         // console.log(currentTL.title)))
        return data.user.posts.data.map((currentTL) => (
          <div>
        <p>title: {currentTL.title}</p>
        <Comments props={currentTL} />
        </div>
        ));
    }}
  </Query>
);
export default UserView;