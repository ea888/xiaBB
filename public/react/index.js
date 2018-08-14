class Login extends React.Component {
    render() {
        return (
            <div>
                <h4>Login</h4>
                <div>Username:</div><div><input type="text"/></div>
                <div>Password:</div><div><input type="password"/></div>
                <div><button>Login</button><button>Go to sign up</button></div>
            </div>
        );
    }
}

class Signup extends React.Component {
    render() {
        return (
            <div>
                <h4>Signup</h4>
                <div>Username:</div><div><input type="text"/></div>
                <div>Password:</div><div><input type="password"/></div>
                <div>Email:</div><div><input type="email"/></div>
                <div><button>Sign up</button><button>Go to login</button></div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (<p>Footer</p>);
    }
}

class Greeting extends React.Component {

    renderLogin(){
        return <Login />;
    }

    render() {
        return (
            //everything must be enclosed within one element
            <div>
                <h3>Welcome to XiaBB</h3>
                {this.renderLogin()}
                {/* must use {} expression to render sub dom */}
                {<Signup />}
                {<Footer />}
            </div>

        );
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);