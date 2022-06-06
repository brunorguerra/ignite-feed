import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";

import { createServer, Model } from "miragejs";
import { CommentType, PostType } from "./types/Post";

createServer({
    models: {
        post: Model,
    },

    seeds(server) {
        server.db.loadData({
            posts: [
                {
                    id: "1",
                    author: {
                        avatarUrl:
                            "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
                        name: "Robert John Downey",
                        role: "Actor of Iron Man",
                    },
                    content: [
                        { type: "paragraph", content: "Fala galeraa 👋" },

                        {
                            type: "paragraph",
                            content:
                                "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
                        },

                        { type: "link", content: "👉 jane.design/doctorcare" },
                    ],
                    publishedAt: "2022-01-12 08:35:09",
                    commentList: [],
                },
                {
                    id: "2",
                    author: {
                        avatarUrl:
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
                        name: "Elon Reeve Musk",
                        role: "Founder at SpaceX and CTO @ Tesla Inc",
                    },
                    content: [
                        { type: "paragraph", content: "Fala galeraa 👋" },

                        {
                            type: "paragraph",
                            content:
                                "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
                        },

                        { type: "link", content: "👉 jane.design/doctorcare" },
                    ],
                    publishedAt: "2022-03-22 11:57:33",
                    commentList: [],
                },
                {
                    id: "3",
                    author: {
                        avatarUrl:
                            "https://cms.somosfanaticos.com/__export/1653391611384/sites/fanaticos/img/2022/05/24/gettyimages-1397604799.jpg_1055622710.jpg",
                        name: "Paulo Exequiel Dybala",
                        role: "Professional Player Soccer at Juventus",
                    },
                    content: [
                        { type: "paragraph", content: "Fala galeraa 👋" },

                        {
                            type: "paragraph",
                            content:
                                "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
                        },

                        { type: "link", content: "👉 jane.design/doctorcare" },
                    ],
                    publishedAt: "2022-03-29 17:25:12",
                    commentList: [],
                },
            ],
            users: [
                {
                    id: "1",
                    avatarUrl:
                        "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
                    name: "Robert John Downey",
                    role: "Actor of Iron Man",
                },
                {
                    id: "2",
                    avatarUrl:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
                    name: "Elon Reeve Musk",
                    role: "Founder at SpaceX and CTO @ Tesla Inc",
                },
                {
                    id: "3",
                    avatarUrl:
                        "https://cms.somosfanaticos.com/__export/1653391611384/sites/fanaticos/img/2022/05/24/gettyimages-1397604799.jpg_1055622710.jpg",
                    name: "Paulo Exequiel Dybala",
                    role: "Professional Player Soccer at Juventus",
                },
            ],
        });
    },

    routes() {
        this.namespace = "api";

        this.get("/posts", () => {
            return this.schema.all("post");
        });

        this.post("/posts/:id", (schema, request) => {
            const postId = request.params.id;
            const post = schema.db.posts.find(postId);

            const commentsAmount = post.commentList.length;

            const { comment } = JSON.parse(request.requestBody);
            comment.id = String(commentsAmount + 1);

            post.commentList.push(comment);

            return this.schema.all("post");
        });

        this.delete("/posts/:postId/:commentId", (schema, request) => {
            const postId = request.params.postId;
            const commentId = request.params.commentId;

            const post = schema.db.posts.find(postId);

            const commentIndexToDelete = post.commentList.findIndex(
                (comment: CommentType) => comment.id === commentId
            );

            post.commentList.splice(commentIndexToDelete, 1);

            return this.schema.all("post");
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
