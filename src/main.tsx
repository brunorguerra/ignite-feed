import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/global";

import { createServer, Model } from "miragejs";
import { CommentType } from "./types/Post";

createServer({
    models: {
        post: Model,
    },

    seeds(server) {
        server.db.loadData({
            posts: [],
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
            const { postId, commentId } = request.params;

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
