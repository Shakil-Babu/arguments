// argument method in js 


function find_maxNumber(a){

    var maxNumber=[0];
    for(var i = 0 ; i<arguments.length ; i++){
        var ele = arguments[i];

        if(ele>maxNumber){
            maxNumber = ele ;
        }
    }return maxNumber;
}
var result = find_maxNumber(12,12,34,56,78,45,78,122,3334,444444);
console.log(result);











