document.addEventListener("DOMContentLoaded", () => {
  // Declare your input

  function getValue() {
    const input = document.querySelector(".inner-container").value;

    //Clean your input

    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    //Check input in reverse

    const reversedInput = cleanedInput.split("").reverse().join("");

    //Palindrome declaration

    const isPalindrome = reversedInput == cleanedInput;

    //Results

    if (isPalindrome) {
      alert("This is a palindrome");
    } else {
      alert("This is not a palindrome");
    }
  }
  document.getElementById("checkButton").addEventListener("click", getValue);
});
