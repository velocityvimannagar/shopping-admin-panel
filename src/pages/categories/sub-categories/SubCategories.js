import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SubCategories.css";

export function SubCategories() {
  const navigate = useNavigate();
  const categories = useSelector(
    (state) => state.categoriesStore.subCategories
  );
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          navigate("add");
        }}
      >
        Add Sub Category
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sub Category</TableCell>
              <TableCell>Main Category</TableCell>
              <TableCell>Total Items</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.image} className="sub-category-image"></img>
                  {row.subCategory}
                </TableCell>
                <TableCell>{row.mainCategory}</TableCell>
                <TableCell>{row.totalItems}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>
                  <EditOutlinedIcon></EditOutlinedIcon>
                  <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
