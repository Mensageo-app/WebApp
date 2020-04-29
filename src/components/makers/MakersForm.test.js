import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import MakersForm from './MakersForm'

describe('<MakersForm />', () => {
  describe('Structural tests', () => {
    it('Renders component', () => {
      const { getByText } = render(<MakersForm></MakersForm>)

      expect(getByText('Submit')).toBeTruthy()
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
      const { getByLabelText } = render(<MakersForm></MakersForm>)
      expect(getByLabelText(label)).toBeTruthy()
    })
  })
  describe('Form validation', () => {
      describe("'Full Name' validations", () => {
        it('Should be required',() => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            expect(getByLabelText('Full Name *')).toBeRequired()
          })
      })

      describe("'Telephone' validations", () => {
        it('Should be required',() => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            expect(getByLabelText('Telephone *')).toBeRequired()
          })
        it('Should accept nine digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Telephone *'), { target: { value: '666666666' } }))
            expect(getByLabelText('Telephone *')).toBeValid()
        })
        it('Should not accept letters', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Telephone *'), { target: { value: 'abcd' } }))
            expect(getByLabelText('Telephone *')).not.toBeValid()
        })
        it('Should not accept number starting with 5', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Telephone *'), { target: { value: '566666666' } }))
            expect(getByLabelText('Telephone *')).not.toBeValid()
        })
        it('Should not accept number shorter than 9 digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Telephone *'), { target: { value: '66666666' } }))
            expect(getByLabelText('Telephone *')).not.toBeValid()
        })
        it('Should not accept number longer than 9 digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Telephone *'), { target: { value: '6666666666' } }))
            expect(getByLabelText('Telephone *')).not.toBeValid()
        })
      })

      describe("'Email' validations", () => {
        it('Should be required',() => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            expect(getByLabelText('Email *')).toBeRequired()
          })
        it('Should accept proper email address', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Email *'), { target: { value: 'abc@test.com' } }))
            expect(getByLabelText('Email *')).toBeValid()
        })
        it('Should not accept letters', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Email *'), { target: { value: 'abcd' } }))
            expect(getByLabelText('Email *')).not.toBeValid()
        })
      })

      describe("'Amount' validations", () => {
        it('Should be required',() => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            expect(getByLabelText('Amount *')).toBeRequired()
          })
        it('Should accept only numbers', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Amount *'), { target: { value: '100' } }))
            expect(getByLabelText('Amount *')).toBeValid()
        })
        it('Should not accept letters', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Amount *'), { target: { value: 'abcd' } }))
            expect(getByLabelText('Amount *')).not.toBeValid()
        })
        it('Should accept only numbers starting from 1', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Amount *'), { target: { value: '0' } }))
            expect(getByLabelText('Amount *')).not.toBeValid()
        })
      })

      describe("'Additional telephone' validations", () => {
        it('Should accept nine digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional telephone'), { target: { value: '666666666' } }))
            expect(getByLabelText('Additional telephone')).toBeValid()
        })
        it('Should not accept letters', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional telephone'), { target: { value: 'abcd' } }))
            expect(getByLabelText('Additional telephone')).not.toBeValid()
        })
        it('Should not accept number starting with 5', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional telephone'), { target: { value: '566666666' } }))
            expect(getByLabelText('Additional telephone')).not.toBeValid()
        })
        it('Should not accept number shorter than 9 digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional telephone'), { target: { value: '66666666' } }))
            expect(getByLabelText('Additional telephone')).not.toBeValid()
        })
        it('Should not accept number longer than 9 digits', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional telephone'), { target: { value: '6666666666' } }))
            expect(getByLabelText('Additional telephone')).not.toBeValid()
        })
      })

      describe("'Additional email' validations", () => {
        it('Should accept proper email address', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional email'), { target: { value: 'abc@test.com' } }))
            expect(getByLabelText('Additional email')).toBeValid()
        })
        it('Should not accept letters', async () => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            await wait( () => fireEvent.change(getByLabelText('Additional email'), { target: { value: 'abcd' } }))
            expect(getByLabelText('Additional email')).not.toBeValid()
        })
      })

      describe("'Information about the donation' validations", () => {
        it('Should be required',() => {
            const { getByLabelText } = render(<MakersForm></MakersForm>)
            expect(getByLabelText('Information about the donation *')).toBeRequired()
          })
      })
  })
})
