import { Paper, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

const Post = ({ title, content, removeTask, id }) => {
  return (
    <Paper
      component="div"
      elevation={5}
      sx={{ bgcolor: "#f5f5f5", p: 2, my: 4 }}
    >
      <Typography component="h3" variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography gutterBottom>{content}</Typography>
      <Button onClick={() => removeTask(id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Paper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default Post;
