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
import { useEffect } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeMainCategories } from "../../../redux/categoriesSlice";

export function MainCategories() {
  const navigate = useNavigate();
  const categories = useSelector(
    (state) => state.categoriesStore.mainCategories
  );

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          navigate("add");
        }}
      >
        Add Category
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Categories</TableCell>
              <TableCell>Description</TableCell>
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
                  {row.category}
                </TableCell>
                <TableCell>{row.description}</TableCell>
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
