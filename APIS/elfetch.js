console.log("Sale con fetch");

const ConsumiendoApi2 = () =>{
    console.log(`Si funciona`);
    
    const API_URL = `https://jsonplaceholder.typicode.com/users`;

    fetch(API_URL)
    .then(respuesta =>respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
    .then(data =>{
        console.log(data);

        document.getElementById('2').innerHTML="";
        
        for (let index = 0; index < data.length; index++) {
            console.log(data[index].company.name);
            document.getElementById('2').innerHTML+= "<p class ='text-center bg-dark text-info rounded rounded-3' >"+data[index].company.name + "</p>";
        
        }
        
    });

}