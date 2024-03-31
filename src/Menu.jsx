import './style/Menu.css';


export default function Head() {
  return (
    <div className='menu'> 
    <ul>
        <li>
            <a href="./index.html" ><button > Главная</button></a>
        </li>
        <li>
            <a href="./theme.html"><button > Темы </button></a>
        </li>
    </ul> 
    </div>
  );
}


