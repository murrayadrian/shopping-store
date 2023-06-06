import { Card } from "components/Card";
import Category2 from "assets/category-2.jpg"
import { CardContainer } from "components/Card";
export default {
  title: "Components/Card",
  component: Card,
};


const Template = (args) => (
  <CardContainer>
    <Card {...args}>Card</Card>;
    <Card {...args}>Card</Card>;
    <Card {...args}>Card</Card>;
    <Card {...args}>Card</Card>;
  </CardContainer>
)

export const category = Template.bind({});

category.args = {
  width: 50,
  height: 50,
  img : Category2,
  isSale: false
};
