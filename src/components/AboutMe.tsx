import React from 'react';

export default function AboutMe() {
  return (
    <div className="grid" id="sobre" style={{"gridTemplateColumns":"1fr"}}>
<section className="card" style={{"gap":"20px"}}><h2><em>03.</em>Sobre mim</h2>
<div className="ab">
<div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
<p style={{"fontSize":"17px","color":"#fff","lineHeight":"1.5"}}>Sou estudante de Ciência da Computação na UNIFEI e gosto de transformar ideias em produtos que funcionam, de sites e apps a jogos.</p>
<p>Comecei pelas artes visuais e pelo desenvolvimento de jogos na Dev-U, e hoje meu foco é o desenvolvimento web full stack. Na byron, empresa júnior da UNIFEI, aprendo na prática gestão, trabalho em equipe e entrega de projetos reais.</p>
<p>Busco um estágio para evoluir como desenvolvedor, aprendendo sempre.</p>
<div style={{"display":"flex","gap":"12px","flexWrap":"wrap","marginTop":"6px"}}><a className="btn fill" href="#contato">Falar comigo</a><a className="btn" href="#formacao">Ver formação</a></div>
</div>
<div style={{"display":"flex","flexDirection":"column"}}>
<div className="fact"><span>Formação</span><b className="lgb"><i className="lg lg-unifei " role="img" aria-label="UNIFEI"></i>Ciência da Computação, UNIFEI</b></div>
<div className="fact"><span>Experiência</span><b className="lgb"><i className="lg lg-byron " role="img" aria-label="byron solutions"></i>Empresa júnior</b></div>
<div className="fact"><span>Origem criativa</span><b className="lgb"><i className="lg lg-devu " role="img" aria-label="Dev-U"></i>Jogos e arte digital</b></div>
<div className="fact"><span>Foco</span><b>Desenvolvimento full stack</b></div>
<div className="fact" style={{"borderBottom":"0"}}><span>Status</span><b style={{"color":"#6ee7a0"}}>Disponível para estágio</b></div>
</div></div>
<div className="grid g3" style={{"gap":"12px"}}>
<div className="sub"><b>Desenvolvimento web</b><p>React, Next.js e TypeScript para interfaces rápidas e bem organizadas.</p></div>
<div className="sub"><b>Jogos e arte digital</b><p>Unity, C# e pixel art, com atenção à narrativa e ao visual.</p></div>
<div className="sub"><b>Gestão e equipe</b><p>Projetos, processos e organização do dia a dia na byron.</p></div>
</div></section>
</div>
  );
}
