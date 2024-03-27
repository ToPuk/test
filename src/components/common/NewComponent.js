import './NewComponent.css';
import { Tovch } from '../../App';

function NewComponent(){
    return (
    <div className='parent'>
        <Tovch />
        <h1 className="breaking-news">Your heading here</h1>
        <p className="warning">Your paragraph text here</p>
        <p>More paragraph text is <span className="highlight">coming your way.</span></p>
    </div>
    )
}
export default NewComponent;