import type { CommentEntity } from "../entities/comment";
import { now } from "./helper";
import { users } from "./users";

export const comments: CommentEntity[] = [
  {
    documentId: "3a9f6e7b-2c41-4d18-b0e5-1f8c9a6d742e",
    content: "Great explanation, very helpful!",
    author: users[1],
    createdAt: now(),
    updatedAt: now(),
  },
  {
    documentId: "c7b1a9f4-5e2d-48a6-9c3b-0f8e4d1a62b9",
    content: "Would love to see more examples.",
    author: users[0],
    createdAt: now(),
    updatedAt: now(),
  },
];
