import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Board, List } from "../CRUD/models";
import Button from "../SharedComponents/Button";
import { faEllipsis, faEllipsisH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UUID } from "crypto";
import { createList, getListsOfBoard } from "../CRUD/lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Lists(props: {boardId: string}) {
    const [lists, setLists] = useState<List[]>([]);
    const {currentUser, loading} = useContext(AuthContext);
    useEffect(() => {
      const fetchLists = async () => {
        const listsData = await getListsOfBoard(props.boardId);
        console.log(listsData);
        //setLists(listsData);
      };
      fetchLists();
    }, []);
    const handleCreateList = async () => {
        const newListId = await createList('NewList', props.boardId);
        const newList = { id: newListId, name: 'New List', boardId: props.boardId };
        setLists([...lists, newList]);
    }
    return (
        <div className="flex flex-row items-start p-4">
            {lists.map(list => 
              <div className="bg-green-900 border rounded-lg border-gray-800 border-4 w-80 p-4 mr-4">
                  <div className="flex flex-col min-h-56">
                    <div className="flex flex-row text-gray-200 justify-between">
                      <div className="text-lg">{list.name}</div>
                      <FontAwesomeIcon className="cursor-pointer hover:bg-gray-100 hover:text-green-900 rounded p-1" icon={faEllipsisH}></FontAwesomeIcon>
                    </div>
                    <div>{list.boardId}</div>
                  </div>
              </div>

            )}
        <div >
        <Button icon={faPlus}
         label={"Add new list"} 
         size={"sm"}
         buttonType={"secondary"} 
         onClick={handleCreateList}/>
        </div>
        {props.boardId}
       
        </div>
       
    );
  }
  
  export default Lists;