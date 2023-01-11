// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordLength = prompt("How many characters do you want?");
  if (passwordLength<10) {
    alert("Password needs to be at least 10 characters long!")
    return getPasswordOptions();
  } else if (passwordLength>64) {
    alert("Password needs to be maximum 64 characters long!")
    return getPasswordOptions();
  } else {
    alert("Your password will be " + passwordLength + " characters long")
  };

  //check if there is at least one type of character chosen
  function charChoose() {
    let problem = 4;
    function checkChars(x) {
      if (x===false) {
        problem-=1;
      } 
    }
  
  //appends answer to an array: true(1), false(0)
  function appendBool (q) {
    if (q) {
      answers1.push(1);
    } else {
      answers1.push(0);
    }
  }

    var answers = {
      passwordlength: 0,
      items: 0
    }

    let answers1 = [];
    lower = confirm("Do you want to use lowercase characters?");
    checkChars(lower);
    appendBool (lower)
  
    upper = confirm("Do you want to use uppercase characters?");
    checkChars(upper);
    appendBool (upper)
  
    numeric = confirm("Do you want to use numeric characters?");
    checkChars(numeric);
    appendBool (numeric)
  
    special = confirm("Do you want to use special characters?");
    checkChars(special);
    appendBool (special)

    answers.passwordlength = parseInt(passwordLength);
    answers.items = problem;
    answers.arrayBool = answers1;

    if (problem === 0) {
      alert("You need at least one type of character!");
      charChoose();
    } else {
      console.log("Choices correct, proceed");
    }

    return ans = answers;
    
}

charChoose();
}


//Function to divide the password length into as equal parts as possible and replace Boolean array with those numbers where true(1)

function getParts() {
  console.log("Password length: ",ans.passwordlength);
  equalParts = Math.floor(ans.passwordlength/ans.items),
  console.log("Lowest common divider: ",equalParts);
  let equalPartsArray = [];
  for (let i=0; i<ans.items;i++) {
    equalPartsArray.push(equalParts);
  }
  totalEqualParts = equalPartsArray.reduce((a,b) => a+b);
  var reminder = ans.passwordlength-totalEqualParts;

  let partsArray = equalPartsArray;
  if (reminder>0) {
    var a = (equalPartsArray[0])+reminder;
    equalPartsArray.push(a);
    partsArray = equalPartsArray.slice(1,(equalPartsArray.length));
  }

  arr=[0];

  for (var e=0;e<(ans.arrayBool).length;e++) {
    if (ans.arrayBool[e]) {
      arr.splice([e],1,partsArray[0]);
      partsArray.shift();
    } else {
      arr.splice([e],1,0);
    }
  }

  return arr = arr;
}



// Function for getting a random element from an array
function getRandom(arr) {
  console.log("This is the array: ",arr);

  //getRandomInt found on mdn Math.random() website
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let dict=[lowerCasedCharacters,upperCasedCharacters,numericCharacters,specialCharacters];
  let letters=[];
  for (let m=0;m<arr.length;m++) {
    if (arr[m]) {
      for (x=arr[m];x>0;x--) {
        Rn = getRandomInt(dict[m].length);
        letters.push((dict[m])[Rn]);
      }
    }
  }
  console.log("Unshuffled elements: ",letters);
  //very elegant shuffle method from dev.to using arrow function
  return shuffledLetters = letters.sort((a, b) => 0.5 - Math.random());
  
}
  


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getParts();
  let passwordArray = getRandom(arr);
  return passwordArray.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);