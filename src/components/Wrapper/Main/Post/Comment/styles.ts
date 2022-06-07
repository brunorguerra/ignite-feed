import styled from "styled-components";

interface ButtonLikeProps {
    isLiked: boolean;
}

export const Container = styled.div`
    margin-top: 2.4rem;
    display: flex;
    gap: 1.6rem;

    img {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 8px;
    }

    .commentBox {
        flex: 1;

        .commentContent {
            background-color: var(--gray-700);
            border-radius: 8px;
            padding: 1.6rem;

            header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                .authorAndTime {
                    strong,
                    time {
                        display: block;
                    }

                    strong {
                        font-size: 1.4rem;
                        line-height: 1.6;
                    }

                    time {
                        font-size: 1.2rem;
                        line-height: 1.6;
                        color: var(--gray-400);
                    }
                }

                button {
                    background-color: transparent;
                    color: var(--gray-400);

                    border: 0;
                    border-radius: 2px;

                    cursor: pointer;
                    line-height: 0;

                    &:hover {
                        color: var(--red-500);
                    }
                }
            }

            p {
                margin-top: 1.6rem;
                color: var(--gray-300);
            }
        }

        footer {
            margin-top: 1.6rem;
        }
    }
`;

export const ButtonLike = styled.button<ButtonLikeProps>`
    background: transparent;
    color: ${({ isLiked }) =>
        isLiked ? "var(--green-300)" : "var(--gray-400)"};

    border: 0;
    border-radius: 2px;
    cursor: pointer;

    display: flex;
    align-items: center;

    .iconThumbsUp {
        margin-right: 0.8rem;

        animation: ${({ isLiked }) => (isLiked ? "LikeAnimate 1s" : "initial")};
    }

    span::before {
        content: "•";
        padding: 0 0.4rem;
    }

    &:hover {
        ${({ isLiked }) =>
            isLiked ? "filter: brightness(0.7); " : "color: var(--green-300);"};
    }

    @keyframes LikeAnimate {
        0%,
        100% {
            transform: translateY(0) rotate(0deg) scale(1);
        }
        50% {
            transform: translateY(-0.5rem) rotate(-30deg) scale(1.1);
        }
    }
`;
