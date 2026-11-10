import profilePic from './assets/siteunde.jpeg'


function ImagePage(){
    return(
          <div className="card">

            <img src= "{profilePic}" alt="profile picture" />
            <h2>Owori Grace</h2>
            <p>I am Studying at Uganda Christian University and love eating.</p>

        </div>
    );
}
export default ImagePage;