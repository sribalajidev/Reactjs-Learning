import BasicForms from "./components/BasicForms";
import MultipleInputsForm from "./components/MultipleInputsForm";
import CheckboxRadioForms from "./components/CheckboxRadioForms";
import FormValidation from "./components/FormValidation";
import DynamicForms from "./components/DynamicForms";
import FormSubmission from "./components/FormSubmission";
import FormikAndYup from "./components/FormikAndYup";
import FileUpload from "./components/FileUpload";
import AdvancedFormPatterns from "./components/AdvancedFormPatterns";

function App() {
  return (
    <>
      <BasicForms />
      <hr />
      <MultipleInputsForm />
      <hr />
      <CheckboxRadioForms />
      <hr />
      <FormValidation />
      <hr />
      <DynamicForms />
      <hr />
      <FormSubmission />
      <hr />
      <FormikAndYup />
      <hr />
      <FileUpload />
      <hr />
      <AdvancedFormPatterns />
    </>
  )
}

export default App
