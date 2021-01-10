// Дед попугай с двумя лапами
var ParrotGrandfather = function() {};
ParrotGrandfather.prototype = {
  species: 'Parrot',
  paws: 2
};

// Отец попугай унаследовал всё у деда
var ParrotFather = function() {};
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

// Сын попугай унаследовал всё у отца
var ParrotSon = function() {};
ParrotSon.prototype = Object.create(ParrotFather.prototype);

var grandfather = new ParrotGrandfather();
var father = new ParrotFather()
var son = new ParrotSon();

console.log(grandfather.species, father.species, son.species);
// Parrot Parrot Parrot - все попугаи!
console.log(grandfather.paws, father.paws, son.paws);
// 2 2 2 - у каждого по 2 лапы

// Дед меняет количество лап
ParrotGrandfather.prototype.paws++;
console.log("Grandfather + paws");
console.log(grandfather.paws, father.paws, son.paws);
// 3 3 3 - у каждого теперь по 3 лапы

// Отец меняет вид
ParrotFather.prototype.species = 'eagle';
console.log("father changed species");
console.log(grandfather.species, father.species, son.species);
// Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами

// Сын уменьшил количество лап
ParrotSon.prototype.paws--;
console.log("son -- paws");
console.log(grandfather.paws, father.paws, son.paws);
// 3 3 2 - дед и отец остались при своих трёх лапах

// Дед решил стать чайкой
ParrotGrandfather.prototype.species = 'seagull';
ParrotGrandfather.prototype.paws++;
console.log("Grandfather ++ paws and change species");
console.log(grandfather.species, father.species, son.species);
console.log(grandfather.paws, father.paws, son.paws);
// seagull eagle eagle - дед чайка, отец и сын орлы