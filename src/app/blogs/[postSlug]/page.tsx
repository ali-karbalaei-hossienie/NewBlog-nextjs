import Image from "next/image";
import { notFound } from "next/navigation";

import { Box, Container, Typography } from "@mui/material";
import { BlogPost } from "@/app/types";

interface PostPageProps {
  params: Promise<{
    postSlug: string;
  }>;
}

const PostPage = async ({ params }: PostPageProps) => {
  const { postSlug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${postSlug}`,
    {
      cache: "no-store",
    },
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch post: ${res.status}`);
  }

  const response = await res.json();

  const post: BlogPost = response.data.post;

  if (!post) {
    notFound();
  }

  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/* Title */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: 24,
                md: 28,
              },
              fontWeight: 700,
              lineHeight: 1.8,
              color: "common.white",
              mb: 2,
            }}
          >
            {post.title}
          </Typography>

          {/* Brief Text */}
          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 2,
              color: "grey.300",
              mb: 0.5,
            }}
          >
            {post.briefText}
          </Typography>

          {/* Main Text */}
          <Typography
            sx={{
              fontSize: 15,
              lineHeight: 2,
              color: "grey.300",
              mb: 4,
            }}
          >
            {post.text}
          </Typography>

          {/* Cover Image */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: "16 / 9",
              borderRadius: 2,
              overflow: "hidden",
              width: "100%",
            }}
          >
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PostPage;
