import Button from "./Button"
export default function Header ({ onAdd, showAdd }){
    return(
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd}/>
        </header>
    )
}
