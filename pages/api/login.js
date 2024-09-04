import { fileWriteUser } from "@app/fileInteractions";
import users from "../../src/Users.json";

export default function handler(req, res) {
  if (req.method === "POST") {
    handlePost(req, res);
  }
}

const handlePost = (req, res) => {
  if (req.body.action === "register") {
    const newUser = req.body.newUser;
    users.push(newUser);
    fileWriteUser(JSON.stringify(users, null, 4));
    res.status(200).json({ USERS: users });
  } else {
    const persons = req.body;

    const cineva = users.filter((element) => {
      return (
        element.name === persons.username &&
        element.email === persons.email &&
        element.password === persons.password
      );
    });

    if (cineva.length == 0) res.status(500).json("NOPE");
    else res.status(200).json("user ok");
  }
};
