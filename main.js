// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (number, array) => {
  return newObject = {
    speimenNum: number,
    dna: array,
  
    //METHODS

    mutate() {
      let randomDna = Math.floor(Math.random() * this.dna.length);
      //console.log('Original: ' + this.dna[randomDna] + ' ' + randomDna);
      //console.log(this.dna);
      let rand = true;
      //console.log(rand);
      while (rand) {
        value = returnRandBase();
        //console.log(value);
        if(value !== this.dna[randomDna]){
          this.dna[randomDna] = value;
          rand = false;
        }
      }
      //console.log(rand);
      return this.dna;
      
    },

    compareDNA(obj) {
      let y = 0;
      // if === && index ===
      // check if each dna[], === obj.dna[]
      for(let i = 0; i < this.dna.length; i++) {
        for (let x = 0 ; x < obj.dna.length; x ++) {
          if (this.dna[i] === obj.dna[x] && i === x) {
            y++;
            //console.log(y);
          }
        }
      }
      y = (100 / 15) * y;
      return 'Specimen #1 and specimen #2 have ' + y.toFixed(2) + '% DNA in common';
    },



    willLikelySurvive() {
      let y = 0;
      for ( let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G')
        y++;
      }
      y = (100 / 15) * y;
      if(y >= 60) {
        return true;
      } else {
        return false;
      }
    }


  }
}


const randomNum = () => {
  num = Math.floor(Math.random() * 9999);
  return num;
}


const randomName = () => {
  let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let str = '';
  for(let i = 0; i < 5; i++){
    str = str + arr[Math.floor(Math.random() * 26)];
    //console.log(str);
  }
  return str;
}

//console.log(randomName());


let firstTest = mockUpStrand();
//console.log(firstTest);
const test = pAequorFactory(5555, firstTest);

console.log('Mutated1');
console.log(test.mutate());


let secondTest = mockUpStrand();
const test2 = pAequorFactory(7777, secondTest);

console.log('Mutated2');
console.log(test2.dna);

console.log(test.compareDNA(test2));
console.log('Will likely survive (60% or above): ' + test.willLikelySurvive());

//create an array of 30 objects which pass the test of willsurvive.



let surviveArray = [];
let lessThan30 = 0;


while (lessThan30 < 30) {
let obj = pAequorFactory(randomNum(), mockUpStrand());
  //console.log(obj.speimenNum);
  //console.log(obj.dna);
  //console.log(obj.willLikelySurvive());
  let survive = obj.willLikelySurvive();
  if(survive) {
    surviveArray.push(obj);
    lessThan30++;
  };

}

console.log(surviveArray.length);




