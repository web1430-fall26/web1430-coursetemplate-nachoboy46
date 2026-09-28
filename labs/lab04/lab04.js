// Lab 04 – Trail Recommender and Distance Converter

// ─── Trail data (do not modify) ──────────────────────────────────────────
const trails = [
  { name: 'Lakeside Loop',       distance: 2.5,  hours: 1.5, level: 'beginner' },
  { name: 'Ridgeline Path',      distance: 5,    hours: 3,   level: 'beginner' },
  { name: 'Canyon Crossing',     distance: 8,    hours: 4.5, level: 'intermediate' },
  { name: 'Summit Approach',     distance: 12,   hours: 6,   level: 'intermediate' },
  { name: 'Granite Peak',        distance: 16,   hours: 7,   level: 'advanced' },
  { name: 'Wilderness Circuit',  distance: 20,   hours: 8,   level: 'advanced' },
];

// ─── DOM references ───────────────────────────────────────────────────────
const experienceSelect  = document.getElementById('experience');
const maxDistanceInput  = document.getElementById('max-distance');
const maxHoursInput     = document.getElementById('max-hours');
const findBtn           = document.getElementById('find-btn');
const recommendationDiv = document.getElementById('recommendation');

const incrementInput  = document.getElementById('increment');
const rowCountInput   = document.getElementById('row-count');
const generateBtn     = document.getElementById('generate-btn');
const tableOutputDiv  = document.getElementById('table-output');

// ─── Part 3: Trail recommender functions ─────────────────────────────────

// validateInputs(level, maxDistance, maxHours)
// Returns an error message string if any input is invalid, or null if all valid.
// Rules: level must be 'beginner'|'intermediate'|'advanced'
//        maxDistance must be 1–20
//        maxHours must be 1–8
function validateInputs(level, maxDistance, maxHours) {
  if (isNaN(maxDistance) || isNaN(maxHours)){
        return 'ERROR: Hours or distance input is not numeric.'
    }
    if (level !== 'beginner' && level !== 'intermediate' && level !== 'advanced'){
        return 'ERROR: Level must be beginner, intermediate, or advanced.'
    }
    if (maxHours < 1 || maxHours > 8){
        return 'ERROR: Hours must be greater than 1 and less than 8.'
    }
    if (maxDistance < 1 || maxDistance > 20){
        return 'ERROR: Distance must be greater than 1 and less than 20.'
    }
    return null;
}

// findTrail(level, maxDistance, maxHours)
// Returns the first trail matching all three criteria, or null if none match.
function findTrail(level, maxDistance, maxHours) {
  for(let i = 0; i < trails.length; i++){
    if (trails[i].level === level){
      if(trails[i].distance <= maxDistance){
        if (trails[i].hours <= maxHours){
          return trails[i];
        }
      }
    }
  }
  return null;
}

// renderRecommendation(trail)
// Updates recommendationDiv.
// If trail is null: "No trail matches your criteria. Try adjusting your distance or time."
// If trail found: show name, distance, hours, and difficulty.
// Use createElement + textContent — no innerHTML.
function renderRecommendation(trail) {
  recommendationDiv.innerHTML = ''; // clear previous result
  if(trail === null){
    recommendationDiv.innerHTML = 'No trail matches your criteria. Try adjusting your distance or time.'
  } else {
    recommendationDiv.innerHTML = `Trail found! Trail name: ${trail.name} | Trail Distance: ${trail.distance} miles | Trail duration: ${trail.hours} hours | Trail difficulty: ${trail.level}`
  }
}

// Button handler
findBtn.addEventListener('click', () => {
  // TODO: read values → validate → findTrail → renderRecommendation
  const levelVar = document.getElementById('experience');
  const distanceVar = document.getElementById("max-distance");
  const hoursVar = document.getElementById("max-hours");

  const validtionOutput = validateInputs(levelVar.value, distanceVar.value, hoursVar.value);

  if(validtionOutput !== null){
    recommendationDiv.innerHTML = validtionOutput;
    return;
  }

  const trail = findTrail(levelVar.value, distanceVar.value, hoursVar.value);

  renderRecommendation(trail);
});

// ─── Part 4: Distance converter functions ────────────────────────────────

// milesToKm(miles)
// Returns miles converted to kilometers (miles × 1.60934), rounded to 2 decimal places.
function milesToKm(miles) {
  return (miles * 1.60934).toFixed(2);
}

// renderTable(increment, rows)
// Guard clauses: rows must be 1–20; increment must be >= 0.1
// Builds a <table> with columns Miles | Kilometers using createElement.
// Renders into tableOutputDiv.
function renderTable(increment, rows) {
  tableOutputDiv.innerHTML = ''; // clear previous result
  output = "";
  if (rows < 1 || rows > 20){
    tableOutputDiv.innerHTML = 'ERROR: Table can only render between 1 and 20 rows.'
    return;
  }

  if (increment < 0.1){
    tableOutputDiv.innerHTML = 'ERROR: Increment amount must be at least 0.1.'
    return;
  } 

  for(let i = increment; i < increment*(rows+1); i += increment){
    output += `${i} Miles : ${milesToKm(i)} Kilometers <br>`;
    //output.push([i,milesToKm(i)]);
  }
  tableOutputDiv.innerHTML = output;
}
  

generateBtn.addEventListener('click', () => {
  const increment = parseFloat(incrementInput.value);
  const rows      = parseInt(rowCountInput.value, 10);
  renderTable(increment, rows);
});
