import React, { useState, useEffect } from 'react';
import Services from '../../Services/Services';
import {Link} from 'react-router-dom';
import ImageList from '../ImageList/ImageList';

const HomeHooks = () => {

    const [data, setData] = useState([0]);

    var deleteImageHandler = (id) => {
        Services.deleteImage(id).then(data => setData({data}));
    }

    useEffect(() => {
        console.log('componentDidMount');
        Services.getImages().then(data => setData({data}));
    }, [data]);
        
        if(data !== null || data!== '' || data.count>0)
        {
            return(
                <>
                <Link to="/"><button className="primaryBtn">Logout</button></Link>
                <h1>Image Gallary</h1>
                <div className="container">
                <ImageList data={data}  deleteImageHandler={deleteImageHandler} />
                </div>
                </>
            )
        }
}

export default HomeHooks;