import { Button } from "components/Button";


export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;


export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    background: 'red',
    padding: "18px 26px"
}

export const BlackButton = {
    args: {
      background: "green"
    },
  };