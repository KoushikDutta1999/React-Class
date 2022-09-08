import "./styles.css";
import withHeader from "./withHeader";

function Dashboard(props) {
  return (
    <div className="App">
      <h4>{props.title}</h4>
      <hr />
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <button onClick={() => props.setCount(20)}>Click</button>
    </div>
  );
}
// HOC has to be export defaul and then HOC_name(component_name)
export default withHeader(Dashboard);
