function showRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  //build  API url //
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4b0176fbecf427afo5d10f51tf794314";

  let context =
    "You are amazing recipe expert and makes short recipes.Provide a recipe in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions.Sign the poem with 'SheCodes AI' ";
  let prompt =
    "User instructions: Generate English recipe about $(instructionsInput.value)";
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}";

  console.log("Generating recipe");
  console.log("prompt: ${prompt}");
  console.log("context: ${context}");

  //make a call to API //
  axios.get(apiUrl).then(showRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
