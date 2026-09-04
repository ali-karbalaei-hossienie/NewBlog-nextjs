"use client";

import Header from "@/components/Header";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          textAlign: "center",
          py: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="text.primary"
          sx={{ mb: 4, letterSpacing: "-0.5px", fontWeight: 700 }}
        >
          اپلیکیشن مدیریت بلاگ
        </Typography>

        <Box sx={{ mb: 5 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", mb: 1 }}
          >
            جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem" }}
          >
            بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "8px",
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            مدیریت بلاگ ها
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "8px",
              px: 4,
              py: 1.2,
              fontSize: "1rem",
            }}
          >
            مطالعه بلاگ ها
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
