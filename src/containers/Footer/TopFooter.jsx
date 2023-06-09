import styled from "styled-components"
import { v } from "styles/variables"
import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";
import { ReactComponent as Linkedin } from "assets/linkedin.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";
import { GridContainer } from "components/Common";
export const TopFooter = () => {
    return (
        <STable>
            <thead>
                <tr>
                    <th>VINH</th>
                    <th>CATALOG</th>
                    <th>ABOUT US</th>
                    <th>CUSTOMER SERVICES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={4}>Lorem ipsum dolor </td>
                    <td>Necklaces</td>
                    <td>Our Producers</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <td>Hoodies</td>
                    <td>Sitemap</td>
                    <td>Track Your Order</td>
                </tr>
                <tr>
                    <td>Jewelry Box</td>
                    <td>FAQ</td>
                    <td>Product Care & Repair</td>
                </tr>
                <tr>
                    <td>T-shirt</td>
                    <td>About Us</td>
                    <td>Book an Appointment</td>
                </tr>
                <tr>
                    <td>
                        <GridContainer size={4} width="200px">
                            <Facebook/>
                            <Twitter/>
                            <Linkedin/>
                            <Instagram/>
                        </GridContainer>
                    </td>
                    <td>Jacket</td>
                    <td>Terms & Conditions</td>
                    <td>Shipping & Returns</td>
                </tr>

            </tbody>
        </STable>
    )
}
const STable = styled.table`
    text-align: left;
    margin:0 auto;
    width: ${v.contentWidth};
    td, th {
        padding: 8px;
    }
    svg{
        width:20px;
        height:20px;
    }
    padding: 100px 0;
    tr {
        margin-right: 30px;
    }
    td {
        cursor: pointer;
    }
`