import './ImageList.css';
import ImageItemHooks from '../ImageItem/ImageItemHooks';
import React,{ useEffect } from 'react';

const ImageListHooks = ({data}) => {
    useEffect(() => {
        console.log('ImageListHooks: componentDidMount');
    }, []);

    useEffect( ()=>{
        console.log("ImageListHooks: componentDidUpdate");
        return ( ()=>{
           console.log('ImageListHooks: componentWillUnmount');
        });
     }, [data]);

    if(data)
    {
        return(
            data.map(item => {
                {/* This function will draw the individual image. */}
                return (
                    <ImageItemHooks key={item.id} imagedata={item}/>
                )
            })
        )
    }
    return null
}

export default ImageListHooks;