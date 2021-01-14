import { getApod } from '../services/Apod-api';

const Apod = (props) => {
    if(!props.apodData.media_type ==='image') 
    return (
    <p>{props.apodData.explanation}</p>)
    return(
        <div>
             <img
        src={props.apodData.url}
        alt={props.apodData.title}  
            /> 
            <p>{props.apodData.date}</p>
            <p>{props.apodData.explanation}</p>
    
        </div>
)};
   
export default Apod;

