import React from 'react';
import { useParams } from 'react-router-dom';

const ClientAccountPage = () => {
    let { id } = useParams(); // Access route parameters

    return (
        <div>
            <h2>Client Account Page for ID: {id}</h2>
            {/* Add client account content here based on the ID */}
        </div>
    );
};

export default ClientAccountPage;