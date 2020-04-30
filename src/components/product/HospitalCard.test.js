import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import HospitalCard from './HospitalCard'

describe('<HospitalCard />', () => {
  let hospitalCard
  beforeEach(() => {
    const hospital = { name: 'Hospital Name', needs: [{ quantity: 50, productsName: 'Mask' }] }
    hospitalCard = render(<HospitalCard hospital ={hospital} key={hospital.name}/>)
  })

  it('Should not show Form Makers dialog', () => {
    expect(hospitalCard.queryByText('Submit')).toBeFalsy()
  })

  it('Should show Form Makers dialog', () => {
    fireEvent.click(hospitalCard.getByText('Contact'))
    expect(hospitalCard.getByText('Submit')).toBeTruthy()
  })
})
