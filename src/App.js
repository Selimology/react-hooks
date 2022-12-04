import UseEffectExample from './UseEffectExample';
import UseStateExample from './UseStateExample';
import { createContext } from 'react';
import UseRefExample from './UseRefExample';
import UseReducerExample from './UseReducerExample';
import UseLayoutEffectExample from './UseLayoutEffect';

// Step 1 . Create Context and assign name.
export const LoginContext = createContext();

function App() {
  return (
    //Step 2. Provider and give value
    <LoginContext.Provider value={2}>
      <div>
        {/* <UseStateExample /> */}
        {/* <UseEffectExample /> */}
        {/* <UseRefExample /> */}
        {/* <UseReducerExample /> */}
        <UseLayoutEffectExample />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
