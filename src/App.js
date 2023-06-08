import { GlobalStyle } from "styles/globalStyles";
import { Home } from "containers/Home";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./containers/Layout";

const App = () => {
    return (
        <Layout>
            <GlobalStyle />
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </Layout>
    )
}
export default App;