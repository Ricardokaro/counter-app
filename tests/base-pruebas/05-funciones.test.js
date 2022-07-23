import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => {
    test('getUser debe retornar un objeto',() => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect(testUser).toEqual(user);
    });

    test('getUserActivo debe retornar un objeto',() => {
        
        const testUserioActivo = {
            uid: 'ABC567',
            username: 'Ricardo'
        };

        const usuarioActivo = getUsuarioActivo('Ricardo');
        
        expect(testUserioActivo).toEqual(usuarioActivo);
    });
});