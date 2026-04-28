import styled from "styled-components";
import { Link } from "react-router";
import { useState } from "react";

const Head = styled.header`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.muted};
`;

const NavLeft = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavRight = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("light"); // 테마 상태를 저장하는 state

    return (
        <Head>
            <NavLeft>
                <Logo>MyApp</Logo>
                <Nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </Nav>
            </NavLeft>
            <NavRight>
                <Link to={"/auth/login"}>로그인</Link>
                <button
                    onClick={() => {
                        if (theme === "light") {
                            setTheme("dark");
                        } else {
                            setTheme("light");
                        }
                    }}>
                    테마토글
                </button>
            </NavRight>
        </Head>
    );
}

export default Header;
