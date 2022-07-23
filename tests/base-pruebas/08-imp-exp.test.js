import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes  from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de tenornar un héroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );
        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });       

    });

    test('getHeroeById debe de tenornar undefined si no existe', () => {

        const id = 1000;
        const heroe = getHeroeById( id );
        expect( heroe ).toBeFalsy();       

    });

    // Tarea
    // Debe retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado
    test('getHeroesByOwner Debe retornar un arreglo con los héroes de DC', () => {        
        const owner = 'DC';
        const heroeFiltrado = getHeroesByOwner( owner );
        expect( heroeFiltrado.length ).toBe(3);
        expect( heroeFiltrado ).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }            
        ]);
    });
    
    //debe retornar un arreglo con los héroes de marvel
    //length === 2
    test('getHeroesByOwner Debe retornar un arreglo con los héroes de marvel', () => {        
        const owner = 'Marvel';
        const heroeFiltrado = getHeroesByOwner( owner );
        expect( heroeFiltrado.length ).toBe(2);        
        expect( heroeFiltrado ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) ); 
    });
}); 