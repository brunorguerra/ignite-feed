import styled from "styled-components";

export const Container = styled.aside`
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;

    img.cover {
        width: 100%;
        height: 7.2rem;
        object-fit: cover;
    }

    .profile {
        margin-top: calc(0px - 2.4rem - 6px);
        display: flex;
        flex-direction: column;
        align-items: center;

        img.avatar {
            width: calc(4.8rem + 12px);
            height: calc(4.8rem + 12px);
            border-radius: 0.8rem;
            border: 4px solid var(--gray-800);
            outline: 2px solid var(--green-500);
        }

        strong {
            margin-top: 1.6rem;
            color: var(--gray-100);
            line-height: 1.6;
        }

        span {
            font-size: 1.4rem;
            color: var(--gray-400);
            line-height: 1.6;
        }
    }

    footer {
        border-top: 0.1rem solid var(--gray-600);
        margin-top: 2.4rem;
        padding: 2.4rem 3.2rem 3.2rem;

        a {
            height: 5rem;

            background-color: transparent;
            color: var(--green-500);

            border: 1px solid var(--green-500);
            border-radius: 8px;

            padding: 0 2.4rem;
            font-weight: bold;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;

            text-decoration: none;
            transition: all 0.15s ease;

            &:hover {
                background: var(--green-500);
                color: var(--white);
            }
        }
    }
`;
