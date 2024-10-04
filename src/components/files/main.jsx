import mainvideo from '/video.mp4'
// import mainvideo2 from '/video2.mp4'
// import mainvideo3 from '/video3.mp4'
import '../style/main_content.css';
import Destination from './destination';
function Main(){
    return(
        <div id="vid">
            <div>
            <video width="100%" autoPlay muted >
                    <source src={mainvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
                {/* <video width="100%" autoPlay muted >
                   <source src={mainvideo2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>            
               
                <video width="100%" autoPlay muted >
                    <source src={mainvideo3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

            </div>
            <div className='book-now'>Book Now</div>
            <div className='tag-line'>
                <div className='slogan'>Jyotirling Resort </div>
                <div>Experience Divine Serenity in the Heart of the Himalayas - Your Gateway to Lord Shiva's Abode</div>
            </div>
            <Destination/>
        </div>
        
        
    )

}
export default Main;