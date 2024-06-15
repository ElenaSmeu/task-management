import {useEffect, useState } from "react";
import { Board, List } from "../CRUD-Apis/models";
import Button from "../SharedComponents/Button";
import { faEllipsisH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { createList, getListsOfBoard } from "../CRUD-Apis/lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tasks from "./Tasks";
import { UUID } from "crypto";

function Lists(props: {boardId: UUID}) {
    const [lists, setLists] = useState<List[]>([]);
    useEffect(() => {
      const fetchLists = async () => {
        const listsData = await getListsOfBoard(props.boardId);
        setLists(listsData);
      };
      fetchLists();
    }, [props.boardId]);
    const handleCreateList = async () => {
        const newListId = await createList('NewList', props.boardId);
        const newList = { id: newListId, name: 'New List', boardId: props.boardId };
        setLists([...lists, newList]);
    }
    return (
        <div className="flex flex-row w-screen overflow-x-auto items-start p-4">
            {lists.map(list => 
              <div key={list.id} className="bg-green-900 border rounded-lg border-gray-800 border-4 min-w-80 mr-4">
                  <div className="flex flex-col min-h-56">
                    <div className="flex flex-row text-gray-200 justify-between p-4">
                      <div className="text-lg">{list.name}</div>
                      <FontAwesomeIcon className="cursor-pointer hover:bg-gray-100 hover:opacity-50 hover:text-green-900 rounded p-1" icon={faEllipsisH}></FontAwesomeIcon>
                    </div>
                    <Tasks listId={list.id}/>
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
        </div>
       
    );
  }
  
  export default Lists;