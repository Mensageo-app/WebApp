import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import HospitalCard from './HospitalCard'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

const hospitalNeeds =
{
  id: 1,
  hospital:
   {
     id: 2,
     name: 'The Hospital',
     address: 'Carrer de Villarroel, 170, 08036 Barcelona'
   },
  product:
  {
    id: 1,
    name: 'Blue Thingies',
    icon: 'mask',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  quantity: 5,
  request_timestamp: '2020-05-24 17:00:00'
}

describe('<HospitalCard />', () => {
  let hospitalCard
  beforeEach(() => {
    const store = mockStore({})
    hospitalCard = render(<Provider store={store}> <HospitalCard hospitalNeeds ={hospitalNeeds} key={hospitalNeeds.id}></HospitalCard></Provider>)
  })

  it('Should not show Form Makers dialog', () => {
    expect(hospitalCard.queryByText('Submit')).toBeFalsy()
  })

  it('Should show Form Makers dialog', () => {
    fireEvent.click(hospitalCard.getByText('Contact'))
    expect(hospitalCard.getByText('Full Name')).toBeTruthy()
  })
})
