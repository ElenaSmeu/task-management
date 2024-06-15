import { UUID } from "crypto";

export interface Board {
  name: string;
  createdBy: string;
  id: UUID;
  description: string;
}

export type List = {
  boardId: UUID;
  name: string;
  id: UUID;
};

export type TaskType = "TASK" | "SEPARATOR";

export type Task = {
  id: UUID;
  header: string;
  description: string;
  listId: UUID;
  order: number;
};
