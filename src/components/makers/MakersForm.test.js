import React from 'react'
import { render } from '@testing-library/react'
import MakersForm from './MakersForm'

describe("<MakersForm />", () => {

    describe("Structural tests", () => {

        it( "Renders component", () => {

            const {getByText} = render(<MakersForm></MakersForm>)

            expect(getByText("Submit")).toBeTruthy()

        })

        it.each`
            label    
            ${"Full Name *"}
            ${"Telephone *"}
            ${"Email *"}
            ${"Amount *"}
            ${"Information about the donation *"}
            ${"Company"}
            ${"Additional telephone"}
            ${"Additional email"}
             `('should have "$label" entry', ({label}) => {
            const {getByLabelText} = render(<MakersForm></MakersForm>)
            expect(getByLabelText(label)).toBeTruthy()
        });

    })

})

