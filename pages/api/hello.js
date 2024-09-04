// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fileRead, fileWrite } from "@app/fileInteractions";
import infos from "../../src/info.json";
import users from "../../src/Users.json";
export default function handler(req, res) {
  if (req.method === "POST") {
    handlePost(req, res);
  }
  if (req.method === "PUT") {
    handlePut(req, res);
  }
  if (req.method === "GET") {
    handleGet(req, res);
  }
}

const handlePost = (req, res) => {
  const newToDo = req.body;
  infos.push(newToDo);
  fileWrite(JSON.stringify(infos, null, 4));
  res.status(200).json({ ToDos: infos });
};

const handlePut = (req, res) => {
  const index = req.body.index;
  const type = req.body.type;
  if (type === "todo") {
    const newToDo = req.body.changeToDo;
    infos[index].todo = newToDo;
    fileWrite(JSON.stringify(infos, null, 4));
    res.status(200).json({ ToDos: infos });
  } else {
    const newCat = req.body.changeCategory;
    infos[index].category = newCat;
    fileWrite(JSON.stringify(infos, null, 4));
    res.status(200).json({ ToDos: infos });
  }
};

const handleGet = (req, res) => {
  fileRead((err, data) => {
    if (err) res.status(500).json({ err });
    else res.status(200).json({ ToDos: JSON.parse(data) });
  });
};
