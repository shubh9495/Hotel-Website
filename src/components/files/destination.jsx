import '../style/destination.css'
import kedarnath from '/kedar.jpeg'
import chopta from '/chopta.jpeg'
import gaurikund from '/gaurikund.jpeg'
import kalimath from '/kalimath.jpeg'
import jakhdhar from '/jakh.jpeg'
import narayankoti from '/narayankoti.jpeg'
import dewar from '/dewar.jpeg'
const destination = () =>{
    return(
        <div className="destinationHeading">
            <h1>Popular Destination</h1>
            <p> Jyotirling Resot situated in the beautiful Rudrapur village with the scenic view of mountains like Chaukhamba , Chopta , and other Himalayan peaks and Tamples like Kalimath , Tunganath , Kalishila , Madhyamaheshwar .</p>
            <div className='destination-box'>
                <div>
                    <h1>Famous Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequuntur laudantium deleniti! Maxime quaerat esse et magni pariatur consectetur minus. Deserunt placeat et temporibus nulla, laborum perspiciatis provident unde accusamus?</p>
                </div>
                <div className="des-image">
                    <a href="https://en.wikipedia.org/wiki/Kedarnath_Temple"><img src={kedarnath}/></a>
                    <a href="https://en.wikipedia.org/wiki/Triyuginarayan_Temple"><img src={chopta}></img></a>
                    <a href="https://en.wikipedia.org/wiki/Kalimath"><img src={kalimath}></img></a>
                    <a href="https://en.wikipedia.org/wiki/Gauri_Kund"><img src={gaurikund}></img></a>
                </div>
            </div>             
            <div className='destination-box'>
                <div className='des-places'>
                   <h1>Famous Local Places</h1>
                   <p>Lorem ipsum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro ipsa nostrum voluptatum! Beatae eligendi, maiores minima quaerat nisi reiciendis nulla debitis repellendus enim! Minus voluptatum earum dolores nihil quas!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a aliquam accusantium sunt nobis, similique quidem aliquid ullam consequatur praesentium officiis id debitis amet ut fuga at labore hic sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis fugiat ad tempore esse dolore nobis? Itaque labore ex, saepe reprehenderit soluta nostrum officiis facilis possimus. Accusantium autem necessitatibus obcaecati. dolor sit amet consectetur adipisicing elit. Distinctio optio consectetur id maiores ad quaerat, vel ipsam magnam quod excepturi?</p>
                </div>
                <div className="des-image">
                    <a href=""><img src={jakhdhar}/></a>
                    <a href=""><img src={dewar}></img></a>
                    <a href=""><img src={narayankoti}/></a>
                    <a href=""><img src={jakhdhar}/></a>

                </div>
            </div> 

        </div>
    )

};
export default destination