import styled from "styled-components";

interface ConfigurationProps {
    isModalActive: boolean;
}

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

        .author {
            display: flex;
            align-items: center;
            gap: 1.6rem;

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

                &:not(:disabled):hover {
                    background: var(--green-300);
                }
                &:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
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

export const Configuration = styled.div<ConfigurationProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    .config {
        position: relative;

        button {
            background: transparent;
            color: var(--gray-400);

            width: 3rem;
            height: 3rem;

            font-size: 3rem;
            line-height: 0;
            cursor: pointer;

            border: 0;
            border-radius: 10%;
        }
        .menu-config {
            position: absolute;
            right: 0;
            top: 4rem;

            width: 10rem;
            height: 7rem;
            background-color: var(--gray-900);
            padding: 2rem 0;

            display: flex;
            justify-content: center;
            border-radius: 4px 0 4px 4px;

            visibility: ${({ isModalActive }) =>
                isModalActive ? "visible" : "hidden"};
            opacity: ${({ isModalActive }) => (isModalActive ? "1" : "0")};

            transition: all 0.15s ease;

            button {
                width: 5rem;
                font-size: 1.6rem;
                &:hover {
                    color: var(--white);
                }
            }
        }
    }

    time {
        font-size: 1.4rem;
        color: var(--gray-400);
    }
`;
