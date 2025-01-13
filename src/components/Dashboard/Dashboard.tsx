import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ProductsResponse from "../../models/ProductResponse";
import styles from "./dashboard.module.scss";
import { Box, Grid2 as Grid } from "@mui/material";
import { CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header";
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
      <Header />
      <h1>Hi, Welcome to Blogs</h1>
      <div className="blogs-post">
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          className={styles.layout}
        >
          <Grid container spacing={2} justifyContent={"center"}>
            {data?.products.map((product, index) => (
              <Grid
                display={"flex"}
                spacing={{ xs: 0.5, md: 2, sm: 0.5 }}
                size={{ xs: 12, sm: 6, md: 5, lg: 4 }}
                height={{ xs: "4rem", sm: "4rem", md: "12rem" }}
              >
                <Card className={styles.card} key={index}>
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
                    className={styles.header}
                  />
                  <CardContent className={styles.content}>
                    {product.description}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
