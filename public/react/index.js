class Signup extends React.Component {
    render() {
        // console.log("sign up:"+this.props.login);
        if(this.props.login)
            return (<div></div>);
        else
            return (
                <div>
                    <h4>Signup</h4>
                    <div>Username:</div><div><input type="text"/></div>
                    <div>Password:</div><div><input type="password"/></div>
                    <div>Email:</div><div><input type="email"/></div>
                    <div><button>Sign up</button><button onClick={this.props.toggleLogin}>Go to login</button></div>
                </div>
            );
    }
}

class Login extends React.Component {
    render() {
        // console.log("login:"+this.props.login);
        if(this.props.login)
            return (
                <div>
                    <h4>Login</h4>
                    <div>Username:</div><div><input type="text"/></div>
                    <div>Password:</div><div><input type="password"/></div>
                    <div><button>Login</button><button onClick={this.props.toggleLogin}>Go to sign up</button></div>
                </div>
            );
        else
            return (<div></div>);
    }
}

class Footer extends React.Component {
    render() {
        return (<p>Footer</p>);
    }
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        };
    }

    toggleLoginSignup(){
        // console.log("before click:"+this.state.login);

        //have to call setState to force rendering sub dom
        this.state.login ? this.setState({'login':false}) : this.setState({'login':true});
        // console.log("after click:"+this.state.login);
    }

    renderLogin(){
        {/* arrow function is equivalent to function.bind(this) */}
        return <Login login = {this.state.login} toggleLogin = {() => this.toggleLoginSignup()}/>;
    }

    render() {
        //get state, then pass to sub dom using {}
        const login = this.state.login;

        return (
            //everything must be enclosed within one element
            <div>
                <h3>Welcome to XiaBB</h3>
                {this.renderLogin()}
                {/* pass login to props of sub dom */}
                {/* have to bind to this, or the this keyword in function will be the sub dom */}
                <Signup login = {login} toggleLogin = {this.toggleLoginSignup.bind(this)}/>
                <Footer />
            </div>

        );
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);