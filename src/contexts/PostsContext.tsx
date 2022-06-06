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
}

interface NewCommentProps {
    postId: string;
    comment: Omit<CommentType, "id">;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: PostsProviderProps) {
    const [postsList, setPostsList] = useState<PostType[]>([]);

    async function addNewComment({ postId, comment }: NewCommentProps) {
        const req = await Api.post(`/posts/${postId}`, { comment });
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
            value={{ postsList, addNewComment, removeComment }}
        >
            {children}
        </PostsContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostsContext);

    return context;
};
