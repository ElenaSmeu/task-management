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

export const createList = async (name: string, boardId: string) => {
  const newList: List = {
    name,
    id: crypto.randomUUID(),
    boardId,
  };
  const boardRef = await addDoc(listsCollection, newList);
  return boardRef.id;
};

export const getListsOfBoard = async (boardId: string) => {
  const boardBasedQuery = query(
    listsCollection,
    where("boardId", "==", boardId)
  );
  const snapshot = await getDocs(boardBasedQuery);
  const lists = snapshot.docs.map((doc) => {
    const data = doc.data();
    return { id: doc.id, name: data.name, boardId: data.boardId };
  });
  return lists;
};

export const updateList = async (listId: string, updates: Partial<List>) => {
  const listsDoc = doc(db, "lists", listId);
  await updateDoc(listsDoc, updates);
};

export const deleteList = async (listId: UUID) => {
  const listDoc = doc(db, "lists", listId);
  await deleteDoc(listDoc);
};
