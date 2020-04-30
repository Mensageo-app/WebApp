import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HospitalCard from './HospitalCard'

describe("<HospitalCard />", () =>{
    it("Should point to a contact url", () =>{
        const hospital = {id: "01", name: "Hospital Name"}
        const { getByText } = render(<HospitalCard hospital ={hospital} key={hospital.name}/>)
        expect(getByText('Contact')).toHaveAttribute('href', expect.stringContaining("/contact/01"))
    })
})