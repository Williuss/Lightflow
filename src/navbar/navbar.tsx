import styled from "@emotion/styled";
import { NavBarItem } from "./navbar-item";
import logo from "../assets/logo.png"

interface NavBarProps {
    navBarItems: NavBarItem[]
}

export const Navbar = ({navBarItems}: NavBarProps) => {
    const Nav = styled.nav`
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 3rem;
        align-items: center;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;

    `

    const NavLinkContainer = styled.div`
        display: flex;
        gap: 1.5rem;
    `

    const NavLink = styled.div`
        font-weight: 600;
        a {
            color: white;
        }
    `


    return (
        <Nav>
            <div>
                <img src={logo} width="100px"/>
            </div>
            <NavLinkContainer>
            {navBarItems.map((item, index) => {
                return (
                    <NavLink key={index}>
                        <a href={item.path}>{item.text}</a>
                    </NavLink>
                );
            })}
            </NavLinkContainer>
        </Nav>
    );
}