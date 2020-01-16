var string="cde"
var string1="abc"
var i=0
var count=0
var count1=0
for (let i=0; i<string.length; i++){
    var j=0
    for (let j=0; j<string1.length; j++){
        if (string[i] != string1[j]){
            count=count+1
        }
        else{
            count1=count1+1
        }
    i=i+1
    }
}
console.log(count)
