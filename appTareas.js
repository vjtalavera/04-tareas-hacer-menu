require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes');

const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {



    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});
        //if (opt !=='0') await pausa();

        const tareas = new Tareas();
        console.log(tareas);
        const tarea = new Tarea('mi comida');
        console.log(tarea);
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        await pausa();
    } while (opt !== '0');

    

    
}


main()
