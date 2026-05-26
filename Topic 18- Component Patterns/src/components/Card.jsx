// Component Composition using children prop

function Card({ children }) {
console.log(children.length);
  return (
    <div style={{ border: "2px solid black", padding: "16px", borderRadius: "12px", marginBottom: "16px" }}>
      {children}  
    </div>
  );
}
function Tab({ children }) {
  return (
    <div style={{ border: "2px solid gray", padding: "8px", borderRadius: "8px", marginBottom: "8px" }}>
        {children}
    </div>
  );
}

export default Card;