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
import { List } from "./models";

const listsCollection = collection(db, "lists");

export const createList = async (name: string, boardId: UUID) => {
  const newList: List = {
    name,
    id: crypto.randomUUID() as UUID,
    boardId,
  };
  const boardRef = await addDoc(listsCollection, newList);
  return boardRef.id as UUID;
};

export const getListsOfBoard = async (boardId: UUID) => {
  const boardBasedQuery = query(
    listsCollection,
    where("boardId", "==", boardId)
  );
  const snapshot = await getDocs(boardBasedQuery);
  const lists = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id as UUID,
      name: data.name,
      boardId: data.boardId as UUID,
    };
  });
  return lists;
};

export const updateList = async (listId: UUID, updates: Partial<List>) => {
  const listsDoc = doc(db, "lists", listId);
  await updateDoc(listsDoc, updates);
};

export const deleteList = async (listId: UUID) => {
  const listDoc = doc(db, "lists", listId);
  await deleteDoc(listDoc);
};
