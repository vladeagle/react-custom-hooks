import "./App.css";
import { useFetch } from "./hooks/useFetch.js";
import { useHover } from "./hooks/useHover";
import { useLocalStorage } from "./hooks/useLocalStorage.tsx";
import { useToggle } from "./hooks/useToggle.js";
import { useViewportSize } from "./hooks/useViewportSize";
import { useWindowScroll } from "./hooks/useWindowScroll.js";

function App() {
  const [value, { setItem, removeItem }] = useLocalStorage("some-key");

  const { hovered, ref } = useHover();

  const { height, width } = useViewportSize();

  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [scroll, scrollTo] = useWindowScroll();

  const [valueToggle, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <>
      <div className="app">
        <div className="app__container">
          <h2>Задание #1:</h2>
          <div>
            <button
              className="button"
              onClick={() =>
                refetch({
                  params: {
                    _limit: 3,
                  },
                })
              }
            >
              Перезапросить
            </button>
          </div>

          <div className="spacer"></div>

          <div className="app__data">
            {isLoading && <div className="app__loading">Загрузка...</div>}
            {error && "Произошла ошибка"}
            {data &&
              !isLoading &&
              data.map((item) => (
                <div className="app__ls-item" key={item.id}>
                  {item.title}
                </div>
              ))}
          </div>

          <div className="spacer"></div>

          <h2>Задание #2:</h2>
          <div className="app__ls-item">
            <p>Значение из LocalStorage: {value}</p>
            <div className="ls-item__btns">
              <button
                className="button"
                onClick={() => setItem("new storage value")}
              >
                Задать значение
              </button>
              <button className="button" onClick={() => removeItem()}>
                Удалить значение
              </button>
            </div>
          </div>

          <div className="spacer"></div>

          <h2>Задание #3:</h2>
          <div ref={ref} style={hovered ? { color: "#ffe54c" } : null}>
            {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
          </div>

          <div className="spacer"></div>

          <h2>Задание #4:</h2>
          <div>
            Width: {width}, height: {height}
          </div>

          <div className="spacer"></div>
          <h2>Дополнительное задание #1:</h2>
          <p>
            Scroll position x: {scroll.x}, y: {scroll.y}
          </p>
          <button className="button" onClick={() => scrollTo({ y: 0 })}>
            Scroll to top
          </button>

          <div className="spacer"></div>
          <h2>Дополнительное задание #2:</h2>
          <button className="button" onClick={() => toggle()}>
            {valueToggle}
          </button>

          <div className="spacer"></div>
        </div>
      </div>
    </>
  );
}

export default App;
