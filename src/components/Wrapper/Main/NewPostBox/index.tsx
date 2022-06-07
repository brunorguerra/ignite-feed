import { FormEvent, useRef, useState } from "react";
import { usePosts } from "../../../../contexts/PostsContext";
import { Container } from "./styles";

export const NewPostBox = () => {
    const { addNewPost } = usePosts();
    const [postText, setPostText] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function onValuePostText() {
        setPostText(String(textareaRef.current?.value));
    }

    function handleNewPost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        addNewPost({ content: postText });
        setPostText("");
    }

    const isValuePostEmpty = postText.trim().length === 0;

    return (
        <Container onSubmit={handleNewPost}>
            <h2>Fazer uma publicação</h2>

            <textarea
                placeholder="O Que você quer compartilhar?"
                value={postText}
                onChange={onValuePostText}
                ref={textareaRef}
                required
            ></textarea>
            <footer>
                <button type="submit" disabled={isValuePostEmpty}>
                    Compartilhar
                </button>
            </footer>
        </Container>
    );
};
