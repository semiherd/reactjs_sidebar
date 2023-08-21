import './App.css';
import logo from './logo.jpeg';
import React from 'react';

function App() {
  
  function handleMenu(menuId,inputId){
    document.addEventListener("click", (e) => {
      const menuElm = document.getElementById(menuId);
      let targetEl = e.target     
      do {
        if(targetEl == menuElm) {
          console.log('Clicked inside')
          return;
        }
        targetEl = targetEl.parentNode;
      } while (targetEl);    
      document.getElementById(inputId).checked = false;
    });
  }

  React.useEffect(() => {
    handleMenu('div_sidebar','side_input')
    handleMenu('div_centerbar','center_input')
  }, []);

  const SideParam= {
    name: 'side',
    inputId: 'side_input',
    menuId: 'div_sidebar'
  }
  const CenterParam= {
    name: 'center',
    inputId: 'center_input',
    menuId: 'div_centerbar'
  }
  const MenuItem= ({param}) => {
    return(
        <div id={param.menuId}> 
          <label className={`hamburger-menu ${param.name}`}>
            <input id={param.inputId} type="checkbox" />
          </label>
          <nav className={`${param.name}bar`}>
            <div>About</div>
            <div>Services</div>
            <div>Careers</div>
            <div>Contact</div>
          </nav>
        </div>
    )
  }
  return (
    <div className="app">
      <div className="app-header">
        <img className="logo" src={logo} />
        <MenuItem param={SideParam}/>
        <MenuItem param={CenterParam}/>       
      </div>
      <div className="app-body">
      </div>
    </div>
  );
}

export default App;
