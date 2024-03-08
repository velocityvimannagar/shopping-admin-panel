import { useEffect } from "react";
import "./orders.css";
import {
  Button,
  Chip,
  Rating,
  Switch,
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
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/productsSlice";
export function OrdersList() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.productsStore.products);
  const dispatch = useDispatch();

  const statusColorMapping = {
    "In Stock": "success",
    "Low Stock": "warning",
    "No Stock": "error",
  };

  useEffect(() => {
    // API to fetch products
    dispatch(
      storeProducts([
        {
          id: 1,
          name: "Ruban LED 2021",
          image: "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
          createdAt: "17 Jun 2023",
          status: "In Stock",
          rating: 4,
          price: "$100.0",
          featured: true,
          quantity: 2
        },
        {
          id: 2,
          name: "Ruban LED 2024",
          image: "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
          createdAt: "17 Jun 2023",
          status: "Low Stock",
          rating: 2,
          price: "$100.0",
          featured: false,
          quantity: 3
        },
        {
          id: 3,
          name: "Ruban LED 2027",
          image: "https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.webp",
          createdAt: "17 Jun 2023",
          status: "No Stock",
          rating: 2,
          price: "$100.0",
          featured: false,
        },
      ])
    );
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Featured</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.image}
                    className="product-image"
                    alt="Products"
                  ></img>
                  {row.name}
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColorMapping[row.status]}
                  />
                </TableCell>
                <TableCell>
                  <Rating value={row.rating} />
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Switch checked={row.featured} />
                </TableCell>
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
