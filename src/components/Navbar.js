import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>

    </>
  )
}

Navbar.PropTypes = {title: PropTypes.string.isRequired,
aboutText: PropTypes.string.isRequired,}

Navbar.defaultProps = {
  title: 'see titel here',
  aboutText: 'about here'
};