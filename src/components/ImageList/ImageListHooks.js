import './ImageList.css';
import ImageItemHooks from '../ImageItem/ImageItemHooks';
import { useEffect } from 'react';

const ImageListHooks = ({data}) => {
    useEffect(() => {
        console.log('ImageListHooks: componentDidMount');
    }, []);

    useEffect(() => {
        console.log("ImageListHooks: componentDidUpdate");
      });

    useEffect( ()=>{
        return ( ()=>{
           console.log('ImageListHooks: componentWillUnmount');
        });
     }, []);

    if(data !== '')
    {
        return(
            data.map(item => {
                return (
                    ImageItemHooks(item.id, item)
                )
            })
        )
    }
    return null
}

export default ImageListHooks;