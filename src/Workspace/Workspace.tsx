import BoardPage from "./Board";
import Navigation from "./Navigation";


function Workspace() {
   
    return (
      <div className="flex flex-col w-screen h-screen">
        <Navigation />
        <BoardPage />
      </div>
       
    );
  }
  
  export default Workspace;