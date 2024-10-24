
import './bottle.css'
const Bottle = ({bottle,getBottls}) => {
   const {name,price,img}=bottle;
   
   return (
        <div className='bottle-cards'>
          <img src={img} alt="" />
          <p> Name : {name}</p>
          <p style={{marginTop:'6px'}}> Price :${price}</p>
          <button onClick={()=>getBottls(bottle)}>Add to Card</button>
        </div>
    );
};

export default Bottle;