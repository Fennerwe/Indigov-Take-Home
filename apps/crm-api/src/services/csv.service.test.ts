import { CsvHeaders, csvService } from './csv.service'

describe('csv service', () => {
    describe('convertDataToCsv', () => {
        it('returns a string in csv format', () => {
            const testData = [
                {
                    firstName: 'test',
                    lastName: 'user1',
                },
                {
                    firstName: 'test',
                    lastName: 'user2',
                },
                {
                    firstName: 'test',
                    lastName: 'user3',
                },
            ]

            const testHeaders: CsvHeaders = [
                {
                    label: 'lastName',
                },
                {
                    label: 'firstName',
                },
            ]

            const expected = `lastName,firstName\nuser1,test\nuser2,test\nuser3,test`

            const actual = csvService.convertDataToCsv(testData, testHeaders)

            expect(actual).toStrictEqual(expected)
        })

        it('works with no data', () => {
            const testHeaders: CsvHeaders = [
                {
                    label: 'lastName',
                },
                {
                    label: 'firstName',
                },
            ]

            const expected = `lastName,firstName\n`
            const actual = csvService.convertDataToCsv([], testHeaders)

            expect(actual).toStrictEqual(expected)
        })

        it('does not include headers', () => {
            const testData = [
                {
                    firstName: 'test',
                    lastName: 'user1',
                },
                {
                    firstName: 'test',
                    lastName: 'user2',
                },
                {
                    firstName: 'test',
                    lastName: 'user3',
                },
            ]

            const testHeaders: CsvHeaders = [
                {
                    label: 'lastName',
                },
                {
                    label: 'firstName',
                },
            ]

            const expected = `user1,test\nuser2,test\nuser3,test`

            const actual = csvService.convertDataToCsv(
                testData,
                testHeaders,
                false
            )

            expect(actual).toStrictEqual(expected)
        })

        it('transforms the values', () => {
            const testData = [
                {
                    firstName: 'test',
                    lastName: 'user1',
                },
                {
                    firstName: 'test',
                    lastName: 'user2',
                },
                {
                    firstName: 'test',
                    lastName: 'user3',
                },
            ]

            const testHeaders: CsvHeaders = [
                {
                    label: 'lastName',
                },
                {
                    label: 'firstName',
                    transformer(val) {
                        return (val as string).toUpperCase()
                    },
                },
            ]

            const expected = `lastName,firstName\nuser1,TEST\nuser2,TEST\nuser3,TEST`

            const actual = csvService.convertDataToCsv(testData, testHeaders)

            expect(actual).toStrictEqual(expected)
        })

        it('uses the field to grab the data', () => {
            const testData = [
                {
                    firstName: 'test',
                    lastName: 'user1',
                },
                {
                    firstName: 'test',
                    lastName: 'user2',
                },
                {
                    firstName: 'test',
                    lastName: 'user3',
                },
            ]

            const testHeaders: CsvHeaders = [
                {
                    label: 'Last Name',
                    field: 'lastName',
                },
                {
                    label: 'First Name',
                    field: 'firstName',
                },
            ]

            const expected = `Last Name,First Name\nuser1,test\nuser2,test\nuser3,test`

            const actual = csvService.convertDataToCsv(testData, testHeaders)

            expect(actual).toStrictEqual(expected)
        })
    })
})
