import { useState } from "react";

import Clock from "react-clock";
import TimezoneSelect, { allTimezones } from "react-timezone-select"

import LayoutDashboard from '../layout/layoutDashboard';
import UseTimeZone from "../hooks/useTimeZone";

import "react-clock/dist/Clock.css";

const TimeZone = () => {

  const [selectedTimezone, setSelectedTimezone] = useState({
  value: "Pacific/Fiji",
  label: "(GMT+13:00) Fiji Islands",
  offset: 13,
  abbrev: "FJT",
  altName: "Fiji Summer Time"
})

  const { currentDate } = UseTimeZone()
  const { currentDate : customDate } = UseTimeZone(selectedTimezone.offset)

  return (
    <LayoutDashboard title={"Time Zone"}>
      <section className="timezone-container">

        <div className="timezone__item">
          <h3>Current</h3>
          <Clock
            value={currentDate}
            renderNumbers={true}
            size={200}
          />
        </div>

        <div className="timezone__item">
          <h3>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
            timezones={allTimezones}
          />
          </h3>
         
          <Clock
            value={customDate}
            renderNumbers={true}
            size={600}
          />
        </div>
  

      </section>
    </LayoutDashboard >
  );
};

export default TimeZone;