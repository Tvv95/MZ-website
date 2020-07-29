import React from 'react';

const Patch099G = () => {
    return (
        <div>
            <h2>Change-log версии 0.99G "ТОЧКА G"</h2>
            <p>
                РЕКТИФИКАЦИЮ ПОСЛЕ УСТАНОВКИ ОБНОВЫ ДЕЛАТЬ ОБЯЗАТЕЛЬНО!
            </p>
            <h3>МЭЙН ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>ФИКСЫ АБУЗОВ ПРОКАЧКИ НАВЫКОВ: Атакующие навыки “Одноручное оружие”, “Двуручное оружие”, “Стрельба”, “Разрушение” теперь невозможно прокачивать бесконечно на мобах с постоянной регенерацией здоровья (троллях, сприганнах, драконих жрецах).
                Прокачка навыков на таких мобах блокируется после того, как по ним нанесено их базовое значение HP. Также, на мобах с больших количеством HP, которых можно легко убить используя рельеф местности или застревания (мамонты, великаны), прокачка навыков происходит только за первые нанесенные 500 единиц урона.
                     Легко прокачать, например, стрельбу на таких мобах как раньше теперь не получится.</li>
                <li>АБСОЛЮТНО НОВАЯ СИСТЕМА ПРИЗЫВА САММОНОВ: Призыв саммонов заклинаниями магической школы Колдовства теперь происходит иначе:
                    <ol>
                        <li>Все саммоны призываются не на несколько секунд, а на несколько минут (в 60 раз дольше)</li>
                        <li>Больше нет ограничения на количество призванных саммонов (сейчас лимит выставлен в 15 за все перки)</li>
                        <li>За каждого призванного саммона манапул блокируется на значение стоимости призыва саммона, заблокированное значение маны невозможно восстановить. Таким образом, количество призванных саммонов теперь определяется размеров манапула игрока.</li>
                    </ol>
                    Своих призванных саммонов можно изгонять обратно в мир даэдра нажав на них клавишу действия (по умолчанию “E”)
                </li>
                <li>ШТРАФЫ ПОВЫШЕНИЯ МАНАКОСТА ЗАКЛИНАНИЙ В БРОНЕ: Вес брони (особенно тяжелой) теперь увеличивает стоимость прочтения заклинаний существенно меньше. НО! При ношении тяжелой брони, сила заклинаний (магнитуда) снижается на 50%.
                В навыках Тяжелая Броня и Уклонение (Легкая Броня) появились перки “Боевой маг”, которые снижают эти штрафы. Взяв их все игрок получит:
                <ul>
                        <li>Увеличение манакоста от веса лёгкой брони на 20%</li>
                        <li>Увеличение манакоста от веса тяжелой брони на 20%, сила заклинаний снижена на 30%</li>
                    </ul>
                </li>
                <li>ВОЗМОЖНОСТЬ СОЗДАНИЯ БИЛДА “ВОИН СВЕТА”: В магической школе Восстановление появился перк “ВОИН СВЕТА”, который позволяет удалить штаф на снижения силы заклинаний школы Восстановления при ношении тяжелой брони</li>
                <li>АБУЗ ПРОКАЧКИ НАВЫКОВ НА СПУТНИКАХ И КВЕСТОВЫХ NPC: Все просто - больше невозможно прокачивать навыки на Ралофе, Хадворе, Седобородых и всех подобных им NPC</li>
                <li>МОДИФИКАЦИЯ ПЕРЕГРУЗКИ ИГРОКА ОТ ПЕРЕНОСИМОГО ВЕСА: создан новый мод (активирован по умолчанию), который позволяет замедлять скорость передвижения персонажа от переносимого веса не МГНОВЕННО, а постепенно с точностью до 1%. Для этого весь максимальный переносимый вес каждой расы был увеличен вдвое. Теперь, когда игрок имеет более 50% веса в своем инвентаре от максимально переносимого - он начинает замедляться.
                    Когда игрок перегружен - он больше не может передвигаться ВООБЩЕ! Не может прыгать. А самое главное - он больше НЕ МОЖЕТ ИСПОЛЬЗОВАТЬ силовую атаку с шагом вперед! Знаменитый абуз перегруза инвентаря имени deep cape’а. (deep cape тихо плачет в сторонке, но потом перестает, потому что понимает, что в эту сборку он не будет играть никогда)</li>
            </ol>
            <h3>ОСТАЛЬНЫЕ ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>ВОРОВСТВО У ДРУЗЕЙ-NPC, В ГИЛЬДИЯХ: Когда игрок становился “другом” с каким либо NPC (например, после выполнения какого-либо квеста), предметы и вещи такого NPC могли переставать считаться ворованными и их можно было забирать без каких либо проблем. Тоже самое касалось имущества гильдий, ярлов и прочее (можно было абузить). Теперь такого не произойдет НИКОГДА. Забирать предметы, вещи и имущества других NPC всегда будет считаться воровством</li>
                <li>СООБЩЕНИЯ О СНИЖЕНИЯХ КАРМЫ: Каждый раз, когда игрок что-то ворует, в инфо-баре появляется сообщение “Ваша карма снижена на 10”. В МСМ меню сборки (строка “MOZGADRON*”) теперь появилась возможность отключать вывод данного сообщения</li>
                <li>УВЕЛИЧЕНИЕ СТОИМОСТИ ПОДКУПОВ NPC: Стоимость подкупов всех NPC всегда была абсолютно одинаковой, неважно, стражник ли это у ворот города, или бандиты, захватившие шахту. Теперь, у всех NPC, которых можно подкупить, стоимость подкупа выставлена индивидуально</li>
                <li>ВИЗУАЛЬНЫЕ ЭФФЕКТЫ: добавлены или переделаны визуальные эффекты от дебафов интоксикации и усталости (отсутствия сна). Также это коснулось визуального и звукового эффекта при срабатывании “Спасения Мары”</li>
                <li>НАСТРОЙКА ИНТОКСИКАЦИИ: Интоксикация игрока теперь выводится в 3 раза быстрее, а коэффициенты повышения интоксикации от зелий запаса сил снижены с 0.25 до 0.1, от зелий магии с 0.1 до 0.05. Появились зелья, которые дополнительно ускоряют выведение интоксикации на небольшое время (можно купить у алхимиков). Смотрите <a href="https://clck.ru/JfBHv">таблицу</a> по интоксику.</li>
                <li>ПЕРЕЗАРЯДКА АРБАЛЕТОВ: Арбалеты теперь невозможно перезарядить, если в процессе перезарядки запас сил игрока заканчивается</li>
                <li>РУНЫ-ЛОВУШКИ В ДАНЖАХ: Руны, которые игрок может встретить в данжах больше не дамажат на 450 единиц урона ИГНОРИРУЯ ЛЮБЫЕ РЕЗИСТЫ (огненный атронах был в шоке). Теперь они имеют 10 урона от взрыва и 250 стихийного урона (снижается соответствующими резистами)</li>
                <li>ПРЫЖКИ: Расход стамины за прыжки был подправлен и теперь отнимается только во время прыжка, а не пару секунд ещё после завершения прыжка! Запаса сил при этом тратится как и прежде - 12 единиц</li>
                <li>ИНВЕНТАРЬ ЛОШАДИ ИЗ МОДА CONVENIENT HORSES: Ограничение перевозимого веса в лошади установлено в 500 единиц веса. Содержимое инвентаря лошади больше не пропадает, все проблемы исправлены (deep cape вообще на ... шлёт вашу сборку)</li>
                <li>АМУЛЕТЫ АЭДРА И РЮКЗАКИ: Амулеты аэдра были немного изменены, описание улучшено, действуют на игрока только если он поклоняется соответствующему аэдра. Их эффекты корректно работают и отображаются при объединении с рюкзаками</li>
                <li>КУЗНЕЧНОЕ ДЕЛО: Перк по работе со сталгримом перенесен в ветку легкой брони. Перкам легкой брони добавлено требование наличия перка “Опытный кузнец”</li>
            </ol>
            <h3>МОБЫ И NPC:</h3>
            <ol>
                <li>ИЗГОИ: Все изгои были перебаланшены в соответствии требованиями общего баланса в сборке. См. <a href="https://clck.ru/Jf9qJ">таблицу</a></li>
                <li>ВАМПИРЫ: Вампир из случайной встречи, который появляется днем, не атакует и просто убегает - больше не может иметь стеклянной брони</li>
                <li>ТОЛФДИР: Толфдиру были дабавлены огненные спелы уровня адепт (огненный шар и огненный плащ). Теперь он не будет ПОЛНОСТЬЮ БЕСПОЛЕЗНЫМ против драугров в Саартале.</li>
                <li>Йурик Голдурсон изменен: здоровье стало 1000, больше не может призывать атронаха</li>
            </ol>
            <h3>ПРОЧИЕ ИЗМЕНЕНИЯ:</h3>
            <ol>
                <li>ОТОБРАЖЕНИЕ ОТСУТСТВУЮЩИХ ESP ПРИ ЗАГРУЗКЕ ИГРЫ: SKSE теперь отображает сообщение со списком отсутствующих ESP-файлов при загрузке сохраненной игры</li>
                <li>ФИКС ОТОБРАЖЕНИЯ РУССКОГО ЯЗЫКА: в сборку был добавлен dll-плагин, который исправляет некорректное отображения русского языка в игре (например, имя игрока русскими буквами и прочее)</li>
                <li>Огненная стрела у Фаральды (встречает у входа в коллегию магов) теперь стоит 4 000 золота, а не 3 000</li>
                <li>Содержимое сундука у входа в Сааартал сильно изменено. Количество свитков призыва атронахов уменьшено, добавлены свитки огненных спелов и зелья восстановления здоровья и маны</li>
                <li>Бой на лошади теперь по умолчанию разблокирован на уровнях сложности "EASY" и "VERY EASY"</li>
                <li>Создан опциональный мод MZ_HorseAbuseLoh, который разблокирует бой на лошади для уровней сложности "HARD" и "SUPER HARD" (находится в опциональных модах в установочном архиве сборки)</li>
                <li>Мод RACE CONFIGURATOR теперь находится в опциональных модах 2 уровня и имеет три разновидности: перераспределение параметров игрока на 10, 15 или 20 единиц</li>
                <li>Доработана система кармы: теперь за выполнение квеста "Прощай, Тёмное Братство" игрок получает +3 единицы кармы, а не -100. За выполнения квеста "Запоздалые Похороны" (DB01Misc) +1 ед. кармы</li>
                <li>Все зачарования на увеличение переносимого веса на предметах, которые можно найти или купить были усиленны в 2 раза</li>
                <li>Кузница атронахов всегда закрыта на ключ, который можно получить только после становления архимагом</li>
                <li>Убраны мамонты, которые спавнятся недалеко от лунной кузницы (заменены волками)</li>
                <li>Созданы новые магические свитки лечения, которые восстанавливают определенное значение здоровья цели (100/200/300 единиц)</li>
                <li>В продажу к алхимикам добавлены зелья ускоренного выведения интоксикации из организма</li>
                <li>Навыки Кузнечное дело, Тяжёлая и Легкая броня (Уклонение), Стрельба, Блокирование - получили новое оформление дерева перков</li>
            </ol>
            <h3>БАГИ:</h3>
            <ol>
                <li>Убрана переэкипировка стрелы или болта на игрока, даже когда их нет в инвентаре (баг мода на перезарядку арбалетов). Если что-то подобное продолжает возникать, а вы вообще не используете арбалеты - можете отключить мод на перезарядку вообще “Non-Exploitable Crossbow Reloading ft. MZ v2.0 - MODZADROT modify - перезарядка арбалетов”</li>
                <li>Обычные торговцы больше не покупают скууму</li>
                <li>Исправлены рецепты ковки сталгримового оружия и брони и драконьей брони - неверные требования удалены</li>
            </ol>
        </div>
    )
}

export default Patch099G;
