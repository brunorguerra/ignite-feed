import { usePosts } from "../../../contexts/PostsContext";
import { NewPostBox } from "./NewPostBox";
import { Post } from "./Post";
import { Container } from "./styles";

export const Main = () => {
    const { postsList } = usePosts();

    return (
        <Container>
            <NewPostBox />
            {postsList.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    publishedAt={post.publishedAt}
                    content={post.content}
                    id={post.id}
                    commentList={post.commentList}
                />
            ))}
        </Container>
    );
};
