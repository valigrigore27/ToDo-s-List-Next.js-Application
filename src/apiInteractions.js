import axios from "axios";

export const updateTodo = (index, changeToDo, setToDos) => {
  axios
    .put("/api/hello", {
      type: "todo",
      index,
      changeToDo,
    })
    .then((response) => {
      setToDos(response.data.ToDos);
    });
};
export const updateCategory = (index, changeCategory, setToDos) => {
  axios
    .put("/api/hello", {
      type: "category",
      index,
      changeCategory,
    })
    .then((response) => {
      setToDos(response.data.ToDos);
    });
};

export const addCatAndTodo = (newObject, setToDos) => {
  axios.post("/api/hello", newObject).then((response) => {
    setToDos(response.data.ToDos);
  });
};
export const getAllTodo = (setToDos) => {
  axios.get("/api/hello").then((response) => {
    setToDos(response.data.ToDos);
  });
};
export const login = (
  username,
  email,
  password,
  action,
  succesFunct,
  errFunct
) => {
  axios
    .post("/api/login", { username, email, password, action })
    .then((response) => {
      if (response.status === 200) succesFunct();
    })
    .catch((err) => {
      errFunct();
    });
};

export const addNewUser = (newUser, setNewUser, action) => {
  axios.post("/api/login", { newUser, action }).then((response) => {
    setNewUser(response.data.USERS);
  });
};
