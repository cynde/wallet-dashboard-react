import React from 'react';
import PropTypes from 'prop-types';

const ErrorPresentation = ({errorMessage}) => {
    return (
        <div className="error">
            <h1>{errorMessage}</h1>
        </div>
    );
};

ErrorPresentation.defaultProps = {
    errorMessage: ''
};

ErrorPresentation.propTypes = {
    errorMessage: PropTypes.string
};

export default ErrorPresentation;
