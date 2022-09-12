import { v4 as uuid } from "uuid";

let users = [
  {
    id: uuid(),
    name: "John",
    email: "john@gmail.com",
    contact: "1234567890",
  },
  {
    id: uuid(),
    name: "Jane",
    email: "jane@outlook.com",
    contact: "0987654321",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("User added successfully!");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);

  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);

  res.send("User deleted successfully!");
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;

  res.send("User updated successfully!");
};
