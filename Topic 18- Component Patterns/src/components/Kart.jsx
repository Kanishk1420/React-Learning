const Kart = ({ children }) => {
  return <div>{children}</div>;
};
Kart.Item = function KartItem({ children }) {
  return <div>{children}</div>;
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
