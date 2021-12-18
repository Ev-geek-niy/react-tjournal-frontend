import { MainLayout } from "../../layouts/MainLayout";
import { FullPost } from "../../components/FullPost";
import { Comment } from "../../components/Comment";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import { PostComments } from "../../components/PostComments";

export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
