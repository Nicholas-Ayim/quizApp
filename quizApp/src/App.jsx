import { useState } from "react";
import { useQuizRegisterMutation } from "./quizApi/quizApi";

export default function App() {
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [quizRegister, { isLoading, isError }] = useQuizRegisterMutation(); // Destructure and rename mutate

  function handleSubmit(e) {
    e.preventDefault();
    console.log(quizRegister);

    quizRegister({ name, educationLevel }).then((data) => {
      if (data) {
        console.log("login manager...", data);
        // navigate("/manager/dashboard");
      }
    });
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
