import React from 'react'

//JSON object
const jsonObj='{"name":"John", "age":30, "city":"New York"}'
//JSON Array
const JsonArr = '["Ford", "BMW", "Audi", "Fiat"]';
//JSON Object with data
const JsonObj2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

//JSON Object with function
const JsonOjb3 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';

function JsonTest() {
    console.log(jsonObj);
    const jsObj = JSON.parse(jsonObj);
    const jsArr= JSON.parse(JsonArr);
    const jsObj2 = JSON.parse(JsonObj2, function(key,value){
        if(key=="birth"){
            return new Date(value);
        }else{
            return value;
        }
    });
    const jsObj3= JSON.parse(JsonOjb3);
      //as jsObj3.age hold function, and as a rule function is not valid in react JSX
    // jsObj3.age = eval("(" + jsObj3.age + ")");
    return (
        <div>
            <h1>All about JSON!!</h1>
            <p>We use json, while transfering data to and from server. Data we receive from server is in string format.
                So we use function parse() to convert that into object notation ie JSON format to use in our program.
                In reverse, while sending data to webserver, it has to be converted to sting using function stringify().
            </p>
            <h2> {jsObj.name}</h2>
           <h2> {jsArr[0]}</h2>
           <h2>{`${jsObj2.name} ${jsObj2.birth} ${jsObj2.city}`}</h2>
            <h2>{eval("(" + jsObj3.age + ")")()}</h2>
        </div>
    )
}

export default JsonTest
