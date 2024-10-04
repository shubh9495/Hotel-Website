import '../style/view.css'
import out1 from '/outdoor1.jpg'
import out2 from '/outdoor2.jpg'
import out3 from '/outdoor3.jpg'
import out4 from '/outdoor4.jpg'
import out5 from '/outdoor5.jpg'
import out6 from '/outdoor6.jpg'
import out7 from '/outdoor7.mp4'
import food1 from '/food1.jpg'
import food2 from '/food2.jpg'
import food3 from '/food3.jpg'
import food4 from '/food4.jpg'
import food5 from '/food5.jpg'

const View = () => {
    return (
        <div className="view-main">



<div className="outdoor">
                <h1>Outdoors & View</h1> 
                <video width="50%" autoPlay  >
                    <source src={out7} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
                <img src={out4}/>    
                <img src={out5}/>               
                <img src={out6}/>               
                <img src={out3}/>
                <img src={out2}/>
                <img src={out1}/>
                <img src={out1}/>
           
            </div>


            <div className="rooms">
                <h1>Food</h1>
                <img src={food1}/>               
                <img src={food2}/>               
                <img src={food3}/>               
                <img src={food4}/>               
                <img src={food5}/>               

            </div>





        </div>

    )
}

export default View;