import React from 'react';
import ImageItem from '../ImageItem/ImageItem';
import './ImageList.css';

const ImageList = ({ data, deleteImageHandler }) => {
    // console.log("Data from ImageList",data);
    if (data !== '') {
        return (
            data.map(item => {
                return (
                    <ImageItem key={item.id} imagedata={item} deleteImageHandler={deleteImageHandler} />
                )
            })
        )
    }
    return (<div><p>Something Went Wrong</p></div>)
}

export default ImageList;