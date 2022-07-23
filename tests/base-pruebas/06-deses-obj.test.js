import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba 06-deses-obj', () => {
    test('06-deses-obj debe retornar un objeto', () => {
        const testUsContext = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
    
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };
        
        const objUsContext = usContext( persona );        
        
        expect(testUsContext).toEqual(objUsContext);
    });    
});