import React from 'react'
import withAuth from '../../components/hocs/withAuth'
import PortfolioCreateForm from '../../components/portfolios/PortfolioCreateForm';

function New() {
  return (
    <PortfolioCreateForm />
  )
}

export default withAuth(New);
