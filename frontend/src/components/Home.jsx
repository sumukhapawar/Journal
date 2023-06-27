import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import Addpost from "./Addpost";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        if (res.data.length > 0) {
          setPosts([...res.data]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios.delete('http://localhost:3000/' + id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    setPosts(posts.filter(post => post._id !== id))
  };

  return (
    <Container fixed sx={{ my: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={8}>
          <Typography component="h2" variant="h4">
            Posts
          </Typography>
          {posts.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              title={post.title}
              content={post.content}
              removeTask={deletePost}
            />
          ))}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Addpost />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
