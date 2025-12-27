import type { UserEntity } from "../entities/user";
import { now } from "./helper";

export const users: UserEntity[] = [
  {
    documentId: "b8f3a1d9-6e7c-4b25-9a0f-2d4c5e618a37",
    username: "ligvado",
    email: "ligvado@mail.com",
    confirmed: true,
    blocked: false,
    bio: "Knowledge worker and note enthusiast. Always learning something new.",

    createdAt: now(),
    updatedAt: now(),
  },
  {
    documentId: "e3b9a2d4-6f7c-4a1e-8d5b-2c9f0a6e7183",
    username: "alex",
    email: "alex@mail.com",
    confirmed: true,
    blocked: false,

    createdAt: now(),
    updatedAt: now(),
  },
];
