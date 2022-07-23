import  PropTypes from 'prop-types'
/*const getSaludo = () => {
    return 'Hola mundo desde la funcion saludar';
}

const newMessage = {
    message: 'Hola mundo',
    title: 'Ricardo'
}*/
export const FirstApp = ( { title, subTitle, name } ) => {    
    return (
        <>            
            <h1>{ title }</h1>            
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>        
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay sub titulo',
    name: 'Ricardo Caro'
}