import './app.css'
import profilepic from  './assets/pp.jpg'
function App() {
return(
    <div className="card">

      <img className="pImage" src={profilepic} alt="profile picture" />
      <h2 className='card-title'>Owori Grace</h2>
      <p className='card-text'>
        My Name is Grace and I am a Student in Uganda Christian University.
      </p>
 
    </div>
);


}

export default App
