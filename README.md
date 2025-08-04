**Задание #1** — Реализуйте хук useFetch(), который можно будет использовать следующим образом:
```
import { useFetch } from './useFetch';

function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}
```

**Задание #2** — Реализуйте хук useLocalStorage(), который можно будет использовать следующим образом:
```
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
```
Кроме того, необходимо добавить типизацию хука:
```
type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];
```

**Задание #3** — Реализуйте хук useHover(), который можно будет использовать следующим образом:
```
import { useHover } from './useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}
```

**Задание #4** — Реализуйте хук useViewportSize(), который можно будет использовать следующим образом:
```
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
```

**Дополнительное задание #1** — Реализуйте хук useWindowScroll(), который можно будет использовать следующим образом:
```
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
```

**Дополнительное задание #2** — В этом задании необходимо усложнить хук useToggle(). Теперь он должен принимать массив значений, которые будут переключаться по порядку. Если ничего не передавать то будет переключать между true и false. Хук может использоваться следующим образом:
```
import { useToggle } from './useToggle';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

// Еще примеры использования

const [value, toggle] = useToggle(['light', 'dark']);

toggle(); // -> value === 'light'
toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда 
// value станет одним из значений
toggle('dark'); // -> value === 'dark'
```
