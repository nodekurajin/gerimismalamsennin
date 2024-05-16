# Convert Gregorian Date To Chinese Lunar dan Moslime's Hijri

- The code uses the `commander` library for parsing command-line arguments.
- It defines a program with a version number and expects a Gregorian date as an argument.
- The action function parses the provided date string and validates its format (YYYY-MM-DD).
- It uses `chinese-lunar-calendar` to convert the Gregorian date to Chinese Lunar date.
- It uses `hijri-converter` to convert the Gregorian date to Islamic Hijri date.
- The code outputs the original Gregorian date, the converted Chinese Lunar date with year, month text, and day text, and the converted Islamic Hijri date with day, month, year, and "AH" (After Hijra).
- The `isValidGregorianDate` function performs basic date validation (month range, day range within month).
- The `getDaysInMonth` function returns the number of days in a month (ignoring leap years for simplicity).

## How To Use?

1. Run the script with a Gregorian date argument: node dateConverter.js 2024-05-17
2. The script will output the converted Chinese Lunar and Islamic Hijri date