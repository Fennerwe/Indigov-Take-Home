import {faker} from '@faker-js/faker'
import { dbClient } from '../../src'
import { ArgumentParser } from 'argparse'
import { subDays } from 'date-fns'

const parser = new ArgumentParser()
parser.add_argument('--numRecords', {
    default: 100
})

async function seedData(): Promise<void> {
    const {numRecords} = parser.parse_args()
    await dbClient.$connect()

    const promises: Promise<any>[] = []

    for(let i = 0; i < numRecords; i++){
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const email = faker.internet.email({
            firstName,
            lastName
        })
        const phoneNumber = Math.random() > .75 ? faker.phone.number() : undefined
        const address = Math.random() > .75 ? {
            street1: faker.location.streetAddress(),
            city: 'Chicago',
            state: 'IL',
            zip: generateIllinoisZipCode()
        } : undefined

        // Mock the signup as being between the current day and 2 months ago
        const signupDate = subDays(new Date(), Math.floor(Math.random() * 60))

        promises.push(dbClient.constituent.create({
            data: {
                firstName,
                lastName,
                email,
                phone: phoneNumber,
                createdAt: signupDate,
                updatedAt: signupDate,
                constituentAddress: {
                    create: address
                }
            }
        }))
    }

    await Promise.all(promises)
}

function generateIllinoisZipCode(): string {
    //IL zip codes are between 60000 and 62999
    return `${Math.floor(Math.random() * 3000 + 60000)}`
}

void seedData()
  .then(async () => {
    await dbClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await dbClient.$disconnect()
    process.exit(1)
  })