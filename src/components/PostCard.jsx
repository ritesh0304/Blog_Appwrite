import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage =  () => {
            try {
                const url = appwriteService.getFilePreview(featuredImage);
                setImageUrl(url);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        fetchImage();
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4 bg-red-600' >
                    {imageUrl && <img src={imageUrl} alt={title} className='rounded-xl' />}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;