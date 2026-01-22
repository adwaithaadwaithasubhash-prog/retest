import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        setBlogs(blogs.filter((blog) => blog._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ display: "flex", gap: 3, p: 3 }}>
      {blogs.map((blog) => (
        <Card key={blog._id} sx={{ width: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={blog.img_url}
            alt={blog.title}
          />
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
              {blog.category}
            </Typography>

            <Typography variant="h6">
              {blog.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteBlog(blog._id)}
              >
                DELETE
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/add", { state: blog })}
              >
                UPDATE
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
