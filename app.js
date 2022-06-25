require('colors');

const {inquirerMenu, 
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {



    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        console.log({opt});

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea (desc);
                console.log(desc);
                break;
        
            case '2':
                console.log(tareas._listado);
                break;

            default:
                break;
        }


        await pausa();
    } while (opt !== '0');

    

    
}


main()
