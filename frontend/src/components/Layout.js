import React, { useEffect, useState } from "react";
import Axios from "axios"

function Layout() {
  const [question, setquestion] = useState("");

  const [ans,setans] = useState("");

  const submitq = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:8080/askQuestion",{question});
      setans(response.data.answer);
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <div>
      <h1>Ask me something</h1> <br/>
      <form method="POST">
        <input
          type="text"
          value={question}
          onChange={(e) => setquestion(e.target.value)}
          placeholder="Enter the question"
        />
        <button onClick={submitq}>Submit</button>
      </form>
      <div>
        <h2>The answer is : </h2>
        <p>{ans}</p>
      </div>
    </div>
  );
}

export default Layout;
