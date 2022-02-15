//const prompt = require(`prompt-sync`)();

// Status inicial do personagem
let vida = 100;
let energia = 100;
let fome = 100;
let sede = 100;
let remedio = 0;
let energetico = 0;
let comida = 0;
let agua = 0;
let dinheiro = 2000;
let continuar = ``;
let escolhas = [];
let cachorro = [];
let sobrevivente = [];
let bandidos = [];
let armadilha = [];
let mochila = [];

let personagem = {
  // Status do personagem
  status: function() {
    console.log(`Vida: ${vida}%`);
    console.log(`Energia: ${energia}%`);
    console.log(`Fome: ${fome}%`);
    console.log(`Sede: ${sede}%`);
    console.log(`${remedio} rémedios.`);
    console.log(`${energetico} garrafas de energético.`);
    console.log(`${comida} comidas.`);
    console.log(`${agua} garrafas d'água.`);
    console.log(`${dinheiro} moedas.`);
  },
  // ------------------------------
  // Sistema de Usar Intens
  usarIntens: function() {
    while (continuar != `n`) {
      let intens = [`[1] Rémedio`, `[2] Energético`, `[3] Comida`, `[4] Água`];
      for (intem of intens) {
        console.log(intem);
      }
      let escolha = +prompt(`Digite qual intem deseja usar: `);
      while (
        escolha != `1` &&
        escolha != `2` &&
        escolha != `3` &&
        escolha != `4`
      ) {
        console.log(`O computador não foi possível ler seu comando!!!`);
        escolha = +prompt(`Digite qual intem deseja usar: `);
      }
      if (escolha == `1`) {
        if (remedio > 0) {
          vida = 100;
          remedio = remedio - 1;
          console.log(`Você usou um remédio.`);
          console.log(`Sua vida: ${vida}%`);
          console.log(`Quantidade de remédios: ${remedio} remédios.`);
        } else {
          console.log(`Você não possui remédios!!!`);
        }
      } else if (escolha == `2`) {
        if (energetico > 0) {
          energia = 100;
          energetico = energetico - 1;
          console.log(`Você tomou uma garrafa de energético.`);
          console.log(`Sua energia: ${energia}%`);
          console.log(
            `Quantidade de garrafas de energéticos: ${energetico} garrafas.`
          );
        } else {
          console.log(`Você não possui garrafas de energético!!!`);
        }
      } else if (escolha == `3`) {
        if (comida > 0) {
          fome = 100;
          comida = comida - 1;
          console.log(`Você comeu uma comida.`);
          console.log(`Sua fome: ${fome}%`);
          console.log(`Quantidade de comidas: ${comida} comidas.`);
        } else {
          console.log(`Você não possui comidas!!!`);
        }
      } else if (escolha == `4`) {
        if (agua > 0) {
          sede = 100;
          agua = agua - 1;
          console.log(`Você tomou uma garrafa d'água.`);
          console.log(`Sua sede: ${sede}%`);
          console.log(`Quantidade de garrafas d'água: ${agua} garrafas.`);
        } else {
          console.log(`Você não possui garrafas d'água!!!`);
        }
      }
      continuar = prompt(`Deseja usar mais algum intem? [s/n]: `);
      while (continuar != `s` && continuar != `n`) {
        console.log(`O computador não foi possível ler seu comando!!!`);
        continuar = prompt(`Deseja usar mais algum intem? [s/n]: `);
      }
    }
  },
};
// ------------------------------

// Sistema de compras
function loja() {
  console.log(
    `Bem vindo a loja, aqui tem tudo que você vai precisar para partir em sua missão.`
  );
  let comprar = prompt(`Deseja comprar algum intem? [s/n]: `);
  while (comprar != `s` && comprar != `n`) {
    console.log(`O computador não foi possível ler seu comando!!!`);
    comprar = prompt(`Deseja comprar algum intem? [s/n]: `);
  }
  while (comprar == `s`) {
    console.log(`Você possui ${dinheiro} moedas.`);
    let produtos = [
      `[1] Remédio - 50 moedas`,
      `[2] Comida - 50 moedas`,
      `[3] Água - 50 moedas`,
      `[4] Energético - 50 moedas`,
    ];
    for (let produto of produtos) {
      console.log(produto);
    }
    if (dinheiro >= 50) {
      let comprando = +prompt(`Digite qual intem deseja comprar: `);
      while (
        comprando != `1` &&
        comprando != `2` &&
        comprando != `3` &&
        comprando != `4`
      ) {
        console.log(`O computador não foi possível ler seu comando!!!`);
        comprando = +prompt(`Digite qual intem deseja comprar: `);
      }
      if (comprando == `1`) {
        let quant = +prompt(`Quantas unidades? `);
        while (isNaN(quant)) {
          console.log(`O computador não foi possível ler seu comando!!!`);
          quant = +prompt(`Quantas unidades? `);
        }
        dinheiro = dinheiro - quant * 50;
        if (dinheiro < 0) {
          console.log(
            `Não foi possível comprar essa quantidade, o dinheiro não é suficiente`
          );
        } else {
          remedio = remedio + quant;
          console.log(
            `Você comprou ${quant} remédios. Agora você possui ${remedio} remédios para cura.`
          );
          console.log(`Dinheiro sobrando: ${dinheiro} moedas.`);
        }
      } else if (comprando == `2`) {
        quant = +prompt(`Quantas unidades? `);
        while (isNaN(quant)) {
          console.log(`O computador não foi possível ler seu comando!!!`);
          quant = +prompt(`Quantas unidades? `);
        }
        dinheiro = dinheiro - quant * 50;
        if (dinheiro < 0) {
          console.log(
            `Não foi possível comprar essa quantidade, o dinheiro não é suficiente`
          );
        } else {
          comida = comida + quant;
          console.log(
            `Você comprou ${quant} comidas. Agora você possui ${comida} comidas para se alimentar.`
          );
          console.log(`Dinheiro sobrando: ${dinheiro} moedas.`);
        }
      } else if (comprando == `3`) {
        quant = +prompt(`Quantas unidades? `);
        while (isNaN(quant)) {
          console.log(`O computador não foi possível ler seu comando!!!`);
          quant = +prompt(`Quantas unidades? `);
        }
        dinheiro = dinheiro - quant * 50;
        if (dinheiro < 0) {
          console.log(
            `Não foi possível comprar essa quantidade, o dinheiro não é suficiente`
          );
        } else {
          agua = agua + quant;
          console.log(
            `Você comprou ${quant} garrafas d'água. Agora você possui ${agua} garrafas d'água para beber.`
          );
          console.log(`Dinheiro sobrando: ${dinheiro} moedas.`);
        }
      } else if (comprando == `4`) {
        quant = +prompt(`Quantas unidades? `);
        while (isNaN(quant)) {
          console.log(`O computador não foi possível ler seu comando!!!`);
          quant = +prompt(`Quantas unidades? `);
        }
        dinheiro = dinheiro - quant * 50;
        if (dinheiro < 0) {
          console.log(
            `Não foi possível comprar essa quantidade, o dinheiro não é suficiente`
          );
        } else {
          energetico = energetico + quant;
          console.log(
            `Você comprou ${quant} garrafas de energético. Agora você possui ${energetico} garrafas energético para beber.`
          );
          console.log(`Dinheiro sobrando: ${dinheiro} moedas.`);
        }
      }
    } else {
      console.log(`Você não possui dinheiro sufuciente para comprar algo!!!`);
    }
    comprar = prompt(`Deseja comprar algo mais? [s/n]: `);
  }
  console.log(`Saindo da loja.`);
}
// ------------------------------

// Sistema de Combate
let inimigo;
let inimigos1 = [`Esqueleto`, `Zumbi`, `Ciclope`];
let inimigos2 = [`Necromante`, `Monstro da Ferrugem`, `Cubo Gelatinoso`];
let inimigos3 = [`Bruxa`, `Medusa`, `Ursa-Coruja`];
let boss = [`Devorador de Mentes`];

let bookDosInimigos = {
  sala1: `Dano = 10% (dano normal) e 15% (dano critico) | Com 100% de Vida. `,
  sala2: `Dano = 15% (dano normal) e 20% (dano critico) | Com 110% de Vida. `,
  sala3: `Dano = 20% (dano normal) e 25% (dano critico) | Com 120% de Vida. `,
  boss: `Dano = 25% (dano normal) e 30% (dano critico) | Com 200% de Vida. `
}

function combate() {
  vida;
  let vidaoponente = 100;
  if (sala == 2) {
    vidaoponente = 110;
  } else if (sala == 3) {
    vidaoponente = 120;
  } else if (sala == 4) {
    vidaoponente = 200;
  }
  let rodada = 0;
  if (cachorro == `companheiro`) {
    console.log(`O seu cachorro aplica o golpe inicial no inimigo.`);
    vidaoponente = vidaoponente - 20;
    console.log(`Dano no oponente = 20%`);
  }
  while (vida > 0 && vidaoponente > 0) {
    console.log(`Rodada ${rodada + 1}`);
    console.log(`Vez do oponente`);
    pcacerto = Math.trunc(Math.random() * 100);
    console.log(`Oponente tirou: ${pcacerto}`);
    if (pcacerto <= 35) {
      console.log(`Ele erra o golpe em você. `);
      console.log(`Dano em você = 0%`);
    } else if (pcacerto >= 35 && pcacerto < 70) {
      console.log(`Ele acerta um golpe em você.`);
      if (sala == `1`) {
        vida = vida - 10;
        console.log(`Dano em você = 10%`);
      } else if (sala == `2`) {
        vida = vida - 15;
        console.log(`Dano em você = 15%`);
      } else if (sala == `3`) {
        vida = vida - 20;
        console.log(`Dano em você = 20%`);
      } else if (sala == `4`) {
        vida = vida - 25;
        console.log(`Dano em você = 25%`);
      }
    } else if (pcacerto >= 70) {
      console.log(`Ele acerta um golpe critical em você.`);
      if (sala == `1`) {
        vida = vida - 15;
        console.log(`Dano em você = 15%`);
      } else if (sala == `2`) {
        vida = vida - 20;
        console.log(`Dano em você = 20%`);
      } else if (sala == `3`) {
        vida = vida - 25;
        console.log(`Dano em você = 25%`);
      } else if (sala == `4`) {
        vida = vida - 30;
        console.log(`Dano em você = 30%`);
      }
    }
    if (vida > 0) {
      console.log(`Sua vez`);
      continuar = prompt(`Pressione Enter para continuar: `);
      console.log(`Escolha um golpe para usar: `);
      let golpes = [
        `[1] Golpe corpo a corpo com as mãos`,
        `[2] Golpe com espada`,
        `[3] Dar um tiro com a arma`,
        `[4] Usar Intens`,
      ];
      for (let golpe of golpes) {
        console.log(golpe);
      }
      usergolpe = prompt(`Digite 1, 2, 3 ou 4 = `);
      while (
        usergolpe != `1` &&
        usergolpe != `2` &&
        usergolpe != `3` &&
        usergolpe != `4`
      ) {
        console.log(`O computador não foi possível ler seu comando!!!`);
        golpes = [
          `[1] Golpe corpo a corpo com as mãos`,
          `[2] Golpe com espada`,
          `[3] Dar um tiro com a arma`,
          `[4] Usar Intens`,
        ];
        for (let golpe of golpes) {
          console.log(golpe);
        }
        usergolpe = prompt(`Digite 1, 2, 3 ou 4 = `);
      }
      if (usergolpe == `1`) {
        if (energia >= 1) {
          let useracerto = Math.trunc(Math.random() * 100);
          console.log(`Você tirou: ${useracerto}`);
          if (useracerto <= 20) {
            energia = energia - 1;
            console.log(`Você erra o golpe.`);
            console.log(`Dano no oponente = 0%`);
          } else if (useracerto >= 20 && useracerto < 60) {
            energia = energia - 1;
            console.log(`Você acerta o golpe.`);
            vidaoponente = vidaoponente - 5;
            console.log(`Dano no oponente = 5%`);
          } else if (useracerto >= 60) {
            energia = energia - 1;
            console.log(`Você acerta o golpe critical`);
            vidaoponente = vidaoponente - 10;
            console.log(`Dano no oponente = 10%`);
          }
          console.log(`Gasto de energia: 1%`);
        } else {
          console.log(`Energia insuficiente para usar o golpe.`);
          /////////////////////////////////////////////////////
        }
      }
      if (usergolpe == `2`) {
        if (energia >= 5) {
          let useracerto = Math.trunc(Math.random() * 100);
          console.log(`Você tirou: ${useracerto}`);
          if (useracerto <= 35) {
            energia = energia - 5;
            console.log(`Você erra o golpe.`);
            console.log(`Dano no oponente = 0%`);
          } else if (useracerto >= 35 && useracerto < 70) {
            energia = energia - 5;
            console.log(`Você acerta o golpe com espada.`);
            vidaoponente = vidaoponente - 15;
            console.log(`Dano no oponente = 15%`);
          } else if (useracerto >= 70) {
            energia = energia - 5;
            console.log(`Você acerta o golpe com espada critical`);
            vidaoponente = vidaoponente - 20;
            console.log(`Dano no oponente = 20%`);
          }
          console.log(`Gasto de energia: 5%`);
        } else {
          console.log(`Energia insuficiente para usar o golpe.`);
          /////////////////////////////////////////////////////
        }
      }
      if (usergolpe == `3`) {
        if (energia >= 10) {
          let useracerto = Math.trunc(Math.random() * 100);
          console.log(`Você tirou: ${useracerto}`);
          if (useracerto <= 40) {
            energia = energia - 10;
            console.log(`Você erra o golpe.`);
            console.log(`Dano no oponente = 0%`);
          } else if (useracerto >= 40 && useracerto < 80) {
            energia = energia - 10;
            console.log(`Você acerta o tiro.`);
            vidaoponente = vidaoponente - 25;
            console.log(`Dano no oponente = 25%`);
          } else if (useracerto >= 80) {
            energia = energia - 10;
            console.log(`Você acerta um tiro critical`);
            vidaoponente = vidaoponente - 30;
            console.log(`Dano no oponente = 30%`);
          }
          console.log(`Gasto de energia: 10%`);
        } else {
          console.log(`Energia insuficiente para usar o golpe.`);
          /////////////////////////////////////////////////////
        }
      }
      if (usergolpe == `4`) {
        personagem.status();
        personagem.usarIntens();
      }
      rodada++;
      console.log(`Fim da Rodada`);
      console.log(`Vida do oponente: ${vidaoponente}% | Sua vida: ${vida}%`);
      console.log(`Sua energia: ${energia}%`);

      continuar = prompt(`Pressione Enter para continuar: `);
    } else {
      continuar = prompt(`Pressione Enter para continuar: `);
    }
  }
  console.log(`Fim do combate`);
  if (vida <= 0) {
    console.log(`Vida do oponente: ${vidaoponente}% | Sua vida: ${vida}%`);
    console.log(`Você perdeu o combate.`);
    //console.log(`GAME OVER`);
  } else if (vidaoponente <= 0) {
    console.log(`Oponente foi derrotado.`);
    console.log(`VOCÊ VENCEU O COMBATE`);

    fome = fome - 10;
    sede = sede - 10;
    dinheiro = dinheiro + 100;
    console.log(`Dinheiro ganho: 100 moedas`);
    personagem.status();

    continuar = prompt(`Pressione Enter para continuar: `);

    let usarIntem = prompt(`Deseja usar algum intem? [s/n]: `);
    while (usarIntem != `s` && usarIntem != `n`) {
      console.log(`O computador não foi possível ler seu comando!!!`);
      usarIntem = prompt(`Deseja usar algum intem? [s/n]: `);
    }
    if (usarIntem == `s`) {
      personagem.usarIntens();
    }
  }
}
// ------------------------------

// Sistema de achar tesouros
let tesouro = {
  chance: function() {
    let achar = Math.trunc(Math.random() * 10);
    if (achar <= 7) {
      let moedas = Math.trunc(Math.random() * 200);
      console.log(`Você achou ${moedas} moedas dentro do baú.`);
      dinheiro = dinheiro + moedas;
    } else if (achar > 7) {
      console.log(`O baú na verdade era uma armadilha.`);
      let dano = Math.trunc(Math.random() * 15);
      console.log(`Você tomou ${dano}% de dano pela armadilha`);
      vida = vida - dano;
    }
  },

  final: function() {
    let moedas = Math.trunc(Math.random() * 1000);
    console.log(`Você achou ${moedas} moedas dentro do baú.`);
    dinheiro = dinheiro + moedas;
  },
};
// ------------------------------

// Começo do jogo

console.log(`------------`);
console.log(`Dungeon Line`);
console.log(`------------`);

continuar = prompt(`Pressione Enter para continuar: `);

console.log(
  `Dungeon Line é um jogo de exploração de masmorras, o objetivo é bem simples, você entra na masmorra, passando por corredores e entrando em salas. Enfrenta Mobs e Chefões, e deve gerenciar seus status de vida, tomando cuidando com a fome e sede. Ao longo das masmorra, você achará vários baús com tesouros, que podem conter moedas para coletar, ou armadilhas que tirarão sua vida. E ao final da masmorra, você encontrará o tesouro dela, que pode ter centenas de moedas... ou nada.`
);
console.log(
  `\nVocê se chama Guts, mora na pequena vila Cocoyasi, um jovem de 15 anos, de classe Assassino, empunhando com sigo uma espada e uma pistola, mas também usa suas mãos para ataques corpo a corpo. Seus danos em combate variam de 5% a 30%, dependendo do golpe escolhido e do número tirado.`
);

continuar = prompt(`Pressione Enter para continuar: `);
console.log(`\nAgora veja um breve tutotial do jogo.`);
continuar = prompt(`Pressione Enter para continuar: `);

console.log(
  `\nComo você viu, o jogo é no estilo Dungeon, então é basicamente lutar contra mobs, fazer escolhas e achar tesouros.`
);
console.log(
  `\nPrimeiro como funciona a loja. É nela que você poderá investir seu dinheiro, comprando intens essenciais para sua sobrevivência, como remedios, comidas e águas.`
);
console.log(
  `Como usar os intens: Digite 4 nos golpes para poder usar intens, ou no final dos turnos.`
);
console.log(
  `Status do personagem: Vida - Você perde lutando ou caindo em armadilhas, se sua vida chegar a 0, você perde o game e volta pro inicio. Energia - Perde a cada ataque, a quantidade de energia perdida dependerá do golpe usado. Fome e Sede - Perdem gradualmente com o tempo, se a fome ou sede chegar a 0, comecará a perder vida.`
);
console.log(
  `Tesouros: Você achará tesouros durante sua missão. Tesouros nas salas: Podem ter moedas, de 0 a 200 moedas ou armadilhas, que podem lhe tirar até 15% de vida. E tesouros no fim de cada sala: Sempre lhe daram moedas, de 0 a 1000 moedas`
);
console.log(
  `\nCombate: no jogo, o seu personagem pode usar 3 golpes, soco, golpe com espada e tiro com pistola.`
);
console.log(
  `Soco: Tem chance de 20% de errar, 40% de acertar o golpe e 40% de dano critico. Gasta 1% de energia por uso. E tira 5% (acerto) ou 10% (acerto critico) de vida do oponente.`
);
console.log(
  `Espada: Tem chance de 35% de errar, 35% de acertar o golpe e 30% de dano critico. Gasta 5% de energia por uso. E tira 15% (acerto) ou 20% (acerto critico) de vida do oponente.`
);
console.log(
  `Pistola: Tem chance de 40% de errar, 40% de acertar o golpe e 20% de dano critico. Gasta 10% de energia por uso. E tira 25% (acerto) ou 30% (acerto critico) de vida do oponente.`
);
continuar = prompt(`Pressione Enter para continuar: `);

console.log(`Agora você está pronto para desbravar a Masmorra!!!`);

console.log(
  `Primeiramente, para se aventurar em uma Dunegon, precisará de ir a loja para comprar intens que lhe ajudarão durante sua exploração.`
);
continuar = prompt(`Pressione Enter para continuar: `);
loja();

console.log(
  `Agora você chega na entrada da Masmorra, um lugar sombrio e cheio de misterios. Mesmo do lado de fora ainda, já é possível ouvir os grunhidos dos monstros.`
);
continuar = prompt(`Pressione Enter para continuar: `);

let escolher;
let sala = 1;

//while (vida > 0) {
for (i = 0; i < 3; i++) {
  if (vida > 0) {
    if (sala <= 3) {
      console.log(`Sala: ${sala}`);
    } else if (sala == 4) {
      console.log(`Sala Final: Final Boss!!!`);
    }
    continuar = prompt(`Pressione Enter para continuar: `);

    let turnos = 5
    //Math.trunc(Math.random() * 6 + 4);

    console.log(
      `Você chegou na sala ${sala}, levará ${turnos} turnos para percorre-la.`
    );

    let jogadas = 0;

    while (jogadas < turnos && vida > 0) {
      console.log(`Turno ${jogadas + 1} `);
      // let sala = ["combate", "tesouro", "livre", "evento"];
      let aleatorio = Math.floor(Math.random() * 100);
      if (aleatorio <= 30) {
        if (sala == 1) {
          inimigo = inimigos1[Math.floor(Math.random() * inimigos1.length)];
          console.log(`Você encontra um ${inimigo}. Hora do combate!!!`);
          console.log(`Detalhes do inimigo: ${bookDosInimigos.sala1}`)
          continuar = prompt(`Pressione Enter para continuar: `);
          combate();
        } else if (sala == 2) {
          inimigo = inimigos2[Math.floor(Math.random() * inimigos2.length)];
          console.log(`Você encontra um ${inimigo}. Hora do combate!!!`);
          console.log(`Detalhes do inimigo: ${bookDosInimigos.sala2}`)
          continuar = prompt(`Pressione Enter para continuar: `);
          combate();
        } else if (sala == 3) {
          inimigo = inimigos3[Math.floor(Math.random() * inimigos3.length)];
          console.log(`Você encontra uma ${inimigo}. Hora do combate!!!`);
          console.log(`Detalhes do inimigo: ${bookDosInimigos.sala3}`)
          continuar = prompt(`Pressione Enter para continuar: `);
          combate();
        }
      } else if (aleatorio > 30 && aleatorio < 50) {
        continuar = prompt(
          `Você encontrou um baú, deseja abrir o baú? [s/n]: `
        );
        while (continuar != `s` && continuar != `n`) {
          console.log(`O computador não foi possível ler seu comando!!!`);
          continuar = prompt(
            `Você encontrou um baú, deseja abrir o baú? [s/n]: `
          );
        }
        if (continuar == `s`) {
          tesouro.chance();
          console.log(`Vida: ${vida}`);
          if (vida < 0) {
            //console.log(`GAME OVER`);
          }
        } else {
          `Você passou direto pelo baú.`;
        }
      } else if (aleatorio >= 50 && aleatorio < 60) {
        console.log(`Você passa o turno sem incidente.`);
        continuar = prompt(`Pressione Enter para continuar: `);
      } else if (aleatorio > 60) {
        let eventos = Math.floor(Math.random() * 100);
        if (eventos < 20) {
          if (sobrevivente.length == 0) {
            console.log(
              `Você encontra um sobrevivente na Dungeon. Ele diz que entrou na Dungeon, mas depois de um combate com um inimigo, ficou muito machucado e sem conseguir sair de lá. Implorando sua ajuda, ele lhe pede um pouco de rémedio, energético, comida e água para se curar e recuperar força e energia e assim poder sair da Dungeon.`
            );
            escolher = prompt(`Você aceita ajudar o homem? [s/n]: `);
            while (escolher != `s` && escolher != `n`) {
              console.log(`O computador não foi possível ler seu comando!!!`);
              escolher = prompt(`Você aceita ajudar o homem? [s/n]: `);
            }
            if (escolher == `s`) {
              if (remedio > 1 && energetico > 1 && comida > 1 && agua > 1) {
                remedio = remedio - 1;
                energetico = energetico - 1;
                comida = comida - 1;
                agua = agua - 1;
                console.log(`Você aceita ajudar o homem, que fica muito feliz por você ter ajudado ele. Ele se recupera, e finalmente ele está pronto para sair e voltar para casa, ele lhe agradece novamente e vocês se despedem.`)
                personagem.status();
              } else {
                console.log(
                  `Você diz que não pode ajudar ele, porque não possui intens para ajudá-lo. O homem diz que você está mentindo para não ajudá-lo, e em um ato de desespero parte para cima de você de suspresa, lhe apunhalando pelas costas e caindo no chão em seguida, morrendo.`
                );
                vida = vida - 5;
                console.log(`Sua vida: ${vida}%`);
              }
            } else {
              console.log(
                `Você nega ajudar o homem. Que em um ato de desespero parte para cima de você de suspresa, lhe apunhalando pelas costas e caindo no chão em seguida, morrendo.`
              );
              vida = vida - 10;
              console.log(`Sua vida: ${vida}%`);
            }
            continuar = prompt(`Pressione Enter para continuar: `);
            sobrevivente.push(1);
          } else {
            console.log(`Você passa o turno sem incidente.`);
            continuar = prompt(`Pressione Enter para continuar: `);
          }
        } else if (eventos >= 20 && eventos < 40) {
          if (bandidos.length == 0) {
            console.log(
              `Você é cercado por 2 bandidos que querem roubar todo seu dinheiro e intens.`
            );
            console.log(
              `Você vai fazer o que eles pedem e dar tudo para os bandidos? Ou vai lutar com eles para ficar com o que é seu? `
            );
            escolhas = [
              `[1] Dar tudo aos bandidos.`,
              `[2] Lutar com os bandidos.`,
            ];
            for (escolha of escolhas) {
              console.log(escolha);
            }
            escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            while (escolher != `1` && escolher != `2`) {
              console.log(`O computador não foi possível ler seu comando!!!`);
              escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            }
            if (escolher == `1`) {
              console.log(
                `Então você decide entregar tudo aos bandidos para não gerar conflito.`
              );
              remedio = 0;
              energetico = 0;
              comida = 0;
              agua = 0;
              dinheiro = 0;
              personagem.status();
            } else if (escolher == `2`) {
              console.log(
                `Então você decide lutar com os bandidos para não perder todos seus intens.`
              );
              console.log(`Primeiro bandido:`)
              for (i = 0; i < 2; i++) {
                continuar = prompt(`Pressione Enter para continuar: `);
                console.log(`Proximo bandido:`)
                combate();
              }
            }
            bandidos.push(1);
            continuar = prompt(`Pressione Enter para continuar: `);
          } else {
            console.log(`Você passa o turno sem incidente.`);
            continuar = prompt(`Pressione Enter para continuar: `);
          }
        } else if (eventos >= 40 && eventos < 60) {
          if (armadilha.length == 0) {
            console.log(`Você cai em uma armadilha feita por bandidos.`);
            escolhas = [
              `[1] Ficar na armadilha.`,
              `[2] Tentar sair da armadilha.`,
            ];
            for (escolha of escolhas) {
              console.log(escolha);
            }
            escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            while (escolher != `1` && escolher != `2`) {
              console.log(`O computador não foi possível ler seu comando!!!`);
              escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            }
            if (escolher == `1`) {
              console.log(
                `Você decide não se esforçar para sair e permanece na armadilha.`
              );
              console.log(
                `Então se passa alguns minutos e os bandidos chegam até você. Indefeso pela armadilha, você não consegue fazer nada, e eles lhe roubam tudo.`
              );
              remedio = 0;
              energetico = 0;
              comida = 0;
              agua = 0;
              dinheiro = 0;
              personagem.status();
            } else if (escolher == `2`) {
              console.log(`Você decide se esforçar para sair da armadilha.`);
              console.log(
                `Depois de muito se esforçar para sair, você consegue espacar da armadilha, mas no processo, acaba se machucando e gastando energia.`
              );
              vida = vida - 5;
              energia = energia - 5;
              personagem.status();
            }
            continuar = prompt(`Pressione Enter para continuar: `);
            armadilha.push(1);
          } else {
            console.log(`Você passa o turno sem incidente.`);
            continuar = prompt(`Pressione Enter para continuar: `);
          }
        } else if (eventos >= 60 && eventos < 80) {
          if (mochila.length == 0) {
            console.log(`Você acha uma mochila jogada no chão da masmorra.`);
            escolhas = [
              `[1] Abrir e vasculhar a mochila.`,
              `[2] Não mexer com a mochila.`,
            ];
            for (escolha of escolhas) {
              console.log(escolha);
            }
            escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            while (escolher != `1` && escolher != `2`) {
              console.log(`O computador não foi possível ler seu comando!!!`);
              escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            }
            if (escolher == `1`) {
              console.log(`Então você decide investigar a mochila.`);
              aleatorio = Math.floor(Math.random() * 10);
              if (aleatorio <= 5) {
                console.log(`Você acha alguns intens na mochila.`);
                remedio = remedio + 4;
                energetico = energetico + 4;
                comida = comida + 4;
                agua = agua + 4;
                dinheiro = dinheiro + 400;
                personagem.status;
              } else {
                console.log(
                  `Você abre a mochila, mas na verdade ela era uma armadilha, que continha um gás venenoso, que lhe da 10% de dano.`
                );
                vida = vida - 10;
                personagem.status;
              }
            } else if (escolher == `2`) {
              console.log(`Então você decide não investigar a mochila.`);
            }
            mochila.push(1);
            continuar = prompt(`Pressione Enter para continuar: `);
          } else {
            console.log(`Você passa o turno sem incidente.`);
            continuar = prompt(`Pressione Enter para continuar: `);
          }
        } else if (eventos >= 80) {
          if (cachorro.length == 0) {
            console.log(
              `Você acha um cachorro faminto na masmorra. Ele olha para você, chorando por comida.`
            );
            escolhas = [
              `[1] Ajudar o cachorro, dando comida e água para ele.`,
              `[2] Não ajudar o cachorro.`,
            ];
            for (escolha of escolhas) {
              console.log(escolha);
            }
            escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            while (escolher != `1` && escolher != `2`) {
              console.log(`O computador não foi possível ler seu comando!!!`);
              escolher = prompt(`Digite sua escolha, 1 ou 2? `);
            }
            if (escolher == `1`) {
              if (comida > 1 && agua > 1) {
                comida = comida - 1;
                agua = agua - 1;
                console.log(
                  `Você ajuda o cachorro, alimentando-o e lhe dando água. Com seu gesto de generosidade, o cachorro começa lhe seguir por sua jornada, sendo seu fiel companheiro até o fim e lhe ajudando nos combates.`
                );
                personagem.status();
                cachorro.push(companheiro)
              } else {
                console.log(
                  `Você não possui intens suficientes para ajudar o cachorro.`
                );
              }
            } else if (escolher == `2`) {
              console.log(
                `Você decide não ajudar o cachorro, passando direto por ele.`
              );
            }
            cachorro.push(1);
            continuar = prompt(`Pressione Enter para continuar: `);
          } else {
            console.log(`Você passa o turno sem incidente.`);
            continuar = prompt(`Pressione Enter para continuar: `);
          }
        }
      }
      jogadas = jogadas + 1;
      fome = fome - 20;
      sede = sede - 20;

      if (fome <= 0 && sede <= 0) {
        vida = vida - 20;
      }
    }
    if (vida > 0) {
      console.log(`Você chegou ao fim da sala, e achou um tesouro.`);
      tesouro.final();

      sala = sala + 1;

      personagem.status();

      continuar = prompt(`Pressione Enter para ir para a próxima sala: `);
    } else {
      //console.log(`GAME OVER`);
    }
  } else {
    //console.log (`GAME OVER`)
  }
}
if (vida < 0) {
  //console.log(`GAME OVER`);
}
//}
if (vida > 0) {
  console.log(
    `Você chega no fim da masmorra, e se depara com um ${boss}, seu Final Boss. Derrote seu chefão e zere a masmorra.`
  );
  console.log(`Detalhes do inimigo: ${bookDosInimigos.boos}`)
  continuar = prompt(`Pressione Enter para continuar: `);
  sala = `4`
  combate();
  if (vida > 0) {
    console.log(`PARABÉNS, VOCÊ COMPLETOU A MASMORRA!!!!!!`);
    console.log(
      `Por ter derrotado o Chefão e terminado a masmorra, você acha o tesouro final, uma sala com uma montanha de moedas, que era guardada pelo ${boss}`
    );
    console.log(`Prêmio: 100000 MOEDAS`)
    dinheiro = dinheiro + 100000;
    personagem.status();
    console.log(`Muito obrigado por jogar Dungeon Line`);
    console.log(`FIM`);
  }
} else {
  console.log(`Você fracassou em sua missão de explorar a Masmorra e acabou morrendo.`)
  console.log(`----------GAME OVER----------`)
}