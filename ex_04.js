const agent = {}; 
function updateLicensePlates(agent, plates) {
    agent.car = {licensePlates: plates }; 
    return agent; }

function showLicensePlates(agent) {
    const licensePlates = agent.car.licensePlates;    
    const pls = document.querySelector('.plates-container');
    pls.innerHTML = '';
    licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        pls.appendChild(li);});}
updateLicensePlates(agent, ['LU 6789', '4711-EA-62', 'BMT 216A']);
showLicensePlates(agent);
