// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import { AiOutlineStar } from 'react-icons/ai';
// import styled from 'styled-components';

// const Star = ({ stars, reviews }) => {
//     // Generate an array of star elements based on the `stars` prop
//     const ratingStar = Array.from({ length: 5 }, (elem, index) => {
//         let number = index + 0.5;
//         return (
//             <span key={index}>
//                 {stars >= index + 1 ? (
//                     <FaStar className="icon" />
//                 ) : stars >= number ? (
//                     <FaStarHalfAlt className="icon" />
//                 ) : (
//                     <AiOutlineStar className="icon" />
//                 )}
//             </span>
//         );
//     });

//     return (
//         <Wrapper>
//             <div className='icon-style'>
//                 {ratingStar}
//                 <p>{reviews.length} customer reviews</p>
//             </div>
//             <div className='reviews'>
//                 {reviews.length > 0 ? (
//                     reviews.map((review, index) => (
//                         <div key={index} className="review">
//                             {review}
//                         </div>
//                     ))
//                 ) : (
//                     <div>No reviews yet.</div>
//                 )}
//             </div>
//         </Wrapper>
//     );
// };

// const Wrapper = styled.section`
//     .icon-style {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//         .icon {
//             color: gold;
//             font-size: 1.5rem;
//         }
//     }
//     .reviews {
//         margin-top: 1rem;
//         .review {
//             margin-bottom: 0.5rem;
//         }
//     }
// `;

// export default Star;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

