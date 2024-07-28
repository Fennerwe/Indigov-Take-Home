import {
    dbClient,
    Prisma,
    Constituent,
    ConstituentAddress,
} from '@fennerwe-indigov/crm-models'
import { LogType, structuredLog } from '../lib/logging'

const LOG_TAG = 'constituent-service'

const constituentWithAddress =
    Prisma.validator<Prisma.ConstituentDefaultArgs>()({
        include: {
            constituentAddress: true,
        },
    })
type ConstituentWithAddress = Prisma.ConstituentGetPayload<
    typeof constituentWithAddress
>
class ConstituentService {
    async createConstituent(
        constituentData: Prisma.ConstituentCreateWithoutConstituentAddressInput,
        address?: Prisma.ConstituentAddressCreateWithoutConstituentInput
    ): Promise<Constituent> {
        structuredLog({
            type: LogType.Log,
            tag: LOG_TAG,
            message: 'Creating constituent',
            metadata: {
                constituentData,
                address,
            },
        })
        return dbClient.constituent.create({
            data: {
                ...constituentData,
                constituentAddress: {
                    create: address,
                },
            },
        })
    }

    async updateConstituent(
        id: string,
        constituentData: Prisma.ConstituentCreateWithoutConstituentAddressInput
    ): Promise<Constituent> {
        return dbClient.constituent.update({
            where: {
                id,
            },
            data: constituentData,
        })
    }

    async updateConstituentAddress(
        constituentId: string,
        address: Prisma.ConstituentAddressCreateWithoutConstituentInput
    ): Promise<ConstituentAddress> {
        return dbClient.constituentAddress.update({
            where: {
                constituentId,
            },
            data: address,
        })
    }

    async upsertConstituent(
        constituentData: Prisma.ConstituentCreateWithoutConstituentAddressInput,
        address?: Prisma.ConstituentAddressCreateWithoutConstituentInput
    ): Promise<Constituent> {
        const constituent = await dbClient.constituent.findFirst({
            where: {
                OR: [
                    { id: constituentData.id },
                    { email: constituentData.email },
                ],
            },
        })
        if (constituent) {
            structuredLog({
                type: LogType.Log,
                tag: LOG_TAG,
                message: 'Updating constituent',
                metadata: {
                    id: constituent.id,
                    newData: constituentData,
                },
            })
            if (address) {
                await this.updateConstituentAddress(constituent.id, address)
            }
            return this.updateConstituent(constituent.id, constituentData)
        } else {
            return this.createConstituent(constituentData, address)
        }
    }

    async getConstituentById(
        id: string
    ): Promise<ConstituentWithAddress | null> {
        return dbClient.constituent.findUnique({
            where: {
                id,
            },
            include: {
                constituentAddress: true,
            },
        })
    }

    async getConstituentList(
        take?: number,
        orderBy?:
            | Prisma.ConstituentOrderByWithRelationInput
            | Prisma.ConstituentOrderByWithRelationInput[]
    ): Promise<ConstituentWithAddress[]> {
        return dbClient.constituent.findMany({
            include: {
                constituentAddress: true,
            },
            take,
            orderBy,
        })
    }

    async getConstituentsBySignupDate(
        startDate: Date,
        endDate: Date
    ): Promise<ConstituentWithAddress[]> {
        return dbClient.constituent.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                constituentAddress: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
        })
    }
}

export const constituentService = new ConstituentService()
