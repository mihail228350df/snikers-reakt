function App() {
  return ( 
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-centr">
         <img width={40} height={40} src= "/img/logo.png" />
         <div className="headerInfo">
           <h3 className="text-uppercase">React Sneakers</h3>
           <p>Магазин лутших кросовок</p>
         </div>
        </div>
        
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src= "/img/basket.svg" /> 
            <span>1205 грн.</span>
          </li>
          <li>
          <img width={40} height={40} src= "/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кросcовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
