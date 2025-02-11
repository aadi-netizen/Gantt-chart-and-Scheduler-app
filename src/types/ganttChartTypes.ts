// task type
type Task = {
  TaskID: number
  TaskName: string
  PlannedDate: string
  StartDate: string
  EndDate: string
}

// response type
type TaskResponse = {
  list: Task[]
  page: number
  pageSize: number
  totalRows: number
}

// error type
type Error = {
  status: number
  message: string
  errors?: any // Optional field for extra details
}

export type { Task, TaskResponse, Error }
