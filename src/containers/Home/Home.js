import { Brand } from "components/Brand"
import { BrandBanner } from "components/BrandBanner"
import { Category } from "components/Category"
import { GridProducts } from "components/GridProducts"
import { Newsletter } from "components/Newsletter"
import { SliderProducts } from "components/SliderProducts"
import { TopMain } from "components/TopMain"
import { Footer } from "containers/Footer"
import { Header } from "containers/Header"


export const Home = () => {
    return (
        <>
            <Header />
            <TopMain />
            <Brand />
            <Category />
            <GridProducts />
            <BrandBanner />
            <SliderProducts />
            <Newsletter />
            <Footer />
        </>
    )
}
