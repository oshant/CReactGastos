import React from 'react';
import PropTypes from 'prop-types';

Error.propTypes = {
    
};

function Error({mensaje}) {
    return (
        <p className="alert alert-danger error">
            {mensaje}
        </p>
    );
}

export default Error;