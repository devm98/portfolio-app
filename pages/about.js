import React from 'react'
import withAuth from '../components/hocs/withAuth'

function About() {
  return (
    <div>
      <h1>Hello about</h1>
    </div>
  )
}

export default withAuth(About);
