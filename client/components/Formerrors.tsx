import { Errors } from './Form'

function Formerrors(errors: Errors) {
  return <p>{Object.values(errors).find((e) => e)}</p>
}

export default Formerrors
