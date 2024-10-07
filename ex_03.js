function addCarToAgent(agent, brand, model, color, power) {
    if (typeof brand !== 'string') {
        console.error('Brand incorrectly typed');
        return null;
    }
    if (typeof model !== 'string') {
        console.error('Model incorrectly typed');
        return null;
    }
    if (typeof agent !== 'object') {
        console.error('Agent object incorrectly typed');
        return null;
    }
    if (typeof color !== 'string') {
        console.error('Color incorrectly typed');
        return null;
    }
    if (typeof power !== 'string') {
        console.error('Power incorrectly typed');
        return null;
    }
    agent.car = {
        model: model,
        brand: brand,
        color: color,
        power: power
    };
    shareThatBeauty(agent);
    return agent;
}
const agent = {
    firstname: 'James',
    lastname: 'Bond',
    age: 45,
    location: 'London'
};
addCarToAgent(agent,"Aston Martin" , "DBS", "silver", "282 hp");





