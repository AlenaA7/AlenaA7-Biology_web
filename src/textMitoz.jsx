import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import Modeled from './Modeled'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className='App'>
      <Menu /> 
      <div className='content'>
       <h2 > Митоз </h2>
       <div className='text'>
        
       <div> Митоз - одна из фаз жизненного цикла клетки, способ деления соматических клеток (т.е. не половых).</div> 
       <div> Его биологическая функция: сохранение генетической информации. </div> 
       <div> Используется при: </div> 
       <ul>
            <li>Росте тканей</li>
            <li>Регенерации</li>
            <li>Бесполом размножении</li>
        </ul>
        <div>Митоз состоит из нескольких  этапов:</div>
        <ol>
            <li>Профаза</li>
            <li>Метафаза</li>
            <li>Анафаза</li>
            <li>Телофаза</li>
        </ol>

        <h3>Профаза</h3>
        <ul>
            <li>хромосомы спирализутся, образуя хроматиды</li>
            <li>исчезает ядро и ядрышко</li>
            <li>натягивается веретено деления</li>
        </ul>

        <h3>Метафаза</h3>
        <div>хромосомы выстраиваются вдоль экватора клетки в один ряд</div>

        <h3>Анафаза</h3>
        <ul>
            <li>разделение хромосом</li>
            <li>хроматиды расходятся по полюсами</li>
        </ul>

        <h3>Телофаза</h3>
        <ul>
            <li>цитокинез </li>
            <li>образование ядер</li>
            </ul>

       </div>
      </div>
    </div>
    <div className='empty' ></div>
    <Modeled />
    </>
  </React.StrictMode>,
)

 