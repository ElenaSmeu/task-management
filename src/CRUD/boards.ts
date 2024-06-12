import { UUID, generateKey } from "crypto";
import {v4 as uuidv4} from "uuid";
import {auth, db} from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import {Board} from "./models";

const boardsCollection = collection(db, 'boards')


export const createBoard = async (name: string
    , description: string, createdBy: UUID) => {
    const newBoard: Board = {
        name, description, createdBy, id : crypto.randomUUID()
    }
    const boardRef = await addDoc(boardsCollection, newBoard);
    return boardRef.id
}

export const getBoardsByUser = async (createdBy: string) => {
    const userbasedQuery = query(boardsCollection, where("createdBy", "==", createdBy)); 
    const snapshot = await getDocs(userbasedQuery);
    const boards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return boards;
}

export const updateBoard = async (boardId: string,  updates: Partial<Board>) => {
    const boardDoc = doc(db, 'boards', boardId);
    await updateDoc(boardDoc, updates);
  };
  
  export const deleteBoard = async (boardId: UUID) => {
    const boardDoc = doc(db, 'boards', boardId);
    await deleteDoc(boardDoc);
  };