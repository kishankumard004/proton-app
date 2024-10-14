import { useQuery } from "@tanstack/react-query";
import ProductsResponse from "../models/ProductResponse";
import React from "react";
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
        {data?.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
