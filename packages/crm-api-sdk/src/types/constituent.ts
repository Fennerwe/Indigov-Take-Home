import {
    ConstituentAddress,
    CreateConstituentAddressFields,
} from './constituentAddress'

export interface CreateConstituentFields {
    firstName: string
    lastName: string
    email: string
    phone?: string
    constituentAddress?: CreateConstituentAddressFields
}

export interface Constituent extends CreateConstituentFields {
    id: string
    subscribed: boolean
    createdAt: Date
    updatedAt: Date
    constituentAddress?: ConstituentAddress
}
