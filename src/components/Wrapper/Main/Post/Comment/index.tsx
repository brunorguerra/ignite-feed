import { ThumbsUp, Trash } from "phosphor-react";
import { Container } from "./styles";

export const Comment = () => {
    return (
        <Container>
            <img src="https://github.com/diego3g.png" />

            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>Diego Fernandes</strong>
                            <time
                                title="11 de Maio às 09:23h"
                                dateTime="2022-05-11 09:23:11"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
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
