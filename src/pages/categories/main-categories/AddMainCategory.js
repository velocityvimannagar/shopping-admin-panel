import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../Constants";

export function AddMainCategory({ fetchMainCategories }) {

  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const handleInputChange = (e) => {
    category[e.target.name] = e.target.value;
    setCategory({ ...category })
  }

  const navigate = useNavigate();
  const onAdd = () => {
    // API Call
    axios.post(`${API_BASE_URL}/categories`, {
      ...category,
      id: Math.floor(Math.random() * 1000) + '',
      createdAt: new Date().toISOString()
    })
      .then(response => {
        fetchMainCategories()
        navigate(-1);
        console.log('Response:', response.data);
      })
      .catch(error => {
        alert('Error adding category')
        console.error('Error:', error);
      });

  };
  return (
    <Card sx={{ padding: 3 }}>
      <CardContent>
        <TextField
          value={category.name}
          name='name'
          fullWidth
          label="Category Name"
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          multiline
          value={category.description}
          name='description'
          label="Description"
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}

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
