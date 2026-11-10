import  './app.css'
function Student(props){
    return(
        <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.iStudent ? "Yes":"No"}</p>

        </div>
        
    );
}
export default Student