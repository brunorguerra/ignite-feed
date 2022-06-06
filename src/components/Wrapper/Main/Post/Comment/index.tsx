import { ThumbsUp, Trash } from "phosphor-react";
import { usePosts } from "../../../../../contexts/PostsContext";
import { CommentType } from "../../../../../types/Post";
import { Avatar } from "../../../Avatar";
import { Container } from "./styles";

interface CommentProps extends CommentType {
    postId: string;
}

export const Comment = ({
    id,
    content,
    author,
    commentedAt,
    postId,
}: CommentProps) => {
    const { removeComment } = usePosts();

    return (
        <Container>
            <Avatar imagePath={author.avatarUrl} hasBorder={false} />

            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>{author.name}</strong>
                            <time
                                title="11 de Maio às 09:23h"
                                dateTime="2022-05-11 09:23:11"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            title="Deletar comentário"
                            onClick={() => removeComment(id, postId)}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>50</span>
                    </button>
                </footer>
            </div>
        </Container>
    );
};
