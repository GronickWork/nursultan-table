import React from 'react';
import './table.css';

export default function Table() {
  return (
    <div className='table-container'>
      <table className='table' cellPadding='5'>
        <caption className='table-header'>Технический отчет</caption>
        <tr className='table__gray'>
          <th colSpan='3'></th>
          <th>Оценка</th>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='2'>Диагностика</th>
          <td colSpan='2'>Двигатель</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Коробка передач</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='9'>Двигатель</th>
          <td colSpan='2'>Холостой ход</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td rowSpan='3'>Утечка масла</td>
          <td>Клапанная крышка</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Прокладка головки блока</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Блок цилиндров/Маслянный поддон</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Давление масла</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Недостаток</span></td>
        </tr>
        <tr>
          <td rowSpan='4'>Утечка охлаждающей жидкости</td>
          <td>Прокладка головки блока цилиндров</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Помпа</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Радиатор</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Микроутечка</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Количество охлаждающей жидкости</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Недостаток</span></td>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='2'>Коробка передач</th>
          <td rowSpan='2'>Автоматическая коробка передач (A/T)</td>
          <td>Утечка масла</td>
          <td className='mark'><span className='green'>Отсутствует</span><span className='opacity'>Микроутечка</span><span className='opacity'>Утечка</span></td>
        </tr>
        <tr>
          <td>Общее состояние</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray'>Передача энергии</th>
          <td colSpan='2'>Шарнир равных угловых скоростей</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='3'>Рулевое управление</th>
          <td colSpan='2'>Течь жидкости гидроусилителя руля</td>
          <td className='mark'><span className='green'>Отсутствует</span><span className='opacity'>Микроутечка</span><span className='opacity'>Утечка</span></td>
        </tr>
        <tr>
          <td rowSpan='2'>Состояние</td>
          <td>Рулевой механизм</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td>Наконечники рулевой тяги и шаровые шарниры</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='2'>Тормозная система</th>
          <td colSpan='2'>Утечка тормозной жидкости</td>
          <td className='mark'><span className='green'>Отсутствует</span><span className='opacity'>Микроутечка</span><span className='opacity'>Утечка</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Тормозная система</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray' rowSpan='6'>Электрика</th>
          <td colSpan='2'>Генератор</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Стартер</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Работа мотора стеклоочистителя</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Вентилятор печки салона</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Вентилятор радиатора</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <td colSpan='2'>Стеклоподъёмник</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
        <tr>
          <th className='table__gray'>Топливо</th>
          <td colSpan='2'>Утечка топлива</td>
          <td className='mark'><span className='green'>Хорошо</span><span className='opacity'>Дефект</span></td>
        </tr>
      </table>
    </div>
    
  )
}

