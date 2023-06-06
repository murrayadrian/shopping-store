import image from "assets/category-2.jpg";
import { Card } from "components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Card {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Card>
);

export const category = Template.bind({});

category.args = {
  image: "abc",
};
