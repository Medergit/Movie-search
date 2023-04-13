
// фильмы


const AllMovies = [
    {
        id: 1,
        title: 'Оно',
        text: 'В романе Стивена Кинга «Оно» сюжетная линия с главными героями в детстве разворачивается в 1958 году. В фильме все события происходят в 1989 году.',
        genre: ['Ужас', 'Комедия'],
        year: 2013,
        views: 5000,
        favorite: false,
        image: 'https://upload.wikimedia.org/wikipedia/ru/f/ff/%D0%9E%D0%BD%D0%BE_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%2C_2017%29.jpg'
    },
    {
        id: 2,
        title: 'Праведник 2',
        text: '1942 год. Офицер Красной армии Николай Киселев получает приказ вывести с оккупированных белорусских земель за линию фронта свыше двухсот евреев ',
        genre: ['Боевик', 'Комедия'],
        year: 2004,
        views: 34000,
        favorite: false,
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8ea16e5e-cbcb-41fa-90df-e1e7345caf4d/600x900'
    },{
        id: 3,
        title: 'Джон Уик 2',
        text: '«Операция «Фортуна» выезжает на стильной подаче, актерской харизме и народной любви к творчеству режиссера.',
        genre: ['Триллер', 'Боевик'],
        year: 2017,
        views: 556000,
        favorite: false,
        image: 'https://upload.wikimedia.org/wikipedia/ru/f/f1/John_Wick_2.jpg'
    },
    {
        id: 4,
        title: 'Веном',
        text: 'Брок пытается возродить свою карьеру и берет интервью у серийного убийцы Клетуса Кэседи, а тот случайно становится хозяином симбиота Карнажа и сбегает из тю',
        genre: ['Боевик', 'Фантастика'],
        year: 2018,
        views: 630000,
        favorite: false,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8e/Venom_-_Let_There_Be_Carnage.jpg/640px-Venom_-_Let_There_Be_Carnage.jpg'
    },
    {
        id: 5,
        title: 'Праведник',
        text: '«Операция «Фортуна» выезжает на стильной подаче, актерской харизме и народной любви к творчеству режиссера.',
        genre: ['Детектив', 'Комедия'],
        year: 2008,
        views: 70000,
        favorite: false,
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8ea16e5e-cbcb-41fa-90df-e1e7345caf4d/600x900'
    },
    {
        id: 6,
        title: 'Операция Фортуна 2',
        text: '1942 год. Офицер Красной армии Николай Киселев получает приказ вывести с оккупированных белорусских земель за линию фронта свыше двухсот евреев ',
        genre: ['Спорт', 'Ужас'],
        year: 2008,
        views: 35400,
        favorite: false,
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450'
    },
    {
        id: 7,
        title: 'Джентльмены',
        text: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий ',
        genre: ['Криминал', 'Боевик'],
        year: 2019,
        views: 3435000,
        favorite: false,
        image: 'https://upload.wikimedia.org/wikipedia/ru/c/c1/%D0%94%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%8B.jpg'
    },
    {
        id: 8,
        title: 'Аватар 2',
        text: 'После принятия образа аватара солдат Джейк Салли становится предводителем народа нави и берет на себя миссию по защите новых друзей от корыстных',
        genre: ['Фантастика', 'Боевик'],
        year: 2022,
        views: 2390000,
        favorite: false,
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/600x900'
    }
]

export const AllMoviesReversed = AllMovies.reverse()
