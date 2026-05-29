import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";

function ReadyPage() {
  const { number } = useParams();
  const navigate = useNavigate();

  function handleGo() {
    navigate(`/question/${number}/play`);
  }

  return (
    <div className="card">
      <img src={logo} alt="AQUALAND" className="app-logo" />

      <h1>AQUAQUIZZ</h1>

      <h2>Question {number}</h2>

      <div className="intro-box">
        <p>
          Es-tu prêt ?
        </p>

        <p>
          Le chrono démarrera uniquement lorsque tu appuieras sur GO.
        </p>
      </div>

      <button onClick={handleGo}>
        GO
      </button>
    </div>
  );
}

export default ReadyPage;
