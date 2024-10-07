function addCar(agentString, car) {
   
    let agent = JSON.parse(agentString);
    

    agent.car = car;
    
   
    return agent;
}
const agentJSON = `{
    "firstName": "James",
    "lastName": "Bond",
    "code": "007",
    "age": 57
}`;
const carBrand = "Aston Martin";
const updatedAgent = addCar(agentJSON, carBrand);

console.log(updatedAgent);
