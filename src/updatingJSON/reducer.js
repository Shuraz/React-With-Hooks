export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "RANDOM_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please add item" };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "DELETE_HANDLE") {
    const newPeople = state.people.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item deleted",
    };
  } else {
    return {
      ...state,
      modalContent: "No matching found",
    };
  }
};
