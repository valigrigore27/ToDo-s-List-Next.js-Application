import AppStyles from "@styles/App.module.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import LoginForm from "../pages/LoginForm";
import {
  updateTodo,
  updateCategory,
  addCatAndTodo,
  getAllTodo,
} from "./apiInteractions";

function App() {
  const [isOpenToDo, setIsOpenToDo] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
  const [changeToDo, setChangeToDo] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [addToDo, setAddToDo] = useState("");
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    getAllTodo(setInfos);
  }, []);
  let count = Object.keys(infos).length;
  return (
    <div className={AppStyles.App}>
      <div className={AppStyles["App-header"]}>
        <table className={AppStyles["table"]}>
          <thead>
            <tr>
              <th className={AppStyles["th"]}>No.</th>
              <th className={AppStyles["th"]}>ToDo</th>
              <th className={AppStyles["th"]}>
                <div>Category</div>
                <div>
                  <button
                    onClick={() => setIsOpenAddCategory(true)}
                    className={`${AppStyles["button1-add"]} ${AppStyles["button-add"]}`}
                  >
                    ADD A NEW CATEGORY
                  </button>
                  <Modal
                    open={isOpenAddCategory === true}
                    onClose={() => setIsOpenAddCategory(false)}
                    onSubmit={() => {
                      const newObject = {
                        number: count,
                        todo: addToDo,
                        category: addCategory,
                      };
                      addCatAndTodo(newObject, setInfos);
                    }}
                  >
                    <header className={AppStyles["text"]}>
                      <div className={AppStyles["text"]}>
                        Add a new category...
                      </div>
                      <input
                        className={AppStyles["text-box-category"]}
                        value={addCategory}
                        onChange={(e) => setAddCategory(e.target.value)}
                        placeholder="Write the name of the new category.."
                      />
                      <input
                        className={AppStyles["text-box-category"]}
                        value={addToDo}
                        onChange={(e) => setAddToDo(e.target.value)}
                        placeholder="Write the name of the ToDo.."
                      />
                    </header>
                  </Modal>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {infos.map((element, index) => {
              return (
                <tr key={index}>
                  <td className={AppStyles["td"]}>{element.number}</td>
                  <td className={AppStyles["td"]}>
                    {element.todo}
                    <div>
                      <button
                        onClick={() => setIsOpenToDo(index)}
                        className={`${AppStyles["button1-change"]} ${AppStyles["button-change"]}`}
                      >
                        change
                      </button>

                      <Modal
                        open={isOpenToDo === index}
                        onSubmit={() => {
                          infos[index].todo = changeToDo;
                          updateTodo(index, changeToDo, setInfos);
                        }}
                        onClose={() => setIsOpenToDo(false)}
                      >
                        <header className={AppStyles["text"]}>
                          <h1 className={AppStyles["text"]}>{element.todo}</h1>
                          <p className={AppStyles["text"]}>
                            You can update the name of this "ToDo"...
                          </p>
                          <input
                            className={AppStyles["text-box-todo"]}
                            value={changeToDo}
                            onChange={(e) => setChangeToDo(e.target.value)}
                            type="text"
                            placeholder="Write a new name.."
                          />
                        </header>
                      </Modal>
                    </div>
                  </td>
                  <td className={AppStyles["td"]}>
                    {element.category}
                    <div>
                      <button
                        onClick={() => setIsOpenCategory(index)}
                        className={`${AppStyles["button-change"]} ${AppStyles["button1-change"]}`}
                      >
                        change
                      </button>
                      <Modal
                        open={isOpenCategory === index}
                        onClose={() => {
                          setIsOpenCategory(false);
                        }}
                        onSubmit={() => {
                          infos[index].category = changeCategory;
                          updateCategory(index, changeCategory, setInfos);
                        }}
                      >
                        <div className={AppStyles["text"]}>
                          <div className={AppStyles["text"]}>
                            Change the name of this category...
                          </div>
                          <input
                            className={AppStyles["text-box-category"]}
                            value={changeCategory}
                            onChange={(e) => setChangeCategory(e.target.value)}
                            placeholder="Update the name of category.."
                          />
                        </div>
                      </Modal>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
