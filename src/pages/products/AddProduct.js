import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { storeSubCategories } from "../../redux/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { FileDragDrop } from "../components/FileDragDrop";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.categoriesStore.subCategories
  );
  useEffect(() => {
    // Fetch data from API
    dispatch(
      storeSubCategories([
        {
          id: "1",
          image:
            "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
          subCategory: "Transform LED",
          mainCategory: "Transform LED",
          totalItems: "TRF LED",
          createdAt: "04 March 2024",
        },
      ])
    );
  }, []);
  const navigate = useNavigate();
  const onAdd = () => {
    // API Call
    navigate(-1);
  };
  return (
    <div className="row">
      <div className="col">
        <Card sx={{ padding: 3 }}>
          <CardContent>
            <TextField
              fullWidth
              label="Product Name"
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
            <div
              className="row"
              style={{
                margin: "5px 0",
                gap: 10,
              }}
            >
              <TextField
                className="col"
                id="outlined-select-currency"
                select
                label="Category"
                margin="normal"
              >
                {categories.map((category) => {
                  return (
                    <MenuItem value={category.id}>
                      {category.subCategory}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                className="col"
                label="Brand"
                variant="outlined"
                margin="normal"
              />
            </div>
            <div
              className="row"
              style={{
                margin: "5px 0",
                gap: 10,
              }}
            >
              <TextField
                className="col"
                id="outlined-select-currency"
                select
                label="Status"
                margin="normal"
              >
                {["Sale", "In Stock"].map((status) => {
                  return <MenuItem value={status}>{status}</MenuItem>;
                })}
              </TextField>
              <TextField
                className="col"
                label="Sizes"
                variant="outlined"
                margin="normal"
              />
            </div>
            <div
              className="row"
              style={{
                margin: "5px 0",
                gap: 10,
              }}
            >
              <TextField
                className="col"
                label="Colors"
                variant="outlined"
                margin="normal"
              />

              <TextField
                className="col"
                label="Tags"
                variant="outlined"
                margin="normal"
              />
            </div>
            <br></br>
            <div>Product Images</div>
            <FileDragDrop></FileDragDrop>
          </CardContent>
        </Card>
      </div>
      <div className="col">
        <Card sx={{ padding: 3 }}>
          <CardContent>
            <TextField
              fullWidth
              label="Product Code"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              label="Product SKU"
              variant="outlined"
              margin="normal"
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="men" control={<Radio />} label="Men" />
                <FormControlLabel
                  value="women"
                  control={<Radio />}
                  label="Women"
                />
                <FormControlLabel
                  value="kids"
                  control={<Radio />}
                  label="Kids"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="Quantity"
              variant="outlined"
              margin="normal"
            />
          </CardContent>
        </Card>
        <Card sx={{ padding: 3 }} className="mt-5">
          <CardContent>
            <TextField
              fullWidth
              label="Regular Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Sale Price"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <FormControlLabel control={<Switch />} label="Featured Product" />
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={onAdd}>
              Create Product
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
      </div>
    </div>
  );
}
