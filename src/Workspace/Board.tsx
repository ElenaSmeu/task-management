import { useContext, useEffect, useState } from "react";
import { createBoard, getBoardsByUser } from "../CRUD/boards";
import AuthContext from "../Context/AuthContext";
import { Board } from "../CRUD/models";
import Button from "../SharedComponents/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function BoardPage() {
    const [boards, setBoards] = useState<Board[]>([]);
    const {currentUser, loading} = useContext(AuthContext);
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
        <div className="flex flex-col p-4">
        <ul>
          {boards.map(board => (
            <li key={board.id} className="flex flex-row">
              <h2>{board.name} -  </h2>
              <p>{board.description}</p>
            </li>
          ))
          }
        </ul>
        <div className="mt-4">
             <Button icon={faPlus}
         label={"Create new Board"} size={"md"} 
         onClick={handleCreateBoard}/>
        </div>
       
        </div>
       
    );
  }
  
  export default BoardPage;