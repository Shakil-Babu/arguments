// argument method in JS

function oddEvent(a){

    for(var i = 0; i<arguments.length; i++){
        var ele = arguments[i];

        if(ele%2 == 0 ){
            console.log(ele, ' Number is ODD');
        }else{
            console.log(ele, ' Number is EVEN');
        }
    }
}
var result=oddEvent(12,12,34,11,33);
console.log(result);











