import React, { useEffect, useRef, useState } from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  headingFontFamily,
  openTickets,
  criticalFunctionality,
  yesBox,
  noBox,
  assignMentBox,
  affectUserExperience,
  priority,
  lineColor,
  lineWidth,
}) => {
  const boxWrapperRef = useRef(null);
  const yesBoxRef = useRef(null);
  const affectYesBoxRef = useRef(null);
  const affectNoBoxRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const [secondHeight, setSecondHeight] = useState(0);
  const [thirdHeight, setThirdHeight] = useState(0);
  const [fourthHeight, setFourthHeight] = useState(0);

  const [boxWrapper, setBoxWrapper] = useState(0);
  const [yesBoxWidth, setYesBoxWidth] = useState(0);
  const [affectYesBoxWidth, setAffectYesBoxWidth] = useState(0);
  const [affectNoBoxWidth, setAffectNoBoxWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (boxWrapperRef.current) {
        const width = boxWrapperRef.current.clientWidth;
        setBoxWrapper(width);
      }
      if (yesBoxRef.current) {
        const width = yesBoxRef.current.clientWidth;
        setYesBoxWidth(width);
      }
      if (affectYesBoxRef.current) {
        const width = affectYesBoxRef.current.clientWidth;
        setAffectYesBoxWidth(width);
      }
      if (affectNoBoxRef.current) {
        const width = affectNoBoxRef.current.clientWidth;
        setAffectNoBoxWidth(width);
      }
      //height

      if (secondRef.current) {
        setSecondHeight(secondRef.current.getBoundingClientRect().height);
      }
      if (thirdRef.current) {
        setThirdHeight(thirdRef.current.getBoundingClientRect().height);
      }
      if (fourthRef.current) {
        setFourthHeight(fourthRef.current.getBoundingClientRect().height);
      }
    };

    updateWidth();
  }, []);
  const longLine = secondHeight + thirdHeight + fourthHeight;
  const shortLine = thirdHeight + fourthHeight;
  return (
    <div
      className="min-h-screen py-5 flex flex-col items-center justify-center gap-12 w-full"
      style={{
        background: "var(--mainBg)",
        "--lineWidth": lineWidth,
        "--lineColor": lineColor,
      }}
    >
      <div className={classes.header}>
        <h5
          className={classes.subHeading}
          style={{ "--color": header.subHeadingColor }}
        >
          {header.subHeading}
        </h5>
        <h2
          className={classes.heading}
          style={{
            "--color": header.headingColor,
            "--fontFamily": headingFontFamily,
          }}
        >
          {header.heading}
        </h2>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.ticketsWrapper}>
          <div
            className={classes.titleContainer}
            style={{
              "--border": openTickets.titleBorder,
              "--bg": openTickets.titleBg,
            }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": openTickets.titleColor,
              }}
            >
              {openTickets.title}
            </h3>
          </div>
          <div
            className={classes.ticketsContainer}
            style={{ "--bg": openTickets.ticketsContainer.background }}
          >
            {openTickets?.ticketsContainer?.tickets?.map((ticket, i) => (
              <div
                className={classes.box}
                style={{
                  "--bg": ticket.bg,

                  "--border": ticket.border,
                }}
                key={i}
              >
                <p
                  className={classes.ticket}
                  style={{ "--color": ticket.color }}
                >
                  {ticket.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={[classes.ticketsWrapper].join(" ")} ref={secondRef}>
          <div
            className={classes.titleContainer}
            style={{
              "--border": criticalFunctionality.titleBorder,
              "--bg": criticalFunctionality.titleBg,
            }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": criticalFunctionality.titleColor,
              }}
            >
              {criticalFunctionality.title}
            </h3>
          </div>
          <div className={[classes.boxWrapper].join(" ")}>
            <div
              className={[classes.yesBox].join(" ")}
              style={{
                "--bg": yesBox.bg,
              }}
              ref={yesBoxRef}
            >
              <p className={classes.label} style={{ "--color": yesBox.color }}>
                {yesBox.label}
              </p>{" "}
              <div className={[classes.tickets].join(" ")}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.criticalFunctionality === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  "--height": `${longLine}px`,
                  width: boxWrapper - yesBoxWidth,
                }}
                className={[classes.countingWrapper, classes.longLine].join(
                  " "
                )}
              >
                <div
                  className={[classes.noBox].join(" ")}
                  style={{
                    "--bg": noBox.bg,
                  }}
                >
                  <p
                    className={classes.label}
                    style={{ "--color": noBox.color }}
                  >
                    {noBox.label}
                  </p>{" "}
                  <div className={classes.tickets}>
                    {openTickets?.ticketsContainer?.tickets
                      ?.filter(
                        (ticket) => ticket.criticalFunctionality === false
                      )
                      ?.map((ticket, i) => (
                        <div
                          className={classes.box}
                          style={{
                            "--bg": ticket.bg,
                            "--border": ticket.border,
                          }}
                          key={i}
                        >
                          <p
                            className={classes.ticket}
                            style={{ "--color": ticket.color }}
                          >
                            {ticket.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={[classes.assignMentBox].join(" ")}
              style={{
                "--bg": assignMentBox.bg,
                "--height": `${longLine}px`,
              }}
            >
              <p
                className={classes.label}
                style={{ "--color": assignMentBox.color }}
              >
                {assignMentBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.assigntMent === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={[classes.ticketsWrapper].join(" ")} ref={thirdRef}>
          <div
            className={classes.titleContainer}
            style={{
              "--border": affectUserExperience.titleBorder,
              "--bg": affectUserExperience.titleBg,
            }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": affectUserExperience.titleColor,
              }}
            >
              {affectUserExperience.title}
            </h3>
          </div>

          <div
            ref={boxWrapperRef}
            className={[
              classes.boxWrapper,
              classes.affectUserExperienceBoxWrapper,
            ].join(" ")}
          >
            {" "}
            <div style={{ width: yesBoxWidth }}></div>
            <div
              className={[classes.yesBox].join(" ")}
              ref={affectYesBoxRef}
              style={{
                "--bg": yesBox.bg,
              }}
            >
              <p className={classes.label} style={{ "--color": yesBox.color }}>
                {yesBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.affectUserExperience === true)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div
              ref={affectNoBoxRef}
              className={[classes.noBox, classes.shortLine].join(" ")}
              style={{
                "--bg": noBox.bg,
                "--height": `${shortLine}px`,
              }}
            >
              <p className={classes.label} style={{ "--color": noBox.color }}>
                {noBox.label}
              </p>{" "}
              <div className={classes.tickets}>
                {openTickets?.ticketsContainer?.tickets
                  ?.filter((ticket) => ticket.affectUserExperience === false)
                  ?.map((ticket, i) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={i}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ticketsWrapper} ref={fourthRef}>
          <div
            className={classes.titleContainer}
            style={{
              "--border": priority.titleBorder,
              "--bg": priority.titleBg,
            }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": priority.titleColor,
              }}
            >
              {priority.title}
            </h3>
          </div>
          <div className={classes.boxWrapper}>
            {priority.allPriority.map((priority, id) => (
              <div key={id} className={classes.priorityBoxWrapper}>
                <div
                  className={[classes.priorityBox].join(" ")}
                  style={{
                    "--bg": priority.bg,
                  }}
                >
                  <div className={classes.tickets}>
                    {openTickets?.ticketsContainer?.tickets
                      ?.filter((ticket) => priority.label === ticket.priority)
                      ?.map((ticket, i) => (
                        <div
                          className={classes.box}
                          style={{
                            "--bg": ticket.bg,
                            "--border": ticket.border,
                            width: i === 2 && affectNoBoxWidth,
                          }}
                          key={i}
                        >
                          <p
                            className={classes.ticket}
                            style={{ "--color": ticket.color }}
                          >
                            {ticket.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>{" "}
                <p
                  className={classes.label}
                  style={{ "--color": priority.color }}
                >
                  {priority.label}
                </p>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
