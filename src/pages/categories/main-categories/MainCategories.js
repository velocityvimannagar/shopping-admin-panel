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
import { useEffect, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeMainCategories } from "../../../redux/categoriesSlice";
import moment from "moment";
import { ConfirmationDialog } from "../../components/ConfirmationDialog";
import axios from "axios";
import { API_BASE_URL } from "../../../Constants";

export function MainCategories({fetchMainCategories}) {
  const navigate = useNavigate();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [currentDeletingId, setCurrentDeletingId] = useState();

  const categories = useSelector(
    (state) => state.categoriesStore.mainCategories
  );

  const deleteCategory = (id) => {
    setCurrentDeletingId(id)
    setIsConfirmationOpen(true)
  }
  const onConfirmDelete = (bool) => {
    setIsConfirmationOpen(false);
    if (bool) {
      axios.delete(`${API_BASE_URL}/categories/${currentDeletingId}`)
        .then(function (response) {
          alert("Category deleted")
          fetchMainCategories()
        })
        .catch(function (error) {
          // handle error
          console.log("Error =>", error);
        })
    }
  }

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
      <br></br> <br></br>
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
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{moment(row.createdAt).format('LL')}</TableCell>
                <TableCell>
                  <EditOutlinedIcon></EditOutlinedIcon>
                  <DeleteOutlineOutlinedIcon onClick={() => {
                    deleteCategory(row.id)
                  }}></DeleteOutlineOutlinedIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmationDialog onClose={(bool) => { onConfirmDelete(bool) }} open={isConfirmationOpen}></ConfirmationDialog>
    </div>
  );
}
