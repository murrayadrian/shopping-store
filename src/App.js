import { GlobalStyle } from "styles/globalStyles";
import { Home } from "containers/Home";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./containers/Layout";
import { Dashboard } from "containers/Dashboard";
import { NotFound } from "containers/NotFound";

const App = () => {
    return (
        <Layout>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
    )
}
export default App;