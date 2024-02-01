console.log("Hola blblblbalbalb");

const ConsumiendoApi = () =>{

    console.log("Si entro");

    //Aqui consume

    const API_URL = `https://jsonplaceholder.typicode.com/users`;

    const consulta = new XMLHttpRequest();
    consulta.open("GET", API_URL);

    consulta.send();

    consulta.onreadystatechange = (e) => {
        //Aqui hacemos la respuesta

        console.log(e);

        if(consulta.readyState == 4){
            if(consulta.status == 200){
                console.log(consulta.responseText);

                const data = JSON.parse(consulta.responseText);

                document.getElementById('1').innerHTML="";

                for (let index = 0; index < data.length; index++) {
                    console.log(data[index].name);
                    document.getElementById('1').innerHTML+= "<p class ='text-center bg-dark text-info rounded rounded-3' >"+data[index].name + "</p>";
                
                }
            }
        }
    };
};

const boton = document.getElementById("btnA");

boton.addEventListener("click",e =>{
ConsumiendoApi();
ConsumiendoApi2();
ConsumiendoApi3();
});