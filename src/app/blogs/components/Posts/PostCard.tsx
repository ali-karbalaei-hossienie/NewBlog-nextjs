import Link from "next/link";
import Image from "next/image";

import {
  AccessTimeRounded,
  BookmarkBorderRounded,
  ChatBubbleOutlineRounded,
  FavoriteBorderRounded,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import type { BlogPost } from "@/app/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: BlogCardProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Card
        sx={{
          width: "100%",
          bgcolor: "background.default",
          border: 1,
          borderColor: "secondary.200",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "none",
        }}
      >
        {/* Cover */}
        <Link
          href={`/blog/${post.slug}`}
          style={{
            display: "block",
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              position: "relative",
              mx: 1,
              mt: 1,
              borderRadius: 1.5,
              overflow: "hidden",
              aspectRatio: 16 / 9,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Link>

        <CardContent
          sx={{
            bgcolor: "secondary.100",
            mx: 1,
            mb: 1,
            mt: 1,
            borderRadius: 1.5,
            p: "12px !important",
          }}
        >
          {/* Title */}
          <Link
            href={`/blog/${post.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: "secondary.900",
                mb: 1.5,

                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",

                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {post.title}
            </Typography>
          </Link>

          {/* Author + Reading time */}
          <Stack
            direction="row"
            sx={{
              mb: 1.5,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Author */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar
                src={post.author.avatarUrl}
                alt={post.author.name}
                sx={{
                  width: 28,
                  height: 28,
                  border: 1,
                  borderColor: "secondary.300",
                }}
              />

              <Typography
                sx={{
                  fontSize: 12,
                  color: "secondary.800",
                  whiteSpace: "nowrap",
                }}
              >
                {post.author.name}
              </Typography>
            </Stack>

            {/* Reading time */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                color: "secondary.400",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                }}
              >
                خواندن: {post.readingTime} دقیقه
              </Typography>

              <AccessTimeRounded
                sx={{
                  fontSize: 16,
                }}
              />
            </Stack>
          </Stack>

          {/* Actions */}
          <Stack
            direction="row"
            sx={{
              gap: 2,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {/* Comments */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                bgcolor: "secondary.200",
                borderRadius: 1,
                height: 29,
                color: "secondary.600",
              }}
            >
              <IconButton
                disableRipple
                size="small"
                sx={{
                  width: 29,
                  height: 29,
                  color: "secondary.400",
                }}
              >
                <ChatBubbleOutlineRounded fontSize="small" />
              </IconButton>
              <Typography
                sx={{
                  fontSize: 11,
                  pr: 0.5,
                }}
              >
                {post.commentsCount}
              </Typography>
            </Stack>
            {/* Like */}
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                bgcolor: "error.50",
                borderRadius: 1,
                height: 29,
              }}
            >
              <IconButton
                size="small"
                sx={{
                  width: 29,
                  height: 29,
                  color: "error.main",
                }}
              >
                <FavoriteBorderRounded fontSize="small" />
              </IconButton>

              <Typography
                sx={{
                  color: "error.main",
                  fontSize: 11,
                  pr: 0.5,
                }}
              >
                {post.likesCount}
              </Typography>
            </Stack>

            {/* Bookmark */}
            <IconButton
              size="small"
              sx={{
                width: 29,
                height: 29,
                bgcolor: "primary.50",
                color: "primary.900",
                borderRadius: 1,

                "&:hover": {
                  bgcolor: "primary.100",
                },
              }}
            >
              <BookmarkBorderRounded fontSize="small" />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
