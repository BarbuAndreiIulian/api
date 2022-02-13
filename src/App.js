import "./App.css";

function App() {
  fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.body.style.backgroundImage = `url(${data.urls.regular})`;
      document.getElementById("authorName").innerHTML = `By: ${data.user.name}`;
    })
    .catch((err) => {
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
      // Report the error to some kind of service
    });

  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("cryptoName").innerHTML = data.name;
      document.getElementById(
        "imgContainer"
      ).innerHTML = `<img src="${data.image.small}" />`;
      document.getElementById(
        "current"
      ).textContent = `🎯$${data.market_data.current_price.usd}`;
      document.getElementById(
        "highest"
      ).textContent = `👆 $${data.market_data.high_24h.usd}`;
      document.getElementById(
        "lowest"
      ).textContent = `👇 $${data.market_data.low_24h.usd}`;
    })
    .catch((err) => console.log(err));
  /*  <p>🎯: ${da}</p>
            <p>👆: </p>
            <p>👇: </p>*/
  return (
    <div className="App" id="App">
      <div className="top-div">
        <div className="dogecoinInfo">
          <div className="dogecoin">
            <div id="imgContainer"></div>
            <h3 id="cryptoName"></h3>
          </div>
          <div dogecoin1>
            <ul>
              <li id="current"></li>
              <li id="highest"></li>
              <li id="lowest"></li>
            </ul>
          </div>
        </div>
        <h3>Weather</h3>
      </div>
      <div className="time">
        <h1>TIME</h1>
      </div>
      <div className="authorName">
        <p id="authorName"></p>
      </div>
    </div>
  );
}

export default App;
