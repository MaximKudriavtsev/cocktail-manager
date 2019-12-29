import React from 'react';
import {
    Card, CardImg, CardTitle, CardHeader,
} from 'reactstrap';

const oddRow = {
    backgroundColor: 'rgba(0,0,0,.05)',
};

const evenRow = {
};

const left = {
    display: 'inline-block',
    width: '50%',
    textAlign: 'left',
    padding: '5px 15px',
};

const right = {
    display: 'inline-block',
    width: '50%',
    textAlign: 'right',
    padding: '5 15px',
};


export default ({ title, imageUrl, ingredients }) => {
    return (
        <Card style={{ marginBottom: '40px' }}>
            <CardHeader>
                <CardTitle><h1 style={{ textAlign: 'center', fontSize: '3.5rem' }}>{title}</h1></CardTitle>
            </CardHeader>
            <CardImg top width="100%" src={imageUrl} style={{ objectFit: 'contain', maxHeight: '600px' }} />
            {/* <div style={{ background: `url(${imageUrl})`, backgroundSize: 'cover', width: '100%', height: '250px' }} /> */}
            <div style={{ padding: 0 }}>
                <div className="" style={{ marginBottom: 0 }}>
                    {ingredients.map(([one, two], index) => (
                        <div style={index % 2 === 0 ? oddRow : evenRow}>
                            <div style={left}>{one}</div><div style={right}>{two}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};