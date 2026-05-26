function Card({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "16px", borderRadius: "12px", marginBottom: "16px" }}>
      {children}
    </div>
  );
}

export default Card;