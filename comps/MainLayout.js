import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  maxWidth: 768,
  margin: "10% auto"
};

const MainLayout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
