import Countdown from "react-countdown";
import moment from "moment";
import React from "react";


const CountdownTimer = ({ expirationTime }) => {
  const targetDate = moment.utc(expirationTime);

  if (!targetDate.isValid()) {
    return <span>Invalid expiration time</span>;
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Offer expired!</span>;
    } else {
      return (
        <div className="flex items-center justify-center text-background gap-1">
          <div className="flex items-center justify-center text-foreground p-2 bg-background text-sm w-6 h-6 text-center rounded">
            <span>{days}</span>
          </div>
          :
          <div className="flex items-center justify-center text-foreground p-2 bg-background text-sm w-6 h-6 text-center rounded">
            <span>{hours}</span>
          </div>
          :
          <div className="flex items-center justify-center text-foreground p-2 bg-background text-sm w-6 h-6 text-center rounded">
            <span>{minutes}</span>
          </div>
          :
          <div className="flex items-center justify-center text-foreground p-2 bg-background text-sm w-6 h-6 text-center rounded">
            <span>{seconds}</span>
          </div>
        </div>
      );
    }
  };

  // Pass JS Date object to Countdown component
  return <Countdown date={targetDate.toDate()} renderer={renderer} />;
};

export default CountdownTimer;
