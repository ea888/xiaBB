class Greeting extends React.Component {
    render() {
        return (<p>First react static page</p>);
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);