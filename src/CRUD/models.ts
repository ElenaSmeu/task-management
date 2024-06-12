export interface Board {
    name: string,
    createdBy: string,
    id: string,
    description: string
}

export type List = {
    boardId: string,
    name: string,
    id: string
}

export type TaskType = "TASK" | "SEPARATOR"

export type Task = {
    id: string,
    header : string,
    description: string,
    list: string, 
    listIndex: number
}

 