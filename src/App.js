function App() {
  return ( 
    <div className="wrapper">
      <header>
        <div className="headerLeft">
         <svg />
         <div className="headerInfo">
           <h3>React Sneakers</h3>
           <p>Магазин лутших кросовок</p>
         </div>
        </div>
        
        <ul className="headerRight">
          <li>
            <svg/> 
            <span>1205 грн.</span>
          </li>
          <li>
            <svg/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кросовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
