class HelloWorld extends React.Component {
    getUrl() {
        return 'https://vk.com/kadochnikov_k'
    }
    render() {
        return (
            <div>
                <p>Мой аккаунт в вк:</p>
                <a href={this.getUrl()}>{this.getUrl()}</a>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <HelloWorld id='1' title='Hi' text='Hello World ' />
        <HelloWorld id='2' title='Hi All' text='Hate You' />
    </div>,
    document.getElementById('content')
)