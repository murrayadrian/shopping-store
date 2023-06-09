import { Hero } from "components/Hero";


export default {
    title: "Components/Hero",
    component: Hero,
  };
  
  
  const Template = () => (
    <div style={{height:'648px',display:'grid', gridTemplateColumns:'auto auto auto auto', gridTemplateRows:'auto auto'}}>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center', width:'648px',
            gridColumn:'1/ span 2', gridRow:'1 / span 2'}}>1</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>2</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>3</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>4</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>5</div>
        </div>
  )
  
  export const test = Template.bind({});
