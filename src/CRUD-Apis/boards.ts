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
import { Board } from "./models";

const boardsCollection = collection(db, "boards");

export const createBoard = async (
  name: string,
  description: string,
  createdBy: UUID
) => {
  const newBoard: Board = {
    name,
    description,
    createdBy,
    id: crypto.randomUUID() as UUID,
  };
  const boardRef = await addDoc(boardsCollection, newBoard);
  return boardRef.id as UUID;
};

export const getBoardsByUser = async (createdBy: string) => {
  const userbasedQuery = query(
    boardsCollection,
    where("createdBy", "==", createdBy)
  );
  const snapshot = await getDocs(userbasedQuery);
  const boards = snapshot.docs.map((doc) => {
    const boardData = doc.data();
    return {
      id: boardData.id as UUID,
      name: boardData.name,
      description: boardData.description,
      createdBy: boardData.createdBy,
      ...boardData,
    };
  });
  return boards;
};

export const updateBoard = async (boardId: string, updates: Partial<Board>) => {
  const boardDoc = doc(db, "boards", boardId);
  await updateDoc(boardDoc, updates);
};

export const deleteBoard = async (boardId: UUID) => {
  const boardDoc = doc(db, "boards", boardId);
  await deleteDoc(boardDoc);
};
