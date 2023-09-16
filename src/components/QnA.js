import React from "react";
import NavBar from "./NavBar";
import ProfessorsSection from "./ProfSec";

const questionStyle = {
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #4682A9",
  backgroundColor: "#F6F4EB",
  margin: "10px", // Add margin between questions
  marginBottom: "20px",
};

const QnA = () => {
  const handleJoinMeeting = () => {
    // Redirect to the specified URL
    window.location.href =
      "https://abhaymathur21.pythonanywhere.com/videocall/";
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", backgroundColor: "#F6F4EB" }}>
        <ProfessorsSection />
        <div
          style={{
            width: "55%",
            marginLeft: "200px",
          }}
        >
          <div className="questions-container">
            <h1
              style={{
                fontSize: "28px",
                color: "#4682A9",
                fontStyle: "Bold",
                padding: "5px",
                marginLeft: "250px",
                marginBottom: 0,
                marginTop: "-5px",
              }}
            >
              Please answer these!
            </h1>
            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                1. Please briefly describe your current emotions or thoughts as
                you prepare for this class.
              </p>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                placeholder="Your answer"
              />
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                2. How would you describe your mood before this class?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input
                  type="radio"
                  id="Excited"
                  name="capital"
                  value="Excited"
                />
                <label htmlFor="Excited" style={{ padding: "10px" }}>
                  Excited
                </label>
                <input
                  type="radio"
                  id="Neutral"
                  name="capital"
                  value="Neutral"
                />
                <label htmlFor="Neutral" style={{ padding: "10px" }}>
                  Neutral
                </label>
                <input
                  type="radio"
                  id="Anxious"
                  name="capital"
                  value="Anxious"
                />
                <label htmlFor="Anxious" style={{ padding: "10px" }}>
                  Anxious
                </label>
              </div>
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                3. How do you feel about the upcoming class?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input type="radio" id="Eager" name="capital" value="Eager" />
                <label htmlFor="Eager" style={{ padding: "10px" }}>
                  Eager
                </label>
                <input
                  type="radio"
                  id="Indifferent"
                  name="capital"
                  value="Indifferent"
                />
                <label htmlFor="Indifferent" style={{ padding: "10px" }}>
                  Indifferent
                </label>
                <input
                  type="radio"
                  id="Stressed"
                  name="capital"
                  value="Stressed"
                />
                <label htmlFor="Stressed" style={{ padding: "10px" }}>
                  Stressed
                </label>
              </div>
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                4. Is there anything specific on your mind that might affect
                your teaching approach today? Please share any concerns or
                excitement you may have.
              </p>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                placeholder="Your answer"
              />
            </div>

            <div className="question" style={questionStyle}>
              <p style={{ padding: "5px" }}>
                5. On a scale of 1 to 5, with 5 being extremely positive and 1
                being extremely negative, how would you rate your mood right
                now?
              </p>
              <div className="options" style={{ padding: "10px" }}>
                <input type="radio" id="1" name="capital" value="1" />
                <label htmlFor="1" style={{ padding: "10px" }}>
                  1
                </label>
                <input type="radio" id="2" name="capital" value="2" />
                <label htmlFor="2" style={{ padding: "10px" }}>
                  2
                </label>
                <input type="radio" id="3" name="capital" value="3" />
                <label htmlFor="3" style={{ padding: "10px" }}>
                  3
                </label>
                <input type="radio" id="4" name="capital" value="4" />
                <label htmlFor="4" style={{ padding: "10px" }}>
                  4
                </label>
                <input type="radio" id="5" name="capital" value="5" />
                <label htmlFor="5" style={{ padding: "10px" }}>
                  5
                </label>
              </div>
            </div>
            <button
              className="join-meeting-button"
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#4682A9",
                marginLeft: "350px",
                marginTop: "-5px",
              }}
              onClick={handleJoinMeeting}
            >
              Join Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
