import { getApod } from '../services/Apod-api';

const Apod = (props) => {
    return(
        <div>
            <img src={apodData.url} alt={apodData.title} className="photo" />
            <h2>{props.date}</h2>
        </div>
)};
   
export default Apod;

