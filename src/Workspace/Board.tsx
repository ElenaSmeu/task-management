import { useContext, useEffect, useState } from "react";
import { createBoard, getBoardsByUser } from "../CRUD-Apis/boards";
import AuthContext from "../Context/AuthContext";
import { Board } from "../CRUD-Apis/models";
import Button from "../SharedComponents/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UUID } from "crypto";
import Lists from "./Lists";

function BoardPage() {
    const [boards, setBoards] = useState<Board[]>([]);
    const {currentUser, loading} = useContext(AuthContext);
    const [selectedBoard, setSelectedBoard] = useState<UUID>();
    useEffect(() => {
      const fetchBoards = async () => {
        const boardsData = await getBoardsByUser(currentUser.uid);
        console.log(boardsData);
        const firstElementIdFromData = boardsData[0].id
        setSelectedBoard(firstElementIdFromData);
        setBoards(boardsData);
      };
      fetchBoards();
    }, []);
    const handleCreateBoard = async () => {
        const newBoardId = await createBoard('New Board', 'Description', currentUser.uid);
        const newBoard = { id: newBoardId, name: 'New Board', description: 'Description', createdBy: currentUser.uid };
        setBoards([...boards, newBoard]);
    }
    return (
        <div className="flex flex-col">
          <div className="flex flex-row w-full items-center px-4 pt-4">
            <select value={selectedBoard} className="px-4 py-2 mr-4 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer w-80"
                onChange= {e => setSelectedBoard(e.target.value as UUID)} >
              {
                boards.map(board => 
                (<option value={board.id}>{board.name}</option>)
                )
              }
            </select>
            <div >
                <Button icon={faPlus}
            label={"Create new Board"} 
            buttonType={"secondary"}
            size={"sm"} 
            onClick={handleCreateBoard}/>
            </div>
        </div>
          { selectedBoard ? <Lists boardId={selectedBoard}/> : <div></div>}
        </div>
    );
  }
  
  export default BoardPage;