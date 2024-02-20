import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    headingFontFamily: "'Poppins', sans-serif",
    mainBg: "#fff",
    lineColor: "#D0D5DD",
    lineWidth: "1px",

    header: {
      subHeading: "DEVELOPMENT",
      subHeadingColor: "#4E5BA6",
      heading: "Triage Process",
      headingColor: "#000",
    },
    yesBox: {
      bg: "#ECE9FE",
      label: "Yes",
      color: "#475467",
    },
    noBox: { bg: "#EAECF5", label: "No", color: "#475467" },
    assignMentBox: { bg: "#EFF4FF", label: "ASSIGNMENT", color: "#475467" },
    openTickets: {
      title: "OPEN TICKETS",
      titleColor: "#475467",
      titleBorder: "1px solid #D0D5DD",
      titleBg: "#fff",

      ticketsContainer: {
        background: "#EAECF5",
        tickets: [
          {
            label: "Ticket A",
            color: "#000",
            bg: "#FFF",
            border: "1px solid #B3B8DB",
            criticalFunctionality: true,
            priority: "p0",
          },
          {
            label: "Ticket B",
            color: "#000",
            bg: "#FFF",
            border: "1px solid #B3B8DB",
            criticalFunctionality: false,
            affectUserExperience: true,
            priority: "p1",
          },
          {
            label: "Ticket C",
            color: "#000",
            bg: "#FFF",
            border: "1px solid #B3B8DB",
            criticalFunctionality: false,
            affectUserExperience: true,
            priority: "p1",
          },
          {
            label: "Ticket D",
            color: "#000",
            bg: "#FFF",
            border: "1px solid #B3B8DB",
            criticalFunctionality: false,
            affectUserExperience: false,
            priority: "p2",
          },
          {
            label: "Ticket E",
            color: "#000",
            bg: "#FFF",
            border: "1px solid #B3B8DB",
            assigntMent: true,
            priority: "p3",
          },
        ],
      },
    },
    criticalFunctionality: {
      title: "CRITICAL FUNCTIONALITY",
      titleColor: "#475467",
      titleBorder: "1px solid #D0D5DD",
      titleBg: "#fff",
    },
    affectUserExperience: {
      title: "AFFECT USER EXPERIENCE",
      titleColor: "#475467",
      titleBorder: "1px solid #D0D5DD",
      titleBg: "#fff",
    },
    priority: {
      title: "PRIORITY",
      titleColor: "#475467",
      titleBorder: "1px solid #D0D5DD",
      titleBg: "#fff",
      allPriority: [
        {
          bg: "#FDA29B",
          label: "p0",
          color: "#D92D20",
        },
        {
          bg: "#FECDCA",
          label: "p1",
          color: "#D92D20",
        },
        {
          bg: "#FEE4E2",
          label: "p2",
          color: "#D92D20",
        },
        {
          bg: "#FEF3F2",
          label: "p3",
          color: "#D92D20",
        },
      ],
    },

    p0: {
      bg: "#FDA29B",
      label: "P0",
      color: "#D92D20",
    },
    p1: {
      bg: "#FECDCA",
      label: "P1",
      color: "#D92D20",
    },
    p2: {
      bg: "#FEE4E2",
      label: "P2",
      color: "#D92D20",
    },
    p3: {
      bg: "#FEF3F2",
      label: "P3",
      color: "#D92D20",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
