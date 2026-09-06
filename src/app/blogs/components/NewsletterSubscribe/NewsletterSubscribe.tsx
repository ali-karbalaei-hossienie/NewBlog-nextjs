import { Box, Typography, Button } from "@mui/material";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import SendOutlined from "@mui/icons-material/SendOutlined";

const NewsletterSubscribe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "secondary.200",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1.5,
          position: "relative",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            flexShrink: 0,
          }}
        >
          <LockRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 800,
            color: "text.primary",
          }}
        >
          عضویت در خبرنامه
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: 12.5,
          color: "primary.200",
          mb: 2.5,
          lineHeight: 1.9,
          position: "relative",
        }}
      >
        برای دریافت جدیدترین مقالات در خبرنامه‌ی ما عضو شوید.
      </Typography>

      <Button
        fullWidth
        startIcon={
          <SendOutlined sx={{ fontSize: 18, transform: "rotate(321deg)" }} />
        }
        sx={{
          position: "relative",
          background: "linear-gradient(90deg, #3B5FE0 10%, #2E4BC7 100%)",
          color: "primary.contrastText",
          fontWeight: 700,
          fontSize: 13.5,
          borderRadius: 2,
          py: 1,
          textTransform: "none",
          display: "flex",
          alignItems: "center",

          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        عضویت
      </Button>
    </Box>
  );
};

export default NewsletterSubscribe;
