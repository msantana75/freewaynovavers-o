//Variaveis dos Ator ! 
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
    if (keyIsDown(DOWN_ARROW)){
       if (podeSeMover()){
      yAtor += 3;
       }
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
          colidiu();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1; }
    }
  }
}

function colidiu(){
  yAtor = 366;
}
function incluiPontos(){
  textAlign (CENTER);
  fill(color(0,255,0))
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366;
}