const express = require("express")
const path = require("path")
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/validationForm.html'));
});

app.post('/anagram', function (req, res){
    var string1=req.body.string1;
    var string2=req.body.string2;
    var count=0
    var count1=0
    function  makeAnagram(string1, string1){
        for (let i=0; i<string1.length; i++){
            for (let j=0; j<string2.length; j++){
                if (string1[i] != string2[j]){
                    count=count+1
                }
                else{
                    count1=count1+1
                }
            i=i+1
            }
            return count
        
        } 
    }
    
    if (makeAnagram(string1,string2)){
        res.send("True") 
    }
    else{
        res.send("False")
    }
})
app.listen(5000,()=>{
    console.log("server is listening 5000.........")
});