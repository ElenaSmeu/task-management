import { UUID } from "crypto";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Task } from "./models";

const tasksCollection = collection(db, "tasks");

export const createTask = async (
  header: string,
  description: string,
  listId: UUID,
  order: number
) => {
  const newTask: Task = {
    header,
    description,
    id: crypto.randomUUID() as UUID,
    listId,
    order,
  };
  const taskRef = await addDoc(tasksCollection, newTask);
  return taskRef.id as UUID;
};

export const getTaskOfList = async (listId: UUID) => {
  const boardBasedQuery = query(tasksCollection, where("listId", "==", listId));
  const snapshot = await getDocs(boardBasedQuery);
  const tasks = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id as UUID,
      header: data.header,
      listId: data.listId,
      description: data.description,
      order: data.order,
    };
  });
  return tasks;
};

export const updateList = async (listId: UUID, updates: Partial<Task>) => {
  const tasks = doc(db, "tasks", listId);
  await updateDoc(tasks, updates);
};

export const deleteList = async (listId: UUID) => {
  const tasks = doc(db, "tasks", listId);
  await deleteDoc(tasks);
};
