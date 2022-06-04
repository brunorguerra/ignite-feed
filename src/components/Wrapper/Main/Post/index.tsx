import { Comment } from "./Comment";
import { Container } from "./styles";

export const Post = () => {
    return (
        <Container>
            <header>
                <div className="author">
                    <img
                        className="avatar"
                        src="https://github.com/diego3g.png"
                    />
                    <div className="authorInfo">
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title="11 de Maio as 08:13h"
                    dateTime="2022-05-11 08:13:40"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className="content">
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                </p>
                <p>
                    👉 <a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className="commentForm">
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className="commentList">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </Container>
    );
};
