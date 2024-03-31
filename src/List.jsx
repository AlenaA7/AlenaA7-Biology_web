import './style/List.css';


export default function Theme() {
  return (
    <div className='theme'> 
      <div className='theme_text' >
        <h2>Темы</h2>
        <div>
          <div>На данный момент на сайте представлены следущие темы:</div>
          <ul>
              <li>
                  <a href="mitoz.html"><button id='mitoz' > Митоз</button></a>
              </li>
              <li>
                 <a><button id='meyoz'>Meйоз</button></a>
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


