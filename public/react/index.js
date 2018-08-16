class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFieldChange(event) {
        const key = event.target.id;
        this.setState({[key]: event.target.value});
    }

    signUp(event) {
        event.preventDefault();

        let user = {
            name: this.state.userName,
            password: this.state.password,
            email: this.state.email
        };

        axios.post('user', user)
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                this.setState({resData: res.data});
                // alert(JSON.stringify(res.data));
            })
    }

    goBack(){
        this.setState({resData: undefined});
    }

    render() {
        let msg = this.state.resData;

        if (this.props.login)
            return (<div></div>);
        else if(msg)
            return(
                <div>
                    <h4>{JSON.stringify(msg)}</h4>
                    <button onClick={this.goBack.bind(this)}>Go back</button>
                </div>
            );
        else
            return (
                <div>
                    <h4>Signup</h4>
                    {/*Need to bind(this) whenever this.state is used within the function */}
                    <form>
                    <div>Username:</div>
                    <div><input id="userName" type="text" onChange={this.handleFieldChange.bind(this)}/></div>
                    <div>Password:</div>
                    <div><input id="password" type="password" onChange={this.handleFieldChange.bind(this)}/></div>
                    <div>Email:</div>
                    <div><input id="email" type="email" onChange={this.handleFieldChange.bind(this)}/></div>
                    <div>
                        <input type="submit" value="Sign up" onClick={this.signUp.bind(this)}/>
                        <button onClick={this.props.toggleLogin}>Go to login</button>
                    </div>
                    </form>
                </div>
            );

    }
}

class Login extends React.Component {
    render() {
        // console.log("login:"+this.props.login);
        if (this.props.login)
            return (
                <div>
                    <h4>Login</h4>
                    <div>Username:</div>
                    <div><input type="text"/></div>
                    <div>Password:</div>
                    <div><input type="password"/></div>
                    <div>
                        <button>Login</button>
                        <button onClick={this.props.toggleLogin}>Go to sign up</button>
                    </div>
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

    toggleLoginSignup() {
        // console.log("before click:"+this.state.login);

        //have to call setState to force rendering sub dom
        this.state.login ? this.setState({'login': false}) : this.setState({'login': true});
        // console.log("after click:"+this.state.login);
    }

    renderLogin() {
        {/* arrow function is equivalent to function.bind(this) */
        }
        return <Login login={this.state.login} toggleLogin={() => this.toggleLoginSignup()}/>;
    }

    render() {
        //get state, then pass to sub dom using {}
        let login = this.state.login;

        return (
            //everything must be enclosed within one element
            <div>
                <h3>Welcome to XiaBB</h3>
                {this.renderLogin()}
                {/* pass login to props of sub dom */}
                {/* have to bind to this, or the this keyword in function will be the sub dom */}
                <Signup login={login} toggleLogin={this.toggleLoginSignup.bind(this)}/>
                <Footer/>
            </div>

        );
    }
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);