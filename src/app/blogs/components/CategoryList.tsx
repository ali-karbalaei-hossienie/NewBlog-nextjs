import { Category } from "@/app/types";
import { List, ListItem, ListItemText } from "@mui/material";
import CategoryLink from "./CategoryLink";

const CategoryList = async () => {
  let categories: Category[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const response = await res.json();

    categories = response.data.categories as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);

    return <div>خطا در دریافت دسته‌بندی‌ها</div>;
  }

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category._id} disablePadding>
          <CategoryLink href={`/blogs/category/${category.slug}`}>
            <ListItemText primary={category.title} />
          </CategoryLink>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
