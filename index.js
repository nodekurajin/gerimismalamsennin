const { program } = require('commander');
const chineseLunar = require('chinese-lunar-calendar'); // Requires installation: npm install chinese-lunar-calendar
const hijriConverter = require('hijri-converter'); // Requires installation: npm install hijri-converter

program
  .version('0.1.0')
  .arguments('<gregorianDate>')
  .action((gregorianDate) => {
    try {
      // Parse Gregorian date (YYYY-MM-DD format)
      const dateParts = gregorianDate.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Months are 0-indexed
      const day = parseInt(dateParts[2], 10);

      // Validate date format
      if (isNaN(year) || isNaN(month) || isNaN(day) || !isValidGregorianDate(year, month, day)) {
        throw new Error('Invalid Gregorian date format (YYYY-MM-DD)');
      }

      // Convert to Chinese Lunar date
      const lunarDate = chineseLunar.solarToLunar(year, month + 1, day); // Months are 1-indexed for chinese-lunar-calendar

      // Convert to Islamic Hijri date
      const hijriDate = hijriConverter.toHijri(year, month + 1, day); // Months are 1-indexed for hijri-converter

      console.log(`Gregorian Date: ${gregorianDate}`);
      console.log(`Chinese Lunar Date: ${lunarDate.year}年${lunarDate.monthText}${lunarDate.dayText}`);
      console.log(`Islamic Hijri Date: ${hijriDate.day}/${hijriDate.month}/${hijriDate.year} AH`);
    } catch (error) {
      console.error(error.message);
    }
  })
  .parse();

// Function to check for valid Gregorian date (not including leap year specifics)
function isValidGregorianDate(year, month, day) {
  return month >= 0 && month < 12 && day > 0 && day <= getDaysInMonth(year, month);
}

// Function to get number of days in a month (ignoring leap years for simplicity)
function getDaysInMonth(year, month) {
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
