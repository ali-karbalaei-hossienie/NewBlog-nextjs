import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { BlogPost } from "@/app/types";

interface PostPageProps {
  params: Promise<{
    postSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { postSlug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${postSlug}`,
  );

  if (!res.ok) {
    return {
      title: "پست پیدا نشد",
      description: "پست مورد نظر پیدا نشد.",
    };
  }

  const response: {
    data: {
      post: BlogPost;
    };
  } = await res.json();

  const post = response.data.post;

  if (!post) {
    return {
      title: "پست پیدا نشد",
      description: "پست مورد نظر پیدا نشد.",
    };
  }

  return {
    title: post.title,
    description: post.briefText,

    openGraph: {
      title: post.title,
      description: post.briefText,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImageUrl,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.briefText,
      images: [post.coverImageUrl],
    },
  };
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

  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.createdAt));

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        py: {
          xs: 2,
          sm: 3,
          md: 5,
        },
        backgroundColor: "background.default",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* =========================================
            Breadcrumb
        ========================================= */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.8}
          sx={{
            mb: {
              xs: 2.5,
              md: 3.5,
            },
            flexWrap: "wrap",
            rowGap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "secondary.400",
            }}
          >
            خانه
          </Typography>

          <ArrowBackIosNewRoundedIcon
            sx={{
              fontSize: 12,
              color: "secondary.300",
              transform: "rotate(180deg)",
            }}
          />

          <Typography
            sx={{
              fontSize: 13,
              color: "secondary.400",
            }}
          >
            {post.category?.title}
          </Typography>

          <ArrowBackIosNewRoundedIcon
            sx={{
              fontSize: 12,
              color: "secondary.300",
              transform: "rotate(180deg)",
            }}
          />

          <Typography
            sx={{
              fontSize: 13,
              color: "secondary.700",
            }}
          >
            {post.title}
          </Typography>
        </Stack>

        {/* =========================================
            Main Grid
        ========================================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1fr) 310px",
            },
            gap: {
              xs: 3,
              lg: 4,
            },
            alignItems: "start",
          }}
        >
          {/* =======================================
              Main Article
          ======================================= */}
          <Box>
            {/* =====================================
                Hero
            ===================================== */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
                },
                gap: {
                  xs: 3,
                  md: 4,
                },
                alignItems: "center",
                mb: 3,
              }}
            >
              {/* Cover */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "secondary.100",
                  backgroundColor: "background.paper",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                }}
              >
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.25), transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </Box>

              {/* Header */}
              <Box>
                {/* Category */}
                <Chip
                  icon={
                    <CodeRoundedIcon
                      sx={{
                        fontSize: "18px !important",
                        color: "primary.400 !important",
                      }}
                    />
                  }
                  label={post.category?.title || "برنامه نویسی"}
                  sx={{
                    height: 40,
                    px: 1,
                    mb: 2,
                    borderRadius: 2,
                    border: 1,
                    borderColor: "primary.900",
                    backgroundColor: "primary.50",
                    color: "primary.500",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                />

                {/* Title */}
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 38,
                      md: 46,
                    },
                    fontWeight: 900,
                    lineHeight: 1.5,
                    color: "text.primary",
                    mb: 1.5,
                  }}
                >
                  {post.title}
                </Typography>

                {/* Brief */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: 16,
                      md: 18,
                    },
                    lineHeight: 2,
                    color: "text.secondary",
                    mb: 3,
                  }}
                >
                  {post.briefText}
                </Typography>

                {/* Meta */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  useFlexGap
                  flexWrap="wrap"
                >
                  {/* Author */}
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        position: "relative",
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: 2,
                        borderColor: "secondary.200",
                      }}
                    >
                      <Image
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        fill
                        sizes="42px"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "text.primary",
                        }}
                      >
                        {post.author.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "text.secondary",
                        }}
                      >
                        نویسنده
                      </Typography>
                    </Box>
                  </Stack>

                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  />

                  {/* Reading time */}
                  <Stack direction="row" alignItems="center" spacing={0.7}>
                    <AccessTimeOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "primary.400",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "text.secondary",
                      }}
                    >
                      {post.readingTime} دقیقه مطالعه
                    </Typography>
                  </Stack>

                  {/* Date */}
                  <Stack direction="row" alignItems="center" spacing={0.7}>
                    <CalendarMonthOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "primary.400",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "text.secondary",
                      }}
                    >
                      {formattedDate}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>

            {/* =====================================
                Actions
            ===================================== */}
            <Box
              sx={{
                mb: 3,
                px: {
                  xs: 1.5,
                  sm: 2,
                },
                py: 1.5,
                borderRadius: 2,
                border: 1,
                borderColor: "secondary.100",
                backgroundColor: "background.paper",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Like */}
                <Button
                  disableRipple
                  startIcon={<FavoriteBorderIcon />}
                  sx={{
                    minWidth: 88,
                    height: 46,
                    borderRadius: 2,
                    color: "primary.400",
                    backgroundColor: "primary.50",
                    border: 1,
                    borderColor: "primary.100",

                    "&:hover": {
                      backgroundColor: "primary.100",
                    },
                  }}
                >
                  {post.likesCount}
                </Button>

                {/* Bookmark */}
                <Button
                  disableRipple
                  startIcon={<BookmarkBorderIcon />}
                  sx={{
                    height: 46,
                    px: 2,
                    borderRadius: 2,
                    color: "text.secondary",
                    backgroundColor: "background.paper",
                    border: 1,
                    borderColor: "secondary.100",

                    "&:hover": {
                      backgroundColor: "secondary.50",
                    },
                  }}
                >
                  ذخیره مقاله
                </Button>
              </Stack>
            </Box>

            {/* =====================================
                Article Content
            ===================================== */}
            <Box
              sx={{
                p: {
                  xs: 2.5,
                  sm: 4,
                  md: 5,
                },
                borderRadius: 3,
                border: 1,
                borderColor: "secondary.100",
                backgroundColor: "background.paper",
              }}
            >
              {/* Intro */}
              <Box
                sx={{
                  position: "relative",
                  pr: {
                    xs: 2,
                    md: 2.5,
                  },
                  mb: 3,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: 4,
                    width: 4,
                    height: 60,
                    borderRadius: 99,
                    backgroundColor: "primary.main",
                  },
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: 21,
                      md: 26,
                    },
                    fontWeight: 800,
                    lineHeight: 1.8,
                    color: "text.primary",
                  }}
                >
                  {post.briefText}
                </Typography>
              </Box>

              {/* Body */}
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    md: 18,
                  },
                  lineHeight: 2.6,
                  color: "text.secondary",
                  whiteSpace: "pre-line",
                }}
              >
                {post.text}
              </Typography>
            </Box>
          </Box>

          {/* =======================================
              Sidebar
          ======================================= */}
          <Stack
            spacing={3}
            sx={{
              position: {
                xs: "static",
                lg: "sticky",
              },
              top: {
                lg: 24,
              },
            }}
          >
            {/* =====================================
                Author Card
            ===================================== */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: "secondary.100",
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 82,
                    height: 82,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: 3,
                    borderColor: "secondary.200",
                  }}
                >
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    sizes="82px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "text.primary",
                  mb: 0.5,
                }}
              >
                {post.author.name}
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "text.secondary",
                  mb: 2.5,
                }}
              >
                نویسنده و توسعه‌دهنده
              </Typography>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 13,
                  lineHeight: 2.1,
                  color: "text.secondary",
                  mb: 2.5,
                }}
              >
                علاقه‌مند به تکنولوژی، برنامه‌نویسی و فریلنسری. در اینجا
                تجربه‌ها و دانسته‌هایم را به اشتراک می‌گذارم.
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                sx={{
                  height: 46,
                  borderRadius: 2,
                  color: "primary.400",
                  borderColor: "primary.900",
                  backgroundColor: "primary.50",

                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "primary.100",
                  },
                }}
              >
                مشاهده پروفایل
              </Button>
            </Box>

            {/* =====================================
                Stats
            ===================================== */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: "secondary.100",
                backgroundColor: "background.paper",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  mb: 1,
                }}
              >
                <MenuBookOutlinedIcon
                  sx={{
                    fontSize: 20,
                    color: "primary.400",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: "text.primary",
                  }}
                >
                  آمار مقاله
                </Typography>
              </Stack>

              <StatRow
                icon={<VisibilityOutlinedIcon />}
                title="بازدید"
                value="—"
              />

              <StatRow
                icon={<FavoriteBorderIcon />}
                title="لایک"
                value={String(post.likesCount)}
              />

              <StatRow
                icon={<BookmarkBorderIcon />}
                title="ذخیره"
                value={post.isBookmarked ? "1" : "0"}
                last
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

interface StatRowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  last?: boolean;
}

const StatRow = ({ icon, title, value, last = false }: StatRowProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.7,
        borderBottom: last ? 0 : 1,
        borderColor: "secondary.100",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            display: "flex",
            color: "primary.400",

            "& svg": {
              fontSize: 19,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontSize: 13,
            color: "text.secondary",
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default PostPage;
