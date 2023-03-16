import {Errors} from './Form'

function Formerrors(props: Errors) {
  const formErrors = props
    {Object.keys(formErrors).map((fieldName, i) => {
      const fieldName as keyof Errors
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
}

export default Formerrors
