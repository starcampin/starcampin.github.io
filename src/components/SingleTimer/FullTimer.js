import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TitleBar from "./TitleBar";
import TimeButtons from "./TimeButtons";
import * as utils from "../utils";
import "../../index.css";

export default function FullTimer(props) {
  let { expiryTimestamp, updateTimeoutSeconds, removeTimer, id, isHidden, checkin } =
    props;

  const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      autoStart: true,
      expiryTimestamp,
      onExpire: () => {
        let time = utils.parseTime(input);
        restart(time);
        pause();
        utils.playAudio(id);
      },
    });

  const clockValues = [hours, minutes, seconds];

  const [input, setInput] = useState(utils.getInputStorage(id));

  useEffect(() => {
    localStorage.setItem(`input ${id}`, JSON.stringify(input));
    // eslint-disable-next-line
  }, [input]);

  if (isHidden) return <></>;

  function TimerBody() {
    return (
      <div className="clock buttons">
        <div className="actual-timer">
          {clockValues.map((item, index) => (
            <>
              <div>{item < 10 ? `0${item}` : item}</div>
              {index === clockValues.length - 1 ? "" : ":"}
            </>
          ))}
        </div>
        <TimeButtons
          pause={() => pause()}
          resume={() => resume()}
          restart={(time) => restart(time)}
          isRunning={() => isRunning}
          clockValues={() => clockValues}
          input={() => input}
        />
      </div>
    );
  }

  return (
    <section className="wrapper">
      <TitleBar id={id} removeTimer={removeTimer} checkin={checkin}/>
      <LocalizationProvider dateAdapter={AdapterDateFns}>

      </LocalizationProvider>
      <TimerBody />
      <hr />
    </section>
  );
}
