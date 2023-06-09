import { Hero } from "components/Hero";


export default {
    title: "Components/Hero",
    component: Hero,
  };
  
  
  const Template = () => (
    <div style={{width:'1320px', height:'648px',display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center', width:'648px',height:'648px'}}>1</div>
            
            <div style={{display:'grid',gridTemplateColumns:'auto auto', rowGap:'24px', columnGap:'24px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'312px'}}>2</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'312px'}}>3</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'312px'}}>4</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'312px'}}>5</div>
            </div>
        </div>
  )
  
  export const test = Template.bind({});
