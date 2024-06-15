import { useEffect, useState } from "react";
import { createTask, getTaskOfList } from "../CRUD-Apis/tasks";
import { Task } from "../CRUD-Apis/models";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../SharedComponents/Button";
import { UUID } from "crypto";

function Tasks(props: {listId: UUID}) {
    const [taks, setLists] = useState<Task[]>([]);
    useEffect(() => {
      const fetchTasks = async () => {
        const listsData = await getTaskOfList(props.listId);
        setLists(listsData);
      };
      fetchTasks();
    }, [props.listId]);
    const handleCreateTask = async () => {
        const maxOrderFromCurrentList = taks.reduce((acc, v) => acc < v.order ? v.order : acc , -1);
        const newListId = await createTask('NewList', 'description', props.listId, maxOrderFromCurrentList + 1);
        const newList = { id: newListId, header: 'New List', description: 'description'
            , listId: props.listId, order: maxOrderFromCurrentList };
        setLists([...taks, newList]);
    }
    return (
        <div className="flex flex-col w-full p-4">
            {taks.map(task => 
              <div key={task.id}
                  className="bg-gray-200 opacity-80 shadow-sm rounded-lg w-full p-2 mb-4">
                  {task.header}
                  {task.description}
                  {task.order}
              </div>
            )}
        <div >
        <Button icon={faPlus}
         label={"Add new task"} 
         size={"sm"}
         buttonType={"onbackground"} 
         onClick={handleCreateTask}/>
        </div>
        
        </div>
       
    );
  }
  
  export default Tasks;