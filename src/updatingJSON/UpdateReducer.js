import React, { useReducer, useState } from "react";
import { data } from "./data";
import { reducer } from "./reducer.js";
import Modal from "./Modal";
function UpdateReducer() {
  const initialState = {
    people: data,
    isModalOpen: false,
    modalContent: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //    const [People, setPeople] = useState(data);
  const [stateName, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateName) {
      // setPeople([...People,{id:new Date().getTime().toString(), name:name}]);
      const newPeople={id:new Date().getTime().toString(), name: stateName}
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName('');
    } else {
      console.log(stateName + "FalseRandom....");
      dispatch({ type: "RANDOM_VALUE" });
    }
  };

  const closingModel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_HANDLE", payload: id });
  };
  return (
    <div>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closingModel} />
      )}
      <h1>Update Reducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={stateName}
        />
        <button type="submit">Add on!!</button>
      </form>

      {state.people.map((item) => {
        const { id, name } = item;
        return (
          <div>
            <h1>{name}</h1>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default UpdateReducer;
