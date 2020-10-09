import React from 'react';

const Patch101c = () => {
    return (
        <div>
            <h2>Change-log версии 1.01c</h2>
            <time className='mainTime'>23 сентября 2к20</time>
            <h3>БАЛАНС:</h3>
            <ol>
                <li>Спирганы теперь не получают в 10 раз меньше урона при ХП &lt; 20%, теперь в 2 раза меньше урона при ХП &lt; 40%</li>
                <li>Фаркас теперь имеет регенерацию хп 1% в секунду</li>
                <li>Выравнены все цены книг по тирам (раньше цена книг мало зависила от того, какого уровня заклинание, ученик или адепт)</li>
                <li>Уменьшена стоимость заклинаний призванного оружия: призваный меч 50 маны, призванный топор 75, призваный двуручный меч 75, призваный лук 100</li>
                <li>Ребаланс еды по таблице</li>
                <li>Перк "Устойчивость" в тяжёлой броне теперь даёт ещё и сопротивление к опрокидыванию, но берётся не на 45 уровне навыка, а на 50</li>
                <li>Изменён яд у воинов серебряной руки - теперь он не парализует, урон от яда действует только на вервольфов и больных ликантропией</li>
                <li>Роба мастера восстановления перемещена из Храма Вермины в "заброшенный дом", появляется после убийства Турана по квесту "Дом ужасов"</li>
                <li>Урон от силовых атак теперь x1.5, вместо х2.0 у всех нпс и игрока, затраты запаса сил на силовую атаку уменьшены на 25%</li>
                <li>Вервольф теперь наносит с руки по 100 ед. урона, а не 201</li>
                <li>Изменены базовые скорости регена стат у вампиров и вервольфов во 2-й форме:
                    <ul>
                        <li>Базовый реген стамины верфольфа был 20%, стал 2,5%. Базовый реген магии 0%.</li>
                        <li>Базовый реген хп вампира был 0,15% , стал 0,1%. Базовый реген стамины вампира был 5%, стал 2%</li>
                    </ul>
                </li>
                <li>Зачарование на повышение эффективности блокирования нельзя повесить больше на ожерелье и кольцо. Сила всех источников повышения эффективности блокирования увеличена в 2 раза больше.</li>
                <li>Алкирцы в логове плута не атакуют бандитов</li>
                <li>Больше нельзя крафтить зелья с несколькими свойствами, при попытке их сила и длительность домножается на 0</li>
                <li>Рыбы-убийцы на суше получают теперь 1ед урона/сек, раньше 10ед урона/сек</li>
                <li>Поправлен перк который бафает силу атрибут зачар на 35%, теперь работает на реген хП</li>
                <li>Драугры боссы стали сильнее (кд криков уменьшено с 30 до 20 сек., крики усилины, добавлены сильные призывы)</li>
                <li>Скорость кача взлома после 50 меньше в 2 раза, после 75, ещё на 25% меньше</li>
                <li>Ребаланс криков включили в сборку, изменения можно увидеть в таблице</li>
                <li>Силовые атаки теперь нельзя наносить из скрытности</li>
                <li>Теперь с повышением уровня игрока торговцы продают в том числе слитки более ценных материалов</li>
            </ol>
            <h3>ФИКСЫ:</h3>
            <ol>
                <li>Пофикшены вылеты из-за скилломера</li>
                <li>Камень атронаха теперь влияет только на ту еду, которая восстанавливает ману (описание еды меняется, если атронах на неё он действует)</li>
                <li>Исправлены описания активных эффектов отдыха</li>
                <li>Перки Длань Молаг Бала и Благословение Молаг Бала в ветке  теперь корректно работают с бретонцем</li>
                <li>Призывные скелеты с мечом больше не проигрывают анимации усмешек: раньше они на расстоянии около 10 м от врага могли встать и начать махать мечом или делать вид, что кричат, сейчас, не тупя, сразу бегут на врага</li>
                <li>Фикс скелета мага, не каставал  огненые спелы и заклинания были дешевые, мана не кончалась</li>
                <li>Переведено пару колдунов (отображались на английском)</li>
                <li>Клинок фолкрита теперь можно заточить</li>
                <li>Шкура тролля раньше не крафтилась в кожу на дубильном станке, теперь крафтится</li>
                <li>От крика безжалосная сила у противников больше не вылетает</li>
                <li>Серебряное оружие теперь нельзя переплавить</li>
                <li>Свиток и посох отворота больше не вызывают вылет</li>
                <li>Исправлены заклинания неистовства из школы иллюзии, руна работала криво а шар давал эффект в 100 раз больше чем надо</li>
                <li>Заклинание изгнания даэдра (Ранг 2) исправлено, урон был на намного слабее, чем должен быть по таблице</li>
                <li>Первый перк на арбалеты теперь работает корректно для средних арбалетов, раньше пробой у средних арбалетов не работал</li>
                <li>Описания рюкзаков теперь исправлены под мод на расширенный интерфейс</li>
                <li>Алтари даэдра больше не проваливаются сквозь текстуры</li>
                <li>Проклятие Аэдра теперь не выдаётся просто так, а только при принятия даэдра при поклонении аэдра</li>
                <li>Перки оборотня на реген стамины дают ровно столько, сколько написано (раньше не на 50/100%, а где-то на 45/90%)</li>
                <li>Корректные цены в субтитрах при покупке лошадей в солитьюде и рифтене</li>
                <li>Исправлены все некорректные драугры в ветр пике, раньше там спавнилось несколко драугров, несоответствующиъ по тиру</li>
                <li>Изменен вес некоторых шкур, фикс их названий</li>
            </ol>
            <h3>ПРОЧЕЕ:</h3>
            <ol>
                <li>В пещеру потерянный нож добавлены рыбы-убийцы</li>
                <li>На всём двемерском металлоломе убрано обозначение (П) - т.е. переплавка, весь двемерский металлолом теперь можно переплавить</li>
                <li>Убраны лишние линии зависимостей из ветки зачарования</li>
                <li>Теперь при принятии Аэдра игроку предоставляется информации о бонусах, которые он получит при поклонении</li>
            </ol>
        </div>
    )
}

export default Patch101c;