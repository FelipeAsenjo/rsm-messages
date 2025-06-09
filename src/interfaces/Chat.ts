interface IBaseMessage {
    status: string,
    message: string,
    timestamp: string,
}

export interface IPostMessages {
    message: string,
    sender: string,
    timestamp: number | null,
}

export interface ISavedMessage extends IBaseMessage {
    wasSent: boolean
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