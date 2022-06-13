import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { usePosts } from "../../../../../contexts/PostsContext";
import { CommentType } from "../../../../../types/Post";
import { Avatar } from "../../../Avatar";
import { ButtonLike, Container } from "./styles";

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
    const [isLiked, setIsLiked] = useState(false);

    const commentedDateFormatted = format(
        new Date(commentedAt),
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    );

    const commentedDateRelativeNow = formatDistanceToNow(
        new Date(commentedAt),
        {
            locale: ptBR,
            addSuffix: true,
        }
    );

    function handleLike() {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    return (
        <Container>
            <Avatar imagePath={author.avatarUrl} hasBorder={false} />

            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>{author.name}</strong>
                            <time
                                title={commentedDateFormatted}
                                dateTime={new Date(commentedAt).toISOString()}
                            >
                                {commentedDateRelativeNow}
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
                    <ButtonLike onClick={handleLike} isLiked={isLiked}>
                        <ThumbsUp
                            className="iconThumbsUp"
                            weight={isLiked ? "fill" : "regular"}
                        />
                        Aplaudir <span>{isLiked ? "1" : "0"}</span>
                    </ButtonLike>
                </footer>
            </div>
        </Container>
    );
};
