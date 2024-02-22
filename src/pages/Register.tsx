import { useState, useContext } from "react";
import { UsersContext } from "../context/usersContext";
import NavBar from "../components/NavBar";

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
  const [alertField, setAlertField] = useState("");

  // ייבוא של הפונקציה מתוך הקונטקס
  const { registerUser } = useContext<any>(UsersContext);

  // בדיקות

  // UserName
  const isUserNameValidCheck = (value: string) => {
    if (value.length === 0) {
      return true;
    }
    const regex = /^[A-Za-z0-9@$!%*?&#^_-]+$/; // Accepts only English letters, numbers, and special characters
    return value.length <= 60 && regex.test(value);
  };

  // FirstName/LastName
  const isFirstNameValidCheck = (value: string) => {
    if (value.length === 0) {
      return true;
    }

    const regex = /^[a-zA-Z]+$/; // Accepts only English alphabetic characters
    return regex.test(value);
  };

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    registerUser({
      userName,
      password,
      img,
      firstName,
      lastName,
      email,
      date,
      city,
      street,
      number,
    });

    // ניקוי הטופס אחרי ההרשמה
    setUserName("");
    setPassword("");
    setPassword2("");
    setImg("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDate("");
    setCity("");
    setStreet("");
    setNumber("");
  }

  return (
    <>
      <NavBar />
      <h1>Register</h1>
      {alertField && <div>{alertField}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Add user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={() =>
            !isUserNameValidCheck(userName)
              ? setAlertField("Please enter a valid user name")
              : setAlertField("")
          }
        />
        <input
          type="password"
          id="password"
          placeholder="Add password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input
          type="file"
          id="img"
          placeholder="Add img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          id="firstName"
          placeholder="Add first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() =>
            !isFirstNameValidCheck(firstName)
              ? setAlertField("Please enter a valid first name")
              : setAlertField("")
          }
        />
        <input
          type="text"
          id="lastName"
          placeholder="Add last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() =>
            !isFirstNameValidCheck(lastName)
              ? setAlertField("Please enter a valid Last name")
              : setAlertField("")
          }
        />
        <input
          type="email"
          id="email"
          placeholder="Add email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          id="date"
          placeholder="Add date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          id="city"
          placeholder="Add city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          id="street"
          placeholder="Add street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="number"
          id="number"
          placeholder="Add number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
