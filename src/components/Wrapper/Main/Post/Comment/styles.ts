import styled from "styled-components";

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

            button {
                background: transparent;
                color: var(--gray-400);

                border: 0;
                border-radius: 2px;
                cursor: pointer;

                display: flex;
                align-items: center;

                svg {
                    margin-right: 0.8rem;
                }

                span::before {
                    content: "•";
                    padding: 0 0.4rem;
                }

                &:hover {
                    color: var(--green-300);
                }
            }
        }
    }
`;
