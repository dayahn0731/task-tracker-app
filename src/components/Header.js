import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({showAddTask, showAdd}) => {
    const onClick = () => {
        showAddTask()
    }

    const location = useLocation()

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick} />}
        </header>
    )
}

export default Header
