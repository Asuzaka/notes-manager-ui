import type { CommentEntity } from "../model/type";
import { NoComments } from "./no-comments";
import { CommentView } from "./view";

export function CommentList({ comments }: { comments: CommentEntity[] }) {
  return (
    <div className="space-y-4">
      {comments.length === 0 && <NoComments />}
      {comments.map((comment) => (
        <CommentView key={comment.documentId} comment={comment} />
      ))}
    </div>
  );
}
