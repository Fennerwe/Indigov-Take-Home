export enum LogType {
    Debug = 'debug',
    Log = 'log',
    Warn = 'warn',
    Error = 'error',
}

interface StructuredLog {
    type: LogType
    tag: string
    message: string
    metadata?: Record<string, any>
}

export function structuredLog(logData: StructuredLog) {
    console.log(logData)
}
