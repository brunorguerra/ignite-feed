import styled from "styled-components";

interface ImageProps {
    hasBorder: boolean;
}

export const Image = styled.img<ImageProps>`
    width: ${({ hasBorder }) => (hasBorder ? "calc(4.8rem + 12px)" : "4.8rem")};
    height: ${({ hasBorder }) =>
        hasBorder ? "calc(4.8rem + 12px)" : "4.8rem"};
    border-radius: 0.8rem;
    border: ${({ hasBorder }) =>
        hasBorder ? "4px solid var(--gray-800)" : "0"};

    outline: ${({ hasBorder }) =>
        hasBorder ? "2px solid var(--green-500)" : "0"};
`;
