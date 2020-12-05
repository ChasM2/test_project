/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = (promoGenre, poster) => {
        promoGenre.textContent = "драма".toUpperCase();
        poster.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    const films = document.querySelector('.promo__interactive-list'),
        addSection = document.querySelector('.promo__interactive .add'),
        addForm = document.querySelector('form.add'),
        addInput = addSection.querySelector('.adding__input'),
        addLikeIt = addSection.querySelector('[type="checkbox"]');

    const maxLength = 21;

    function addFilm(event) {
        event.preventDefault();

        let text = addInput.value;

        if (text) {
            if (text.length > maxLength) {
                text = `${text.substring(0, maxLength + 1)}...`;
            }

            if (addLikeIt.checked) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(text);

            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, films);

            event.target.reset();
        }
    }

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(document.querySelectorAll('.promo__adv img'));
    makeChanges(document.querySelector('.promo__genre'),
        document.querySelector('.promo__bg'));

    addForm.addEventListener('submit', addFilm);
});