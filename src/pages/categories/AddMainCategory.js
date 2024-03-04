import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AddMainCategory() {
  const navigate = useNavigate();
  const onAdd = () => {
    // API Call
    navigate(-1);
  };
  return (
    <Card sx={{ padding: 3 }}>
      <CardContent>
        <TextField
          fullWidth
          label="Category Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          label="Description"
          variant="outlined"
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onAdd}>
          Create Category
        </Button>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
