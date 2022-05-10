import React from "react";
function Button(props){
  let className = "text-white bg-slate-800 hover:bg-black ";
  
  if(props.theme === "secondary"){
    className = "text-black bg-white hover:bg-slate-200 ";
  }
  
  return (
     <button className={"py-1 px-6 text-lg font-semibold border border-black rounded-full drop-shadow-xl " + className} onClick={props.onclick}>{props.children}</button>
  
  );
}
export default Button;