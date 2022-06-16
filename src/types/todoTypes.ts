export type actionProps = {
    type: string,
    payload: {
        text: string,
        id: string
    }
}

export type todoListProps = [{
    text: string,
    id: number
}]


export type thingsProps = {
    text: string,
    id: string
}