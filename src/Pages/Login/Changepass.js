import "./Changepass.css";
import { Badge } from "reactstrap";
function Changepass() {
  return (
    <div>
      <Badge color="primary">Primary</Badge>
      <Badge>Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge className="text-dark" color="light">
        Light
      </Badge>
      <Badge color="dark">Dark</Badge>
    </div>
  );
}
export default Changepass;
