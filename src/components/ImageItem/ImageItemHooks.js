import React from 'react';
import Services from '../../Services/Services';

export default function ImageItemHooks(id, imagedata){

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
                    <button className="imageDeleteBtn" onClick={() => removeImage(id)}>Delete</button>
                </div>
            </figure>
            :null
        )
}