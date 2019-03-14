'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=>{
    const results = ['ドライバー', 'フェアウェイウッド', 'アプローチ','わざとフック',  'わざとスライス', '低い球', '高い球', 'メンタルトレーニング', '林から脱出させる','ユーティリティー','体力アップ','バンカーショット','ロングパット', 'ショートパット'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
   
  });

 btn.addEventListener('mousedown', () =>{
   btn.classList.add('pressed');
 });

 btn.addEventListener('mouseup', () =>{
   btn.classList.remove('pressed');
 });


}
