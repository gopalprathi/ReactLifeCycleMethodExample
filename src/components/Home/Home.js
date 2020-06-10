import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import Services from '../../Services/Services';
// import ImageList from '../ImageList/ImageList';
import './Home.css';
import HomeHooks from './HomeHooks';
import HomeComponent from './HomeComponent';

export default class Home extends Component {
    render() {
        return <HomeHooks />
        // return <HomeComponent/>
    }
}
