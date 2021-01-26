import styled from 'styled-components';

const Styledpage = styled.div `
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  img {
    margin-top: 15px;
    width: 80vw;
    height: 80vh;
    box-shadow: 3px 3px 3px 3px #363537;   
}
p {
    padding: 4px;
    align-items: center;
    width: 90vw;
}
}

`;

const Apod = (props) => {
    if(!props.apodData.media_type ==='image') 
    return (
    <p>{props.apodData.explanation}</p>)
    return(
        <Styledpage>
        <div>
             <img
        src={props.apodData.url}
        alt={props.apodData.title}  
            /> 
            <p 
            className='animate__animated animate__rotateInUpRight animate__delay-3s'>
                {props.apodData.explanation}</p>
    
        </div>
        </Styledpage>
)};
   
export default Apod;

