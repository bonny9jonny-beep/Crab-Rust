const tasks = [
    // ГЛАВА 1: ПОДГОТОВКА (1-5)
    {
        title: "01. Инициализация",
        crab: "Привет! Я Феррис. Давай подготовим твои клешни. Сначала ставим Rust через rustup.",
        body: "<p>В терминале:</p><div class='code-block p-4 my-2 text-orange-400'>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</div>"
    },
    {
        title: "02. Проверка связи",
        crab: "Убедимся, что компилятор видит нас. Ты должен увидеть версию не ниже 1.70.",
        body: "<div class='code-block p-4 my-2 text-green-400'>rustc --version</div>"
    },
    {
        title: "03. Твой первый Cargo",
        crab: "Cargo — это всё. Он создаст структуру проекта. Погнали!",
        body: "<div class='code-block p-4 my-2 text-blue-400'>cargo new my_project && cd my_project</div>"
    },
    {
        title: "04. Hello, World!",
        crab: "Запусти стандартный код. Почувствуй запах свежего бинарника.",
        body: "<div class='code-block p-4 my-2 text-yellow-400'>cargo run</div>"
    },
    {
        title: "05. Структура проекта",
        crab: "Посмотри на файлы. Cargo.toml — это паспорт проекта, а src/main.rs — его сердце.",
        body: "<p>Открой проект в VS Code: <b>code .</b></p>"
    },

    // ГЛАВА 2: ОСНОВЫ СИНТАКСИСА (6-15)
    {
        title: "06. Переменные let",
        crab: "По умолчанию в Rust всё неизменно. Попробуй объявить переменную.",
        body: "<div class='code-block p-4 my-2 text-pink-400 text-xs'>let x = 5;</div>"
    },
    {
        title: "07. Мутабельность mut",
        crab: "Хочешь менять значение? Используй mut. Но не злоупотребляй!",
        body: "<div class='code-block p-4 my-2 text-pink-400 text-xs'>let mut y = 10; y = 20;</div>"
    },
    {
        title: "08. Константы const",
        crab: "Константы живут вечно (пока работает программа) и всегда имеют тип.",
        body: "<div class='code-block p-4 my-2 text-pink-400 text-xs'>const MAX_POINTS: u32 = 100_000;</div>"
    },
    {
        title: "09. Типы: Числа",
        crab: "i32 (целое), f64 (дробное). Rust очень строгий с типами!",
        body: "<p>Попробуй сложить их — компилятор не даст без преобразования.</p>"
    },
    {
        title: "10. Булевы и Char",
        crab: "true/false и одиночные символы в одинарных кавычках '🦀'.",
        body: "<div class='code-block p-4 my-2 text-cyan-400'>let is_crab: bool = true;</div>"
    },
    {
        title: "11. Кортежи (Tuples)",
        crab: "Группируй разные типы вместе. Удобно для возврата нескольких значений.",
        body: "<div class='code-block p-4 my-2 text-cyan-400'>let tup: (i32, f64, u8) = (500, 6.4, 1);</div>"
    },
    {
        title: "12. Массивы",
        crab: "Массивы в Rust имеют фиксированную длину. Они лежат в стеке.",
        body: "<div class='code-block p-4 my-2 text-cyan-400'>let a = [1, 2, 3, 4, 5];</div>"
    },
    {
        title: "13. Функции fn",
        crab: "Функции — это база. Не забудь указать типы аргументов!",
        body: "<div class='code-block p-4 my-2 text-purple-400'>fn my_func(x: i32) -> i32 { x + 1 }</div>"
    },
    {
        title: "14. Условия if",
        crab: "Никаких скобок вокруг условия, но фигурные скобки обязательны!",
        body: "<div class='code-block p-4 my-2 text-orange-400'>if x < 5 { ... } else { ... }</div>"
    },
    {
        title: "15. Циклы: loop, while, for",
        crab: "Самый крутой — 'for in'. Он безопасен и быстр.",
        body: "<div class='code-block p-4 my-2 text-orange-400'>for i in 0..5 { println!(\"{}\", i); }</div>"
    },

    // ГЛАВА 3: ВЛАДЕНИЕ (16-25)
    {
        title: "16. Стек и Куча",
        crab: "Rust управляет памятью без сборщика мусора. Это магия владения.",
        body: "<p>Простые типы — в стеке. Сложные (String, Vec) — в куче.</p>"
    },
    {
        title: "17. Ownership: Правила",
        crab: "У каждого значения есть один владелец. Когда он выходит из области видимости — память чиста!",
        body: "<div class='code-block p-4 my-2 text-red-400 text-xs'>let s1 = String::from(\"hi\");<br>let s2 = s1; // s1 больше не работает!</div>"
    },
    {
        title: "18. Clone",
        crab: "Нужна глубокая копия данных из кучи? Используй .clone().",
        body: "<div class='code-block p-4 my-2 text-red-400 text-xs'>let s2 = s1.clone();</div>"
    },
    {
        title: "19. Ссылки &",
        crab: "Заимствуй данные, не забирая владение. Используй амперсанд.",
        body: "<div class='code-block p-4 my-2 text-blue-400 text-xs'>fn calculate(s: &String) { ... }</div>"
    },
    {
        title: "20. Мутабельные ссылки",
        crab: "Можно менять данные по ссылке, но только ОДИН раз за раз. Никаких гонок данных!",
        body: "<div class='code-block p-4 my-2 text-blue-400 text-xs'>let r1 = &mut s;</div>"
    },
    {
        title: "21. Правила ссылок",
        crab: "Либо одна мутабельная ссылка, либо много неизменяемых. Выбирай с умом.",
        body: "<p>Это защищает тебя от 90% багов с памятью.</p>"
    },
    {
        title: "22. Слайсы (Slices)",
        crab: "Ссылки на часть коллекции. Очень эффективно.",
        body: "<div class='code-block p-4 my-2 text-blue-400 text-xs'>let slice = &s[0..5];</div>"
    },
    {
        title: "23. Структуры (Structs)",
        crab: "Создавай свои типы данных. Описывай объекты мира.",
        body: "<div class='code-block p-4 my-2 text-green-400 text-xs'>struct User { name: String, age: u8 }</div>"
    },
    {
        title: "24. Методы impl",
        crab: "Добавляй поведение своим структурам через блоки impl.",
        body: "<div class='code-block p-4 my-2 text-green-400 text-xs'>impl User { fn say_hi(&self) { ... } }</div>"
    },
    {
        title: "25. Перечисления (Enums)",
        crab: "Enums в Rust — это мощь. Они могут хранить данные!",
        body: "<div class='code-block p-4 my-2 text-yellow-400 text-xs'>enum Message { Move { x: i32, y: i32 }, Quit }</div>"
    },

    // ГЛАВА 4: ПРОДВИНУТЫЙ RUST (26-40)
    {
        title: "26. Match Control Flow",
        crab: "Забудь про switch. Match гарантирует, что ты обработал ВСЕ варианты.",
        body: "<div class='code-block p-4 my-2 text-yellow-400 text-xs'>match coin { Coin::Penny => 1, ... }</div>"
    },
    {
        title: "27. Option Enum",
        crab: "В Rust нет NULL. Есть только 'Кое-что' (Some) или 'Ничего' (None).",
        body: "<div class='code-block p-4 my-2 text-yellow-400 text-xs'>let x: Option<i32> = Some(5);</div>"
    },
    {
        title: "28. Result Enum",
        crab: "Обработка ошибок. Либо Ок, либо Ошибка (Err).",
        body: "<div class='code-block p-4 my-2 text-red-400 text-xs'>let res: Result<u32, String> = ...</div>"
    },
    {
        title: "29. Unwrap и ?",
        crab: "Оператор '?' позволяет элегантно пробрасывать ошибки выше.",
        body: "<div class='code-block p-4 my-2 text-red-400'>let f = File::open(\"h.txt\")?;</div>"
    },
    {
        title: "30. Векторы Vec<T>",
        crab: "Динамические массивы. Растут, когда тебе нужно больше места.",
        body: "<div class='code-block p-4 my-2 text-blue-400'>let mut v = vec![1, 2, 3];</div>"
    },
    {
        title: "31. Строки String vs &str",
        crab: "String живет в куче, &str — это ссылка на строку. Не путай!",
        body: "<p>String::from(\"hello\") vs \"hello\"</p>"
    },
    {
        title: "32. HashMaps",
        crab: "Хранение пар ключ-значение. Очень быстро.",
        body: "<div class='code-block p-4 my-2 text-blue-400'>use std::collections::HashMap;</div>"
    },
    {
        title: "33. Трейты (Traits)",
        crab: "Это интерфейсы Rust. Определяют общее поведение для разных типов.",
        body: "<div class='code-block p-4 my-2 text-purple-400 text-xs'>trait Summary { fn summarize(&self) -> String; }</div>"
    },
    {
        title: "34. Generic Types",
        crab: "Пиши код, который работает с любыми типами данных.",
        body: "<div class='code-block p-4 my-2 text-purple-400 text-xs'>fn func<T>(arg: T) { ... }</div>"
    },
    {
        title: "35. Время жизни (Lifetimes)",
        crab: "Самая сложная тема. Помогаем компилятору понять, как долго живут ссылки.",
        body: "<div class='code-block p-4 my-2 text-red-400 text-xs'>&'a str</div>"
    },
    {
        title: "36. Замыкания (Closures)",
        crab: "Анонимные функции, которые могут захватывать окружение.",
        body: "<div class='code-block p-4 my-2 text-pink-400'>|x| x + 1</div>"
    },
    {
        title: "37. Итераторы",
        crab: "map, filter, fold. Делай всё в одну строку!",
        body: "<div class='code-block p-4 my-2 text-green-400'>v.iter().map(|x| x + 1).collect();</div>"
    },
    {
        title: "38. Smart Pointers: Box",
        crab: "Умный указатель для выделения данных в куче.",
        body: "<div class='code-block p-4 my-2 text-cyan-400'>let b = Box::new(5);</div>"
    },
    {
        title: "39. Smart Pointers: Rc и Arc",
        crab: "Совместное владение данными. Arc — для многопоточности.",
        body: "<p>Reference Counting — считаем ссылки.</p>"
    },
    {
        title: "40. Внутренняя мутабельность",
        crab: "RefCell и Cell позволяют менять данные даже через неизменяемые ссылки. Магия!",
        body: "<p>Используй осторожно, это 'черный ход' системы.</p>"
    },

    // ГЛАВА 5: ЭКОСИСТЕМА (41-50)
    {
        title: "41. Модули и Crate",
        crab: "Разделяй код на файлы и модули. pub — значит публичный.",
        body: "<div class='code-block p-4 my-2 text-white'>mod my_module;</div>"
    },
    {
        title: "42. Внешние зависимости",
        crab: "Добавляй крутые либы в Cargo.toml. Тысячи крейтов ждут тебя на crates.io.",
        body: "<p>[dependencies]<br>rand = \"0.8\"</p>"
    },
    {
        title: "43. Тестирование",
        crab: "Rust обожает тесты. Напиши #[test] и запусти cargo test.",
        body: "<div class='code-block p-4 my-2 text-green-400'>#[test]<br>fn it_works() { assert_eq!(2+2, 4); }</div>"
    },
    {
        title: "44. Многопоточность (Threads)",
        crab: "Безопасный параллелизм. Никаких race conditions!",
        body: "<div class='code-block p-4 my-2 text-yellow-400'>thread::spawn(|| { ... });</div>"
    },
    {
        title: "45. Каналы (Channels)",
        crab: "Передача сообщений между потоками. Как в Go, только круче.",
        body: "<div class='code-block p-4 my-2 text-yellow-400'>let (tx, rx) = mpsc::channel();</div>"
    },
    {
        title: "46. Async/Await",
        crab: "Асинхронность для высоконагруженных штук (tokio).",
        body: "<div class='code-block p-4 my-2 text-blue-400'>async fn fetch_data() { ... }</div>"
    },
    {
        title: "47. Макросы",
        crab: "Код, который пишет код. println!, vec!, panic! — это всё они.",
        body: "<div class='code-block p-4 my-2 text-pink-400'>macro_rules! my_macro { ... }</div>"
    },
    {
        title: "48. Unsafe Rust",
        crab: "Иногда нужно выйти за рамки правил. Но только если ты на 100% уверен.",
        body: "<div class='code-block p-4 my-2 text-red-600 font-bold'>unsafe { ... }</div>"
    },
    {
        title: "49. Оптимизация",
        crab: "Собирай финальный бинарник с флагом --release. Он будет летать!",
        body: "<div class='code-block p-4 my-2 text-white font-bold'>cargo build --release</div>"
    },
    {
        title: "50. Коронация",
        crab: "Ты прошел всё. Теперь ты — Rustacean. Иди и перепиши всё на Rust!",
        body: "<p class='text-2xl'>🦀 Слава Феррису! Твой путь только начинается.</p>"
    }
];

let currentIdx = parseInt(localStorage.getItem('crab_quest_idx') || '0');

function updateUI() {
    const task = tasks[currentIdx];
    const ferris = document.getElementById('ferris');
    
    // Краб "ходит" (двигается при каждом шаге)
    const randomMove = (Math.random() * 20 - 10);
    ferris.style.transform = `translateX(${randomMove}px) rotate(${randomMove}deg)`;

    if (!task) {
        showFinal();
        return;
    }

    document.getElementById('task-title').innerHTML = task.title;
    document.getElementById('task-body').innerHTML = task.body;
    document.getElementById('crab-speech').innerText = task.crab;
    document.getElementById('step-counter').innerText = `STEP: ${String(currentIdx + 1).padStart(2, '0')}/50`;
    
    // Управление кнопкой назад
    const prevBtn = document.getElementById('prev-btn');
    if (currentIdx > 0) {
        prevBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        prevBtn.classList.add('opacity-0', 'pointer-events-none');
    }

    localStorage.setItem('crab_quest_idx', currentIdx);
}

function nextTask() {
    currentIdx++;
    updateUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevTask() {
    if (currentIdx > 0) {
        currentIdx--;
        updateUI();
    }
}

function randomQuote() {
    const quotes = [
        "Не забудь про Borrow Checker!",
        "Cargo — мой лучший друг.",
        "Rust быстрее, чем ты думаешь.",
        "А в C так можно было? Нет!",
        "Bishkek Rust Community одобряет этот код."
    ];
    document.getElementById('crab-speech').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

function showFinal() {
    document.getElementById('content-card').innerHTML = `
        <div class="text-center py-12">
            <h2 class="text-5xl font-black text-orange-500 mb-6">LEVEL MAX!</h2>
            <p class="text-xl text-zinc-400 mb-8">Ты прошел все задания и готов создавать свои миры на Rust.</p>
            <button onclick="localStorage.clear(); location.reload();" class="btn bg-white text-black px-8 py-3 rounded-full font-bold">НАЧАТЬ ЗАНОВО</button>
        </div>
    `;
    document.getElementById('crab-speech').innerText = "Я тобой горжусь, бро! Теперь иди и напиши что-нибудь великое.";
}

window.onload = updateUI;