import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import MakersForm from './MakersForm'

describe("<MakersForm open=false/>", ()=>{
    it('Should not render component', () => {
        const { queryByText } = render(<MakersForm open={false} ></MakersForm>)
        expect(queryByText('Submit')).toBeFalsy()
      })
})

describe('<MakersForm open=true />', () => {
    let component
    beforeEach(()=>{
        component = render(<MakersForm open={true} ></MakersForm>)
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
  })
  describe('Form validation', () => {
    describe("'Full Name' validations", () => {
      it('Should be required', () => {
        expect(component.getByLabelText('Full Name *')).toBeRequired()
      })
    })

    describe("'Telephone' validations", () => {
      it('Should be required', () => {
        expect(component.getByLabelText('Telephone *')).toBeRequired()
      })
      it('Should accept nine digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '666666666' } }))
        expect(component.getByLabelText('Telephone *')).toBeValid()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: 'abcd' } }))
        expect(component.getByLabelText('Telephone *')).not.toBeValid()
      })
      it('Should not accept number starting with 5', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '566666666' } }))
        expect(component.getByLabelText('Telephone *')).not.toBeValid()
      })
      it('Should not accept number shorter than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '66666666' } }))
        expect(component.getByLabelText('Telephone *')).not.toBeValid()
      })
      it('Should not accept number longer than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Telephone *'), { target: { value: '6666666666' } }))
        expect(component.getByLabelText('Telephone *')).not.toBeValid()
      })
    })

    describe("'Email' validations", () => {
      it('Should be required', () => {
        expect(component.getByLabelText('Email *')).toBeRequired()
      })
      it('Should accept proper email address', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Email *'), { target: { value: 'abc@test.com' } }))
        expect(component.getByLabelText('Email *')).toBeValid()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Email *'), { target: { value: 'abcd' } }))
        expect(component.getByLabelText('Email *')).not.toBeValid()
      })
    })

    describe("'Amount' validations", () => {
      it('Should be required', () => {
        expect(component.getByLabelText('Amount *')).toBeRequired()
      })
      it('Should accept only numbers', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: '100' } }))
        expect(component.getByLabelText('Amount *')).toBeValid()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: 'abcd' } }))
        expect(component.getByLabelText('Amount *')).not.toBeValid()
      })
      it('Should accept only numbers starting from 1', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Amount *'), { target: { value: '0' } }))
        expect(component.getByLabelText('Amount *')).not.toBeValid()
      })
    })

    describe("'Additional telephone' validations", () => {
      it('Should accept nine digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '666666666' } }))
        expect(component.getByLabelText('Additional telephone')).toBeValid()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: 'abcd' } }))
        expect(component.getByLabelText('Additional telephone')).not.toBeValid()
      })
      it('Should not accept number starting with 5', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '566666666' } }))
        expect(component.getByLabelText('Additional telephone')).not.toBeValid()
      })
      it('Should not accept number shorter than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '66666666' } }))
        expect(component.getByLabelText('Additional telephone')).not.toBeValid()
      })
      it('Should not accept number longer than 9 digits', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional telephone'), { target: { value: '6666666666' } }))
        expect(component.getByLabelText('Additional telephone')).not.toBeValid()
      })
    })

    describe("'Additional email' validations", () => {
      it('Should accept proper email address', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional email'), { target: { value: 'abc@test.com' } }))
        expect(component.getByLabelText('Additional email')).toBeValid()
      })
      it('Should not accept letters', async () => {
        await wait(() => fireEvent.change(component.getByLabelText('Additional email'), { target: { value: 'abcd' } }))
        expect(component.getByLabelText('Additional email')).not.toBeValid()
      })
    })

    describe("'Information about the donation' validations", () => {
      it('Should be required', () => {
        expect(component.getByLabelText('Information about the donation *')).toBeRequired()
      })
    })
  })
})
