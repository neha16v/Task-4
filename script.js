const response=fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);

const res=response.then(
    (res)=>res.json(),
    (error)=>console.log(error)
);

console.log(res);

res.then((result)=>{
    console.log(result);
    
    const x = result.map((data) => {
        console.log(data.address.street);
        return `<div class="col-3 pt-3 pb-3 ps-3 mt-2 ms-2 me-3 rounded" style="background-color: rgb(154,239,244); width:285px; margin-bottom:40px; box-shadow: 0 4px 2px -2px rgba(0, 0,0,0.2); border: 2px solid transparent;">
        <div class="d-flex fw-bold">
            <label>Name :&nbsp;</label>
            <span>${data.name}</span>
        </div>
        <div class="d-flex">
            <label>Email :&nbsp;</label>
            <span>${data.email}</span>
        </div>
        <div class="d-flex">
            <label>street :&nbsp;</label>
            <span>${data.address.street}</span>
        </div>
        <div class="d-flex">
            <label>City :&nbsp;</label>
            <span>${data.address.city}</span>
        </div>
    </div>`
    });
    
    document.getElementById("root").innerHTML=x;
})
