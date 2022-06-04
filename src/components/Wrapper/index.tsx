import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Container } from "./styles";

export const Wrapper = () => {
    return (
        <Container>
            <Sidebar />
            <Main />
        </Container>
    );
};
