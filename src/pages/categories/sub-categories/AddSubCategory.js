import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FileDragDrop } from "../../components/FileDragDrop";

export function AddSubCategory() {
  const navigate = useNavigate();
  const categories = useSelector(
    (state) => state.categoriesStore.mainCategories
  );

  const onAdd = () => {
    // API Call
    navigate(-1);
  };
  return (
    <>
      <div className="row">
        <div className="col-8 d-flex flex-row">
          <Card sx={{ padding: 3, width: "100%" }}>
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
                rows={5}
                label="Description"
                variant="outlined"
                margin="normal"
              />
            </CardContent>
          </Card>
        </div>
        <div className="col-4  d-flex flex-row">
          <Card sx={{ padding: 3, width: "100%"  }}>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Parent Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  {categories.map((category) => {
                    return (
                      <MenuItem value={category.id}>
                        {category.category}
                      </MenuItem>
                    );
                  })}
                </Select>
                <br></br>
                <div>Image</div>
                <FileDragDrop></FileDragDrop>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
      <br></br>
      <Button variant="contained" onClick={onAdd}>
        Create Sub Category
      </Button>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </Button>
    </>
  );
}
