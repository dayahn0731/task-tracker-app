import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <button onClick={props.onClick} className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
