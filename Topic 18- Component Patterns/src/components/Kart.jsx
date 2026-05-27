const Kart = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8pxx" }}>
      {children}
    </div>
  );
};
Kart.Item = function KartItem({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {children}
    </div>
  );
};
Kart.header = function KartHeader({ children }) {
  return <div>{children}</div>;
};
Kart.body = function KartBody({ children }) {
  return <div>{children}</div>;
};
Kart.footer = function KartFooter({ children }) {
  return <div>{children}</div>;
};
export default Kart;
