import { Card } from "components/Card";
import { CardGeneric } from "components/Card/Card";
import { GridContainer } from "components/Common";
import ig from "assets/brand-1.jpg";
import { ToolTip } from "components/Card/ToolTip";
import { Tag } from "components/Card/Tag";

export default {
  title: "Components/Card",
  component: CardGeneric,
};

const Template = () => (
  <CardGeneric
    top={
      <>
        <img src={ig} alt="img" />
        <Tag tag="hot" />
        <ToolTip name="vinh" qty={20} />
      </>
    }
  />
);
export const category = Template.bind({});
