function Tweets({msgs}) {
    return (
        <ul className="Tweets">
            { msgs.map(function (msg) {
                <li>
                    <h3>Tweet</h3>
                    <h4>from: {msg.username}, {msg.name}</h4>
                    <i>date created: {msg.date}</i>
                    <p>{msg.msg}</p>
                </li>
                })
            };
        </ul>);
}
