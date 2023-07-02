import { Paper, Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";

const Post = ({ post, removeTask }) => {
  return (
    <Paper
      component="div"
      elevation={5}
      sx={{ bgcolor: "#f5f5f5", p: 2, my: 4 }}
    >
      <Typography component="h3" variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <Typography gutterBottom>{post.content}</Typography>
      <ButtonGroup variant="text" aria-label="text button group">
        <Link to={"/edit/" + post._id}>
          <Button color="success" startIcon={<EditIcon />}>
            Edit
          </Button>
        </Link>
        <Button
          onClick={() => removeTask(post._id)}
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  removeTask: PropTypes.func.isRequired,
};

export default Post;
