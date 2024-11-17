import styled from "@emotion/styled"
import "../styles/main.css"
import { DefaultProps } from "../interfaces/default-props"
import { Navbar } from "../navbar/navbar"
import { NavBarItem } from "../navbar/navbar-item"
import { Footer } from "../footer/footer"


export const MainLayout = ({children}: DefaultProps) => {
    const Container = styled.div`
        min-height: 100vh;
        width: 100%;
    `
    
    const navBarItems: NavBarItem[] = [
        {path: "/#our-services", text: "Our Services"},
        {path: "/#our-products", text: "Our Products"},
        {path: "/#about-us", text: "About Us"},
        {path: "/#contact-us", text: "Contact Us"}
    ]

    return (
        <Container>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <Navbar navBarItems={navBarItems}/>
            {children}
            <Footer navBarItems={navBarItems}/>
        </Container>
    )
}