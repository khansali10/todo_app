import React from "react";
function Incompleted(props){
    
  return (
    <div className="flex-row items-center whitespace-pre-line  break-words  w-4/5 ml-12">
      <input type="checkbox" id={props.name} className="w-4 h-4 
 hover:ring hover:ring-yellow-400  "  value={props.name} name={props.name} onChange={props.checkboxClick}></input>
      <label className="py-1 text-xl ml-2" htmlFor={props.name}>{props.name}</label>
    </div>
  );
}
export default Incompleted;