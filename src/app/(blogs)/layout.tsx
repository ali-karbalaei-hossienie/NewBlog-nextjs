import Header from "@/components/Header";
import { Box } from "@mui/material";

export const metadata = {
  title: "Blog",
  description: "Blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
      }}
    >
      <Header />
      <div>{children}</div>
    </Box>
  );
}
