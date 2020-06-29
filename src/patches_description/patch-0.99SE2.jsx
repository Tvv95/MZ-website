import React from 'react';

const Patch099SE2 = () => {
    return (
        <div>
            <h2>
                Change-log версии 0.99SE_2
            </h2>
            <p>РЕКТИФИКАЦИЮ ДЕЛАТЬ ОБЯЗАТЕЛЬНО, новую игру игру начинать ОБЯЗАТЕЛЬНО</p>
            <p>это всё ещё не до конца доделанная сборка (в раннем доступе), доступная для теста, чтобы находить баги, исправлять ошибки и получать фидбэк от тестеров и игроков
до выхода 1.00 осталось несколько недель и с её выходом новая игра будет обязательна. сразу предупреждаем. после выхода 1.00 будут выходить новые обновы фиксящие баланс каждую неделю и не требующие новой игры. они будут нумероваться 1.0X (напр. 1.01, 1.02 и т.д.). после выйдет обновление версии 1.XX (напр, 1.10), такая обнова будет требовать новой игры и будет добавлять геймплей и контент моды. но обновы требующие новую игру будут выходить не чаще чем раз в 30 дней</p>
            <h3>ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>УРОВЕНЬ СЛОЖНОСТИ СБОРКИ: теперь уровень сложности сборки детально настраивается в MCM меню. каждый пункт подробно подписан, изменения не требуют даже перезахода в игру
скрин</li>
                <li>КОЛДОВСТВО: навык колдовство теперь разблокирован и ооочень сильно переработан
                    <ul>
                        <li>все перки изменены, создано более 30-ти новых</li>
                        <li>заблокированная мана за призванных саммонов теперь визуально блокируется в интерфейсе на полоске маны игрока</li>
                        <li>новое призванное оружие, которое прокачивает навык колдовства за нанесённый им урон</li>
                        <li>появились новые саммоны: дух злокрыса, молодого краба, паука. перебаланшены все саммоны уровня новичок-ученик (адепт-мастер будут готовы позже). см. <a href="https://cutt.ly/BryKayU">таблицу</a></li>
                        <li>оживление трупов теперь осуществляется только одним заклинанием, которое расходует ману в зависимости от уровня мертвеца автоматически и повышает максимально возможный уровень поднятия трупов новыми перками</li>
                        <li>прокачка колдовства за урон наносимый саммонами снижена ~2.5 раза и на грязекрабах качается только за первые нанесённых 50 хп</li>
                        <li>не готово: призванная броня, перки связанные с атронахами и дреморами и некоторые лэйтовые перки. все они имеют в своём названии префикс (-) не берите их, они будут готовы в следующей обнове (не потребуедт НИ)</li>
                    </ul>
                </li>
                <li>ЗАЧАРОВАНИЕ: навык зачарование полностью переработан
                    <ul>
                        <li>все перки были изменены и созданы новые</li>
                        <li>формула прокачки навыка зачарование теперь учитывает размер души в заполненном камне душ со следующими коэффициентами: крохотная душа - 1, малая - 2.2, обычная - 5, большая - 11.2, великая - 30</li>
                        <li>перебаланшены все зачарования см. таблицу: ссылка</li>
                    </ul>
                </li>
                <li>КУЗНЕЧНОЕ ДЕЛО: навык кузнечное дело доработан
                    <ul>
                        <li>некоторые перки изменены, добавлены новые: нордское снаряжение, ювелирное дело</li>
                        <li>переделаны абсолютно все рецепты крафта оружия и брони таким образом, что стоимость предмета учитывает затрачиваемые на него материалы</li>
                    </ul>
                </li>
            </ol>
            <h3>СТРУКТУРА СБОРКИ:</h3>
            <ol>
                <li>Добавлены мод SkyUI SE - Flashing Savegames Fix, который фиксит вспышки при заходе в пункты меню "сохранить" или "загрузить" игру</li>
                <li>Better Container Controls for SkyUI - мод, который позволяет забирать/складировать предметы из контейнеров только выбранной вкладки</li>
                <li>Удалён мод MZ FallDamage (интегрирован в мсм меню уровня сложности сборки)</li>
                <li>MZ_Bows&Arbalets.esp удалён, его содержимое перенесено в MZ_rect_Weapons&Armor.esp</li>
                <li>Папка с модом MZ SleepMod удалена, её содержимое перенесено в папку MZ TRUEBELIEVER</li>
            </ol>
            <h3>ДРУГИЕ ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>Призванных саммонов можно тпшить к себе на кнопку "B" (можно изменять в MCM меню сборки)</li>
                <li>SKILLOMER был переписан, оптимизирован и теперь использует DLL - работает быстрее, взломать сложнее. работает полностью корректно с самого начала игры</li>
                <li>Чтобы повысить уровень игроку необходимо поспать (позже это можно будет вкл/отлючать)</li>
                <li>Ассортимент всех торговцев переделан и расширен</li>
                <li>Двемерское оружие и броня больше не выпадает из бандитов и гораздо реже встречается луте где-бы то ни было</li>
                <li>Фаркас переделан: больше здоровья, меньше урон</li>
                <li>Сприганы перебаланшены, смотрите <a href="http://s//cutt.ly/oryJBHF">таблицу</a></li>
                <li>Одержимые перебаланшены (усилены), двемерская броня которою они носят теперь зараженная (имеет меньшую цену и наносит урон, если носитель не одержимый)</li>
                <li>Утгерд усилена в кулачном бою (Урон с рук +20)</li>
                <li>Частичный ребаланс цен всего оружия и брони</li>
            </ol>
            <h3>ФИКСЫ:</h3>
            <ol>
                <li>Драугры в последнем зале ветренного пика теперь спавнятся всегда корректно</li>
                <li>Неуязвимость драугров при пробуждении теперь срабатывает только единожды, а не каждый раз когда они вступают в бой</li>
                <li>Исправлен баг, из-за которого некоторые учителя навыков учили некорректно</li>
                <li>Форт Греймур - в некоторых местах исправлены навмешы (нпс не могли пройти)</li>
                <li>Исправлен навык стрельба: условия для взятия перков теперь работают корректно</li>
                <li>Вервольф теперь не может молиться, карма не отнимается за первое насильное превращение соратниками</li>
                <li>Ребаланс амулетов аэдра</li>
            </ol>
        </div>
    )
}

export default Patch099SE2;