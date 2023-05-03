import logo from './logo.svg';
import './App.css';

// * Import Container
// import TaskListComponent from './components/container/Task.list';
import GreetingStyled from './components/pure/GreetingStyled';

// * Import Ejemplos
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre="Samuel">
          Todo lo que hay aqui dentro es tratado como props.children
          <h3>
            Contenido del props.children 
          </h3>
        </Ejemplo4> */}
        <GreetingStyled name='samuel' />
      </header>
    </div>
  );
}

export default App;
