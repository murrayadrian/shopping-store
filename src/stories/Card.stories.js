import { Card, CardGeneric, StyledCardTop } from "components/Card/Card";
import { ToolTip } from "components/Card/ToolTip";
import { Tag } from "components/Card/Tag";
import { GridContainer } from "components/Common";
import topimg from "assets/top-img.jpg"
import { CardBottom } from "components/Card/CardBottom";

export default {
  title: "Components/Card",
  component: CardGeneric,
  component: Card
};
// const product = {
//   id: 1,
//   image: topimg,
//   name: "Adicolor Classics Joggers",
//   category: "Dress",
//   price: 53,
//   qty: 50,
//   tag: "hot"
// }
// const Template = () => (
//   <GridContainer size={4} columngap={20} rowgap={30}>
//     {[...Array(8)].map((x, i) => (
//       <CardGeneric
//         key={i}
//         top={
//           <StyledCardTop>
//             <img src={product.image} alt="img" />
//             <Tag tag={product.tag} />
//             <ToolTip />
//           </StyledCardTop>
//         }
//         bottom={<CardBottom product={product} />}
//       />
//     ))}
//   </GridContainer>
// );
const Template = () => (
  <Card>
    <div style={{display:'flex'}}>
      <h2>title</h2>
      <p>extra</p>
    </div>
  </Card>
)
export const category = Template.bind({});
