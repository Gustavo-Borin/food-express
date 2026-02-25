let carrinho = [];

function adicionarAoCarrinho(nome, preco){
carrinho.push({nome, preco});
alert("Adicionado ao carrinho!");
}

function abrirCarrinho(){
const modal=document.getElementById("modal-carrinho");
const lista=document.getElementById("itens-carrinho");
const totalElemento=document.getElementById("total");

lista.innerHTML="";
let total=0;

carrinho.forEach(item=>{
lista.innerHTML+=`<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
total+=item.preco;
});

totalElemento.textContent="Total: R$ "+total.toFixed(2);
modal.style.display="flex";
}

function finalizarPedido(){
const nome=document.getElementById("nome").value;
const endereco=document.getElementById("endereco").value;
const pagamento=document.getElementById("pagamento").value;

if(!nome || !endereco || !pagamento){
alert("Preencha todos os campos!");
return;
}

alert("Pedido confirmado! Obrigado pela preferência.");

carrinho=[];
document.getElementById("modal-carrinho").style.display="none";
}

function cancelarPedido(){
if(confirm("Deseja realmente cancelar o pedido?")){
carrinho=[];
document.getElementById("modal-carrinho").style.display="none";
}
}

function toggleMenu(){
const menu=document.getElementById("menu");
menu.classList.toggle("ativo");
}

function verificarHorarioFuncionamento(){
const agora=new Date();
const hora=agora.getHours();
const aberto=hora>=9 && hora<22;
const status=document.getElementById("status-loja");
const botao=document.getElementById("btn-pedir");

if(status){
if(aberto){
status.textContent="🟢 Aberto agora (até 22:00)";
}else{
status.textContent="🔴 Fechado (abre às 09:00)";
botao.disabled=true;
}
}
}

verificarHorarioFuncionamento();

function atualizarContador(){
document.getElementById("contador-carrinho").textContent = carrinho.length;
}

function adicionarAoCarrinho(nome, preco, imagem, botao){
carrinho.push({nome, preco, imagem});
botao.disabled = true;
botao.textContent = "Adicionado";
botao.style.opacity = "0.6";
atualizarContador();
}

function abrirPreviewCarrinho(){
const box=document.getElementById("preview-carrinho");
const lista=document.getElementById("preview-itens");
const totalElemento=document.getElementById("preview-total");

if(box.style.display==="block"){
box.style.display="none";
return;
}

lista.innerHTML="";
let total=0;

carrinho.forEach(item=>{
lista.innerHTML+=`
<div class="preview-item">
<img src="${item.imagem}">
<div>
<p>${item.nome}</p>
<p>R$ ${item.preco.toFixed(2)}</p>
</div>
</div>
`;
total+=item.preco;
});

totalElemento.textContent="Total: R$ "+total.toFixed(2);
box.style.display="block";
}

function fecharPreview(){
document.getElementById("preview-carrinho").style.display="none";
}