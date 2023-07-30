import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
    return (
        <pre style={{textAlign: 'right'}}>Ooops! Something went wrong
            <code>
                {JSON.stringify(error, null, 2)}
            </code>
        </pre>
    )
};

ErrorMessage.propTypes = {
    error: PropTypes.any,
};

export default ErrorMessage;