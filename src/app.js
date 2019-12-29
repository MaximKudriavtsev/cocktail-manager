import React, { useState } from 'react';
import Card from './card';
import data from './data';

export default () => {
    const [cocktails] = useState(data);

    return (
        <div style={{ margin: '20px', fontSize: '3rem' }}>
            {cocktails.map(({ title, imageUrl, ingredients }) => (
                <Card
                    title={title}
                    imageUrl={imageUrl}
                    ingredients={ingredients}
                />
            ))}
        </div>
    );
};