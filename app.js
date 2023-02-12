let i = 0;

console.log(++i);
console.log(i);

// fonctions fléchées

const double = (n) => n * 2;
console.log(double(12));

// destructuration

const [premiereNote, secondeNote] = [12, 17, 18];
console.log(premiereNote, secondeNote);

// autreeNotes contient toutes les valeurs restantes
const [first, ...autresNotes] = [12, 17, 18];
console.log(premiereNote, autresNotes);

// fonctionne sur les objets

const person = {
  firstName: "john",
  lastName: "doe",
  age: 18,
};

const { firstName, ...autresCles } = {
  firstName: "john",
  lastName: "doe",
  age: 18,
};
console.log(autresCles);

// manipuler des tableaux
const notes = [1, 2];

const secondNotes = [...notes, 2, 4, 25, 14];

console.log(secondNotes);

// tips to reverse array

const reverseArray = [...notes].reverse();
console.log(reverseArray);

//tips for object

const person1 = { firstName: "john", lastName: "doe" };
const person1WithAge = { ...person, age: 18 };

console.log(person1);
console.log(person1WithAge);

// tips conditions ternaires

const age = 18;

const message = age >= 18 ? "Majeur" : "Mineur";
console.log(message);
