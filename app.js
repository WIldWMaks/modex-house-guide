const L=(title,role,description,options,note,tip,color)=>({title,role,description,options,note,tip,color});
const parts={wall:{name:'Стена',outside:'УЛИЦА',inside:'ПОМЕЩЕНИЕ',layers:[
L('Фасадная облицовка','ОТДЕЛКА','Первый слой встречает дождь и солнце. Он формирует внешний вид дома и защищает нижележащие слои от прямого воздействия погоды.',['Деревянная облицовка','Фиброцементные панели','Металлический сайдинг'],'Выбор меняет требования к подсистеме, крепежу и уходу.','Тяжёлую облицовку нельзя просто заменить без проверки опор и креплений.','#b86546'),
L('Вентиляционный зазор','ПРОСУШИВАНИЕ','Пространство за навесным фасадом помогает отводить влагу. Воздух должен свободно проходить от входа к выходу.',['Обрешётка с вентзазором'],'Размер и устройство зазора задаются проектом и системой фасада.','Нужны вход и выход воздуха, а также защита от насекомых.','#bf9e6a'),
L('Ветровлагозащита','ЗАЩИТА','Наружная мембрана уменьшает продувание утеплителя и защищает его от попавшей за фасад влаги, позволяя водяному пару выходить наружу.',['Диффузионная мембрана'],'Применимость и характеристики проверяют по документации производителя.','Нахлёсты, проклейка и примыкания должны образовывать непрерывный контур.','#a0c9cb'),
L('Каркас и утепление','ТЕПЛО И ОПОРА','Стойки передают нагрузки, а утеплитель между ними замедляет передачу тепла. На схеме это общий слой, но задачи у материалов разные.',['Каменная вата','Стекловолоконный утеплитель'],'Сечение стоек и толщину утепления выбирают расчётом.','Утеплитель укладывают без щелей и излишнего сжатия. Жёсткость каркаса обеспечивают проектными связями или обшивкой.','#d4bd83'),
L('Пароизоляционный контур','КОНТРОЛЬ ВЛАГИ','Со стороны помещения ограничивает поступление водяного пара в конструкцию. Эффективность зависит от герметичности соединений.',['Пароизоляционная плёнка'],'Тип материала и необходимость монтажного зазора определяются проектом.','Особенно важна герметизация розеток, труб, окон и примыканий.','#c5b1a1'),
L('Внутренняя отделка','ИНТЕРЬЕР','Завершающий слой со стороны комнаты. Под ним при необходимости располагают монтажную полость для коммуникаций.',['Гипсокартон','Деревянная вагонка'],'Отделку подбирают с учётом влажности помещения и требований пожарной безопасности.','Способ крепления не должен нарушать непрерывность пароизоляции.','#ececdc')
]},floor:{name:'Пол',outside:'ХОЛОДНОЕ ПОДПОЛЬЕ',inside:'КОМНАТА',layers:[
L('Нижняя подшивка','ОПОРА','Закрывает перекрытие снизу и поддерживает защитные слои. В примере рассматривается перекрытие над холодным подпольем.',['Проектная нижняя подшивка'],'Материал зависит от влажностного режима и конструктивной схемы.','Защиту от грызунов и доступ для осмотра продумывают заранее.','#9c7154'),
L('Ветрозащита','ЗАЩИТА','Ограничивает продувание утеплителя со стороны холодного подполья.',['Диффузионная мембрана для узла пола'],'Не заменяет организацию водоотвода и защиту подполья.','Проверьте совместимость мембраны с выбранной конструкцией.','#a0c9cb'),
L('Балки и утепление','ТЕПЛО И ОПОРА','Балки несут нагрузку пола. Утеплитель между ними отделяет тёплое помещение от холодного пространства снизу.',['Каменная вата','Стекловолоконный утеплитель'],'Высоту балок, шаг и толщину утепления определяют расчётами.','Проверьте узлы опирания, жёсткость и отсутствие щелей по периметру.','#d4bd83'),
L('Пароизоляция','КОНТРОЛЬ ВЛАГИ','Контур со стороны тёплого помещения ограничивает поступление водяного пара в утеплённое перекрытие.',['Пароизоляционная плёнка'],'Расположение уточняют для выбранного состава пола.','Примыкание пола к стенам должно быть герметичным.','#c5b1a1'),
L('Основание пола','РАСПРЕДЕЛЕНИЕ НАГРУЗКИ','Жёсткий настил распределяет нагрузку и служит основанием под выбранное покрытие.',['Конструкционная фанера','Плита OSB проектного класса'],'Толщина и крепление зависят от шага балок и нагрузки.','Для влажных зон требуется отдельное решение гидроизоляции.','#b28a5e'),
L('Напольное покрытие','ИНТЕРЬЕР','Поверхность, по которой вы ходите. Подложка и способ монтажа зависят от выбранного покрытия.',['Инженерная доска','Ламинат'],'Проверьте совместимость основания, подложки и покрытия.','Тёплый пол требует отдельной проверки всего состава перекрытия.','#ececdc')
]},roof:{name:'Крыша',outside:'НАРУЖНЫЙ ВОЗДУХ',inside:'ПОМЕЩЕНИЕ',layers:[
L('Кровельная гидроизоляция','ЗАЩИТА ОТ ВОДЫ','Верхний водонепроницаемый слой плоской крыши. На схеме показана условная тёплая невентилируемая конструкция.',['Кровельная мембрана по проекту'],'Плоская крыша имеет небольшой проектный уклон для стока воды; на схеме он условно не показан.','Воронки, парапеты и проходки требуют отдельных узлов гидроизоляции.','#733635'),
L('Теплоизоляция и уклон','ТЕПЛО И ВОДООТВОД','Теплоизоляция находится над несущим настилом. Уклон к водоприёмникам формируют по проекту, в том числе клиновидными плитами.',['Кровельные теплоизоляционные плиты'],'Материал, прочность, толщину и способ формирования уклона выбирают для конкретной кровельной системы.','Проверьте расчёт теплоизоляции, уклоны и расположение основного и аварийного водоотвода.','#d4bd83'),
L('Пароизоляция','КОНТРОЛЬ ВЛАГИ','Под утеплением располагают герметичный пароизоляционный слой, ограничивающий поступление пара из помещения.',['Пароизоляция для выбранной кровельной системы'],'Тип и положение слоя подтверждаются проектом и влажностным расчётом.','Соединения и примыкания должны образовывать непрерывный герметичный контур.','#a0c9cb'),
L('Несущий настил','ОСНОВАНИЕ','Сплошной настил служит основанием для расположенных выше слоёв и передаёт нагрузку на балки.',['Конструкционный настил по проекту'],'Материал, толщину и крепления определяют расчётом и требованиями кровельной системы.','Проверьте несущую способность, прогибы и совместимость основания с верхними слоями.','#b28a5e'),
L('Балки покрытия','НЕСУЩАЯ КОНСТРУКЦИЯ','Балки воспринимают нагрузки от крыши и передают их стенам. В этом примере основное утепление расположено над настилом.',['Деревянные балки по расчёту'],'Сечение, шаг и узлы опирания зависят от пролётов и нагрузок.','Нагрузки от снега, обслуживания и оборудования должны быть учтены в проекте.','#b17a48'),
L('Отделка потолка','ИНТЕРЬЕР','Закрывает конструкцию со стороны комнаты. При необходимости предусматривают монтажную полость для коммуникаций.',['Гипсокартон','Деревянная вагонка'],'Отделку и крепления выбирают с учётом назначения помещения.','Размещение светильников и проводки согласуют до монтажа отделки.','#ececdc')
]}};
parts.floor.layers.reverse();
let part='wall',active=0;const choices={};Object.keys(parts).forEach(p=>choices[p]=parts[p].layers.map(l=>l.options[0]));const $=id=>document.getElementById(id);
function selectLayer(i){active=i;render()}
function horizontalLayers(p){
const roof=part==='roof', open=$('explode').checked;
const gap=open?43:12;
const origin=[130,335];
const u=[300,65],v=[155,-80];
const normal=[0,-gap];
const poly=points=>points.map(pt=>pt.join(',')).join(' ');
let out='';
const order=[5,4,3,2,1,0];
order.forEach(i=>{
 const layer=p.layers[i],selected=i===active,step=5-i;
 const a=[origin[0]+normal[0]*step,origin[1]+normal[1]*step];
 const b=[a[0]+u[0],a[1]+u[1]],d=[a[0]+v[0],a[1]+v[1]],c=[b[0]+v[0],b[1]+v[1]];
 const down=pt=>[pt[0],pt[1]+9];
 const points=poly([a,b,c,d]);
 out+=`<g class="layer" data-layer="${i}" role="button" tabindex="0" aria-label="${layer.title}" aria-pressed="${selected}"><title>${layer.title}</title><polygon points="${poly([a,b,down(b),down(a)])}" fill="${layer.color}" style="filter:brightness(.6)"/><polygon points="${poly([b,c,down(c),down(b)])}" fill="${layer.color}" style="filter:brightness(.8)"/><polygon points="${points}" fill="${layer.color}" stroke="${selected?'#ff6037':'#4a332b'}" stroke-width="${selected?3:1}"/>`;
 const frame=roof?i===4:i===3;
 if(frame){if(!roof)out+=`<polygon points="${points}" fill="url(#wool)"/>`;for(let n=0;n<4;n++){const t=.06+n*.29;out+=`<path d="M${a[0]+u[0]*t} ${a[1]+u[1]*t}l${v[0]} ${v[1]}" stroke="#b17a48" stroke-width="10"/>`;}}
 else if(i===0||i===1||i===5){out+=`<polygon points="${points}" fill="url(#grain)"/>`;}
 out+='</g>';
});
// Independent numbered targets keep every layer selectable even when the stack is closed.
p.layers.forEach((layer,i)=>{const step=5-i,a=[origin[0]+normal[0]*step,origin[1]+normal[1]*step], y=70+i*58;
 out+=`<path d="M${a[0]} ${a[1]+4}L64 ${y}" fill="none" stroke="${i===active?'#ff6037':'#ab8c7c'}" stroke-width="1"/><g class="layer" data-layer="${i}" role="button" tabindex="0" aria-label="${layer.title}" aria-pressed="${i===active}"><title>${layer.title}</title><circle cx="48" cy="${y}" r="17" fill="${i===active?'#ff6037':'#351e1c'}" stroke="#ab8c7c"/><text x="48" y="${y+5}" text-anchor="middle" fill="#fff" font-size="14">${i+1}</text></g>`;
});
return out;
}
function render(){const p=parts[part],l=p.layers[active];$('outside').textContent=part==='floor'?p.inside:p.outside;$('inside').textContent=part==='floor'?p.outside:p.inside;$('diagram').setAttribute('aria-label',part==='wall'?'Вертикальный разрез стены':part==='floor'?'Горизонтальный разрез пола':'Горизонтальный разрез плоской крыши');$('counter').textContent=`СЛОЙ ${String(active+1).padStart(2,'0')} / 06`;$('role').textContent=l.role;$('layer-title').textContent=l.title;$('layer-description').textContent=l.description;$('layer-tip').textContent=l.tip;$('material-note').textContent=l.note;
$('legend').replaceChildren(...p.layers.map((l,i)=>{const b=document.createElement('button');b.textContent=`0${i+1} ${l.title}`;b.setAttribute('aria-pressed',i===active);b.onclick=()=>selectLayer(i);return b}));
const spread=$('explode').checked?58:23;let markup='<defs><pattern id="grain" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 3h12M0 9h12" stroke="#46321d" stroke-opacity=".12"/></pattern><pattern id="wool" width="9" height="9" patternUnits="userSpaceOnUse"><path d="m0 0 9 9m-9 0 9-9" stroke="#77622e" stroke-opacity=".24"/></pattern></defs>';
if(part==='wall'){p.layers.forEach((layer,i)=>{const x=52+i*spread,y=100+i*9,selected=i===active;markup+=`<g class="layer" data-layer="${i}" role="button" tabindex="0" aria-label="${layer.title}" aria-pressed="${selected}"><title>${layer.title}</title><polygon points="${x},${y} ${x+145},${y-68} ${x+157},${y-61} ${x+12},${y+7}" fill="${layer.color}"/><polygon points="${x+12},${y+7} ${x+157},${y-61} ${x+157},${y+210} ${x+12},${y+278}" fill="${layer.color}" stroke="${selected?'#ff6037':'#211d19'}" stroke-width="${selected?3:1}"/><polygon points="${x},${y} ${x+12},${y+7} ${x+12},${y+278} ${x},${y+271}" fill="${layer.color}" style="filter:brightness(.65)"/>`;
if(i===3){markup+=`<polygon points="${x+12},${y+7} ${x+157},${y-61} ${x+157},${y+210} ${x+12},${y+278}" fill="url(#wool)"/>`;for(let n=0;n<4;n++){let xx=x+17+n*43,yy=y+5-n*20;markup+=`<path d="M${xx} ${yy}v265" stroke="#b17a48" stroke-width="10"/>`}}else if(i===0||i===1){markup+=`<polygon points="${x+12},${y+7} ${x+157},${y-61} ${x+157},${y+210} ${x+12},${y+278}" fill="url(#grain)"/>`}
markup+=`<circle cx="${x+30}" cy="${y+259}" r="13" fill="${selected?'#ff6037':'#351e1c'}"/><text x="${x+30}" y="${y+264}" fill="${selected?'#351e1c':'#fff'}" text-anchor="middle" font-size="13">${i+1}</text></g>`});}else{markup+=horizontalLayers(p);}$('diagram').innerHTML=markup;$('diagram').querySelectorAll('[data-layer]').forEach(g=>{g.onclick=()=>selectLayer(+g.dataset.layer);g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectLayer(+g.dataset.layer);$('diagram').querySelector(`[data-layer="${active}"]`).focus()}}});}
document.querySelectorAll('[data-part]').forEach(b=>b.onclick=()=>{part=b.dataset.part;active=0;document.querySelectorAll('[data-part]').forEach(t=>t.setAttribute('aria-selected',t===b));render()});$('explode').onchange=render;$('prev').onclick=()=>selectLayer((active+5)%6);$('next').onclick=()=>selectLayer((active+1)%6);
document.querySelectorAll('.check-item input').forEach(input=>input.addEventListener('change',()=>{const count=document.querySelectorAll('.check-item input:checked').length;$('check-count').textContent=`Обсуждено ${count} из 12`;}));render();



