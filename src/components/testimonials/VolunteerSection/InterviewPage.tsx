import React from "react";
import { useParams } from "react-router-dom";
import "./InterviewPage.css";

function InterviewPage() {
  const { name, pic, interview } = useParams<{
    name?: string;
    quote?: string;
    pic?: string;
    interview?: string;
  }>();
  const paragraphs = interview
    ? decodeURIComponent(interview).split("\n\n")
    : [];

  if (!name || !pic || !interview) {
    // Handle the case when name or quote is undefined
    return <div>Invalid URL parameters.</div>;
  }

  return (
    <div>
      <h1 className="interview-title">{name}</h1>
      <img
        className="interview-profile"
        src={decodeURIComponent(pic)}
        alt={`${name}'s pic`}
      />
      {paragraphs.map((para, index) => (
        <p className="interview-paragraph" key={index}>
          {para}
        </p>
      ))}
      {/* Display the interview content here */}
    </div>
  );
}
export default InterviewPage;
