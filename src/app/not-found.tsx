"use client";

import { Box, Button, Stack, Typography, alpha, useTheme } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import Link from "next/link";

export default function NotFound() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Top-left animated glow */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.main, 0.25)} 0%,
            transparent 70%
          )`,
          filter: "blur(60px)",
          top: -200,
          left: -150,
          animation: "float1 8s ease-in-out infinite",

          "@keyframes float1": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(800px, 80px)",
            },
          },
        }}
      />

      {/* Bottom-right animated glow */}
      <Box
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: `radial-gradient(
            circle,
            ${alpha(theme.palette.primary.light, 0.2)} 0%,
            transparent 70%
          )`,
          filter: "blur(60px)",
          right: -180,
          bottom: -180,
          animation: "float2 10s ease-in-out infinite",

          "@keyframes float2": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(-800px, -70px)",
            },
          },
        }}
      />

      {/* Grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: theme.palette.mode === "dark" ? 0.15 : 0.08,
          backgroundImage: `
            linear-gradient(
              ${alpha(theme.palette.text.primary, 0.1)} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${alpha(theme.palette.text.primary, 0.1)} 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "min(92%, 600px)",
          p: {
            xs: 4,
            sm: 6,
          },
          textAlign: "center",
          borderRadius: 5,
          background: alpha(theme.palette.background.paper, 0.72),
          border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: `0 30px 100px ${alpha(
            theme.palette.common.black,
            theme.palette.mode === "dark" ? 0.45 : 0.15,
          )}`,
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 88,
            height: 88,
            mx: "auto",
            mb: 3,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background: `linear-gradient(
              135deg,
              ${alpha(theme.palette.primary.main, 0.15)},
              ${alpha(theme.palette.primary.light, 0.15)}
            )`,
            border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
            boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.15)}`,
            animation: "pulse 3s ease-in-out infinite",

            "@keyframes pulse": {
              "0%, 100%": {
                transform: "scale(1)",
              },
              "50%": {
                transform: "scale(1.06)",
              },
            },
          }}
        >
          <ErrorOutlineRoundedIcon
            sx={{
              fontSize: 42,
              color: theme.palette.primary.light,
            }}
          />
        </Box>

        {/* 404 */}
        <Typography
          sx={{
            fontSize: {
              xs: "5rem",
              sm: "7rem",
            },
            lineHeight: 0.9,
            fontWeight: 900,
            mb: 3,
            background: `linear-gradient(
              135deg,
              ${theme.palette.primary.light} 0%,
              ${theme.palette.primary.main} 50%,
              ${theme.palette.primary.dark} 100%
            )`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            mb: 2,
          }}
        >
          صفحه مورد نظر پیدا نشد
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 2,
            mb: 4,
          }}
        >
          صفحه‌ای که دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده است.
        </Typography>

        {/* Actions */}
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{ justifyContent: "center" }}
        >
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<HomeRoundedIcon />}
            sx={{
              borderRadius: 2.5,
              px: 4,
              py: 1.4,
              fontWeight: 700,
              boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.25)}`,

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 14px 35px ${alpha(theme.palette.primary.main, 0.35)}`,
              },

              transition: "all 0.25s ease",
            }}
          >
            صفحه اصلی
          </Button>

          <Button
            component={Link}
            href="/blogs"
            variant="outlined"
            size="large"
            sx={{
              borderRadius: 2.5,
              px: 4,
              py: 1.4,
              fontWeight: 700,
              color: theme.palette.text.secondary,
              borderColor: alpha(theme.palette.divider, 0.7),

              "&:hover": {
                borderColor: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.06),
              },
            }}
          >
            مشاهده بلاگ‌ها
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
