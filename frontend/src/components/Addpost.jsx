import { TextField, Button, Paper, Stack } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      content: content,
    };

    axios
      .post("http://localhost:3000/add", post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setTitle("");
    setContent("");

    window.location = "/";
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={5}
      sx={{ p: 2, bgcolor: "#F5F5F5" }}
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
    </Paper>
  );
};

export default Addpost;
