import {useId} from 'react'

const Index = () => {
    // useid is used to generate unique ids for form elements, which is important for accessibility and to avoid conflicts when multiple instances of the same component are rendered.
    const usernameId = useId();
    const passwordId = useId();
  return (
    <div>
    <form>
        <div>
            <label htmlFor={usernameId}>Username: </label>
            <input type="text" id={usernameId} />
        </div>
        <div>
            <label htmlFor={passwordId}>Email: </label>
            <input type="email" id={passwordId} />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Index