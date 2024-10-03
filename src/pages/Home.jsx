import { Box, Button } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <Header />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/add-product");
        }}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default Home;