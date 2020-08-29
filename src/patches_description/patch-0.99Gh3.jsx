import React from 'react';

const Patch099Gh3 = () => {
    return (
        <div>
            <h2>Change-log версии 0.99Gh3</h2>
            <p>
                РЕКТИФИКАЦИЮ ПОСЛЕ УСТАНОВКИ ОБНОВЫ ДЕЛАТЬ ОБЯЗАТЕЛЬНО!
            </p>
            <p>
                Данная обнова несет в себе новую Рекву, новый Mod Organizer, полностью переделанный мод на перегруз и исправляет большинство выявленных проблем и багов
            </p>
            <h3>МЭЙН ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>REQUIEM 3.3: Версия мода Requiem обновлена с 2.0.2 до самой последней на текущий момент 3.3. Это вызвало много проблем с работой сборки на старой Рекве, но почти все наши наработки были адаптированы под новую. Сейчас все работает так же, как и на Рекве 2.0.2</li>
                <li>Mod Organaizer 2.2.1: Сборка теперь находится во втором Мод Органайзере (до этого был 1.3.11). Он позволяет запускать 64-битные исполняемые файлы и когда сборка будет перенесена на Special Edition, она будет работать только на втором МО. Так что, заранее готовимся. Но сейчас смена Мод Органайзера была также необходимо из-за того, что новая Реква 3.3 требует для своего нового Ректификатора онли 64 бита.</li>
                <li>Мод на перегруз полностью переделан и доведен практически до совершенства. Никаких багов и проблем с ним обнаружить за 10 дней тестирования не удалось. Замедление скорости передвижения игрока теперь наступает только после достижения максимального переносимого веса и замедляет игрока на 1% за каждую единицу преувеличеного веса (макс 100 единиц веса)</li>
            </ol>
            <h3>Прочие изменения:</h3>
            <ol>
                <li>Полностью доделаны и улучшены ветки навыков Тяжелая броня и Легкая броня (уклонение)</li>
                <li>Создана новая система защиты от стрел и болтов. Зависит от показателя брони (подбронее чуть позже расспишем)</li>
                <li>Рюкзаки теперь нельзя крафтить без первого перка Кузнечного дела. Но они продаются у всех торговцев "всякой всячиной"</li>
                <li>Пофикшены сообщения связанные с кармой (ломалась кодировка русского языка)</li>
                <li>ВНИМАНИЕ! Обнаружена проблема начала новой игры классическим способом (на повозке) из-за которой иногда лошадь врезается в стену дома или как-то иначе багуется. Пытаемся решить проблему. Известно только, что её вызывает именно Реква 3.3. Если лошадь заруинила старт - альт + F4 и начните все заново. Иногда нужно 2-3 попытки, чтобы повозка доехала до места назначения.</li>
                <li>Из-за этой причины в архив со сборкой (опциональные моды) добавлен мод на альтернативный старт подогнанный под сборку. Вырезаны старты в своих домах, гильдиях и все остальные, где игрок получал какие-то ресурсы или имущество. При добавлении его в сборку грузите самым последним. ВООБЩЕ после всех esp</li>
                <li>SKILLOMER получил новую версию и теперь имеет свой виджет. Пока что добавлен в сборку по дефолту, но не активирован. При желании можно протестировать. Скоро выпустим 4-5 различных вариаций оформления виджета.</li>
                <li>Остальные пункты, как и ченджлог полностью допишем чуть позже, щас не успеваем.</li>
            </ol>
        </div>
    )
}

export default Patch099Gh3;