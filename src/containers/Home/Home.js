import { Brand } from "components/Brand"
import { BrandBanner } from "components/BrandBanner"
import { Category } from "components/Category"
import { GridProducts } from "components/GridProducts"
import { Newsletter } from "components/Newsletter"
import { SliderProducts } from "components/SliderProducts"
import { Hero } from "components/Hero"


export const Home = () => {
    return (
        <>
            <Hero />
            <Brand />
            <Category />
            <GridProducts />
            <BrandBanner />
            <SliderProducts />
            <Newsletter />

        </>
    )
}
