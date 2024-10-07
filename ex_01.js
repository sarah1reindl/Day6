function displayAgentInfo() {
    const agent = {
        firstName: "James",
        lastName: "Bond",
        code: "007",
        age: 57
    };
    const info = `My name is ${agent.lastName}, ${agent.firstName} ${agent.lastName}! I'm the agent ${agent.code} and I'm ${agent.age} years old.`;

   
    const p = document.querySelector("#container p");

   
    p.textContent = info;

}

document.addEventListener("DOMContentLoaded",function() { 
displayAgentInfo();
});
