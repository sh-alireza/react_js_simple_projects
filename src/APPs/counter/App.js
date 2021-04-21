import React from "react";
import Counter from './Counter';
class App extends React.Component{
    render() {
        return(
            <div>
                <Counter counter={3} />
            </div>
        );
    }
}
export default App;