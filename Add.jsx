import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    category: "",
    img_url: "",
  });

  // UPDATE mode
  useEffect(() => {
    if (location.state) {
      setBlog(location.state);
    }
  }, []);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.state) {
      // UPDATE
      axios
        .put(`http://localhost:3001/update/${blog._id}`, blog)
        .then(() => {
          alert("Updated successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      // ADD
      axios
        .post("http://localhost:3001/add", blog)
        .then(() => {
          alert("Added successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
      <TextField
        name="title"
        label="Title"
        value={blog.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="category"
        label="Category"
        value={blog.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="img_url"
        label="Image URL"
        value={blog.img_url}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained">
        SUBMIT
      </Button>
    </Box>
  );
};

export default Add;
