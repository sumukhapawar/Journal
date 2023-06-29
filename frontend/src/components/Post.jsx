import { Paper, Typography, Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
      <ButtonGroup variant="text" aria-label="text button group">
        <Button color="success" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button
          onClick={() => removeTask(id)}
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  editPost: PropTypes.func.isRequired,
};

export default Post;
