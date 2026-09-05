import Header from "@/components/Header";
import { Container, Grid } from "@mui/material";
import CategoryList from "./components/CategoryList";

export const metadata = {
  title: "Blog",
  description: "Blogs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg">
      <h1>لیست بلاگ ها</h1>
      <Grid sx={{ alignItems: "center" }} container spacing={4}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <CategoryList />
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>{children}</Grid>
      </Grid>
    </Container>
  );
}
