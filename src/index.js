import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function Login() {
  const [isClick, changeIsClick] = React.useState(false);
  
  function press() {
    changeIsClick(!isClick);
  }

  return(
    <>
      {!isClick &&
        <div className='menuItem' onClick={() => press()}>
          <img src="iconUser1.png"></img>
        </div>
      }
      {
        isClick &&
        <>
          <label>
            Имя пользователя:
            <input/>
          </label>
          <label>
            Пароль:
            <input/>
          </label>
          <button onClick={() => press()}>Войти</button>
        </>
      }
    </>
  )
}

function Head() {
  return (
    <>
      <div className='menuFlex'>
        <div className='imgItem'>
          <img src="logo.png"></img>
        </div>
          <div className='menuItem'>
            Browse
          </div>
          <div className='menuItem'>
            Manga
          </div>
          <div className='menuItem'>
            Games
          </div>
          <div className='menuItem'>
            Store
          </div>
          <div className='menuItem'>
            News
          </div>
          <div className='menuEmptyItem'>
          </div>
          <div className='menuEmptyItem'>
          </div>
          <div className='menuEmptyItem'>
          </div>
          <div className='menuItem'>
            <img src="iconSearch1.png"></img>
          </div>
          <div className='menuItem'>
            <img src="iconBookmark1.png"></img>
          </div>
          <Login />
      </div>
    </>
  )
}



function Carousel() {

  const [numImg, changeNumImg] = React.useState(0);
  const imagesCarousel = ["carousel/img1.png", "carousel/img2.png", "carousel/img3.png", "carousel/img4.png", "carousel/img5.png"];

  function press(next) {
    let num = 0;
    if (next) {
      if (numImg < imagesCarousel.length - 1)
        num = numImg + 1;
      else
        num = 0;
    }
    else {
      if (numImg > 0)
        num = numImg - 1;
      else
        num = imagesCarousel.length - 1;
    }
    changeNumImg(num);
  }

  return (
    <div className='carousel'>
      <div className='button'>
        <img src='carousel/prev.png' onClick={() => press(false)}></img>
      </div>
      <img src={imagesCarousel[numImg]}></img>
      <div className='button'>
        <img src='carousel/next.png' onClick={() => press(true)}></img>
      </div>
    </div>
  )
}

const gallery = ["block/girl-bunny.jpg","block/bananya.jpg","block/kaguya.jpg","block/evangelion.jpg","block/yarichin.jpg"];
const desc = [`Азусагава Сакута, сидя в обычной городской библиотеке, сталкивается с невероятно загадочной и одновременно безумно привлекательной незнакомкой. Она облачилась в откровенный костюм зайца, который полностью противоречит окружающей обстановке. В подобных нарядах в читальном зале однозначно еще не появлялись. Странноватая особа представляется, как Сакураджиме Май.`,
            `Бананя — таинственный кот, который прячется среди бананов. Он живет под прикрытием в настоящем банане, и никто никогда не видел часть, которая закрыта кожурой от банана. Ну, а когда Бананя один, он тайно играет и балуется. Бананя любит играть и есть сладости. А еще Бананя мечтает стать стильным шоколадным бананом.`,
            `Лидерство в подростковой сфере имеет огромнейшее значение. Оно наделяет уверенностью и дает уважение со стороны сверстников. Ребятам, отличающимся выдающимся интеллектом, заполучить привлекательный титул довольно легко. Но разряд некого гения не гарантирует, что к ногам подростка моментально падут все блага.`,
            `Проходит пятнадцать лет после обрушения на Землю масштабной необъяснимой катастрофы. Гигантское количество людей погибло в ходе воцарившегося хаоса, а выжившие счастливчики даже подумать не могли, что страшное происшествие является лишь началом цепочки испытаний. В определенный момент планета подверглась атаке огромных существ, называемых Ангелами.`,
            `Аниме «Клуб Яричин» расскажет нам о старшекласснике по имени Такаши, переведшимся в школу для мальчиков, находящуюся в горах. В учебном заведении очень строгие порядки, о нем ходит немало легенд. Герой завел дружбу со школьником Кеске, посоветовавшим ему податься в спортивную секцию. Такаши отказался, так как он ненавидел спорт и терпеть не может нагрузки.`];
let arrImg = [];
for (let i = 0; i < gallery.length; i++) {
  arrImg.push({
    url: gallery[i],
    desc: desc[i]
  });
}

function GalleryItem(props) {
  const [isClick, changeIsClick] = React.useState(false);

  function press() {
    changeIsClick(!isClick);
  }

  return(
    <>
      {
        !isClick &&
        <div className='galleryItem'>
          <img onClick={() => press()} src={props.url}/>
        </div>
      }
      {
        isClick &&
        <div className='galleryItem'>
          <p onClick={() => press()}>
            {props.desc}
          </p>
          {/* <button onClick={() => press()}>X</button> */}
        </div>
      }
    </>
  )
}

function BlockGallery(props) {
  const list = props.list.map((item, key) => <GalleryItem url={item.url} desc={item.desc}/>);

  return (
    <>
      <div className='gallery'>
        {list}
      </div>
    </>
  );

}

function Content() {
  return(
    <>
      <Head/>
      <Carousel/>
      <BlockGallery list={arrImg}/>
      <div className='footer'>
        <img src='footer.png'/>
      </div>
    </>
  );
}

root.render(<Content/>);
