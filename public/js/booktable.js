fetch('../json/project.json')


.then(Response => Response.json())

.then(sdata =>{
    contact(sdata)
    kasak(sdata)
    yo(sdata)
})

function contact(sdata){
    let s_list=" ";
    s_list +=`<h1 id="contact">${sdata.contact}<br></h1>
        <p id="contact">${sdata.line} </p>`
    document.getElementById('contact').innerHTML=s_list;

    let you=document.querySelectorAll("#contact");
    you.forEach(abc=>{
        abc.style.color="black"
        abc.style.fontSize="55px"
        abc.style.textAlign="center"
    })

}

function kasak(sdata){
    let s_list=" ";
    s_list +=`<h1>${sdata.Add}<br></h1>
        <p>${sdata.street} </p><br>
        <p>${sdata.num}</p>
        <p>${sdata.street}</p>
        <h1>${sdata.mail}</h1>
        <p>${sdata.mid}</p>
        <p>${sdata.us}</p>`
    document.getElementById('jay').innerHTML=s_list;            
}

function yo(sdata){
    let s_list=" ";
    s_list +=`<p id="bus">${sdata.name}</p>
    <input id="bus"  type="text" placeholder="Enter your name" >
    <p id="bus">${sdata.email}</p>
    <input id="bus"  type="text" placeholder="Email" >
    <p id="bus">${sdata.q}</p>
    <input id="bus"  type="text" placeholder="Enter Query" >
    <br><br>
    <button id="bus">Send</button> `

    document.getElementById('joy').innerHTML=s_list;
    


}


