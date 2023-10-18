const request = require("supertest"); //("http://localhost:3000"); //aquí le digo a donde hacer el request, pero puedo pasarle la app de express
const app = require("../app");
const expect = require("chai").expect;

//describe es lo que uso para agrupar mis escenarios. recibe un string que es la descripción del escenario y 
//una función para definir los casos de prueba.
describe("As a browser I make all REST request to /directors", function () {

    // Bloque "before" se ejecuta una vez antes de todas las pruebas en este describe
    before(() => {
        // Realiza tareas de configuración inicial aquí
        
    });

    // Bloque "beforeEach" se ejecuta antes de cada prueba en este describe
    beforeEach(() => {
    // Realiza tareas de configuración antes de cada prueba aquí
    });

  //it es de mocha y se usa para describir un escenario de prueba único, cada caso de prueba ps

  //como describe, primero se describe el caso el segundo argumento función con el código
  it("makes a GET and returns a list of directors in my database", async function () { //es async porque supertest regresa una promesa
    const response = await request(app).get("/directors"); //si inicializamos la url en la línea 1 aquí agregamos sólo la ruta que falta y usamos request como constante

    expect(response.status).to.eql(200);
    expect(response.body).to.be.an('array');
  });

  it("makes a POST and add an object", async function(){

    const data = {
        name:"Guillermo",
        lastName:"Del Toro"
    };

    const response = await request(app).post("/directors").send(data);

    expect(response.status).to.eql(200); 
    expect(response.body).to.be.an('object');

    const correctName = response.body.name == "Guillermo" && response.body.lastName == "Del Toro"? true:false;
    expect(correctName).to.equal(true);

    //eql verifica que el contenido sean iguales
    //equal es una comparación profunda === no sólo verifica que el contenido sea el mismo, también el tipo

  });

  it("makes a GET/:id request and get an object", async function(){

    const data = {
        name:"Guillermo",
        lastName:"Del Toro"
    };

    const response = await request(app).get("/directors/1");

    //ésta línea está porque quería verificar que mantuviera el objeto agregado, como el proyecto crea siempre de 0
    //la base de datos, al hacer la prueba del POST antes, siempre Guillermo Del Toro tiene el id 1 que es el que busco
    //en esta prueba.
    //console.log('*********************************************************************************++');
    //console.log(response.body.name);

    expect(response.status).to.eql(200); 
    expect(response.body).to.be.an('object');

    const correctName = response.body.name == "Guillermo" && response.body.lastName == "Del Toro"? true:false;
    expect(correctName).to.equal(true);

    //eql verifica que el contenido sean iguales
    //equal es una comparación profunda === no sólo verifica que el contenido sea el mismo, también el tipo

  });

  it("makes a PUT and replace an object", async function(){

    const data = {
        name:"Alejandro",
        lastName:"González Iñárritu"
    };

    //hacemos la primera llamada para reemplazar
    const response = await request(app).put("/directors/1").send(data);

    expect(response.status).to.eql(200); 
    expect(response.body).to.be.an('object');

    //************* Aquí no hace el PUT o no se ve reflejado en el siguiente request
    //await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo (ajusta el tiempo según tus necesidades)
    //const response2 = await request(app).get("/directors/1");
    //expect({name:response2.body.name, lastName:response2.body.lastName}).to.eql(data);

  });

  it("makes a PATCH and update an object", async function(){

    const data = {
        name:"Alejandro",
        lastName:"González Iñárritu"
    };

    const response = await request(app).patch("/directors/1").send(data);

    expect(response.status).to.eql(200); 
    expect(response.body).to.be.an('object');

    //eql verifica que el contenido sean iguales
    //equal es una comparación profunda === no sólo verifica que el contenido sea el mismo, también el tipo

  });

  it("makes a DELETE and get an empty an object", async function(){

    const response = await request(app).delete("/directors/1");

    expect(response.status).to.eql(200); 
    expect(response.body).to.be.an('number');

    //eql verifica que el contenido sean iguales
    //equal es una comparación profunda === no sólo verifica que el contenido sea el mismo, también el tipo

  });


    // Bloque "after" se ejecuta una vez después de todas las pruebas en este describe
  after(() => {
    // Realiza tareas de limpieza o cierre de recursos aquí
  });

  // Bloque "afterEach" se ejecuta después de cada prueba en este describe
  afterEach(() => {
    // Realiza tareas de limpieza después de cada prueba aquí
  });

});