import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";

export const Header = () => {
    return (
        <Container>
            <img src={logoImg} alt="Ignite Feed" />
            <h1>Ignite Feed</h1>
        </Container>
    );
};
