import React, { useState, useEffect } from 'react';
import Services from '../../Services/Services';
import {Link} from 'react-router-dom';
import ImageListHooks from '../ImageList/ImageListHooks';

const HomeHooks = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('HomeHooks: componentDidMount');
        Services.getImages().then(data => setData(data));
    }, []);

    useEffect(() => {
        console.log("HomeHooks: componentDidUpdate");
      });

    useEffect( ()=>{
        return ( ()=>{
           console.log('HomeHooks: componentWillUnmount');
        });
     }, []);
        
        if(data)
        {
            return(
                <>
                <Link to="/"><button className="primaryBtn">Logout</button></Link>
                <h1>Image Gallary</h1>
                <div className="container">
                   {ImageListHooks({data})}
                </div>
                </>
            )
        }
        else
        {
            return(
                <h1>No data present</h1>
            )
        }
}

export default HomeHooks;