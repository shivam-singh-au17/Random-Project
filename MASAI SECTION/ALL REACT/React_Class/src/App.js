import React from 'react';
import './App.css';
// import ClassFirst from './components/ClassFirst';
// import SomeCounter from './components/SomeCounter';
import ConditionalRendering from './components/ConditionalRendering';
// import MultiForm from './components/MultiForm';

function App() {
  return (
    <div className="myContainer">
      <div className="main">
        {/* <MultiForm/> */}
        <ConditionalRendering/>
        {/* <ClassFirst/> */}
        {/* <SomeCounter/> */}
      </div>
    </div>
  );
}

export default App;

