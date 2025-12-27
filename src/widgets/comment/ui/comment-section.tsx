import { CommentList, type CommentEntity } from "../../../entities/comment";
import { PostComment } from "../../../features/comment";

interface CommentSectionProps {
  comments: CommentEntity[];
}

export function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments</h3>
      <PostComment />
      <CommentList comments={comments} />
    </div>
  );
}
