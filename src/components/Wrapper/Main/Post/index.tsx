import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useRef, useState } from "react";
import { usePosts } from "../../../../contexts/PostsContext";

import { PostType } from "../../../../types/Post";
import { Avatar } from "../../Avatar";
import { Comment } from "./Comment";
import { Container } from "./styles";

export const Post = ({
    author,
    publishedAt,
    content,
    commentList,
    id,
}: PostType) => {
    const { addNewComment } = usePosts();

    const publishedDateFormatted = format(
        new Date(publishedAt),
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
    );

    const publishedDateRelativeNow = formatDistanceToNow(
        new Date(publishedAt),
        {
            locale: ptBR,
            addSuffix: true,
        }
    );

    const [commentText, setCommentText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function handleNewComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        addNewComment({
            postId: id,
            comment: {
                author: {
                    avatarUrl: "https://github.com/brunorguerra.png",
                    name: "Bruno Guerra",
                    role: "",
                },
                commentedAt: "2022-01-12 17:10:00",
                content: commentText,
            },
        });

        setCommentText("");
    }

    return (
        <Container>
            <header>
                <div className="author">
                    <Avatar imagePath={author.avatarUrl} hasBorder={true} />
                    <div className="authorInfo">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={new Date(publishedAt).toISOString()}
                >
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className="content">
                {content.map((line, index) => {
                    if (line.type === "paragraph") {
                        return <p key={index}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return (
                            <p key={index}>
                                <a href="">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form className="commentForm" onSubmit={(e) => handleNewComment(e)}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    value={commentText}
                    ref={textareaRef}
                    onChange={() =>
                        setCommentText(String(textareaRef.current?.value))
                    }
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className="commentList">
                {commentList.map((comment) => (
                    <Comment
                        author={comment.author}
                        content={comment.content}
                        commentedAt={comment.commentedAt}
                        postId={id}
                        key={comment.id}
                        id={comment.id}
                    />
                ))}
            </div>
        </Container>
    );
};
