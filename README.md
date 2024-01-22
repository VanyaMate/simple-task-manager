# Simple task manager

Проект задеплоен тут: https://vm-market-place.web.app/

## Технологии для реализации

1. **TypeScript**
2. **React**
3. **SCSS** + **CSS.Modules**
4. **Context** - обычный react-овский context для глобального стейта
5. **@vanyamate/market-place-service** - браузерный сервис для имитации сервера (очень грубо говоря). Я тут его
   использовал для сохранения данных в localStorage (только задач) и имитации задержки.
6. Сборщик: **Vite**

### Так же использовались:

1. Линтер **(ESLint)**
2. **GitHub actions** для некого CI/CD. Запускал там линтер, если всё ок, то firebase-овский
   action **FirebaseExtended/action-hosting-deploy** для деблоя проекта на хостинг, а так же свой
   action **VanyaMate/github-action-telegram-notification** для уведомления в телегу. Конечно еще хорошо бы какие нибудь
   интеграционные тесты, e2e простенькое..
3. Ну и собственно **firebase**

## Возможности в UI

1. Возможность добавления новых задач
2. Возможность меня состояние задач
3. Возможность удалять задачи
4. Возможность поиска задачи по заголовку
5. Возможность поиска только выполненных или только не выполненных задач
6. Возможность включить сортировку по дате (asc | desc)

### Дополнительно

1. Настройка полей ввода через `ITextInputController`
    - debounce - добавление задержки на срабатывание onChange
    - validator - функция валидации
2. Удобная модалка `WindowPopup` с контроллером

### Перспективы

1. Всё готово для возможного расширения задачи новыми полями
2. Всё готово для возможности редактирования любых полей
3. Всё готово для возможности сортировки другими способами
4. Всё готово для возможности фильтрации по любым полям
5. Всё готово для изменения темы сайта
6. В принципе всё готово для любого расширения (как мне кажется), а так же для, хоть перехода, на другой стейт-менеджер
   или настоящую апишку. Перейти на другой стейт-менеджер сложнее, потому что я не сделал интерфейсов для этого, а вот
   для api-шки есть интерфейсы и типы. Подменяется реализация и всё. С заменой стейнт-менеджера тоже не сложно, есть
   только один компонент (кроме root) и несколько хуков в нем же которые зависят от **ReactContext**, так что переход
   всё равно будет легкий.

## Что мне не нравится

Ну так как это, всё-таки, не настоящий проект, а простенький туду-лист, по сути, многое сделано временным решением.

1. `Pagination`
    - компонент не умеет рендерить какое-то ограниченное количество кнопок. Он просто рендерит кнопки, хоть
      их будет 1000.
    - В проекте компонент так же имеет какую-то логику, которой, быть там не должно. Он должен просто отрисовывать то
      что ему дают.
2. `WindowPopup` - не блокирует страницу.
3. При изменении конкретной задачи, можно более элегантно обновлять список. Сейчас это тупая заметная загрузка. А можно,
   например, обновлять локальное состояние на новое, не показывать загрузку, а потом мягко подставить новые данные. На
   самом деле это тут не сложно. Нужно всего лишь добавить метод для обновления данных задачи в `TodosContext` через
   провайдер, добавить метод для обновления списка задач по заданным параметрам и убрать анимацию загрузки с контейнера.
   Всё остальное сделается само. А еще создать компонент для отображения того, что что-то происходит (например полоса
   загрузки), плюс в запросах должно быть время сервера когда был совершен ответ, чтобы узнать какой запрос был позже и
   подставить актуальные данные.
4. Дизигн. Он простой.. В целом прикольный сам по себе, но, не удобный всё-таки. Нужно куда-нибудь вынести создание
   задачи, например в модалку которая уже есть, добавить кнопку, например фиксированную и уже будет лучше. Но тут прям
   много чего можно улучшать).
5. Нет специализированных компонентов некоторых. Например `Checkbox` сделан через `Button`. И там прям это временное
   решение. Да в целом многие компоненты еще требуют доработки.
6. Я везде использовал `React.memo`.
7. Нет типов и интерфейсов именно для получения каких-то данных внутри приложения, для хуков.
8. Не безопасно сохранение состояние проекта.

Это не всё. Что-то я уже забыл, но проблемы у всего этого еще есть. Тот же ReactContext. Если бы это был большой проект
я бы использовал что-то другое ну итд.
И может появиться резонный вопрос. Так если вот они проблемы и их просто решить, то почему они не решены? Потому что
если решать начать все проблемы, разрабатывать так как будто бы ты разрабатываешь что-то раз и навсегда (условно),
разрабатываешь большой проект, разрабатываешь в команде ну итд. то СТОЛЬКО времени нужно.. ну вы понимаете. Так что вот
так.

## Запуск проекта локально

```
git clone https://github.com/VanyaMate/simple-task-manager.git
npm i
```

`npm run dev` - запустить проект

`npm run lint` - запуск линтера

`npm run lint:fix` - запуск автоматического фикса всех (которые может пофиксить) проблем

`npm run build` - забилдить проект

`npm run preview` - запустить проект в сбилженном prod-виде
