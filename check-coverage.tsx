const fs = require('fs');

const coverageInfo = JSON.parse(
  fs.readFileSync('./coverage/coverage-summary.json', 'utf8'),
);
const lineCoverage = coverageInfo.total.lines.pct;

if (lineCoverage < 80) {
  console.error(
    `Test coverage of ${lineCoverage}% is below the required threshold of 80%`,
  );
  process.exit(1);
} else {
  console.log(`Test coverage is sufficient at ${lineCoverage}%`);
  process.exit(0);
}
