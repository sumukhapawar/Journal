import { TextField, Button, Paper, Stack, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title: title, content: content };

    axios
      .put("http://localhost:3000/edit/" + id, post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      window.location = "/";
  };

  return (
    <Container>
      <Paper
        component="form"
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
        onSubmit={handleSubmit}
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
          <Button
            color="success"
            variant="contained"
            type="submit"
            size="large"
          >
            Save
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default EditPost;
