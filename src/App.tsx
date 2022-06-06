import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
    return (
        <PostsProvider>
            <Header />
            <Wrapper />
        </PostsProvider>
    );
}

export default App;
