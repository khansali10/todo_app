import React from "react";
function Completed(props) {

  return (
    <div className="flex-row whitespace-pre-line bg-red-300 break-words w-4/5 ml-12">
      <input type="checkbox" checked className="w-4 h-4 accent-yellow-500 hover:ring hover:ring-slate-500 rounded-md" id={props.name} value={props.name} name={props.name} onChange={props.checkboxClick}></input>
      <label className="py-1  text-xl ml-2" htmlFor={props.name}>{props.name}</label>
    </div>
  );
}
export default Completed;