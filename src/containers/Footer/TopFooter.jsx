export const TopFooter = () => {
    return (
        <table style={{ textAlign: 'left',margin:'0 auto',marginTop:'90px', marginBottom:'90px' }}>
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
                    <td rowSpan={3}>Lorem ipsum </td>
                    <td>Necklaces</td>
                    <td>Our Producers</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <td>hoodies</td>
                    <td>Sitemap</td>
                    <td>Track Your Order</td>
                </tr>
                <tr>
                    <td>Jewelry Box</td>
                    <td>FAQ</td>
                    <td>Product Care & Repair</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>t-shirt</td>
                    <td>About Us</td>
                    <td>Book an Appointment</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>jacket</td>
                    <td>Terms & Conditions</td>
                    <td>Shipping & Returns</td>
                </tr>

            </tbody>
        </table>
    )
}
