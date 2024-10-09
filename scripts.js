document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
});

const daysOfWeek = document.getElementById("memorizationDay");
const memorizedDate = document.getElementById("memorizationDate");
const surahMemorized = document.getElementById("surahMemorized");
const memorizedAyahs = document.getElementById("memorizedAyahs");
const surahsrevised = document.getElementById("surahsrevised");
const revisedAyahs = document.getElementById("revisedAyahs");

document.getElementById("saveprogress").addEventListener("click", function () {
  const day = daysOfWeek.value;
  const date = memorizedDate.value;
  const surahMemo = surahMemorized.value;
  const memoAyah = memorizedAyahs.value;
  const surahrev = surahsrevised.value;
  const Ayahrev = revisedAyahs.value;

  const progressContainer = document.getElementById("progressContainer");
  const progressDiv = document.createElement("div");
  
  progressDiv.innerHTML = `
    <strong>Day:</strong> ${day}-
    <strong>Date:</strong> ${date}-
    <strong>Surah Memorized:</strong> ${surahMemo}-
    <strong>Ayahs Memorized:</strong> ${memoAyah}-
    <strong>Surah Revised:</strong> ${surahrev}-
    <strong>Ayahs Revised:</strong> ${Ayahrev}-
  `;

  progressContainer.appendChild(progressDiv);
});

document.getElementById("saveprogress").addEventListener("click", function () {
  const day = daysOfWeek.value;
  const date = memorizedDate.value;
  const surahMemo = surahMemorized.value;
  const memoAyah = memorizedAyahs.value;
  const surahrev = surahsrevised.value;
  const Ayahrev = revisedAyahs.value;

  // Create a progress object
  const progress = {
      day: day,
      date: date,
      surahMemorized: surahMemo,
      memorizedAyahs: memoAyah,
      surahRevised: surahrev,
      revisedAyahs: Ayahrev,
  };

  // Get existing progress from localStorage or initialize as an empty array
  const existingProgress = JSON.parse(localStorage.getItem("progress")) || [];
  
  // Add the new progress to the array
  existingProgress.push(progress);
  
  // Save back to localStorage
  localStorage.setItem("progress", JSON.stringify(existingProgress));

  alert("Progress saved!");
});
