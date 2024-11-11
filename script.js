// Weather Clothing Adviser

function weatherClothingAdviser() {
  // Get the current temperature from the user
  let temperature = parseInt(prompt("Enter the current temperature (in °C):"));

  // Get the rain status from the user
  let isRaining = prompt("Is it raining? (yes/no)").toLowerCase();

  // Clothing advice based on temperature and rain status
  if (isNaN(temperature)) {
    console.log("Please enter a valid temperature.");
    return;
  }

  if (temperature >= 30) {
    if (isRaining === "yes") {
      console.log(
        "It's hot and raining. Wear light clothing with a waterproof jacket."
      );
    } else {
      console.log("It's hot. Wear light clothing and stay hydrated!");
    }
  } else if (temperature >= 20) {
    if (isRaining === "yes") {
      console.log(
        "It's warm and raining. Wear a light jacket and bring an umbrella."
      );
    } else {
      console.log("It's warm. A t-shirt or light top should be comfortable.");
    }
  } else if (temperature >= 10) {
    if (isRaining === "yes") {
      console.log(
        "It's cool and raining. Wear a sweater and a waterproof jacket."
      );
    } else {
      console.log("It's cool. A sweater or light jacket would be good.");
    }
  } else {
    if (isRaining === "yes") {
      console.log(
        "It's cold and raining. Wear a warm coat, waterproof jacket, and a hat."
      );
    } else {
      console.log("It's cold. Wear a warm coat, scarf, and gloves.");
    }
  }
}

// Run the Weather Clothing Adviser
weatherClothingAdviser();
