const moment = require("moment");
require("moment/locale/fa");
require("moment/locale/en-gb");
const jMoment = require("jalali-moment");

export const generateUpcomingDays = (daysCount, locale = "en") => {
  const days = [];
  const base = locale === "fa" ? jMoment() : moment();

  for (let i = 0; i < daysCount; i++) {
    const day = base.clone().add(i, "days").locale(locale);
    days.push({
      date: day.format("D"),
      month: day.format("MMMM"),
      weekDay: day.format("dddd"),
      day: day
    });
  }

  return days;
}
