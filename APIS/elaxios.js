console.log("Sale con axios");

const ConsumiendoApi3 = () =>{
    console.log(`Si funciona`);
    
    const API_URL = `https://jsonplaceholder.typicode.com/users`;
    axios
        .get(API_URL)
        .then(respuesta =>respuesta.data)
        .then(data =>{
            console.log(data);

            document.getElementById('3').innerHTML="";
        
            for (let index = 0; index < data.length; index++) {
                console.log(data[index].company.name);
                document.getElementById('3').innerHTML+= "<p class ='text-center bg-dark text-info rounded rounded-3' >"+data[index].name + " vive en "+data[index].address.city + "</p>";
            }
        });

}