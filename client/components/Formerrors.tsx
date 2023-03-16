import { Errors } from './Form'

function Formerrors(props: Errors) {
  console.log('active')
  const formErrors = props
  {
    Object.keys(formErrors).map((fieldName, i) => {
      const prop = fieldName as keyof Errors
      if (formErrors[prop].length > 0) {
        console.log('error found')
        return (
          <p key={fieldName}>
            {prop} {formErrors[prop]}
          </p>
        )
      } else {
        return ''
      }
    })
  }
}

export default Formerrors
