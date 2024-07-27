export interface CreateConstituentAddressFields {
    street1: string
    street2?: string
    street3?: string
    city: string
    state: string
    zip: string
}

export interface ConstituentAddress extends CreateConstituentAddressFields {
    id: string
    createdAt: string
    updatedAt: string
}
