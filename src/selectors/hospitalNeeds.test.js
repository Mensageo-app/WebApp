import { calculateProductQuantity } from './hospitalNeeds';

describe('HospitalNeeds selector', () => {
    const hospitalNeeds = [
        {
            "id": 1,
            "hospital_id": 2,
            "product_id": 1,
            "quantity":5,
            "request_timestamp": "2020-05-24 17:00:00"
        },
        {
            "id": 2,
            "hospital_id": 1,
            "product_id": 1,
            "quantity":4,
            "request_timestamp": "2020-05-24 17:00:00"
        },
        {
            "id": 3,
            "hospital_id": 4,
            "product_id": 2,
            "quantity":40,
            "request_timestamp": "2020-05-24 17:00:00"
        },
        {
            "id": 3,
            "hospital_id": 2,
            "product_id": 2,
            "quantity":17,
            "request_timestamp": "2020-05-24 17:00:00"
        }
    ];    
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