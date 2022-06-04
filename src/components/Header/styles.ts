import styled from "styled-components";

export const Container = styled.header`
    background: var(--gray-800);
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.6rem;
    padding: 2rem 0;

    img {
        height: 6rem;
    }

    h1 {
        font-size: 2.5rem;
    }
`;
