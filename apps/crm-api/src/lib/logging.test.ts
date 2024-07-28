import { LogType, structuredLog } from './logging'

describe('logging', () => {
    describe('structuredLog', () => {
        const logSpy = jest.spyOn(console, 'log')

        afterEach(() => {
            jest.clearAllMocks()
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('creates a log with the required fields', () => {
            const testTag = 'TEST'
            const testType = LogType.Warn
            const testMessage = 'A test message'
            const testMetadata = {
                val1: 'val1',
                val2: true,
                val3: 100,
            }
            structuredLog({
                tag: testTag,
                type: testType,
                message: testMessage,
                metadata: testMetadata,
            })

            expect(logSpy).toHaveBeenCalledWith({
                tag: testTag,
                type: testType,
                message: testMessage,
                metadata: testMetadata,
            })
        })
    })
})
