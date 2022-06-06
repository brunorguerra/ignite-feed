export type PostType = {
    id: string;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: { type: string; content: string }[];
    publishedAt: string;
    commentList: CommentType[];
};

export interface CommentType
    extends Omit<
        PostType,
        "author.role" | "content" | "publishedAt" | "commentList"
    > {
    content: string;
    commentedAt: string;
}
