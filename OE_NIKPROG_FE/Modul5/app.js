import { Worker } from './worker.js';
import { createWorkerArray } from './arrayCreater.js';
import { Renderer } from './renderer.js';

let workers = createWorkerArray();

//modify data + display
//let renderer = new Renderer();
//let ul = document.querySelector('#content ul');
//ul.innerHTML = renderer.renderList(workers);

renderTable()

document.querySelector('#worker-sort-by-name-btn').addEventListener('click', sortyBy)
document.querySelector('#worker-sort-by-job-btn').addEventListener('click', sortyBy)
document.querySelector('#worker-sort-by-age-btn').addEventListener('click', sortyBy)

function sortyBy(param){
    let sortByValue = param.target.dataset.param;

    if(sortByValue === "age"){
        workers.sort((a, b) => { return a.age - b.age });
    }
    else{
        workers.sort((a, b) => { return a[sortByValue].localeCompare(b[sortByValue]) });
    }

    renderTable();
}

function renderTable() {
    let renderer = new Renderer();

    let tableBody = document.querySelector('.table tbody');
    tableBody.innerHTML = renderer.renderTable(workers);
}




//DARK MODE STAFF

window.onload = function() {
    document.styleSheets[1].disabled = true;
}

document.querySelector('#flexSwitchCheckDefault').addEventListener('click', switchMode);


function switchMode() {
    document.styleSheets[1].disabled = !document.styleSheets[1].disabled
}