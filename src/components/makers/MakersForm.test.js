import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import { Provider } from 'react-redux'
import MakersForm from './MakersForm'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from '../../apis/backend'

const mockStore = configureStore([thunk])
const store = mockStore({})

var mockApi = new MockAdapter(axios)

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

describe('<MakersForm open=false/>', () => {
  it('Should not render component', () => {
    const { queryByText } = render(<Provider store={store}><MakersForm open={false} hospitalNeeds={hospitalNeeds}></MakersForm></Provider>)
    expect(queryByText('Submit')).toBeFalsy()
  })
})

describe('<MakersForm open=true />', () => {
  let component

  beforeEach(() => {
    component = render(<Provider store={store}><MakersForm open={true} hospitalNeeds={hospitalNeeds}></MakersForm></Provider>)
  })
  describe('Structural tests', () => {
    it('Renders component', () => {
      expect(component.getByText('Submit')).toBeTruthy()
    })

    it.each`
            label    
            ${'Full Name *'}
            ${'Telephone *'}
            ${'Email *'}
            ${'Amount *'}
            ${'Information about the donation *'}
            ${'Company'}
            ${'Additional telephone'}
            ${'Additional email'}
             `('should have "$label" entry', ({ label }) => {
      expect(component.getByLabelText(label)).toBeTruthy()
    })

    it('should show the hospital and product in the heading', () => {
      expect(component.getByText((content, element) => content.includes(hospitalNeeds.product.name))).toBeTruthy()
      expect(component.getByText((content, element) => content.includes(hospitalNeeds.hospital.name))).toBeTruthy()
    })
  })

  describe('Form validation', () => {
    describe("'Full Name' validations", () => {
      it('Should be required', () => {
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Name is required')).toBeTruthy()
      })
      it('Should accept valid name', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Full Name *'), { target: { value: 'Full Name' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Name is invalid')).toBeFalsy()
        expect(component.queryByText('Name is required')).toBeFalsy()
      })
    })

    describe("'Telephone' validations", () => {
      it('Should be required', () => {
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is required')).toBeTruthy()
      })
      it('Should accept nine digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '666666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Telephone is invalid')).toBeFalsy()
        expect(component.queryByText('Telephone is required')).toBeFalsy()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: 'abcd' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number starting with 5', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '566666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number shorter than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '66666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number longer than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '6666666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
    })

    describe("'Email' validations", () => {
      it('Should be required', () => {
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Name is required')).toBeTruthy()
      })
      it('Should accept proper email address', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Email *'), { target: { value: 'abc@test.com' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Email address is required')).toBeFalsy()
        expect(component.queryByText('Email address is invalid')).toBeFalsy()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Email *'), { target: { value: 'abcd' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Email address is invalid')).toBeTruthy()
      })
    })

    describe("'Amount' validations", () => {
      it('Should be required', () => {
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Amount is required')).toBeTruthy()
      })
      it('Should accept only numbers', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: '100' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Amount is invalid')).toBeFalsy()
        expect(component.queryByText('Amount is required')).toBeFalsy()
      })
      it('Should accept only numbers starting from 1', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: '0' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Amount is invalid')).toBeTruthy()
      })
    })

    describe("'Additional telephone' validations", () => {
      it('Should accept nine digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '666666666' } }))
        expect(component.queryByText('Telephone is invalid')).toBeFalsy()
        expect(component.queryByText('Telephone is required')).toBeFalsy()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: 'abcd' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number starting with 5', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '566666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number shorter than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '66666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
      it('Should not accept number longer than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '6666666666' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Telephone is invalid')).toBeTruthy()
      })
    })

    describe("'Additional email' validations", () => {
      it('Should accept proper email address', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional email'), { target: { value: 'abcd@test.com' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Email address is invalid')).toBeFalsy()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional email'), { target: { value: 'abcd' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.getByText('Email address is invalid')).toBeTruthy()
      })
    })

    describe("'Information about the donation' validations", () => {
      it('Should be required', () => {
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('This field is required')).toBeTruthy()
      })
      it('Should accept proper information', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Information about the donation *'), { target: { value: 'The description of the product' } }))
        fireEvent.click(component.getByText('Submit'))
        expect(component.queryByText('Name is invalidThis field is required')).toBeFalsy()
      })
    })
  })

  describe('backend call', () => {
    it('should call backend with full form', async (done) => {
      const expectedInput = {
        additionalEmail: 'abcde@test.com',
        additionalPhoneNumber: '666786666',
        quantity: 100,
        company: 'Company',
        donationInfo: 'This is a test',
        email: 'abc@test.com',
        name: 'Name',
        phoneNumber: '666666666',
        hospitalNeedId: 1
      }

      mockApi.onPost('/email', expectedInput).reply(200)

      await wait(() => fireEvent.change(component.getByLabelText('Full Name *'), { target: { value: 'Name' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '666666666' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Email *'), { target: { value: 'abc@test.com' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: '100' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Information about the donation *'), { target: { value: 'This is a test' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Company'), { target: { value: 'Company' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '666786666' } }))
      await wait(() => fireEvent.change(component.getByLabelText('Additional email'), { target: { value: 'abcde@test.com' } }))

      fireEvent.click(component.getByText('Submit'))
      setTimeout(() => { console.log('MockStore: ', store.getActions()); expect(store.getActions()[0]).toEqual({ type: 'SEND_EMAIL', payload: 200 }); done() }, 2000)
      // FIXME: Find how to wait for the event instead of waiting 2 sec
    })
  })
})
