

let ul = document.querySelector('ul');
ul.id ='collection';
ul.style.listStyleType ="none";
ul.style.textAlign ="center";
const list = document.querySelectorAll('li');
list[0].style.color = 'green'
list[0].style.fontWeight = 'bold'
list[1].style.color = 'green'
list[1].style.fontWeight = 'bold'
list[2].style.color = 'green'
list[2].style.fontWeight = 'bold'
list[3].style.color = 'green'
list[3].style.fontWeight = 'bold'
list[4].style.color = 'green'
list[4].style.fontWeight = 'bold'
console.log(list);

let i = 1;
let add = document.getElementById('add').addEventListener('click',
 function onClick(){

  let abr = document.createElement('li');
  abr.innerHTML = '<span style="color:green;font-weight:bold">adding item</span> '  +i;
  i++;
  collection.append(abr);
});

let remove = document.getElementById("remove").addEventListener('click', onClick);

function onClick(){
  document.querySelectorAll('ul');
  ul .lastChild.remove();
}

let butn = document.getElementById('add');
butn.style.color = 'white';
butn.style.backgroundColor = 'black';
butn.style.border = 'none';
butn.style.padding = '1rem';
butn.style.borderRadius = '5px';

let butn1 = document.getElementById('remove');
butn1.style.color = 'white';
butn1.style.backgroundColor = 'red';
butn1.style.border = 'none';
butn1.style.padding = '1rem';
butn1.style.borderRadius = '5px';



let div2 = div.cloneNode(true); // clone the message
console.log(div2);
div2.querySelector('strong').innerHTML = 'Bye there!';
div.after(div2);// show the clone after the existing div