"use client";
import Link from "next/link";
import { ListItemButton } from "@mui/material";
import { ReactNode } from "react";

interface CategoryLinkProps {
  href: string;
  children: ReactNode;
}

export default function CategoryLink({ href, children }: CategoryLinkProps) {
  return (
    <ListItemButton component={Link} href={href}>
      {children}
    </ListItemButton>
  );
}
