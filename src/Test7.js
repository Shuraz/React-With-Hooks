import React,{useState} from 'react'

function Test7() {
        const [Name, setName] = useState('');
        const [Email, setEmail] = useState('');
        const [People, setPeople] = useState([]);

        const formSubmitHandler =(e)=>{
            // console.log(Name);
            e.preventDefault();

            if(Name && Email){
                const person ={id:new Date().getTime.toString(), Name,Email};
                 console.log(person);
                setPeople((people)=>{
                    console.log("test");
                    return[...people, person];
               
                });
                 setName('');
                setEmail('');
            }
            else{
                console.log("empty values")
            }
        }

    return (
        <div>
            <h1>Controlled inputs</h1>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} value={Name}/><br />
                <label htmlFor='email'>Email:</label>
                <input type='email' onChange={(e)=>{setEmail(e.target.value)}} value={Email}/>
                <button type='submit'>Submit</button>
            </form>

            <h2>Output</h2>
            {
                People.map((person)=>{
                    const {id, Name, Email}=person;
                    return(
                        <div key={id}>
                        <h4>{Name}</h4>
                        <h4>{Email}</h4>
                    </div>
                    );
                  
                })
            }
        </div>
    )
}

export default Test7
