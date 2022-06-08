import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Api } from "../services/Api";
import { CommentType, PostType } from "../types/Post";

interface PostsProviderProps {
    children: ReactNode;
}

interface PostsContextData {
    postsList: PostType[];
    addNewComment: ({}: NewCommentProps) => Promise<void>;
    removeComment: (commentId: string, postId: string) => Promise<void>;
    addNewPost: ({}: NewPostProps) => Promise<void>;
    removePost: (postId: string) => Promise<void>;
}

interface NewCommentProps {
    postId: string;
    comment: Omit<CommentType, "id">;
}

interface NewPostProps {
    content: string;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: PostsProviderProps) {
    const [postsList, setPostsList] = useState<PostType[]>([]);

    async function addNewPost({ content }: NewPostProps) {
        const req = await Api.post("/newPost", {
            author: {
                avatarUrl: "https://github.com/brunorguerra.png",
                name: "Bruno Guerra",
                role: "Frontend Developer",
            },
            content: [{ type: "paragraph", content }],
            publishedAt: String(new Date()),
            commentList: [],
        });
        const { posts } = await req.data;
        setPostsList(posts);
    }

    async function removePost(postId: string) {
        const req = await Api.delete(`/removePost/${postId}`);
        const { posts } = await req.data;
        setPostsList(posts);
    }

    async function addNewComment({ postId, comment }: NewCommentProps) {
        const req = await Api.post(`/addComment/${postId}`, { comment });
        const { posts } = await req.data;
        setPostsList(posts);
    }

    async function removeComment(commentId: string, postId: string) {
        const req = await Api.delete(`/posts/${postId}/${commentId}`);
        const { posts } = await req.data;
        setPostsList(posts);
    }

    useEffect(() => {
        async function getAllPosts() {
            const req = await Api.get("/posts");
            const { posts } = await req.data;
            setPostsList(posts);
        }

        getAllPosts();
    }, []);

    return (
        <PostsContext.Provider
            value={{
                postsList,
                addNewComment,
                removeComment,
                addNewPost,
                removePost,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostsContext);

    return context;
};
