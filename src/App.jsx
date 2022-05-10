import React from 'react';
import Button from './Button';
import Incompleted from './Incompleted';
import Completed from './Completed';

function App() {
  const [showTodo, updateShowTodo] = React.useState(false);
  let [note, updateNote] = React.useState('');
  const [noteList, updateNoteList] = React.useState([]);
  const [doneList, updateDoneList] = React.useState([]);

  //onclick on 'Add Note' button
  const addNote = () => {
    updateShowTodo(true);
  };

  //on textarea blur function
  const noteInput = event => {
    note = event.target.value;
    updateNote(note);
  };

  //saving note
  const saveNote = () => {
    let count = 0;
    for (let i = 0; i < noteList.length + 1; i++) {
      if (noteList[i] === note) {
        count++;
      }
    }
    if (count === 0) {
      note && updateNoteList([...noteList, note]);
    }
    updateShowTodo(false);
    updateNote('');
  };

  //cancel Input
  const cancelNote = () => {
    updateNote('');
    updateShowTodo(false);
  };

  console.log("noteList ", noteList);
  console.log("doneList ", doneList);

  //checkbox click of incompleted tasks

  const changeStats = event => {
    console.log('changeStats called');
    for (let i = 0; i < noteList.length; i++) {
      if (noteList[i] === event.target.value) {
        updateDoneList([...doneList, event.target.value]);
        noteList.splice(i, 1);
        updateNoteList(noteList);
      }
    }
  };

  //original todo list
  let html;
  const listHtml = [];
  const showIncompleted = () => {
    console.log('showIncompleted called');
    html = noteList.map(item => (
      <Incompleted name={item} key={item} checkboxClick={changeStats} />
    ));
    listHtml.push(html);
    return listHtml;
  };

  let dHtml;
  const doneHtml = [];
  const showCompleted = () => {
    console.log('showCompleted called');
    dHtml = doneList.map(item => (
      <Completed
        name={item}
        key={item}
        checkboxClick={changeStatsOfCompleted}
      />
    ));
    doneHtml.push(dHtml);
    return doneHtml;
  };

  //checkbox click on completed change states
  const changeStatsOfCompleted = event => {
    console.log('changeStatsOfCompleted called');
    for (let j = 0; j < doneList.length; j++) {
      if (doneList[j] === event.target.value) {
        updateNoteList([...noteList, event.target.value]);
        doneList.splice(j, 1);
        updateDoneList(doneList);
      }
    }
  };

  //html
  return (
    <>
      <div className=" pb-3 ">
        <h2 className=" text-2xl font-semibold p-4  bg-yellow-500">My To-Do list</h2>
        <div className="mt-2">{showIncompleted()}</div>
      </div>
      <div className="bg-yellow-500 flex-col py-3">
        <div className=" flex-col mx-4">
          <h1 className="font-semibold text-2xl mb-2">Create New List</h1>
          <Button onclick={addNote}>Add Note</Button>
        </div>
        {showTodo && (
          <div className="my-3 mx-2 px-3">
            <textarea
              type="text"
              placeholder="type here..."
              id="noteInputField"
              onChange={noteInput}
              className="border-2 border-black mt-3 w-11/12 resize-none"
              rows="8"
            />

            <div className=" flex justify-evenly">
              <div className=" inline">
                <Button onclick={saveNote} theme="primary">
                  Save
								</Button>
              </div>
              <div className="inline">
                <Button onclick={cancelNote} theme="secondary">
                  Cancel
								</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col bg-white justify-between ">


        <div className="pt-3">
          <h2 className=" text-2xl font-semibold p-4  bg-yellow-500 ">Completed Tasks</h2>
          <div className="mt-2">{showCompleted()}</div>
        </div>
      </div>
    </>
  );
}
export default App;
