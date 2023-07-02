import {
  Container,
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import Addpost from "./Addpost";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        if (res.data.length > 0) {
          setPosts([...res.data]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const deletePost = (id) => {
    setLoading(true);
    axios
      .delete("http://localhost:3000/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    setPosts(posts.filter((post) => post._id !== id));
  };

  const postsList = () => {
    return posts.map((post) => {
      return <Post key={post._id} post={post} removeTask={deletePost} />;
    });
  };

  return (
    <Container fixed sx={{ my: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={8}>
          <Typography component="h2" variant="h4">
            Posts
          </Typography>
          {postsList()}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Addpost loading={loading} setLoading={setLoading} />
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Home;
