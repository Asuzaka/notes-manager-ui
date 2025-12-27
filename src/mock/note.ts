import type { NoteEntity } from "../entities/note";
import { categories } from "./categories";
import { comments } from "./comments";
import { now } from "./helper";
import { tags } from "./tags";
import { users } from "./users";

export const notes: NoteEntity[] = [
  {
    documentId: "1d6a8c9f-4b72-4e31-a5f9-3c2e0b7d8146",
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    excerpt: "A short introduction to React Hooks and how they work...",
    content:
      "The new architecture for Project Phoenix focuses on modularity and scalability. We are moving towards a microservices approach using Docker and Kubernetes.\n\nKey components include:\n- Auth Service\n- User Management\n- Billing Core\n\nNext steps are to define the API contracts between these services.",
    tags: [tags[0], tags[1]],
    author: users[0],
    categories: [categories[0]],
    isPublic: true,

    views: 124,
    comments: [comments[0], comments[1]],

    coverImage: "https://picsum.photos/800/400",
    attachments: ["hooks-cheatsheet.pdf"],

    createdAt: now(),
    updatedAt: now(),
  },
  {
    documentId: "9f2c1b6a-7d8e-4a59-9c3f-5e1b4d0a8267",
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-nodejs",
    excerpt: "Learn how to structure a clean REST API using Express...",
    content:
      "Our focus for Q4 will be on content marketing and community engagement. We plan to launch a new blog series and host monthly webinars.\n\nTarget metrics:\n- 20% increase in organic traffic\n- 15% increase in newsletter signups",
    tags: [tags[2]],
    author: users[1],
    categories: [categories[1]],
    isPublic: false,

    views: 56,
    comments: [comments[1]],

    createdAt: now(),
    updatedAt: now(),
  },
];
