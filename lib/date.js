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

export const formatDate = (date) => {
  return moment(date).format("MMMM Do, YYYY")
}

export const getRemainingTime = (expiryDate) => {
  const now = moment();
  const expiry = moment(expiryDate);

  if (!expiry.isValid()) return "Invalid date";

  if (expiry.isBefore(now)) return null;

  const duration = moment.duration(expiry.diff(now));

  const totalHours = Math.floor(duration.asHours());
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  if (days > 0) {
    return { days, hours };
  } else {
    return { hours: totalHours };
  }
};
