| Project name | Time start | Backend                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Frontend                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Book Tracker | 14.04.2021 | [<img alt="typescript" width="32px" src="https://areknawo.com/content/images/2019/02/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67.png" />](https://www.typescriptlang.org/) [<img alt="nest" width="32px" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" />](https://nestjs.com/) [<img alt="nest" width="32px" src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" />](https://sequelize.org/master/) [<img alt="swagger" width="32px" src="https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png" />](https://swagger.io/) [<img alt="swagger" width="32px" src="https://cdn.iconscout.com/icon/free/png-512/postgresql-226047.png" />](https://www.postgresql.org/) | [<img alt="typescript" width="32px" src="https://areknawo.com/content/images/2019/02/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67.png" />](https://www.typescriptlang.org/)[<img alt="React" width="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />](https://ru.reactjs.org/) |

# Book Tracker

Book Tracker - сохранение прогресса прочтения книг.

## Как установить приложение

Для начала, [склонируйте репозиторий](https://github.com/newqwes/Book-tracker.git).

Далее, перейдите в папку со скаченным репозиторием и установите зависимости:

```bash
cd Book-tracker && npm install
```

Или, если Вы пользуетесь `yarn`, тогда:

```bash
cd Book-tracker && yarn
```

Затем, как все зависимости будут проинсталированны, запустите проект.

Запуск Back-end:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Или, если Вы пользуетесь `yarn`, тогда:

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Ссылка на рабочий прототип:

[В разработке](https://)

## Описание приложения

### При разработке использованы технологии:

`TypeScript`, `React`, `Redux` и библиотека `Ant Design`

`TypeScript`, `nest`, `postgres`, `sequelize`

## Заметки разработчика:

Технические особенности проекта.

### Backend

Возможность nest.js генерировать модули, сервисы, контроллеры.

Переходим в саму дирректорию back-end:

```bash
cd back-end
```

Команды:

```bash
nest generate module NAME
# or
nest g mo NAME

nest generate service NAME
# or
nest g s NAME

nest generate controller NAME
# or
nest g co NAME
```
