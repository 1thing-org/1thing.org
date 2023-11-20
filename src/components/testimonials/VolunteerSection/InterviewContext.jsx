import React, { createContext, useState } from "react";

export const InterviewContext = createContext();
export const InterviewProvider = ({ children }) => {
  const [interviewData, setInterviewData] = useState({});

  return (
    <InterviewContext.Provider value={{ interviewData, setInterviewData }}>
      {children}
    </InterviewContext.Provider>
  );
};
