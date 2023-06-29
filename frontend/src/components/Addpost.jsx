import {
  TextField,
  Button,
  Paper,
  Stack,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Addpost = ({ loading, setLoading }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      content: content,
    };

    setLoading(true);
    axios
      .post("http://localhost:3000/add", post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    setTitle("");
    setContent("");

    window.location = "/";
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={5}
      sx={{
        p: 2,
        bgcolor: "#F5F5F5",
        position: "sticky",
        top: "100px",
        zIndex: 10,
        boxShadow: 3,
        m: "16px",
      }}
    >
      <Stack spacing={2}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          required
          size="small"
          placeholder="Title"
          autoComplete="off"
        ></TextField>
        <TextField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          required
          size="small"
          multiline
          maxRows={20}
          minRows={8}
          placeholder="Content"
          autoComplete="off"
        ></TextField>
        <Button color="success" variant="contained" type="submit" size="large">
          Add Post
        </Button>
      </Stack>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
};

Addpost.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Addpost;
