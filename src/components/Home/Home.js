import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Services from '../../Services/Services';
import ImageList from '../ImageList/ImageList';
import './Home.css';
import HomeHooks from './HomeHooks';

export default class Home extends Component {

    // state = {
    //     data: ''
    // }

    // componentDidMount(){
    //     Services.getImages().then(data => this.setState({data}));
    // }

    // componentWillUnmount(){
    //     //alert("Logged out");
    // }

    // deleteImageHandler = (id) => {
    //     Services.deleteImage(id).then(data => this.setState({data}));
    // }

    render() {
        return <HomeHooks />;
        // return (
        //     // <>
        //     //     <Link to="/"><button className="primaryBtn">Logout</button></Link>
                
        //     //     <h1>Image Gallary</h1>
        //     //     <div className="container">
        //     //         <ImageList data = {this.state.data}  deleteImageHandler={this.deleteImageHandler} />
        //     //     </div>
        //     // </>
        // );
    }
}
