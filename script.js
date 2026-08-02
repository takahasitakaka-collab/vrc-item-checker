let items=[];

fetch("products.json")
.then(r=>r.json())
.then(data=>{
  items=data;
});

function search(){
 const a=document.getElementById("avatar").value;
 const c=document.getElementById("category").value;
 const k=document.getElementById("keyword").value.toLowerCase();

 const list=items.filter(i=>
   (!a||i.avatars.includes(a)) &&
   (!c||i.category===c) &&
   (!k||i.name.toLowerCase().includes(k))
 );

 const out=document.getElementById("result");

 if(list.length===0){
   out.innerHTML="<p>該当なし</p>";
   return;
 }

 out.innerHTML=list.map(i=>`
 <div class="item">
   <h3>${i.name}</h3>
   <span class="badge">${i.category}</span>
   <p><b>対応:</b> ${i.avatars.join(" / ")}</p>
   <p><b>必要ツール:</b> ${i.tools.join(", ")}</p>
   <ol>${i.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
 </div>
 `).join("");
}
