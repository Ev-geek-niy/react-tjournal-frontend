import { OutputData } from "@editorjs/editorjs";

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createdAt: string;
  updatedAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  commentsCount?: number;
};

export type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export type PostItem = {
  title: string;
  body: OutputData["blocks"];
  description: string;
  tags: string;
  id: number;
  views: number;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentDto = {
  postId: number;
  text: string;
};

export type CommentItem = {
  id: number;
  text: string;
  post: PostItem;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};

export type SearchPostDto = {
  title?: string;
  body?: string;
  views?: "DESC" | "ASC";
  limit?: number;
  take?: number;
  tag?: string;
};
