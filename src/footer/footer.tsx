import styled from "@emotion/styled";
import twitterImg from "../assets/twitter.png"
import facebookImg from "../assets/facebook.png"
import instagramImg from "../assets/instagram.png"
import linkedinImg from "../assets/linkedin.png"
import copyrightImg from "../assets/copyright.png"
import { NavBarItem } from "../navbar/navbar-item";

interface FooterProps {
    navBarItems: NavBarItem[]
}

export const Footer = ({navBarItems}: FooterProps) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #F2F2F2;
    `

    const Row = styled.div`
        display: flex;
        gap: 0.5rem;

        img {
            width: 1rem;
        }
        a {
            font-size: 0.75rem;
            // font-size: 0.5rem;
        }
        
        p {
            font-size: 0.75rem
        }
        
        justify-content: center;
        align-items: center;
    `
    
    
    
    return (
        <Container>
            <Row>
                <img src={twitterImg}/>
                <img src={instagramImg}/>
                <img src={linkedinImg}/>
                <img src={facebookImg}/>
            </Row>
            <Row>
                {navBarItems.map((item, index) => {
                    return (
                        <a href={item.path} key={index}>{item.text}</a>
                    );
                })}
            </Row>
            <Row>
                <p>Light<span style={{color:"#507fab" }}>Flow</span> | <img style={{width: "0.6rem"}} src={copyrightImg}/> 2024</p>
                
            </Row>
        </Container>
    );
}