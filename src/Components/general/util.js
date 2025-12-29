import jalaali from "jalaali-js";
const persianDate = require("persian-date");

function convertEnglishToPersianDate(englishDate) {
  if (englishDate == "") {
    return "";
  } else {
    let iran = new Date(
      `${englishDate[0]}${englishDate[1]}${englishDate[2]}${englishDate[3]},${englishDate[5]}${englishDate[6]},${englishDate[8]}${englishDate[9]}`
    );

    let startDate = new persianDate(iran).toLocale("en").format();

    let startDate3 = `${startDate[0]}${startDate[1]}${startDate[2]}${startDate[3]}/${startDate[5]}${startDate[6]}/${startDate[8]}${startDate[9]}`;

    return startDate3;
  }
}
function convertPersianToEnglishDate(year, month, day) {
  let newPersianDate = new persianDate([
    parseInt(year),
    parseInt(month),
    parseInt(day),
  ]);
  let newEngDate = new Date(newPersianDate);
  return newEngDate;
}

function convertPersianNumberToEnglishDate(year, month, day) {
  let newPersianDate = new persianDate([
    parseInt(year),
    parseInt(month),
    parseInt(day),
  ]);
  let newEngDate = new Date(newPersianDate);
  return newEngDate;
}

function createTimeWithZero(year, month, day) {
  let newTime = `${year}/${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }`;
  return newTime;
}

function convertEnglishDateToPersianTime(englishDate) {
  let startDate = new persianDate(englishDate).toLocale("en").format();

  let startDate3 = `${startDate[0]}${startDate[1]}${startDate[2]}${startDate[3]}/${startDate[5]}${startDate[6]}/${startDate[8]}${startDate[9]}`;

  return startDate3;
}

function convertEnglishDateToPersianDate(englishDate) {
  let startDate = new persianDate(englishDate).toLocale("en").format();

  let startDate3 = `${startDate[0]}${startDate[1]}${startDate[2]}${startDate[3]}/${startDate[5]}${startDate[6]}/${startDate[8]}${startDate[9]}`;

  return startDate3;
}

function convertPersianToEnglish(persianDate) {
  // Step 1: Split the Persian date
  const [year, month, day] = persianDate.split("/").map(Number);

  // Step 2: Convert Persian date to Gregorian
  const gregorianDate = jalaali.toGregorian(year, month, day);

  // Step 3: Create a JavaScript Date object from the Gregorian date
  const dateObject = new Date(
    gregorianDate.gy,
    gregorianDate.gm - 1,
    gregorianDate.gd
  );

  // Step 4: Return the full date string in the desired format
  return dateObject.toString(); // Formats as: "Mon Aug 26 2024 12:08:13 GMT+0330 (Iran Standard Time)"
}
// function convertEnglishDateToPersianDate(englishDate) {
//   // Ensure the input is a valid JavaScript Date object
//   if (!(englishDate instanceof Date)) {
//     throw new Error("Input must be a JavaScript Date object");
//   }

//   // Create a PersianDate object from the JavaScript Date object
//   const persianDate1 = new persianDate(englishDate).toLocale("en").format();

//   // Format the Persian date as YYYY/MM/DD
//   const formattedDate = persianDate1.format("YYYY/MM/DD");

//   return formattedDate;
// }

function convertEnglishToPersianDateChatGpt(englishDate) {
  let iranDate = new Date(englishDate); // Convert to JavaScript Date

  // Convert the JavaScript Date object to a Persian date
  let persian = new persianDate(iranDate);

  // Set the locale to English to ensure numbers are in English
  persian.toLocale("en");

  // Format the Persian date as "YYYY/MM/DD" with leading zeros
  return persian.format("YYYY/MM/DD");
}

export {
  convertEnglishToPersianDate,
  createTimeWithZero,
  convertPersianNumberToEnglishDate,
  convertEnglishDateToPersianTime,
  convertEnglishDateToPersianDate,
  convertPersianToEnglish,
  convertEnglishToPersianDateChatGpt,
  convertPersianToEnglishDate,
};
