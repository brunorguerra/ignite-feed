import styled from "styled-components";

export const Container = styled.article`
    background: var(--gray-800);
    border-radius: 8px;

    padding: 4rem;

    & + & {
        margin-top: 3.2rem;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        time {
            font-size: 1.4rem;
            color: var(--gray-400);
        }

        .author {
            display: flex;
            align-items: center;
            gap: 1.6rem;

            .avatar {
                width: calc(4.8rem + 12px);
                height: calc(4.8rem + 12px);
                border-radius: 8px;
                border: 4px solid var(--gray-800);
                outline: 2px solid var(--green-500);
            }

            .authorInfo {
                span,
                strong {
                    display: block;
                }
                strong {
                    color: var(--gray-100);
                    line-height: 1.6;
                }
                span {
                    font-size: 1.4rem;
                    color: var(--gray-400);
                    line-height: 1.6;
                }
            }
        }
    }

    .content {
        line-height: 1.6;
        color: var(--gray-300);
        margin-top: 2.4rem;
        p {
            margin-top: 1.6rem;
        }
        a {
            font-weight: bold;
            color: var(--green-500);
            text-decoration: none;
            transition: all 0.1s;
            &:hover {
                color: var(--green-300);
            }
        }
    }

    .commentForm {
        width: 100%;
        margin-top: 2.4rem;
        padding: 2.4rem 0;
        border-top: 1px solid var(--gray-600);

        strong {
            line-height: 1.6;
            color: var(--gray-100);
        }

        textarea {
            width: 100%;
            height: 9.6rem;

            margin-top: 1.6rem;
            padding: 1.6rem;
            line-height: 1.4;

            background-color: var(--gray-900);
            color: var(--gray-100);

            border: 0;
            border-radius: 8px;
            resize: none;
        }

        footer {
            visibility: hidden;
            max-height: 0;

            button[type="submit"] {
                padding: 1.6rem 2.4rem;
                margin-top: 1.6rem;

                border: 0;
                border-radius: 8px;

                background: var(--green-500);
                color: var(--white);

                font-weight: bold;
                cursor: pointer;

                transition: all 0.15s ease;

                &:hover {
                    background: var(--green-300);
                }
            }
        }

        &:focus-within {
            footer {
                visibility: visible;
                max-height: none;
            }
        }
    }

    .commentList {
        margin-top: 3.2rem;
    }
`;
