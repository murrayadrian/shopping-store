import { Circle } from "components/Circle";

export default {
    title: 'Components/Circle',
    component: Circle,
};

const Template = (args) => (
    <Circle {...args}/>
)

export const avatar = Template.bind({});

avatar.args = {
    radius: '65px'
}