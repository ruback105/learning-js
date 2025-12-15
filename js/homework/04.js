// Homework 04. if/else, logical operators, strict equality, arrays.includes()
// Мы закрепляем темы из урока 04:
// - if / else if / else
// - операторы сравнения: >, <, >=, <=
// - логические операторы: && (AND), || (OR)
// - строгое сравнение === и НЕстрогое ==
// - массивы и проверка через .includes()
// - простые функции (параметры, return)
//
// Постарайся ВСЁ РЕШАТЬ В ЭТОМ ФАЙЛЕ, ПОД КАЖДОЙ ЗАДАЧЕЙ.
// Пиши код, НЕ МЕНЯЙ тексты условий задач.
//
// Важно:
// - Используй const там, где значение НЕ меняется.
// - Используй let там, где значение меняется.
// - Для вывода используй console.log(...)
//
//
// Task 1. Budget check (проверка денег)
// 1. Создай константы:
//    - money (сколько денег у тебя есть, number)
//    - productA, productB, productC, productD (цены товаров, number)
// 2. Создай константу sum (сумма всех товаров).
// 3. Если money >= sum, выведи "You can pay."
//    иначе выведи: "Insufficient money amount. Need X more eur"
//    где X = sum - money
//
// Подсказка: используй template literals: `Need ${...} more eur`
//
//
// Task 2. Minimum age (простое условие)
// 1. Создай константы:
//    - MIN_AGE = 18
//    - personAge (число)
// 2. Если personAge >= MIN_AGE выведи "Allowed"
//    иначе выведи "Not allowed"
//
//
// Task 3. Legal age: EU vs USA
// 1. Создай константы:
//    - LEGAL_EU_AGE = 18
//    - LEGAL_USA_AGE = 21
//    - age (число)
// 2. Напиши if / else if / else:
//    - если age >= LEGAL_EU_AGE И age >= LEGAL_USA_AGE -> "Person can buy alcohol anywhere in the world!"
//    - иначе если age >= LEGAL_USA_AGE -> "Person can buy alcohol in USA"
//    - иначе если age >= LEGAL_EU_AGE -> "Person can buy alcohol in EU"
//    - иначе -> "Person cannot buy alcohol anywhere"
//
// Вопрос (в комментарии): достаточно ли проверять age >= LEGAL_USA_AGE, чтобы понять,
// что человек может купить алкоголь и в EU, и в USA? Почему?
//
//
// Task 4. Job eligibility (возраст + требования)
// Есть минимальный возраст и требования по образованию.
// 1. Создай константы:
//    - minAge (число, например 18)
//    - candidateAge (число)
//    - educationRequirement (массив строк, например ["bachelor", "master"])
//    - candidateEducation (строка)
// 2. Если candidateAge >= minAge И educationRequirement.includes(candidateEducation) == true,
//    выведи "Candidate can get a job"
//    иначе выведи "Candidate cannot get a job"
//
// Дополнительно:
// - Сначала сделай решение через || без includes (сравни с educationRequirement[0] и [1]).
// - Потом перепиши через includes (как в уроке).
//
//
// Task 5. Strict vs loose equality (=== vs ==)
// 1. Создай константы:
//    - a = 30 (number)
//    - b = "30" (string)
// 2. Проверь и выведи в консоль результаты:
//    - a == b
//    - a === b
// 3. В комментарии объясни разницу результата.
// 4. Сделай так, чтобы строгая проверка стала true (a === something),
//    но НЕ меняй значение a. (подсказка: Number(b))
//
//
// Task 6. Boolean logic warm-up (&& и ||)
// 1. Создай константы:
//    - hasPassport (boolean)
//    - hasTicket (boolean)
//    - hasMoney (boolean)
// 2. Напиши условия:
//    - Если hasPassport И hasTicket -> "You can travel"
//    - Если hasPassport И (hasTicket ИЛИ hasMoney) -> "You have options"
//    - Иначе -> "You cannot travel"
//
// Важно: сделай именно 1 цепочку if / else if / else.
//
// Task 10 (Bonus). Combine everything (мини-кейс)
// Представь, что компания нанимает кандидата, если:
// - возраст >= 18
// - образование подходит (bachelor или master)
// - и кандидат НЕ младше 21 (доп. требование для ночной смены)
//
// 1. Создай константы:
//    - MIN_AGE = 18
//    - NIGHT_SHIFT_AGE = 21
//    - requirement = ["bachelor", "master"]
//    - age (число)
//    - education (строка)
// 2. Выведи в консоль:
//    - "Hired for night shift" если age >= NIGHT_SHIFT_AGE И education подходит
//    - "Hired (day shift only)" если age >= MIN_AGE И education подходит, но age < NIGHT_SHIFT_AGE
//    - "Not hired" иначе
//
//
// Конец Homework 04. Не забывай запускать файл и проверять вывод в консоли.

