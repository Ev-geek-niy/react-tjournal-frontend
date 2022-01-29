import { AxiosInstance } from "axios";
import { CommentItem, CreateCommentDto, PostItem } from "./types";

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId: number) {
    const { data } = await instance.get<CommentItem[]>("/comments", {
      params: { postId },
    });
    return data;
  },

  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<
      CreateCommentDto,
      { data: CommentItem }
    >("/comments", dto);
    return data;
  },

  remove(id: number) {
    return instance.delete<CreateCommentDto, { data: CommentItem }>(
      "/comments/" + id
    );
  },
});
