
// window.alert('Tin yeu Linh')

// function tin(love){
//     namemy ='Tin'
//     nameyou ='Linh'

//     for(var i=0;i<=love;i++){
//         console.log('Tin yeu Linh'+i)
    
//     }
// }

// tin(8);

function writeLog(){
    var myString=''
    for(var param of arguments){
        myString = myString + `${param} - `
    }
    console.log(myString)
}

writeLog('Linh','yeu','Tin');

