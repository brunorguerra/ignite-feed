import { Container } from "./styles";
import { PencilSimpleLine } from "phosphor-react";

export const Sidebar = () => {
    return (
        <Container>
            <img
                className="cover"
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className="profile">
                <img className="avatar" src="https://github.com/diego3g.png" />

                <strong>Bruno Guerra</strong>
                <span>Frontend Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    <span>Editar seu perfil</span>
                </a>
            </footer>
        </Container>
    );
};
