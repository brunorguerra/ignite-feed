import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    padding: 4rem;
    margin-bottom: 3.2rem;

    background-color: var(--gray-800);
    border: 2px solid var(--gray-800);
    border-radius: 8px;

    textarea {
        width: 100%;
        min-height: 10rem;

        margin-top: 3rem;
        padding: 2rem;
        display: block;

        resize: none;

        border: 0;

        border-radius: 8px;

        background: var(--gray-900);
        color: var(--white);
    }

    footer {
        margin-top: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;
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
`;
