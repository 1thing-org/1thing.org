import React from "react";
import styled from "styled-components";
import a1 from "../../../assets/home-page/a1.svg";
import a2 from "../../../assets/home-page/a2.svg";
import a3 from "../../../assets/home-page/a3.svg";
import a4 from "../../../assets/home-page/a4.svg";
import backgroundImage from "../../../assets/home-page/action.svg";
import Action from "./Action";

const ActionSectionContainer = styled.div`
  height: 782px;
  background: #ffd800;
  display: flex;
  flex-direction: row;
  min-width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
`;

const ActionLeftSide = styled.div`
  width: 51.5%;
  padding: 8.5vw 0 5.8vw 8vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ActionTitle = styled.h2`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  color: #18181a;
`;

const ActionDescription = styled.p`
  text-align: left;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #18181a;
`;

const ActionContainer = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
`;

const ActionItemImage = styled.img`
  margin-right: 24px;
  width: 5.5vw;
  height: 5.5vw;
`;

const ActionItemText = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #18181a;
`;

const ActionRightSide = styled.div`
  align-self: flex-end;
  width: 49.5%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

function ActionSection() {
  return (
    <ActionSectionContainer>
      <ActionLeftSide>
        <ActionTitle>Small Actions. Big Changes</ActionTitle>
        <ActionDescription>
          By encouraging everyone to make one small but meaningful contribution
          we can create significant change.
        </ActionDescription>
        <ActionContainer>
          <ActionItem>
            <ActionItemImage src={a1} alt="Raise awareness" />
            <ActionItemText>Raise awareness</ActionItemText>
          </ActionItem>
          <ActionItem>
            <ActionItemImage src={a2} alt="Support Victims" />
            <ActionItemText>Support victims of anti-Asian hate</ActionItemText>
          </ActionItem>
          <ActionItem>
            <ActionItemImage src={a3} alt="Use your expertise" />
            <ActionItemText>Use your expertise</ActionItemText>
          </ActionItem>
          <ActionItem>
            <ActionItemImage src={a4} alt="Promote cross" />
            <ActionItemText>Promote cross-racial understanding</ActionItemText>
          </ActionItem>
        </ActionContainer>
      </ActionLeftSide>
      <ActionRightSide />
    </ActionSectionContainer>
  );
}

export default ActionSection;
