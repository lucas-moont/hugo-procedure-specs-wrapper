const procedureBtns = document.querySelectorAll(".procedureBtn");
const proceduresSpecs = [
  {
    name: "Microagulhamento Capilar",
    description: `Imagina acordar com os cabelos mais fortes e cheios de vida! O microagulhamento capilar é a solução ideal para quem quer transformar a saúde dos fios. Com pequenas microperfurações, estimulamos a circulação sanguínea e acordamos os folículos capilares para crescerem com mais força. Além disso, ele aumenta a produção de colágeno, deixando o couro cabeludo mais saudável e preparado para sustentar novos fios. É um procedimento simples, mas com resultados incríveis!`,
  },
  {
    name: "MMP® (Microinfusão de Medicamentos na Pele)",
    description: `Quer resultados ainda mais rápidos e precisos para o crescimento capilar? A MMP® é perfeita para você! Combina a precisão do microagulhamento com a aplicação direta de medicamentos no couro cabeludo. Isso significa que ativos como minoxidil, vitaminas e fatores de crescimento chegam exatamente onde seus fios precisam. O resultado? Cabelos mais densos, fortes e saudáveis. Um procedimento moderno e personalizado para quem não quer perder tempo!`,
  },
  {
    name: "Mesoterapia Capilar",
    description: `Se os seus cabelos estão pedindo socorro, a mesoterapia é o tratamento ideal! Através de microinjeções, aplicamos uma combinação poderosa de vitaminas, aminoácidos e medicamentos diretamente no couro cabeludo. É como uma injeção de energia para os folículos capilares, nutrindo-os e estimulando o crescimento de fios mais fortes e resistentes. Dê aos seus cabelos o cuidado que eles merecem!`,
  },
  {
    name: "PRP (Plasma Rico em Plaquetas)",
    description: `Que tal usar o poder do seu próprio corpo para recuperar os fios? O PRP é um tratamento revolucionário que utiliza o plasma do seu sangue, rico em fatores de crescimento, para revitalizar o couro cabeludo e estimular o nascimento de novos fios. É totalmente natural, seguro e com resultados que vão surpreender você. Seus cabelos nunca se sentiram tão vivos!`,
  },
  {
    name: "Laser de Baixa Intensidade (LLLT)",
    description: `Se você busca um tratamento confortável, moderno e eficaz, o laser de baixa intensidade é a escolha perfeita! Ele utiliza luz para melhorar a circulação no couro cabeludo e fortalecer os folículos capilares, reduzindo a queda e aumentando a densidade dos fios. É como uma sessão relaxante que transforma a saúde do seu cabelo.`,
  },
  {
    name: "Toxina Botulínica (Botox®)",
    description: `O segredo para um olhar mais jovem e sem rugas? O Botox® é o tratamento mais popular para suavizar linhas de expressão, como as famosas “pés de galinha” e linhas da testa. O procedimento é rápido, seguro e oferece resultados naturais, deixando sua pele renovada e com aspecto relaxado.`,
  },
  {
    name: "Preenchimento Labial",
    description: `Dê volume e contorno aos seus lábios de forma natural e sem cirurgia. O preenchimento labial com ácido hialurônico deixa seus lábios mais definidos e hidratados, realçando a sua beleza de forma delicada e duradoura.`,
  },
  {
    name: "Limpeza de Pele Profunda",
    description: `Nada como uma pele livre de impurezas! A limpeza de pele profunda remove células mortas, desobstrui os poros e melhora a textura da pele, deixando-a mais fresca, macia e iluminada. Ideal para quem quer um cuidado completo e uma pele radiante.`,
  },
  {
    name: "Peelings Químicos",
    description: `Renove a sua pele com os peelings químicos! Esse tratamento elimina as camadas mais superficiais da pele, estimulando a regeneração celular. Ideal para manchas, acne e sinais de envelhecimento, ele proporciona uma pele mais uniforme e luminosa.`,
  },
  {
    name: "Bioestimuladores de Colágeno",
    description: `Redefina o contorno do seu rosto e recupere a firmeza da sua pele! Os bioestimuladores de colágeno ativam a produção natural de colágeno e elastina, melhorando a elasticidade e o volume da pele, com resultados gradativos e duradouros.`,
  },
  {
    name: "Skinbooster",
    description: `Hidratação profunda que vai deixar sua pele com um glow de dentro para fora! O Skinbooster utiliza microinjeções de ácido hialurônico para devolver a hidratação e a firmeza à pele, melhorando a textura e proporcionando um efeito natural e radiante.`,
  },
  {
    name: "Microagulhamento Facial",
    description: `Quer uma pele mais jovem e revitalizada? O microagulhamento facial estimula a renovação celular e melhora a textura da pele, combatendo marcas de acne, poros dilatados e sinais de envelhecimento. É um tratamento com resultados rápidos e visíveis!`,
  },
  {
    name: "Lifting Facial com Fios de Sustentação",
    description: `Diga adeus à flacidez! O lifting facial com fios de sustentação é um tratamento não cirúrgico que eleva a pele e redefine os contornos faciais. O efeito lifting instantâneo e natural vai devolver a firmeza e a juventude do seu rosto.`,
  },
  {
    name: "Ultrassom Microfocado",
    description: `Tecnologia de ponta para resultados incríveis! O ultrassom microfocado estimula as camadas mais profundas da pele, promovendo o rejuvenescimento sem cirurgia. Ele combate a flacidez e melhora a firmeza da pele, resultando em um contorno facial mais firme e definido.`,
  },
  {
    name: "Enzimas para Papada",
    description: `Diga adeus à papada com as enzimas específicas para esse tratamento! Elas ajudam a reduzir a gordura localizada e redefinir o contorno do rosto, resultando em um perfil mais harmonioso e suave.`,
  },
  {
    name: "Terapias de LED ou Fotobiomodulação",
    description: `A terapia de LED é um tratamento eficaz e relaxante que acelera a regeneração da pele, combate inflamações e promove a produção de colágeno. Ideal para melhorar a saúde da sua pele e manter um rosto luminoso e rejuvenescido.`,
  },
  {
    name: "Jato de Plasma",
    description: `Renove sua pele de maneira rápida e eficaz! O jato de plasma utiliza tecnologia para estimular a regeneração celular e melhorar a textura da pele. É uma ótima solução para reduzir linhas finas, manchas e até mesmo cicatrizes.`,
  },
  {
    name: "Ultraforner/ Lavien",
    description: `Tecnologia avançada para um tratamento profundo e eficaz! O Ultraforner/Lavien utiliza ultrassom para a estimulação da produção de colágeno, proporcionando um efeito tensor, rejuvenescendo a pele e tratando flacidez e rugas com resultados naturais e duradouros.`,
  },
  {
    name: "Aplicação de Ativos para Emagrecimento",
    description: `Quer perder peso de maneira eficiente e segura? A aplicação de ativos para emagrecimento é um tratamento que utiliza substâncias como lipolíticos e agentes que ajudam a quebrar a gordura localizada. Esse procedimento potencializa a perda de medidas, auxiliando no contorno corporal e dando aquele empurrãozinho na busca por um corpo mais definido e saudável.`,
  },
  {
    name: "Aplicação de Ativos para Ganho de Massa Muscular",
    description: `Alcance o corpo dos seus sonhos com a aplicação de ativos para ganho de massa muscular! Este procedimento envolve a aplicação de substâncias que estimulam a hipertrofia muscular, promovendo o aumento da musculatura de forma segura e eficiente. Ideal para quem busca definição e mais volume muscular.`,
  },
  {
    name: "Harmonização Corporal",
    description: `A harmonização corporal é um conjunto de tratamentos voltados para o equilíbrio e definição da silhueta. Através da combinação de técnicas como a aplicação de ativos, massagens e procedimentos estéticos avançados com aparelhos, você alcança um corpo mais contornado e proporcional, realçando sua beleza natural de forma discreta e eficaz.`,
  },
  {
    name: "Harmonização de Glúteos",
    description: `Para quem quer melhorar o contorno e volume dos glúteos de maneira natural, a harmonização de glúteos é a solução! Com a aplicação de preenchedores, bioestimuladores ou outros tratamentos estéticos, o procedimento ajuda a aumentar o volume e melhorar a forma da região, criando um efeito lifting sem necessidade de cirurgia.`,
  },
  {
    name: "Subincisão de Celulite",
    description: `A subincisão de celulite é um procedimento eficaz para tratar a aparência da celulite, especialmente nas áreas mais desafiadoras. Utilizando uma técnica de microincisão, o tratamento quebra as fibras de colágeno que formam os “nódulos” da celulite, promovendo uma pele mais lisa e uniforme. Ideal para quem busca uma melhora significativa na textura da pele e redução da celulite.`,
  },
];
const procedureName = document.querySelector('.procedure-name')
const procedureImg = document.querySelector('.procedure-img')
const procedureDescription = document.querySelector('.procedure-description') 
const closeProcedureBtn = document.querySelector('.close-procedure-specs-btn')
const procedureSpecsWrapper = document.querySelector('.procedure-specs-wrapper')

if (procedureBtns.length > 0) {
  procedureBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const procedure = proceduresSpecs.find(procedure => procedure.name === e.target.innerText)
      
      if(procedureName && procedureDescription && procedureImg){
        procedureName.textContent = procedure.name
        procedureDescription.textContent = procedure.description
      }else{
        console.log('Um dos elementos não existe.')
      }
    });
  });
}

if(closeProcedureBtn){
  closeProcedureBtn.addEventListener('click', () => {
    closeSpecsWrapper()
  })
}

function closeSpecsWrapper(){
 if(procedureSpecsWrapper){
  procedureSpecsWrapper.style.display = 'none'
 } 
}