
//Problem 1: solved

function FirstReverse(str) { 
  return str.split('').reverse().join('')
}

//Problem 2:  solved

function firstFactorial(num) {
    if (num === 1) {return 1}
    return num*firstFactorial(num-1)
}

//Problem 3:  Solved

function LongestWord(sen) { 

return sen.replace(/[^a-z ]/gi, '').split(' ').sort(function(a, b){return a.length - b.length}).pop()
       
}

//Problem 4: replace letters and capitalize vowels (solved)

function LetterChanges(str) { 
alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
vowels = 'aeiou'  
arr = str.toLowerCase().split('')
   
    for (var i=0 ; i<arr.length ; i++) {
        if (alpha.indexOf(arr[i]) > -1) { arr[i] = alpha[alpha.indexOf(arr[i])+1] }
        if (vowels.indexOf(arr[i]) > -1) { arr[i] = arr[i].toUpperCase() }
    }
    return arr.join('')        
}

//problem 5: sum of numbers up to n (solved)

function SimpleAdding(num) { 
    if (num === 1) {return 1}
    return num + SimpleAdding(num-1)
}

//Problem 6: Cap letters in string (solved)

function LetterCapitalize(str) { 
str = str.split('')

    for (var i=0 ; i<str.length ; i++) {
    str[0] = str[0].toUpperCase()
        if (str[i] === ' ') {
            str[i+1] = str[i+1].toUpperCase() 
        }
    } 
    return str.join('')         
}


//Problem 7: find match patterns (OOO)

function SimpleSymbols(str) {
   return str.match(/[a-z]/gi).length == str.match(/\+[a-z]\+/g).length
}
 
//Problem 8: check two numbers to see which bigger (solved) 

function CheckNums(num1,num2) { 

if (num2 === num1) {return -1}

else {return num2 > num1}  
         
}

// Problem 9: convert num to hours and mins (solved)

function TimeConvert(num) { 
  hours = Math.floor(num/60)
  mins = num%60
  output = hours + ':' + mins
  return output
}

// Problem 10: alphabetize string (solved)

function AlphabetSoup(str) { 
   return str.split('').sort().join('')    
}

// problem 11: check AB (solved)

function ABCheck(str) { 
  
      for (i=0 ; i<str.length-4 ; i++) { 
          if (str.charAt(i) == 'a' && str.charAt(i+4) == 'b') {
             return true
          }
      }
      return false       
}

//problem 12: number of vowels in string (solved)

function vowelCount(str) { 
return str.match(/[aeiou]/gi).length    
}

//problem 13: number of words in string (solved)

function WordCount(str) { return str = str.split(' ').length }

// problem 14: compare x and o (solved)

function ExOh(str) { 

return str.match(/x/g).length === str.match(/o/g).length

}   

//problem 15: palindrome (solved)

function Palindrome(str) {
  newStr = (str.split("").reverse().join("")).replace(/[^a-zAZ]/g, "")
  if (str.replace(/[^a-zAZ]/g, "") === newStr) {return true}
  else {return false}
}

//problem 16: geometric or arithmetic (solved)

function ArithGeo(arr) { 
var Arith = true
var Geo = true
   for (i=0 ; i<arr.length-2 ; i++) {
       if (arr[i+1]/arr[i] != arr[i+2]/arr[i+1]) { Geo = false}
       if (arr[i+1]-arr[i] != arr[i+2]-arr[i+1]) { Arith = false}
   }
   if (Arith == true) {return 'Arithmetic'}
   if (Geo == true) {return 'Geometric'}
   else {return -1}   
}

//problem 17: numbers add up to largest in array? (solved)

function ArrayAdditionI(arr) { 

var combi = [];
var letLen = Math.pow(2, arr.length);
largestNum = arr.sort(function(a, b) {return b-a}).shift()
var output = false
  
    for (var i=0 ; i<letLen ; i++){   //creates all the possible combos
        temp= [];                        
        for (var j=0; j<arr.length; j++) {
            if ( i & Math.pow(2,j) ){ 
                temp.push(arr[j])
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
  
    for (i=0 ; i<combi.length ; i++) {   //compares the sum  of each combo with largest
        var total = 0
        for (j=0 ; j<combi[i].length ; j++) {
            total = total + combi[i][j]
            if (total === largestNum)  {
                output = true
            }
        }
    }
return output         
}

//problem 18: which word has most repeat letters (solved)

function LetterCountI(str) { 
arr1 = str.replace(/[^a-zA-Z ]/g, '').split(' ') 
arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ')
var longest = 0
var count = 0

  for (var i=0 ; i<arr.length ; i++) {
  var arr2 = arr[i].split('').sort()  

     for (var j=0 ; j<arr2.length ; j++) {
      
         if (arr2[j] === arr2[j+1]) {
             count = count + 1;                     
             if (count > longest) {output = arr1[i] ; longest = count}
         }
      
         else {count = 0}            
     }
  }
  
return output         
}

//or

function repeat(str) {
    var max = 0
    var arr = str.replace(/[^a-z]/gi, '').split('').sort()
    
    for (var i=0 ; i<arr.length ; i++) {
      if (arr[i+1] === arr[i]) {count += 1}
        else {count = 0}
        if (count > max) {max = count}
    }
    
    return max+1
}

function LetterCountI(str) { 
    var output = 0
    var max = 1
    var arr = str.split(' ')
    
    arr.forEach(function(v) {if (repeat(v) > max) {output = v; max = repeat(v)}})
    if (max === 1) {return -1}
    return output        
}


//Problem 19: sencond great lowest/highest (solved)

function secondGreatLow(arr) {
    
arr.sort(function(a,b) {return a-b})
var output = []

    for (var i=0 ; i<arr.length ; i++) {
        if (arr[i+1] != arr[i]) {output.push(arr[i+1]) ; break}
    }
    
    for (var j=0 ; j<arr.length ; j++) {
        arr.reverse();
        if (arr[j+1] != arr[j]) {output.push(arr[j+1]) ; break}
    }
    return output
}

//Problem 20: place commas in number appropriately (Solved)

function DivisionStringified(num1,num2) { 
num3 = Math.round(num1/num2)

    if (num3 < 1000) {return num3}
    else { num4 = num3.toString().split('')
        for ( var i=num4.length-3 ; i>0 ; i-=3) {
            num4.splice(i, 0, ',')
        }
        return num4.join('')   
    }       
}

//Problem 21: difference in time (Solved)

function timeToMinutes(time) {
var hours = parseInt(time.split(':')[0])
var minutes = parseInt(time.split(':')[1].replace(/[^0-9]/g, ''))
      if (time.charAt(time.length-2) === 'a') {
          if (hours === 12) {return minutes}
          else {return hours*60 + minutes}
      }
      if (time.charAt(time.length-2) === 'p') {
            if (hours === 12) {return 720 + minutes}
          else {return hours*60 + minutes + 720}
      }
}

function CountingMinutesI(str) { 
var time1 = timeToMinutes(str.split('-')[0])
var time2 = timeToMinutes(str.split('-')[1])
  if ( time2 > time1) {return time2-time1}
    else {return 1440 - time1 + time2}       
}

//Problem 22: Check if mean = mode (solved)

// function to find mode

function mode(arr){
    return arr.sort(function(a,b) {
        return arr.filter(function(v){ return v===a }).length
             - arr.filter(function(v){ return v===b }).length
    }).pop();
}


function MeanMode(arr) { 
arrSort = arr.sort()
  mean = arr.reduce(function(a,b) {return a+b})/arr.length
  if (mean == mode(arr)) {return 1}
  else {return 0}    
}    

// Problem 23: insert Dash between odds (solved)

function DashInsert(str) { 
var strArr = str.split('')
var strArr2 = []

  for (i=0; i<strArr.length ; i++)  {
      strArr2.push(strArr[i]) 
      if (strArr[i]%2 !== 0 && strArr[i+1]%2 !== 0) {
          strArr2.push('-')
      }
  }

  return strArr2.join('')
}

//Problem 24: swap letter cases (solved)

function SwapCase(str) { 
strUp = str.toUpperCase()
strDn = str.toLowerCase()
var output = ''
   for (i=0 ; i<str.length ; i++) {
       if (str.charAt(i) === strUp.charAt(i)) {
           output += strDn.charAt(i)
       }
       else {output += strUp.charAt(i)}
   }
return output
}

// Problem 25: Adding up numbers in a string (solved)

function NumberAddition(str) { 
str1 = str.replace(/[^0-9]/g, ' ')
str2 = str1.split(' ').filter(function (v) {return v!== ''})
return str2.reduce(function(a,b) {return parseInt(a) + parseInt(b)})
}

//Problem 26: find 3rd longest string in an array (solved)

function ThirdGreatest(strArr) { 
var sorted = strArr.sort(function(a,b) {return b.length-a.length})  
var long1 = sorted[0]
var long2 = sorted[1]
var long3 = sorted[2]

  strArr.forEach(function(v) {
        if (v.length === long3.length) {long3 = v}
    })
    return long3    
}


// Problem 27: is number a power of 2? (Solved)

var powOf2 = function(num) {
    if (num === 2) {return true}
    if (num < 2) {return false}
    return powOf2(num/2)
}

//Problem 28: adding persistence (solved...with recursion, which accomodates for long extended branches)

function AdditivePersistence(num, count) { 
if (count === undefined) { count = 0}
  
    if (num<10) {return count}
    else { newNum = num.toString().split('').reduce(function(a,b) {return parseInt(a) + parseInt(b)}) }
    count += 1
    return AdditivePersistence(newNum, count)
         
}

//Problem 29: multiplicative persistence (solved, with recursion)

function MultiplicativePersistence(num, count) { 
 
if (count === undefined) { count = 0}
  
    if (num<10) {return count}
    else { newNum = num.toString().split('').reduce(function(a,b) {return parseInt(a) * parseInt(b)}) }
    count += 1
    return MultiplicativePersistence(newNum, count)
         
}

//Problem 30: offline minimum (solved, for negative numbers too)

function OffLineMinimum(strArr) { 
var holdArr = [] 
var output = []
strArr.forEach(function(v) {
  if ( typeof parseInt(v) === 'number') {holdArr.push(parseInt(v));
        holdArr.sort(function(a,b) {return a-b})                                 
                                         }
    else { output.push(holdArr.shift()) }
})
return output    
}


// CODERBYTE MEDIUM PROBLEMS

//Prob 1: is number prime?

function primeTime(num) {
  if (num === 2) {return true}
  for (i=2 ; i<num ; i++) {
      if (num%i === 0) { return false}
  }  
return true     
}


// problem 2: running strings (solved)

function RunLength(str) { 
count = 1
arr = []

  for (i=0 ; i<str.length ; i++) {
      if (str.charAt(i+1) === str.charAt(i)) {
          count = count + 1
      }
      else {arr.push(count) ; arr.push(str.charAt(i)) ; count = 1} 
  }
  
  return arr.join('')        
}

//Problem 3 (primeMover): nth prime number is? (solved)

function prime(num) {
  if (num == 2) {return true}
  for (i=2 ; i<num; i++) {
      if (num%i == 0) { return false}
  }  
return true     
}

function primeMover(num) {
var count = 0
var i=2
var hold
    while (count < num) {  
        if (prime(i)) {count = count +1 ; hold = i}
        i++
    } 
    return hold
}


//Problem 4:  Palindrome2 (solved)

function PalindromeTwo(str) { 
str1 = str.toLowerCase().replace(/[^a-z]/g, '')
str2 = str1.split('').reverse().join('')

if (str1 === str2) {return true}
else {return false}          
}

//Problem 5: greatest common factor (solved)

function Division(num1,num2) { 
var gcf
    for (var i=2 ; i<num1 + 1 ; i++) {
        if( num1 % i == 0 && num2 % i == 0) {gcf = i}
    }
    return gcf
}

//problem 6: string scramble (solved)

function StringScramble(str1,str2) { 
str1a = str1.toLowerCase().replace(/[^a-z]/g, '')
arr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('')
var output = true

  for (var i=0 ; i<arr2.length ; i++) {
      if (str1a.indexOf(arr2[i]) < 0) {
        output = false ; break
      }
  }
  return output   
}

// prob 7 ArithGeo II

function ArithGeoII(arr) { 
var arithM = true
var arithG = true
  for (var i=0 ; i<arr.length -2 ; i++) {
    if (arr[i+1]-arr[i] !== arr[i+2]-arr[i+1]) { arithM = false}
    if (arr[i+1]/arr[i] !== arr[i+2]/arr[i+1]) { arithG = false} 
  }
  if (arithM === true) {return "ArithM"}
  if (arithG === true) {return "ArithG"}
  return -1 
}

// prob 8: Array addition  (OOO)

function getPowerSet(arr) {
var ps = [[]];
      for (var i = 0; i < arr.length; i++) {
            for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(arr[i]));
            }
      }
      return ps;
}

function ArrayAddition(arr) { 
var biggest = arr.sort(function(a,b) {return a-b}).pop()
var set = getPowerSet(arr)

  for (var i=0 ; i<set.length ; i++) {
      if (set[i].length >= 2) {
          if (set[i].reduce(function(a,b) {return a+b}) == biggest) {return true} 
        }
    }
  return false
}

 // or
 
 function ArrayAddition(arr) { 

  arr.sort(function(a,b){return a - b});
  var maxNum = arr.pop();
  var tot = 0;
    
  for (var i = 0; i < arr.length; i++){
    tot += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        tot += arr[j];
        if (tot == maxNum) {
          return true;
        }
      }
    }
      
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        tot -= arr[k];
        if (tot == maxNum) {
          return true;
        }
      }
    }
    tot = 0;
  }
    
  return false; 
         
}   

// Problem 9: Binary to Decimal

function BinaryConverter(str) { 
arr = str.split('')
total = 0 
count = 0
  while (arr.length > 0) {
       total = total + arr.pop() * Math.pow(2, count)
         count += 1
    }
    return total     
}

//or

function BinaryConverter(str) { 
var placeV = 1
var sum = 0
    for (i=str.length-1 ; i>-1 ; i--) {
        sum = sum + parseInt(str[i])*(placeV) ; placeV = placeV*2 
    }
return sum         
}

// prob 10: letter count  (xxxxx)

function repeat(str) {
var arr = str.split('').sort()
var most = 1
var count = 1
  for (var i=0 ; i<arr.length-1 ; i++) {
       if (arr[i+1] == arr[i]) {count += 1}
         if (count > most) {most = count}
         if (arr[i+1] != arr[i]) {count = 1}
    }
    return most
}

function LetterCount(str) { 
var arr = str.split(' ')
var output = arr[0]
  for (var i=0 ; i<arr.length ; i++) {
        if (repeat(arr[i]) > repeat(output)) {output = arr[i]}
    }
    return output     
}


// prob 11: Caesar cipher (solved)

function CaesarCipher(str,num) { 
ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
arr = str.split('')

    for (var i=0 ; i<arr.length ; i++) {
       
        if (ALPHA.indexOf(arr[i]) > -1) {arr[i] = ALPHA.charAt(ALPHA.indexOf(arr[i])+num)}
        if (alpha.indexOf(arr[i]) > -1) {arr[i] = alpha.charAt(alpha.indexOf(arr[i])+num)}
       
    }
  
return arr.join('')
}



//prob 12: find first mode (solved)
function SimpleMode(arr) { 
var temp = 1
var count = 1
var mode = -1

    for (var i=0 ; i<arr.length ; i++) {
        for (var j=i+1 ; j<arr.length ; j++) {
            if (arr[i] === arr[j]) {count = count + 1}
            if (count > temp) {mode = arr[i] ; temp = count ;}
        }
    count = 1
    }
    return mode   

}

// prob 13: consecutive numbers (solved)

function Consecutive(arr) { 
arr.sort(function(a, b) {return a-b})
var count = 0

    for (var i=0 ; i<arr.length-1 ; i++) {
         count = count + (arr[i+1]-arr[i]-1) 
    }
  
return count         
}

// prob 14: formatted division (xxxxx)

function FormattedDivision(num1,num2) { 
var num3 = (num1/num2).toFixed(4)
var arr = num3.split('.')
var main = Math.floor(num3).toString().split('')
  
    if (num3 < 1000) {return num3}
    else {
        for (var i=main.length -3   ; i>0 ; i -= 3) {
           main.splice(i,0, ',')
        }      
    }
    return main.join('') + '.' + arr[1]     
}

function FormattedDivision(num1,num2) { 

    var num3, parts;
    
    num3 = parseFloat(num1 / num2).toFixed(4);
    parts = num3.toString().split(".");
    parts[0] = parts[0].replace(/ \B(?=(\d{3})+(?!\d)) /g, ",");
    
    return parts.join(".");
         
}

// prob 15: counting minutes (xxxxxx)

function inMins(str) {
var type = str.charAt(str.length-2)
var split = str.replace(/[^0-9:]/g, '').split(':')
var mins 
  if (type === 'a') {
      if (split[0] === '12') {
          mins = parseInt(split[1]) 
        }
        else {mins = parseInt(split[0])*60 + parseInt(split[1])}
    }
    if (type === 'p') {
      if (split[0] === '12') {
          mins = parseInt(split[1]) + 720
        }
        else {mins = 720 + parseInt(split[0])*60 + parseInt(split[1])}
    }
    return mins
}

function CountingMinutes(str) { 
var time1 = inMins(str.split('-')[0])
var time2 = inMins(str.split('-')[1])
var diff
    if (time2 > time1) {diff = time2-time1}
    else {diff = 1440 - (time1-time2)}  
    return diff
}

// prob 16: permutation step

function permutationStep(num) {
    
var largest = parseFloat(num.toString().split('').sort().reverse().join(''))
    for (var i=num+1 ; i<largest ; i++) {
       if (parseFloat(i.toString().split('').sort().reverse().join('')) == largest) {
           return i
       }
    }
    return null
}


// prob 17: prime checker

// prob 18: dash insert II (xxxxxx)

function DashInsertII(num) { 
var arr = num.toString().split('')
var arr2 = []

  for (var i=0 ; i<arr.length ; i++) { 
        arr2.push(arr[i])
      if (arr[i]%2 != 0 && arr[i+1] > 0 && arr[i+1]%2 != 0) {arr2.push('-')}
      if (arr[i] >0 && arr[i]%2 == 0 && arr[i+1] > 0 && arr[i+1]%2 == 0) {arr2.push('*')}
    }
    return arr2.join('') 
    
}

// prob 19: swap II

function SwapII(str) {

alpha = 'abcdefghijklmnopqrstuvwxyz'
ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
number = '0123456789'
var temp = []
var index1 
var index2
var hold 
var arr = str.split('')
  for (var i=0 ; i<arr.length ; i++) {
      
      if (alpha.indexOf(arr[i]) > -1) {
            arr[i] = arr[i].toUpperCase()
        }
        
        else if (ALPHA.indexOf(arr[i]) > -1) {
            arr[i] = arr[i].toLowerCase()
        }
        
        if (number.indexOf(arr[i]) > -1 && temp.length === 1             ) {
            index2 = i; 
            hold = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = hold
        }
        
        if (number.indexOf(arr[i]) > -1 && temp.length === 0)       {
            index1 = i; temp.push(arr[i])
            
        }
        
        else if (arr[i] === ' ') {temp = []}
    }
    
    return arr.join('')
}

function SwapII(str) { 
var result = '';
  
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    var u = c.toUpperCase();
    result += u === c ? c.toLowerCase() : u;
  }
  return result.replace(/(\d)[a-z]+(\d)/gi, function (c) { return c[c.length-1] + c.slice(1, c.length-1) + c[0] });       
}


// prob 20: number search

function NumberSearch(str) { 
  var nums = str.match(/\d/g);					// "\d" represents 'digits' or 'all numbers'
  var letters = str.match(/[a-z]/gi);
  var tot = 0;
  if (nums !== null) {
    for (var i = 0; i < nums.length; i++) {
      tot += nums[i]*1;
    }
  }
  return Math.round(tot / letters.length);
}

// prob 21: triple double (xxxxxxxxxx)

function TripleDouble(num1,num2) { 
 var str1 = num1.toString()
 var str2 = num2.toString()
 
  for (var i=0 ; i<str1.length ; i++) {
      var temp = str2[i] + str2[i] + str2[i]
        var temp2 = str2[i] + str2[i] 
        var cond1 = str1.match(temp)
        var cond2 = str2.match(temp2)
        if (cond1 != null && cond2 != null) {return 1}
    }
    return 0     
}

// prob 22: bracket matcher  (xxxxxx)

function BracketMatcher(str) {
var balance = 0;
str = str.split("");
    for (var i = 0; i < str.length; i++) {
      if (str[i] == "(") balance++;
      if (str[i] == ")") balance--;
      if (balance < 0) return 0;
    } 
    return (balance == 0) ? 1 : 0;     
}

// prob 23: string reduction

function StringReduction(str) { 
var arr = str.split(''), i, j,  length = arr.length

  for (j=0 ; j<length ; j++) {
    for (i=0 ; i<length ; i++) {
        if (arr[i] == 'a' && arr[i+1] == 'b') {
            arr.splice(i, 2, 'c') ;continue
        }
        if (arr[i] == 'a' && arr[i+1] == 'c') {
            arr.splice(i, 2, 'b') ;continue
        }
        if (arr[i] == 'b' && arr[i+1] == 'c') {
            arr.splice(i, 2, 'a') ;continue
        }
        if (arr[i] == 'b' && arr[i+1] == 'a') {
            arr.splice(i, 2, 'c') ;continue
        } 
        if (arr[i] == 'c' && arr[i+1] == 'a') {
            arr.splice(i, 2, 'b') ;continue
        }
        if (arr[i] == 'c' && arr[i+1] == 'b') {
            arr.splice(i, 2, 'a') ;continue
        }
    }  
  }  
  return arr.length  
}

function StringReduction(str) { 
var res = str.length + 1;
  while(res>str.length){
    res = str.length;
    str = str.replace(/ab|ba/, 'c');
    str = str.replace(/ca|ac/, 'b');
    str = str.replace(/bc|cb/, 'a');
  };    
  return str.length;       
}

// prob 24: three five multiples (xxxxxxxxxx)

function ThreeFiveMultiples(num) { 
var sum = 0 
  for (var i=0 ; i<num ; i++) {
      if (i%3 == 0 || i%5 == 0) {
          sum += i 
        }
    }
    return sum     
}

// prob 25: coin determiner  (xxxxxxxxxx)

function getPowerSet(arr) {
var ps = [[]];
      for (var i = 0; i < arr.length; i++) {
            for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(arr[i]));
            }
      }
      return ps;
}

function sum(arr) {
    if (arr.length == 0) {return 0}
  return arr.reduce(function(a,b) {return a+b}) 
}

function CoinDeterminer(num) { 
var arr = [1,5,7,9,11]
var powSet = getPowerSet([1,5,7,9]).sort(function(a,b) {return a.length - b.length})

   for (var i=0 ; i<powSet.length ; i++) {
        if (num%11 == 0) {return num/11}
        if (num%11 == sum(powSet[i])) {return Math.floor(num/11) + powSet[i].length}
        if (num%11 + 11 == sum(powSet[i])) {return Math.floor((num-11)/11) + powSet[i].length}
    }     
}

// or

function CoinDeterminer(num) {
  var count = 0;
  do {
    if (num == 15) num -= 5;
    else if (num == 14) num -= 9;
    else if (num >= 11) num -= 11;
    else if (num >= 9) num -= 9;
    else if (num >= 7) num -= 7;
    else if (num >= 5) num -= 5;
    else if (num >= 1) num -= 1;
    count++;
  } while (num > 0);
  
  return count;
}

// prob 26: fibonacci checker

function FibonacciChecker(num) { 
var fibSeq = [0,1]
  while (fibSeq[fibSeq.length-1] <= num) {
        if (fibSeq.indexOf(num) > -1) {return 'yes'}    
        fibSeq.push(fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2])
    }
    return 'no'        
}

// prob 27: multiple brackets

function MultipleBrackets(str) { 
  var str = str.replace(/[^\(\)\[\]]/g, '');
  var o = '';
  var c = -1;
  while (o != str) {
    o = str;
    str = str.replace(/(\(\))|(\[\])/, '');
    c += 1;
  }
  if (str === '') {
    return '1 ' + c;
  }
  return '0';
}

// prob 28: most free time

// prob 29: overlapping rectangles (unsolved)

function OverlappingRectangles(strArr) { 

  // code goes here  
  var coordinates = strArr[0].replace(/[\(\)]/gi, "").split(',');
  
  function box(arr) {
    // takes [x1, y1, x2, y2, x3, y3, x4, y4]
    // returns object with x, y, width, height, where x, y is upper left coord
    var xCoord = [arr[0], arr[2], arr[4], arr[6]].sort();
    var yCoord = [arr[1], arr[3], arr[5], arr[7]].sort();
    var x = xCoord.reduce(function(a, b) { return Math.min(a, b); });
    var y = yCoord.reduce(function(a, b) { return Math.max(a, b); });
    var w = xCoord[xCoord.length - 1] - xCoord[0];
    var h = yCoord[yCoord.length - 1] - yCoord[0];
    
    return {x: x,
            y: y,
            width: w,
            height: h};
  }
  
  var rect1 = box(coordinates.splice(0, 8));
  var rect2 = box(coordinates);
    
  if(rect1.x + rect1.width <= rect2.x ||
     rect2.x + rect2.width <= rect1.x ||
     rect1.y - rect1.height >= rect2.y ||
     rect2.y - rect2.height >= rect1.y) //  no overlap
    return 0;
  
  var xOverlap = 0;
  var yOverlap = 0;
  
  if(rect1.x + rect1.width > rect2.x && rect1.x + rect1.width <= rect2.x + rect2.width) {
    xOverlap = rect1.x + rect1.width - rect2.x;
  } else {
    xOverlap = rect2.x + rect2.width - rect1.x;
  }
  
  if(rect1.y - rect1.height <= rect2.y && rect1.y - rect1.height > rect2.y - rect2.height)
    yOverlap = rect2.y - (rect1.y - rect1.height);
  else
    yOverlap = rect1.y - (rect2.y - rect2.height);
  
  return Math.floor(rect1.width / xOverlap) * Math.floor(rect1.height / yOverlap);     
}
   

// prob 30: look say sequence

function LookSaySequence(num) { 
var arr = num.toString().split('')  
var temp = []
var output = []
var count = 1
    for (var i=0 ; i<arr.length ; i++) {
        if(temp.length == 0) {temp.push(arr[i])}
        if(arr[i+1] != temp[0]) {output.push(count) ; output.push(temp[0]) ; temp = [] ; count = 1}
        if(arr[i+1] == temp[0]) {count += 1}
    }
    return output.join('')
}


// prob 31: distinct list

// prob 32: number encoding

function numberEncoding(str) { 
var alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
var arr = str.toLowerCase().split('')
var output = []
  arr.forEach(function(v) {
        if (alpha.indexOf(v) > -1) {
            output.push(alpha.indexOf(v)+1)
        }
        else {output.push(v)}
    })
    return output.join('')     
}


// mostFreeTime (xxx)

function timeToMinutes(time) {
var hours = parseInt(time.split(':')[0])
var minutes = parseInt(time.split(':')[1].replace(/[^0-9]/g, ''))
      if (time.charAt(time.length-2) === 'a') {
          if (hours === 12) {return minutes}
          else {return hours*60 + minutes}
      }
      if (time.charAt(time.length-2) === 'p') {
            if (hours === 12) {return 720 + minutes}
          else {return hours*60 + minutes + 720}
      }
}

function MostFreeTime(strArr) { 
var output =[]
var gap = 0
var maxGap = 0
var mins
var hours

strArr.forEach(function(v) { output.push(v.toLowerCase())})
output.sort(function(a,b) {return timeToMinutes(a.split('-')[0]) - timeToMinutes(b.split('-')[0]) })


  for (var i=0 ; i<output.length-1 ; i++) {
    gap = timeToMinutes(output[i+1].split('-')[0]) - timeToMinutes(output[i].split('-')[1])
        if (gap > maxGap) {maxGap = gap}
  }
  
  mins = maxGap%60 
    if (mins < 10) {mins = "0" + mins}
  hours = Math.floor(maxGap/60)
    if (hours < 10) {hours = "0" + hours}
    return hours + ":" + mins
}


//chapter 4: sum and range 

function range(num1, num2, step) {
var arr = []
    if (step == null) { step = 1}
    
        if (num1 < num2) {
            for (var i=num1 ; i<=num2; i += step) {
                arr.push(i)
            }
        }
        
        if (num1 > num2) {
            for (var i=num1 ; i>=num2; i = i - step) {
                arr.push(i)
            }
        }
        return arr
}

function sum(arr) {
    return arr.reduce(function(a,b) {return a+b})
}

sum(range(1,4))

// chapter 4: reverse array problem

function reverseArr(arr) {
var output = []
    arr.forEach(function(v) {output.unshift(v)})
    return output
}

function reverseIP(arr) {
    for (var i=0 ; i<(arr.length+1)/2 ; i++) {
        var hold = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = hold
    }
    return arr
}

//  chapter 4: array to list, list to array



//  chapter 5: average age per century

function average(arr) { return arr.reduce(function(a,b) {return a+b}) / arr.length}

var eighteenth = ancestry.filter(function(v) {return v.died >1700 && v.died < 1800})

var avgL = average( eighteenth.map(function(v) {return v.died-v.born}) )

//  chapter 5: problem every and some

function every(arr, test) {
    for (var i=0 ; i<arr.length ; i++) {
        if (!test(arr[i])) {return false}
    }
    return true
}

function some(arr, test) {
    for (var i=0 ; i<arr.length ; i++) {
        if (test(arr[i])) {return true}
    }
    return false
}

//practice writing functions


