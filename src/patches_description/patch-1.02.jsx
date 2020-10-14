import React from 'react';

const Patch102 = () => {
    return (
        <div>
            <h2>Change-log версии 1.02</h2>
            <time className='mainTime'>14 октября 2к20</time>
            <h3>БАЛАНС:</h3>
            <ol>
                <li>Здоровье, магия и запас сил теперь не восстанавлиаются во время сна и ожидания</li>
                <li>Ребаланс бонусов Аэдра:</li>
                <li>Зенитар:Бонус к скорости роста навыков стал 2-20%, был 4-40%; Бонус к ценам стал 3-30%, был 4-40%</li>
                <li>Стендарр:Бонус к сопротивлению стихиям стал 2-20%, был 3-30%; Бонус сопротивлению высасыванию стал 3-30%, был 5-50%</li>
                <li>Аркей: Бонус сопротивлению высасыванию стал 3-30%, был 5-50%</li>
                <li>Кап навыка изменен: ранее при прокачке навыка до 120 бонусы к этому навыку (например, кузнечное дело +10) становились бесполезными. Теперь за счет разных бонусов навыки можно поднять вплоть до 180. Кап навыка для прокачки все еще 120.</li>
                <li>Урон большинства ловушек увеличен в 1,5-2 раза</li>
                <li>Призванных мертвецов теперь тоже можно телепортировать к себе, как и призывы</li>
                <li>Перебаланшен лут в сундуках бандитов. Прибыль из сундуков значительно выросла, больше полезных предметов и расходников</li>
                <li>Теперь замки почти на всех дверях в игре можно ломать ударами (как и ранее сундуки)</li>
                <li>Скорость прокачки ремесел (Кузнечное дело/Зачарование/Алхимия), начиная с 100 лвл, теперь в 2 раза медленнее</li>
                <li>Цены железного и стального оружия уменьшены по таблице</li>
                <li>В связи с нерфом цен стального/железного снаряжения скорость прокачки кузнечного дела вначале стала выше в 3-4 раза</li>
                <li>Запрещена анимация кувырка из ветки скрытности при перегрузе</li>
                <li>Алдуин немного усилен (не финальный вариант)</li>
                <li>Ослаблены изгои-маги: 1-2 тир - сила заклинаний -50%, 3-4 тир сила заклинаний -25%</li>
                <li>Уникальное оружие изменено, согласно таблице</li>
                <li>Сет странствующего рыцаря ослаблен, согласно таблице</li>
                <li>Изменён боевой стиль корусов, теперь они ведут себя агрессивнее</li>
                <li>Тома заклинаний "Вызов роя" вырезаны и более недоступны игроку</li>
                <li>Заклинание "Ясновидение" теперь тратит 5 маны в секунду, а не 25</li>
            </ol>
            <h3>ФИКСЫ:</h3>
            <ol>
                <li>Заточка драконьего чешуйчатого снаряжения поправлена (ранее улучшалось некорректно)</li>
                <li>Мобы "Порченые тени" исправлены, ранее на них не работал повышенный урон от серебра</li>
                <li>Заклинание "Исцеляющая аура на цель" теперь корректно качает навык, ранее качал слишком быстро</li>
                <li>Заклинание "Трансмутация мускулов" исправлено, ранее при касте с двух рук повышалась сила заклинания, теперь длительность</li>
                <li>Перк "Мастер рун" исправлен, раньше второй перк не брался</li>
                <li>Свиток "Драконья шкура" исправлен, теперь у него верное описания, а также он работает без брони</li>
                <li>Бич драконов в Храме Небесной гавани больше не краденый</li>
                <li>Исправлен рецепт яблочного пирога (ранее изготавливался лишь 1 кусок, теперь 10)</li>
                <li>Поправлены линии зависимостей в кузнечном деле, теперь понятно, что для перков на орочье и эльфийское снаряжение необходимо брать перк "Продвинутое кузнечное дело"</li>
                <li>Уровни некоторых мобов в Хеллгене уменьшены</li>
            </ol>
            <h3>ПРОЧЕЕ:</h3>
            <ol>
                <li>Мод "Ultimate Dodge", позволяющий уклоняться, теперь можно полноценно использовать</li>
                <li>Данж лист добавлен в документ описания сборки</li>
            </ol>
        </div>
    )
}

export default Patch102;