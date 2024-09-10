document.addEventListener("DOMContentLoaded", function() {
  const searchB = document.querySelector(".searchbutton");
  const userNameInput = document.querySelector(".searchfield");
  const easyquestions = document.querySelector(".circle1");
  const mediumquestions = document.querySelector(".circle2");
  const hardquestions = document.querySelector(".circle3");
  const insideEaseSpan = document.querySelector(".ease");
  const insideMediumSpan = document.querySelector(".med");
  const insideHardSpan = document.querySelector(".hrd");
  const cardsSection = document.querySelector(".stats");

  // Checking the validation of username
  function validateUserName(userName) {
      if (userName === "") {
          alert("Please enter a valid username");
          return false;
      }
      const regex = /^[a-zA-Z0-9_-]{1,15}$/;
      const isMatching = regex.test(userName);
      if (!isMatching) {
          alert("Invalid username");
      }
      return isMatching;
  }

  // Function to fetch user details
  async function fetchingUserDetails(userName) {
      searchB.textContent = "Searching...";
      searchB.disabled = true;

      try {
          const apiUrl = `https://leetcode-stats-api.herokuapp.com/${userName}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
              alert("Unable to load data");
              return;
          }

          const parsedData = await response.json();
          console.log("Loading data", parsedData);
          displayUserData(parsedData);

      } catch (error) {
          console.error("Error:", error);
          cardsSection.innerHTML = "<p>No data found</p>";
      } finally {
          searchB.textContent = "Search";
          searchB.disabled = false;
      }
  }

  function updateProgress(solved, total, circle, label) {
      // if (total === 0) return; // Avoid division by zero
      const progressDegree = (solved / total) * 100;
      easyquestions.style.setProperty("--first-gradient-color", `${progressDegree}%`);
      mediumquestions.style.setProperty("--first-gradient-color", `${progressDegree}%`);
      hardquestions.style.setProperty("--first-gradient-color", `${progressDegree}%`);
      label.textContent = `${solved}/${total}`;
  }

  function displayUserData(parsedData) {
      // // Log the parsedData to understand its structure
      // console.log(parsedData);

      // Total questions
      const totalEasyQues = parsedData.totalEasy || 0;
      const totalMediumQues = parsedData.totalMedium || 0;
      const totalHardQues = parsedData.totalHard || 0;
    //total easy medium and hard question solved
      const solvedEasyTotalQues = parsedData.easySolved || 0;
      const solvedMediumTotalQues = parsedData.mediumSolved || 0;
      const solvedHardTotalQues = parsedData.hardSolved || 0;

      // Updating progress for each category
      updateProgress(solvedEasyTotalQues, totalEasyQues, easyquestions, insideEaseSpan);
      updateProgress(solvedMediumTotalQues, totalMediumQues, mediumquestions, insideMediumSpan);
      updateProgress(solvedHardTotalQues, totalHardQues, hardquestions, insideHardSpan);

      // Displaying data in cards
      const cardsData = [
          { label: "Overall submission", value: parsedData.totalSolved || 0 },
          { label: "Overall easy submission", value: parsedData.easySolved || 0 },
          { label: "Overall medium submission", value: parsedData.mediumSolved || 0 },
          { label: "Overall hard submission", value: parsedData.hardSolved || 0 }
      ];

      console.log(cardsData);

      cardsSection.innerHTML = cardsData.map(data =>
          `<div class="cardsclass">
              <h3>${data.label}</h3>
              <p>${data.value}</p>
          </div>`
      ).join(""); // Joining the mapped array into a single string
  }

  // Event listener for the search button
  searchB.addEventListener("click", function() {
      const userName = userNameInput.value;
      console.log("Logging in:", userName);
      if (validateUserName(userName)) {
          fetchingUserDetails(userName);
      }
  });
});
