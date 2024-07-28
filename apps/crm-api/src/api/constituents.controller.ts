import { Express } from 'express'
import z from 'zod'
import { constituentService } from '../services/constituents.service'
import { CsvHeaders, csvService } from '../services/csv.service'

const BASE_PATH = 'constituents'

const CreateConstituentRequest = z.object({
    constituentData: z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        phone: z.string().optional(),
    }),
    address: z
        .object({
            street1: z.string(),
            street2: z.string().optional(),
            street3: z.string().optional(),
            city: z.string(),
            state: z.string(),
            zip: z.string(),
        })
        .optional(),
})

const GetConstituentsBySignupDateRequest = z.object({
    startDate: z.string(),
    endDate: z.string(),
})
export class ConstituentController {
    constructor(app: Express) {
        // Creates or updates a user
        app.post(`/${BASE_PATH}`, async (req, res) => {
            const { constituentData, address } = CreateConstituentRequest.parse(
                req.body
            )

            const constituent = await constituentService.upsertConstituent(
                constituentData,
                address
            )

            return res.status(200).send({
                message: 'Constituent successfully created',
                constituent,
            })
        })

        // Get list of constituents
        app.get(`/${BASE_PATH}`, async (req, res) => {
            const constituentList =
                await constituentService.getConstituentList()

            return res.status(200).send({
                data: constituentList,
            })
        })

        app.get(`/${BASE_PATH}/export`, async (req, res) => {
            const { startDate, endDate } =
                GetConstituentsBySignupDateRequest.parse(req.query)

            const start = new Date(new Date(startDate).setUTCHours(0, 0, 0))
            const end = new Date(new Date(endDate).setUTCHours(23, 59, 59))

            const constituentList =
                await constituentService.getConstituentsBySignupDate(start, end)
            const flattenedConstituentList = constituentList.map((c) => ({
                ...c,
                ...c.constituentAddress,
            }))

            const csvData = csvService.convertDataToCsv(
                flattenedConstituentList,
                getCsvHeadersForConstituents()
            )
            const fileName = `Constituent Signups ${startDate} - ${endDate}.csv`
            res.attachment(fileName).send(csvData)
        })
    }
}

function getCsvHeadersForConstituents(): CsvHeaders {
    return [
        {
            label: 'First Name',
            field: 'firstName',
        },
        {
            label: 'Last Name',
            field: 'lastName',
        },
        {
            label: 'Email',
            field: 'email',
        },
        {
            label: 'Phone',
            field: 'phone',
        },
        {
            label: 'Street',
            field: 'street1',
        },
        {
            label: 'Street2',
            field: 'street2',
        },
        {
            label: 'Street3',
            field: 'street3',
        },
        {
            label: 'City',
            field: 'city',
        },
        {
            label: 'State',
            field: 'state',
        },
        {
            label: 'Zip Code',
            field: 'zip',
        },
        {
            label: 'Subscribed',
            field: 'subscribed',
            transformer: (val: unknown) => {
                const boolVal = val as boolean
                return boolVal ? 'Yes' : 'No'
            },
        },
        {
            label: 'Signup Date',
            field: 'createdAt',
        },
    ]
}
