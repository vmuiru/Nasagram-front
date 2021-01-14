//import { getAlbums } from '../../services/Apod-api';


  function AlbumView(props) {
    const albums = props.albumData.filter(album => album.media_type === 'image')
      return(
          <div>
           {
            albums.map(album => (
               <img src={album.url} alt={album.title} /> 
            ))
           }
         </div>
     )
  }
    export default AlbumView;