import type { BaseApiResponse } from "./response";

interface IAuthor {
  _id: string;
  nickname: string;
}

interface IComment {
  _id: string;
  storeId: string;
  content: string;
  createdAt: string;
  authorld: IAuthor;
}

interface ICommentPost {
  _id: string;
  storeId: string;
  content: string;
  createdAt: string;
  authorld: string;
}

// Get /comment?storeId={}
interface GetCommentApiParams {
  storeId: string;
}

// res 값
interface CommentApiResponse extends BaseApiResponse {
  comments: IComment[];
}

// Post /comment
interface PostCommentApiParams {
  content: string;
  storeId: string;
}

// Delete /comment
interface DeleteCommentApiParams {
  commentId: string;
}

export type {
  ICommentPost,
  GetCommentApiParams,
  CommentApiResponse,
  PostCommentApiParams,
  DeleteCommentApiParams,
};