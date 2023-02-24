import { Fragment } from "react";
import "./form.styles.scss";

const Form = (props) => {
  const { name, id, type } = props;
  return (
    <Fragment>
      <div className="form-element">
        <label htmlFor={id}>
          {name} <span>*</span>
        </label>
        <input type={type} id={id}  {...props}/>
      </div>
    </Fragment>
  );
};

export default Form;
