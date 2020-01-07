// 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// the murderer is miss Scarlet will be displayed
// because declareMurderer has access the the senario varriable



// 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// will get an error saying you cant change the variable murderer after changeMurderer() is called
// because it was delared as a const



// 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// firstVerdict will be Mrs. Peacock
// because the functtion declareMurderer creates a NEW block scoped variable murderer
// secondVerdict will be Professor Plum
// because murderer is created in a block varriable, but the block it belongs to is the global object.




// 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// the output will be...
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock

// because the declareAllSuspects() function will get suspectOne and Two from outside the fuction but
// suspectThree will use the more specific suspectThree defined inside the block of the declareAllSuspects function
// Suspect three is Mrs. Peacock will be output since the only suspectThree it has access to is the globally defined one at the top.




// 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//
// the output will be ...
// `The weapon is the Revolver`
// because the changeWeapon function can mutate a property of the variable scenario



// 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// the murderer is Mrs. White
// because when changeMurderer is called it changes the globally assigned murderer from Colonel Mustard to mr green.
// but then plotTwist is ran which changes it again to Mrs White so that when declareMurderer is run it it retrieves
// the murderer that was orriginally Colonel Mustard but has been changed to Mrs White at this point.






// 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// when changeMurderer is called murderer will change from Professor Plum to Mr Green.
// THEN plotTwist is called which creates a NEW block variable called murderer and sets it to Colonel Mustard BUT
// then unexpectedOutcome is called which updates the block variable from Colonel Mustard to Miss Scarlet
// when declareMurderer is ran it cant see the NEW murderer which was created, it can only see the original murderer variable
// which started as Professor Plum but was changed to Mr Green

// so the output is The murderer is Mr Green



// 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// when changeScenario is called murderer is changed to Mrs Peacock and room is changed to Dining Room THEN
// plotTwist is ran which asks if the room is equal to Dining room, which just now it is so
// the murderer is changed to Colonel Mustard THEN
// unexpectedOutcome is ran which ask if murderer is equal to Colonel Mustard, which just now it is so
// weapon is changed to Candle Stick.
// when declareWeapon is called returns what is currently in the weapon property which is Candle Stick


// 9
//
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// the output will be Professor plum
// because if murderer is equal to Professor plum it creates a new block variable and sets it equal to Mrs Peacock
// but declareMurderer can't see that NEW block variable it only has access to the original so will display
// The murderer is Professor Plum
