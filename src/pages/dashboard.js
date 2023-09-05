import {useEffect} from 'react';
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const dasboardStyle ={ 
        display :'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100wh',
        fontSize:'2rem'
    }
    const handleSubmit = () => {
        navigate('/profile')
    }
  return (
    <div style={dasboardStyle}>
        <h1>dashboard</h1>
        <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Dashboard