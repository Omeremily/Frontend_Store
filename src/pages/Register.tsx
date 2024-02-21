import { FormEvent, useState,useContext } from "react";
import { UsersContext } from "../context/usersContext";

export default function Register() {

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");
const [img, setImg] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [date, setDate] = useState("");
const [city, setCity] = useState("");
const [street, setStreet] = useState("");
const [number, setNumber] = useState("");
  
const {users, registerUser} = useContext<any>(UsersContext);


    return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input type="text" id="username" placeholder="Add user name"/>
        <input type="password" id="password" placeholder="Add password"/>
        <input type="password" id="password2" placeholder="Repeat password"/>
        <input type="file" id="img"/>
        <input type="text" id="firstName" placeholder="Add first name"/>
        <input type="text" id="lastName" placeholder="Add last name"/>
        <input type="email" id="email" placeholder="Add email"/>
        <input type="date" id="date"/>
        <input type="text" id="city" placeholder="Add city"/>
        <input type="text" id="street" placeholder="Add street"/>
        <input type="number" id="number" placeholder="Add number"/>
      </form>
    </>
  )
}
