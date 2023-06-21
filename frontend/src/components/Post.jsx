import { Paper, Typography } from "@mui/material";

const Post = ({ title, content }) => {
  return (
    <Paper
      component="div"
      elevation={5}
      sx={{ bgcolor: "#f5f5f5", p: 2, my: 4 }}
    >
      <Typography component="h3" variant="h5">
        {title}
      </Typography>
      <Typography>{content}</Typography>
    </Paper>
  );
};

export default Post;
