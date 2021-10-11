function App() {
    return (
        <div>
            <Tweets msgs={[
                {username:"dodo", name:"doris", date:"10/10/2021", msg:"hello this is my first tweet"},
                {username:"dodo2", name:"doris2", date:"11/10/2021", msg:"hello this is my second tweet"},
                {username:"dodo3", name:"doris3", date:"12/10/2021", msg:"hello this is my third tweet"}
                ]} />
        </div>
    );
}