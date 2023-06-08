import { LinkButton } from "components/Button";
import { ReactComponent as Shopping } from "assets/shopping-bag.svg";

export default {
    title: 'Components/Button',
    component: LinkButton,
};

const Template = (args) => (
    <div style={{ width: '315px', height: '1117px', border:'1px solid black', padding:'0px 89px 0px 67px',boxSizing:'border-box' }}>
        <h3 style={{fontSize:'30px',fontWeight:'600',lineHeight:'40px'}}>Vinh Admin</h3>
        <LinkButton {...args}>LinkButton</LinkButton>
    </div>

)

export const Navbar = Template.bind({});

Navbar.args = {
    icon: <Shopping/>,
    text: "Dashboard"
}

