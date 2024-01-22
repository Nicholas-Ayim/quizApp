import { useState } from "react";
import { useQuizRegisterMutation } from "./quizApi/quizApi";
export default function App() {
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [quizRegister, { isLoading, isError }] = useQuizRegisterMutation();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(quizRegister);
    quizRegister({
      name,
      educationLevel
    });
  }
  return (
    <>
      <div>my First Deployment</div>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" name="pic" />
        <input
          type="text"
          name="name"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          send
        </button>
      </form>
    </>
  );
}
