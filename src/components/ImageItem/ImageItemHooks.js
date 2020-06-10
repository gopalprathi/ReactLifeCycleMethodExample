import './ImageItem.css';
import React from 'react';
import Services from '../../Services/Services';

{/* This function will draw the individual image. */}
export default function ImageItemHooks({imagedata}){

    function removeImage(id){
        //Services.deleteImage(id);
        console.log(id);
    }

        return (
            (imagedata)?
            <figure className="imgContainer" > 
                <img src={imagedata.cover_photo.urls.small} alt={imagedata.cover_photo.alt_description} />
                <div className="imageInfoBar">
                    <span>{imagedata.cover_photo.likes} Likes</span>
                    <button className="imageDeleteBtn" onClick={() => removeImage(imagedata.id)}>Delete</button>
                </div>
            </figure>
            :null
        )
}