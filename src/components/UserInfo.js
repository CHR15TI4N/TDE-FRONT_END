import './UserInfo.css';

const UserInfo = ({name, birthday, email, color}) => {
    return (
        <div className='userInfo' style={{color: color}}>
            <h4>Nome: {name}</h4>
            <h4>Data de nascimento: {birthday}</h4>
            <h4>E-mail: {email}</h4>
        </div>
    )
}

export default UserInfo;