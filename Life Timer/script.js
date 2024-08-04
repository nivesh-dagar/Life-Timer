var settingIcon = document.getElementById("icon");
var settingContent = document.getElementById("settingsContent");
var dobButton = document.getElementById("dob-btn");
var beforeDobText = document.getElementById("initial");
var afterDobText = document.getElementById("later");
var dobInput = document.getElementById("dobInput");
var dateOfBirth;

var yearEl = document.getElementById("year");
var monthEl = document.getElementById("month");
var dayEl = document.getElementById("day");
var hourEl = document.getElementById("hour");
var minuteEl = document.getElementById("minute");
var secondEl = document.getElementById("second");

var isDobOpen = false;

var makeTwoDIgitNumber = (num) => {
  return num > 9 ? num : `0${num}`;
};

var toggleDOBSelector = () => {
  if (isDobOpen) {
    settingContent.classList.add("hide");
  } else {
    settingContent.classList.remove("hide");
  }
  isDobOpen = !isDobOpen;

  console.log("Toggled", isDobOpen);
};

var updateDate = () => {
  var currrentDate = new Date();
  var dateDiff = currrentDate - dateOfBirth;

  var year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  var month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  var day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  var hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
  var minute = Math.floor((dateDiff / (1000 * 60)) % 60);
  var second = Math.floor((dateDiff / 1000) % 60);

  yearEl.innerHTML = makeTwoDIgitNumber(year);
  monthEl.innerHTML = makeTwoDIgitNumber(month);
  dayEl.innerHTML = makeTwoDIgitNumber(day);
  hourEl.innerHTML = makeTwoDIgitNumber(hour);
  minuteEl.innerHTML = makeTwoDIgitNumber(minute);
  secondEl.innerHTML = makeTwoDIgitNumber(second);

  console.log(year, month, day, hour, minute, second);
  console.log("ji");
};

var setDobHandler = () => {
  var dateString = dobInput.value;
  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    beforeDobText.classList.add("hide");
    afterDobText.classList.remove("hide");
    setInterval(() => {
      updateDate();
    }, 1000);
  } else {
    afterDobText.classList.add("hide");
    beforeDobText.classList.remove("hide");
  }
  console.log("ji");
};
setDobHandler();

settingIcon.addEventListener("click", toggleDOBSelector);
dobButton.addEventListener("click", setDobHandler);
