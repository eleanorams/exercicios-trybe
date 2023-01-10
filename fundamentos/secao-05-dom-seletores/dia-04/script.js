const captBody = document.getElementsByTagName("body")[0];

const saveContent = () => {
  localStorage.setItem("savebgColor", captBody.style.backgroundColor);
  localStorage.setItem("saveFontColor", captBody.style.color);
  localStorage.setItem("saveFontSize", captBody.style.fontSize);
  localStorage.setItem("saveLineHeight", captBody.style.lineHeight);
  localStorage.setItem("saveFontFamily", captBody.style.fontFamily);
};

const returnContent = () => {
  captBody.style.backgroundColor = localStorage.getItem("savebgColor");
  captBody.style.color = localStorage.getItem("saveFontColor");
  captBody.style.fontSize = localStorage.getItem("saveFontSize");
  captBody.style.lineHeight = localStorage.getItem("saveLineHeight");
  captBody.style.fontFamily = localStorage.getItem("saveFontFamily");
};

const createh2 = () => {
  const createh2 = document.createElement("h2");
  captBody.appendChild(createh2);
  createh2.innerText = "Lore Ipsum";
  createh2.id = "h2";
};

const createh3 = () => {
  const createh3 = document.createElement("h3");
  captBody.appendChild(createh3);
  createh3.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non.";
  createh3.id = "h3";
};
const createParagraphs = (texto) => {
  const createParagraphs = document.createElement("p");
  captBody.appendChild(createParagraphs);
  createParagraphs.innerText = texto;
  createParagraphs.id = "paragrafos";
};

const paragraphContent = () => {
  createParagraphs(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor dictum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Nulla congue feugiat velit, eget molestie quam faucibus at. Donec leo tellus, rutrum eu libero quis, gravida interdum eros. Morbi vestibulum lacus nulla, a scelerisque massa pretium in. Suspendisse vel est sit amet leo congue maximus et ut est. Nullam non dui id lorem scelerisque eleifend at vitae felis. Suspendisse fermentum porta imperdiet. Mauris blandit, mauris maximus mattis auctor, magna enim eleifend dui, in iaculis sapien augue in augue. Morbi hendrerit velit lacus. Maecenas condimentum venenatis est posuere fermentum.
    
Curabitur ac sagittis nisl. Phasellus sit amet lacinia orci. Integer tincidunt laoreet magna vel tincidunt. Donec eu ornare enim, quis laoreet lacus. Suspendisse varius maximus scelerisque. Curabitur finibus finibus leo a maximus. Nunc egestas porta sollicitudin.
    
Ut tempor consectetur ex. Praesent rutrum mattis odio, sed lobortis dolor posuere at. Suspendisse ex nibh, facilisis nec pretium ac, semper in quam. Nam nisi turpis, ultricies vel tellus eu, ullamcorper accumsan metus. Praesent eleifend bibendum lorem porta vestibulum. Fusce augue odio, tincidunt sit amet purus ac, rutrum dignissim neque. Vivamus justo mauris, scelerisque at iaculis.`);
};

const nav = () => {
  const nav = document.createElement("div");
  captBody.appendChild(nav);
  nav.id = "nav";
};

const divCorFundo = () => {
  const captNav = document.getElementById("nav");
  const createDivCorFundo = document.createElement("div");
  captNav.appendChild(createDivCorFundo);
  createDivCorFundo.id = "cor-fundo";
  createDivCorFundo.innerText = "Cor de fundo";
};

const corDeFundoBtn = (cor) => {
  const captDivCorFundo = document.getElementById("cor-fundo");
  const colorBtn = document.createElement("button");
  captDivCorFundo.appendChild(colorBtn);
  colorBtn.innerText = cor;

  colorBtn.addEventListener("click", () => {
    captBody.style.backgroundColor = cor;
    saveContent();
  });
};

const backgroundColor = () => {
  corDeFundoBtn("white");
  corDeFundoBtn("black");
  corDeFundoBtn("green");
  corDeFundoBtn("blue");
  corDeFundoBtn("yellow");
};

const divCorFonte = () => {
  const captNav = document.getElementById("nav");
  const createDivCorFonte = document.createElement("div");
  captNav.appendChild(createDivCorFonte);
  createDivCorFonte.id = "cor-fonte";
  createDivCorFonte.innerText = "Cor da fonte";
};

const corDeFonteBtn = (cor) => {
  const captDivCorFundo = document.getElementById("cor-fonte");
  const fonteBtn = document.createElement("button");
  captDivCorFundo.appendChild(fonteBtn);
  fonteBtn.innerText = cor;

  fonteBtn.addEventListener("click", () => {
    captBody.style.color = cor;
    saveContent();
  });
};

const fonteColor = () => {
  corDeFonteBtn("black");
  corDeFonteBtn("red");
  corDeFonteBtn("pink");
};

const divTamanhoFonte = () => {
  const captNav = document.getElementById("nav");
  const createTamanhoFonte = document.createElement("div");
  captNav.appendChild(createTamanhoFonte);
  createTamanhoFonte.id = "tamanho-fonte";
  createTamanhoFonte.innerText = "Tamanho da fonte";
};

const tamanhoFonte = (tamanho) => {
  const captDivTamanhoFonte = document.getElementById("tamanho-fonte");
  const tamanhoFonteBtn = document.createElement("button");
  captDivTamanhoFonte.appendChild(tamanhoFonteBtn);
  tamanhoFonteBtn.innerText = tamanho;

  tamanhoFonteBtn.addEventListener("click", () => {
    captBody.style.fontSize = tamanho;
    saveContent();
  });
};

const fontSize = () => {
  tamanhoFonte("10px");
  tamanhoFonte("20px");
  tamanhoFonte("30px");
  tamanhoFonte("40px");
};

const divEspacamento = () => {
  const captNav = document.getElementById("nav");
  const createEspacamento = document.createElement("div");
  captNav.appendChild(createEspacamento);
  createEspacamento.id = "espacamento";
  createEspacamento.innerText = "Espaçamento entre linhas";
};

const espacamentoLinhas = (espacamento) => {
  const captDivEspacamento = document.getElementById("espacamento");
  const espacamentoBtn = document.createElement("button");
  captDivEspacamento.appendChild(espacamentoBtn);
  espacamentoBtn.innerText = espacamento;

  espacamentoBtn.addEventListener("click", () => {
    captBody.style.lineHeight = espacamento;
    saveContent();
  });
};

const fontHeight = () => {
  espacamentoLinhas("10px");
  espacamentoLinhas("20px");
  espacamentoLinhas("30px");
  espacamentoLinhas("40px");
};

const divTipoFonte = () => {
  const captNav = document.getElementById("nav");
  const createTipoFonte = document.createElement("div");
  captNav.appendChild(createTipoFonte);
  createTipoFonte.id = "fonte";
  createTipoFonte.innerText = "Tipo da fonte";
};

const tipoFonte = (fonte) => {
  const captDivTipoFonte = document.getElementById("fonte");
  const fonteBtn = document.createElement("button");
  fonteBtn.innerText = fonte;
  captDivTipoFonte.appendChild(fonteBtn);

  fonteBtn.addEventListener("click", () => {
    captBody.style.fontFamily = fonte;
    saveContent();
  });
};

const fontFamily = () => {
  tipoFonte("Georgia");
  tipoFonte("cursive");
  tipoFonte("fantasy");
  tipoFonte("monospace");
};

window.onload = () => {
  nav();
  divCorFundo();
  backgroundColor();
  divCorFonte();
  fonteColor();
  divTamanhoFonte();
  fontSize();
  divEspacamento();
  fontHeight();
  divTipoFonte();
  fontFamily();
  createh2();
  createh3();
  paragraphContent();
  returnContent();
};
