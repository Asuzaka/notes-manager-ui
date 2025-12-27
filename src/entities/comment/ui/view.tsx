import type { CommentEntity } from "../model/type";

export function CommentView({ comment }: { comment: CommentEntity }) {
  return (
    <div
      key={comment.documentId}
      className="bg-white border border-gray-200 rounded-lg p-4"
    >
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-medium text-gray-900 text-sm">
          {comment.author.username}
        </span>
        <span className="text-xs text-gray-500">
          {new Date(comment.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
    </div>
  );
}
