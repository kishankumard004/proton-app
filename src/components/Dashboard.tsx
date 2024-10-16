import { useQuery } from "@tanstack/react-query";
import ProductsResponse from "../models/ProductResponse";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { CardActions, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer ....",
  },
};
const Dashboard = () => {
  const fetchProducts = async (): Promise<ProductsResponse> => {
    const res = await fetch("https://dummyjson.com/products", options);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  };
  const { data, isLoading, error } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Hi, Welcome to Blogs</h1>
      <div className="blogs-post">
        <Box sx={{ maxWidth: 1000 }}>
          {data?.products.map((product) => (
            <Card sx={{ maxWidth: 345 }} key={product.id}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label=""
                    alt="Default Icon"
                    src={product.thumbnail}
                  ></Avatar>
                }
                action={<IconButton aria-label=""></IconButton>}
                title={product.title}
                subheader={product.category}
              />
              <CardContent>{product.description}</CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
