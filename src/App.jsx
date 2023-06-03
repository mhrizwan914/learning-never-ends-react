import { Button } from "@mui/material";
import ClassComponents from "./Concepts/ClassComponents"

const App = () => {
  return (
    <>
      <ClassComponents surname="Bilal">
        <Button type="button" variant="contained" color="warning">Click Me</Button>
      </ClassComponents>
    </>
  );
}

export default App;