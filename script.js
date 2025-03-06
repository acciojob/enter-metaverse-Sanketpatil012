//your JS code here. If required.


let btn =  document.getElementById('enterBtn')
let paragraph= document.getElementById('status')

btn.addEventListener('click' , ()=>{
	let create= document.createElement('h1')
	 create.innerText="Entered Metaverse"
	paragraph.replaceWith(create)
})



