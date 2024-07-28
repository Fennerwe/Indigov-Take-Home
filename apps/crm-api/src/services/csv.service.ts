export type CsvHeaders = {
    label: string
    field?: string
    transformer?: (val: unknown) => string
}[]

class CsvService {
    convertDataToCsv(
        data: Record<string, any>[],
        headers: CsvHeaders,
        includeHeaders = true
    ): string {
        const dataArr: string[] = []
        for (const row of data) {
            const rowData: string[] = []
            for (const header of headers) {
                const data = row[header.field ?? header.label]
                if (header.transformer) {
                    rowData.push(header.transformer(data))
                } else {
                    rowData.push(`${data}`)
                }
            }
            dataArr.push(rowData.join(','))
        }

        let csvData = includeHeaders
            ? `${headers.map((header) => header.label).join(',')}\n`
            : ''

        csvData += dataArr.join('\n')

        return csvData
    }
}

export const csvService = new CsvService()
