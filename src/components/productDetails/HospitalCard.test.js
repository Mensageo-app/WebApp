import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import HospitalCard from './HospitalCard'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('<HospitalCard />', () => {
  let hospitalCard
  beforeEach(() => {
    const hospital = { id: 1, name: 'Hospital Name' }
    const product = { id: 1, name: 'Mask' }
    const store = mockStore({})
    hospitalCard = render(<Provider store={store}> <HospitalCard hospital ={hospital} product={product} key={hospital.name}></HospitalCard></Provider>)
  })

  it('Should not show Form Makers dialog', () => {
    expect(hospitalCard.queryByText('Submit')).toBeFalsy()
  })

  it('Should show Form Makers dialog', () => {
    fireEvent.click(hospitalCard.getByText('Contact'))
    expect(hospitalCard.getByText('FullName')).toBeTruthy()
  })
})
