

function App() {
  return <div> 
   <CardWrapper>
     <div>
      hi there
     </div>
   </CardWrapper>
   <br />
   <CardWrapper>
     <div>
      hello there
     </div>
   </CardWrapper>
   
   <CardWrapper>
     <div>
        
     </div>
  </CardWrapper>
  </div>
   
}

function CardWrapper({children}) {
   return <div style={{border: "2px solid black"}}>
    {children}
   </div>
}




export default App;