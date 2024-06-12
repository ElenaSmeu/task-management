import { useContext, useEffect, useState } from "react";
import { createBoard, getBoardsByUser } from "../CRUD/boards";
import AuthContext from "../Context/AuthContext";
import { Board } from "../CRUD/models";

function BoardPage() {
    const [boards, setBoards] = useState<Board[]>([]);
    const {currentUser, loading} = useContext(AuthContext);
    console.log(currentUser);
    useEffect(() => {
      const fetchBoards = async () => {
        const boardsData = await getBoardsByUser(currentUser.uid);
        console.log(boardsData);
       // setBoards(boardsData);
      };
      fetchBoards();
    }, []);
    const handleCreateBoard = async () => {
        const newBoardId = await createBoard('New Board', 'Description', currentUser.uid);
        const newBoard = { id: newBoardId, name: 'New Board', description: 'Description', createdBy: currentUser.uid };
        setBoards([...boards, newBoard]);
    }
    return (
        <div>
        <h1>Boards</h1>
        <button onClick={handleCreateBoard}>Create Board</button>
        <ul>
          {boards.map(board => (
            <li key={board.id}>
              <h2>{board.name}</h2>
              <p>{board.description}</p>
            </li>
          ))
          }
        </ul>
      </div>
       
    );
  }
  
  export default BoardPage;