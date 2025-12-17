import ControlledForm from '../examples/forms/ControlledForm';
import UncontrolledForm from '../examples/forms/UncontrolledForm';
import FormValidation from '../examples/forms/FormValidation';

function Forms() {
  return (
    <div>
      <h1>Forms and User Input</h1>
      
      <div className="card">
        <h2>1. Controlled Components</h2>
        <ControlledForm />
      </div>

      <div className="card">
        <h2>2. Uncontrolled Components</h2>
        <UncontrolledForm />
      </div>

      <div className="card">
        <h2>3. Form Validation</h2>
        <FormValidation />
      </div>
    </div>
  );
}

export default Forms;

