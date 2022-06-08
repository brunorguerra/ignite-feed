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
            posts: [],
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

        this.get("/posts", (schema, request) => {
            const posts = JSON.parse(localStorage.getItem("posts") ?? "[]");

            schema.db.loadData({ posts });

            return schema.all("post");
        });

        this.post("/newPost", (schema, request) => {
            const newPost = JSON.parse(request.requestBody);

            schema.create("post", newPost);

            localStorage.setItem("posts", JSON.stringify(schema.db.posts));

            return schema.all("post");
        });

        this.post("/addComment/:postId", (schema, request) => {
            const postId = request.params.postId;
            const post = schema.db.posts.find(postId);

            const commentsAmount = post.commentList.length;

            const { comment } = JSON.parse(request.requestBody);
            comment.id = String(commentsAmount + 1);

            post.commentList.push(comment);

            localStorage.setItem("posts", JSON.stringify(schema.db.posts));

            return schema.all("post");
        });

        this.delete("/posts/:postId/:commentId", (schema, request) => {
            const postId = request.params.postId;
            const commentId = request.params.commentId;

            const post = schema.db.posts.find(postId);

            const commentIndexToDelete = post.commentList.findIndex(
                (comment: CommentType) => comment.id === commentId
            );

            post.commentList.splice(commentIndexToDelete, 1);

            localStorage.setItem("posts", JSON.stringify(schema.db.posts));

            return schema.all("post");
        });

        this.delete("/removePost/:postId", (schema, request) => {
            const { postId } = request.params;

            schema.db.posts.remove(postId);

            localStorage.setItem("posts", JSON.stringify(schema.db.posts));

            return schema.all("post");
        });
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
