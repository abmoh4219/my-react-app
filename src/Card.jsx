import profilePic from './assets/photo_2025-01-04_18-08-04.jpg';
function Card() {
    return ( 
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Abdelah Mohammed</h2>
            <p className='card-text'>Fronted Developer</p>
        </div>
     );
}
 
export default Card;