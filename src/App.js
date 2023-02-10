import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Component/Loading";
import UserList from "./Component/UserList";




export default function App() {
  const [post, setPost] = useState(null)
   
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
     .then((result)=> {
      setPost(result.data)
    })
  }, [])

  return (
    <div>
      {post ? <UserList post={post} /> : <Loading/>}
    </div>
  );
}
