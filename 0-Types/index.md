- Какие типы данных существуют в js?
  -  string,  number, boolean, Null, undefined, Object, BigInt, Symbol
  -  Map, Set, Function, Array, 
- Какие значения может возвращать оператор typeof?

- Что такое статическая и динамическая типизация?
  - Динамическая: JS, Python, ..., Статическая: C#, C, TypeScript
  - Статическая — ошибки до запуска — умная
    Динамическая — ошибки на ходу  — быстрая
    Сильная — Охраняет типы данных — надёжная
    Слабая — Изменчивые типы данных — гибкая
  - Какая типизация реализована в JS?
- Что такое компилируемые и интерпретируемые языки?
  - Каким языком будет JS?
  - JS — интерпретируемый
  - 

- В чем разница между сохранением по ссылке и сохранением по значению?
  - примитивы и объекты
  - 1, 100 - 99 -> 1
- Чем примитивные типы отличаются от не-примитивных?
  
- Почему примитивные типы имеют методы? Например, 'hello'.toUpperCase() => 'HELLO'
  - https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/boxing/theory_unit
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
- В чем разница между == и ===?
  - https://262.ecma-international.org/12.0/#sec-abstract-equality-comparison
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

- Как проверить, что объект это объект?
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- В чем разница между стрелочной функцией и обычной?
  - => — нет .this
    - пойдёт искать в другом месте
  - => неявный ретёрн
  - => всегда выражение
