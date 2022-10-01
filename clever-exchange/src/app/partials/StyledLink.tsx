import React from 'react'
import { Link } from 'react-router-dom'

interface IStyledLink {
  children: React.ReactNode
  path: string
}

function StyledLink ({ children, path }: IStyledLink) {
  return (
    <React.Fragment>
      <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
        {children}
      </Link>
    </React.Fragment>
  )
}

export default StyledLink
