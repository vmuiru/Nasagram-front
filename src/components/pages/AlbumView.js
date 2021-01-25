import styled from 'styled-components';

const StyledAlbumView = styled.div `
div {
  display: flex;
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: center;
  width: 95vw;
img { 
    margin-top: 10px;
    padding: 5px;
    height: 45vh;
    width: 40vw;
  }
}

`;


  function AlbumView(props) {
    const albums = props.albumData.filter(album => album.media_type === 'image')
    function showExplanation(album) {
      return(
        <div className='detail' style={'display: contents'}>
          {album.date && album.explanation}
      </div>
      )
    }
      return(
          <StyledAlbumView>
            <div>
           {
            albums.map(album => (
               <img
               onMouseOver={() => showExplanation(album)}
               key={album.url} 
               src={album.url} 
               alt={album.title}
                /> 
            
              
            ))
           }

           </div>
         </StyledAlbumView>
     )
  }
    export default AlbumView;