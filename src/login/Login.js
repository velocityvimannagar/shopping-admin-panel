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

export function Login() {
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
            label="Password"
            variant="outlined"
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}
