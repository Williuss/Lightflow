import styled from "@emotion/styled";
import { PrimaryButton } from "./primary-button";
import { ReactNode } from "react";

interface ProductCardProps {
    title: string
    imageURL: string
    children: ReactNode

}

export const ProductCard = ({title, imageURL, children}: ProductCardProps) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
    `;

    const ImageContainer = styled.div`
        display: flex;
        flex-direction: column;
        padding: 1.5rem 0;
        align-items: center;
        gap: 0.5rem;
        img {
            height: 100px;
            object-fit: contain;
            margin: 1rem 0;
        }
    `;
    const DescriptionContainer = styled.div`
        height: 70%;
        position: static;
        bottom: 0;
    `

    return (
        <Container>
            <ImageContainer>
                <p>{title}</p>
                <img src={imageURL}/>
            </ImageContainer>
            <DescriptionContainer>
                {children}
            </DescriptionContainer>
        </Container>
    );
}