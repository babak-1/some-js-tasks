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











