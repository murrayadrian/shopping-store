
import { Header } from "containers/Header";
import { TopMain } from "containers/TopMain";
import { Brand } from "containers/Brand";
import { Category } from "containers/Category";
import { GlobalStyle } from "styles/globalStyles";
import { GridProducts } from "containers/GridProducts";
import { BrandBanner } from "containers/BrandBanner";
import { SliderProducts } from "containers/SliderProducts";
import { Newsletter } from "containers/Newsletter";
import { Footer } from "containers/Footer";
import { Container } from "styles/container";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <TopMain />
                <Brand />
                <Category />
                <GridProducts />
                <BrandBanner />
                <SliderProducts />
                <Newsletter />
                <Footer />
            </Container>
        </>
    )
}
export default App;