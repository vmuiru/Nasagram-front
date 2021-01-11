import { getApod } from '../services/Apod-api';

const Apod = (props) => {
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

