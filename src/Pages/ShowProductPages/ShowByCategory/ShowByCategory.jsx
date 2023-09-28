import React from 'react';
import { useParams } from 'react-router-dom';

const ShowByCategory = () => {
    const {category} = useParams()
    console.log(category);
    return (
        <div>
                ShowByCategory
        </div>
    );
};

export default ShowByCategory;