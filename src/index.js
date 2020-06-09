import './scss/index.scss';
import {Excel} from "@/components/excel/Excel";
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import {Header} from "@/components/header/Header";
import {Table} from "@/components/table/Table";
/*
let start = 400000;
let s = 0;
const n = 25000;
const div = document.querySelector('#app');
let i = 0;

while (start>0) {
    s=s+start*0.03;
    start=start*1.03-n;
    i++;
}

div.textContent="Переплата :"+s+"  Количество месяцев :"+i;

*/

const excel = new Excel("#app", {
    components: [Header, Toolbar, Formula, Table],
});

excel.render();
