import { calculateProductQuantity, calculateProductQuantityPerHospital } from './hospitalNeeds'

describe('HospitalNeeds selector', () => {
  describe('calculateProductQuantity', () => {
    const hospitalNeeds = [
      {
        id: 1,
        hospital: {
          id: 2,
          name: "Hospital Central"
        },
        product:  {
          id: 1,
          name: "Masks"
        },
        quantity: 5,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 2,
        hospital: {
          id: 1,
          name: "The hospital"
        },
        product: {
          id: 1,
          name: "Masks"
        } ,
        quantity: 4,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 3,
        hospital: {
          id: 4,
          name: "Hospital4"
        },
        product: {
          id: 2,
          name: "tests"
        },
        quantity: 40,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 3,
        hospital: {
          id: 2,
          name: "Hospital Central"
        },
        product: {
          id: 2,
          name: "tests"
        },
        quantity: 17,
        request_timestamp: '2020-05-24 17:00:00'
      }
    ]
    it('Calculates product quantity correctly', () => {
      expect(calculateProductQuantity(1, hospitalNeeds)).toBe(9)
      expect(calculateProductQuantity(2, hospitalNeeds)).toBe(57)
    })
    it('Returns 0 when product_id is not in the list', () => {
      expect(calculateProductQuantity(3, hospitalNeeds)).toBe(0)
    })
    it('Returns 0 when the hospital needs is an empty array', () => {
      expect(calculateProductQuantity(1, [])).toBe(0)
    })
    it('Returns a null when the hospital needs is undefined', () => {
      expect(calculateProductQuantity(1, undefined)).toBe(null)
    })
  })

  describe('calculateProductQuantityPerHospital', () => {
    const hospitalNeeds = [
      {
        id: 1,
        hospital_id: 1,
        product_id: 1,
        quantity: 3,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 2,
        hospital_id: 2,
        product_id: 1,
        quantity: 4,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 3,
        hospital_id: 2,
        product_id: 1,
        quantity: 6,
        request_timestamp: '2020-05-24 17:00:00'
      },
      {
        id: 3,
        hospital_id: 2,
        product_id: 2,
        quantity: 17,
        request_timestamp: '2020-05-24 17:00:00'
      }
    ]

    // it('Returns product quantity for a given hospital', () => {
    //   expect(calculateProductQuantityPerHospital(1, 1, hospitalNeeds)).toBe(3)
    //   expect(calculateProductQuantityPerHospital(1, 2, hospitalNeeds)).toBe(10)
    // })
    // it('Returns a null when the hospital need is undefined', () => {
    //   expect(calculateProductQuantityPerHospital(1, 1, undefined)).toBe(null)
    // })
  })
})
