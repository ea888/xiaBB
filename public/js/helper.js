class Helper
{
    handleFieldChange(event)
    {
        const key = event.target.id;
        this.setState({[key]: event.target.value});
    };

    print(param){
        console.log(param);
    };
}