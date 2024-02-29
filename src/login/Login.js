import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const onLogin = () => {
    // Call API for login
    navigate("/pages");
  };
  return (
    <div className="login-container">
      <Card sx={{ width: 400, padding: 3 }}>
        <CardHeader title="Sign In"></CardHeader>
        <CardContent>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" onClick={onLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
