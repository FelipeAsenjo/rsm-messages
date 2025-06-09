interface IBaseMessage {
    status: string,
    message: string,
    timestamp: string,
}

export interface IPostMessages {
    id?: string,
    status: 'sent' | 'success' | 'error' | null,
    message: string,
    sender: string,
    timestamp: string | null,
}

export interface IProcessingInfo {
    function_name: string,
    method: string,
    message_length: number,
}

export interface IMessagesResponse extends IBaseMessage {
    received_from: string,
    received_message: string,
    response: string,
    processing_info: IProcessingInfo
}

export interface IConnectionTest extends IBaseMessage {
    endpoint: string
}

export interface IGetHealth extends IBaseMessage {
    version: string,
}