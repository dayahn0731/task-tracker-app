import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Keep track of your tasks by adding, removing, and setting reminder!</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
