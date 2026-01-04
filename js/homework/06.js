// Homework 06. Loops: for / forEach (break, continue, nested loops)
// Мы закрепляем темы из урока 06:
// - цикл for
// - перебор массива через forEach
// - break и continue
// - вложенные циклы (матрица / двумерный массив)
//
// Постарайся ВСЁ РЕШАТЬ В ЭТОМ ФАЙЛЕ, ПОД КАЖДОЙ ЗАДАЧЕЙ.
// Пиши код, НЕ МЕНЯЙ тексты условий задач.
//
// Важно:
// - Используй const там, где значение НЕ меняется.
// - Используй let там, где значение меняется (сумма, счётчик и т.д.).
// - Для вывода используй console.log(...)
//
//
// Task 1. Print numbers (easy)
// 1. С помощью for выведи в консоль числа от 0 до 9.
// 2. С помощью for выведи в консоль числа от 1 до 10.
//
//
// Task 2. Sum 0..N (easy)
// 1. Создай константу N (например 10).
// 2. С помощью for посчитай сумму чисел от 0 до N включительно.
// 3. Выведи в консоль: "Sum from 0 to N is X"
//
//
// Task 3. Break when sum >= limit (medium)
// 1. Создай константу limit (например 30).
// 2. Создай переменную sum = 0.
// 3. С помощью for добавляй к sum значения index (index идёт от 0 вверх).
// 4. Как только sum станет >= limit, сделай break.
// 5. Выведи:
//    - итоговую сумму
//    - индекс, на котором цикл остановился
//
//
// Task 4. Reverse loop (easy-medium)
// 1. С помощью for выведи числа от 10 до 1 (в обратном порядке).
// 2. В конце выведи "Done".
//
//
// Task 5. Furniture rendering (continue) (medium)
// 1. Создай массив furniture, например:
//    const furniture = ["Chair", "Table", null, "Sofa", "Lamp"];
// 2. С помощью for пройдись по массиву.
// 3. Если элемент равен null — пропусти его с помощью continue.
// 4. Если элемент НЕ null — выведи в консоль:
//    "Rendering: Chair" (подставь элемент вместо Chair)
//
//
// Task 6. Count valid items (for and forEach) (medium)
// Используй тот же массив furniture из Task 5.
// 1. Посчитай, сколько элементов НЕ равны null.
// 2. Сделай это ДВУМЯ способами:
//    - через for
//    - через forEach
// 3. Выведи оба результата и убедись, что они одинаковые.
//
//
// Task 7. Find first match + break (medium)
// 1. Создай массив colors, например:
//    const colors = ["red", "green", "blue", "green", "black"];
// 2. С помощью for найди индекс ПЕРВОГО значения "green".
//    - как только нашёл — сделай break
// 3. Выведи в консоль индекс.
// 4. Если "green" нет — выведи -1.
//
//
// Task 8. Build a new array (forEach) (medium)
// 1. Создай массив numbers, например: [3, 10, 5, 8, 1]
// 2. Создай новый массив doubled, где каждое число умножено на 2.
// 3. Реши через forEach (push в doubled).
// 4. Выведи в консоль numbers и doubled.
//
//
// Task 9. Matrix sum (nested loops) (hard)
// 1. Создай двумерный массив matrix, например:
//    const matrix = [
//      [0, 1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9, 10]
//    ];
// 2. Посчитай сумму всех чисел ДВУМЯ способами:
//    - nested for (for внутри for)
//    - nested forEach (forEach внутри forEach)
// 3. Выведи обе суммы и убедись, что они одинаковые.
//
//
// Task 10. Matrix: find max value (hard)
// Используй matrix из Task 9.
// 1. Найди максимальное число в matrix.
// 2. Выведи:
//    - само максимальное число
//    - координаты (rowIndex, colIndex), где оно находится
//    Подсказка: храни maxValue, maxRowIndex, maxColIndex
//
//
// Bonus (optional). Flatten + filter (hard+)
// 1. Создай новый массив flatEvenNumbers.
// 2. С помощью циклов пройди по matrix и добавь в flatEvenNumbers только ЧЁТНЫЕ числа.
// 3. Выведи flatEvenNumbers.
//
//
// Конец Homework 06. Не забывай запускать файл и проверять вывод в консоли.


