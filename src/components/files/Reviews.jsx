// import React from 'react';
// import Star from './star.jsx';

// const View = ({ stars, reviews }) => {
//     return (
//         <div>
//             <div className="user-rating">
//                 <h1>Give your valuable review</h1>
//                 <Star stars={stars} reviews={reviews} />
//             </div>
//             <div className="all-ratings">
//                 <h1>All Ratings</h1>
//             </div>
//         </div>
//     );
// };

// export default View;

import React from 'react';

const Review = ()=>{
    return(
        <div>

            <h1>Thank you so much for your valuable review . write your review below</h1>
            <input type="text" id='newcmnt' placeholder='enter comment' />
            <button onClick='post()' className='btn'>post</button>
            <span id='postcmnt'></span>
            <script src="/socket.io/socket.io.js"></script>
            <script>
                function post() {
                    document.getElementById("postcmnt").innerHTML("slkdfjdsf")
                }


            </script>
        </div>
    )
}

export default Review;

