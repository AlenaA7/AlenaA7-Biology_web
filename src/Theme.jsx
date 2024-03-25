import './style/Theme.css';


export default function Theme() {
  return (
    <div className='theme'> 
      <div className='theme_text' >
        <h2>Темы</h2>
        <div>
          <div>На данный момент на сайте представлены следущие темы:</div>
          <ul>
              <li>
                  <button > Митоз</button>
              </li>
              <li>
                  <button >Meйоз</button>
              </li>
            </ul> 
        </div>
      </div>
      <div className='theme_img' >
        <img src='./public/mitoz.png' />
      </div>
    </div>
  );
}


