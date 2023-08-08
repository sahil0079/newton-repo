





//component

function User(props) {

    console.log('props', props)
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.age),
        React.createElement("h3", {}, props.city),
    ])
}



function App() {

    return React.createElement("div", {}, [
        React.createElement("h1", {}, 'Details of the user'),
        React.createElement(User, {
            name: 'John',
            age: 30,
            city: 'Delhi'
        }),
        React.createElement(User, {
            name: 'Peter',
            age: 40,
            city: 'Mumbai'
        }),
        React.createElement(User, {
            name: 'Alex',
            age: 50,
            city: 'Jabalpur'
        }),

    ])
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));



//next class
//jsx => extension of javascript