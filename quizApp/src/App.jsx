import { useState } from "react";
import { useQuizRegisterMutation } from "./quizApi/quizApi";
import axios from "axios";
export default function App() {
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [quizRegister, { isLoading, isError }] = useQuizRegisterMutation(); // Destructure and rename mutate

  //specifying api with axios
  axios.defaults.withCredentials = true;

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(quizRegister);

    await axios
      .post("https://quiz-app-rouge-alpha.vercel.app/register", {
        name,
        educationLevel
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // await quizRegister({ name, educationLevel }).then((data) => {
    //   if (data) {
    //     console.log("login manager...", data);
    //     // navigate("/manager/dashboard");
    //   }
    // });
  }

  return (
    <>
      <div>my First Deployment</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="educationLevel"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </>
  );
}
