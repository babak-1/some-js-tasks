//1) [8,4,6,2,3] => [4,2,4,2,3]

// menim yazdigim

function changeArray(array){
    const arr =[]
    for(let i=0; i<array.length; i++){
        let number = 1;
        while(array[i]-array[i+number]<0){
            number++
        }
        if(array[i]-array[i+number]>=0){
            arr.push(array[i]-array[i+number])
            
        }else if(i == array.length-1){
            arr.push(array[i])
        }
        else{
            arr.push(array[i])
        }

        number=1;
    }

    return arr

}
console.log(changeArray([8,4,6,2,3])); 
console.log(changeArray([8,8,1,3,2])); 

// youtube-da helli 

const solution = (arr) =>{
    return arr.map((_,i)=>{
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                arr[i] = arr[i]-arr[j];
                break
            }
        }
        return arr[i];
    })
}

console.log(solution([8,4,6,2,3]));
console.log(solution([8,8,1,3,2])); 



// 2) [[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]  menfi ededlerin sayi => 5


function negativeNumber(arr){
    let number = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]<0){
                number++;
            }
        }
    }

    return number;

}

// alternativ yol
console.log(negativeNumber([[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]));

function negativeNumberAlt(arr){
    return arr.map(item =>item.filter(r => r<0).length).reduce((a,b) => a+b,0)
}

console.log(negativeNumberAlt([[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]));


// 3) [100,200,101,15,18] => cutreqemli ededlerin sayi 3

function giveMeDoubleDigit(arr){
   return arr.filter(e=>e.toString().length%2==0).length
}

console.log(giveMeDoubleDigit([100,200,101,15,18,21,22,334,2222]));

// 4) 5 => 5 elementli array duzelt,elementlerin cemi 0 olsun

const resultZero =(num) =>{
    const array = [];
    for(let i=num%2!=0?0:1;i<num/2;i++){
      array.push(i);
      if(i!=0)array.unshift(-i)

    }
    return array
}

console.log(resultZero(15));

// 5) 434 => 4*3*4 = 48 , 4+3+4=11 =>48-11==37

const numberOperation = (num) =>{
    let array = Array.from(String(num))
    multiNum = array.reduce((a,b)=>a*b, 1)
    sumNum = array.reduce((a,b)=>parseInt(a)+parseInt(b),0)
    return multiNum-sumNum;
}
console.log(numberOperation(434));


// 6) nums = [1,2,3,4,4,3,2,1] n=4  =>[1,4,2,3,3,2,4,1] 

const arrayAndNum =(arr,num) =>{
    const array =[]
    for(let i=0; i<arr.length/2; i++){
        array.push(arr[i])
        array.push(arr[i+num])
    }

    return array;
}

console.log(arrayAndNum([1,2,3,4,4,3,2,1],2));



// 7) input : [-2,1,-3,4,-1,2,1,-5,4] => -4   (her reqemden yalniz bir dene ola biler ve onlar toplanir.)

const uniqueArraySum = (arr) =>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                 arr.splice(j, 1);
            }
        }

    }

    return  arr.reduce((a,b) =>a+b,0)

}

console.log(uniqueArraySum([-2,1,-3,4,-1,2,1,-5,4]));









