import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
class navbar extends Component{
    state = {clicked: false};
    handleclick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <nav>
            <Link to="./main" id='logohome' ><img src='/Capture.PNG' id='logo'/></Link>
            <div>
                <ul id='Navbar' className={this.state.clicked ? "#Navbar active" :"#Navbar"}>
                    <li><Link className='active' to="./main">HOME</Link></li>
                    <li><Link to="./View">View</Link></li>
                    <li><Link to="./Gallery">Gallery</Link></li>
                    <li><Link to="./reviews">Reviews</Link></li>
                    <li><Link to="index">Contact</Link></li>
                    <li><Link to="./login">Logout</Link></li>
                </ul>
                
            </div>

            <div id='mobile' onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    );
}
}
export default navbar;