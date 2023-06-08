import { Footer } from "containers/Footer"
import { Header } from "containers/Header"

export const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
