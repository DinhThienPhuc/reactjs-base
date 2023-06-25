import { IBaseResponse } from "../types";

export interface IPostData {
  createdAt: string;
  name: string;
  id: string;
}

export type IPostResponse = IBaseResponse<IPostData>;

export type IPostListResponse = IBaseResponse<IPostData[]>;
