'use client';

import React, { useState, useRef, useEffect } from 'react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const INITIAL_HISTORY: HistoryItem[] = [
  {
    command: 'help',
    output: <span style={{"color":"#cfc8ee"}}>Comandos: about, projects, skills, experience, education, contact, github, docker, kubernetes, clear</span>,
  },
  {
    command: 'about',
    output: <span style={{"color":"#cfc8ee"}}>Jonny Marcus, estudante de Ciência da Computação na UNIFEI.</span>,
  },
  {
    command: 'skills',
    output: <span style={{"color":"#cfc8ee"}}>React · Next.js · TypeScript · Python · C · Git · Docker · Kubernetes</span>,
  },
  {
    command: 'projects',
    output: <span style={{"color":"#cfc8ee"}}>CareerFlow AI · CineWave · EcoRota · Dev-U Website · TaskFlow · Pixel Quest · Portfólio V1</span>,
  },
  {
    command: 'education',
    output: <span style={{"color":"#cfc8ee"}}>UNIFEI · Fórum Telecom (redes) · Inglês (Mairo Vergara)</span>,
  },
  {
    command: 'contact',
    output: <span style={{"color":"#cfc8ee"}}>jonnymarcusmilitao123@gmail.com · (31) 98936-1584</span>,
  },
  {
    command: 'status',
    output: <span style={{"color":"#6ee7a0"}}>● Disponível para estágio</span>,
  },
];

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>(INITIAL_HISTORY);
  const [inputVal, setInputVal] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode;
    switch (trimmed) {
      case 'help':
        output = <span style={{"color":"#cfc8ee"}}>Comandos disponíveis: about, projects, skills, experience, education, contact, github, docker, kubernetes, status, clear</span>;
        break;
      case 'about':
        output = <span style={{"color":"#cfc8ee"}}>Jonny Marcus, estudante de Ciência da Computação na UNIFEI. Focado em desenvolvimento full stack, jogos e soluções digitais modernas.</span>;
        break;
      case 'skills':
        output = <span style={{"color":"#cfc8ee"}}>React · Next.js · TypeScript · JavaScript · Python · Django · C · C++ · C# · Unity · Git · Docker · Kubernetes · SQL</span>;
        break;
      case 'projects':
        output = <span style={{"color":"#cfc8ee"}}>CareerFlow AI · CineWave · EcoRota · Dev-U Website · TaskFlow · Pixel Quest · Portfólio V1</span>;
        break;
      case 'experience':
        output = <span style={{"color":"#cfc8ee"}}>byron solutions (Empresa Júnior de Engenharia e Tecnologia) · Dev-U (Desenvolvimento de Jogos e Arte Digital)</span>;
        break;
      case 'education':
        output = <span style={{"color":"#cfc8ee"}}>UNIFEI (Ciência da Computação) · CS50x Harvard · Web Bootcamp Angela Yu · Curso em Vídeo Guanabara · Inglês Mairo Vergara</span>;
        break;
      case 'contact':
        output = <span style={{"color":"#cfc8ee"}}>Email: jonnymarcusmilitao123@gmail.com · Cel/WhatsApp: (31) 98936-1584 · Instagram: @jonnymarcus.s</span>;
        break;
      case 'github':
        output = (
          <span style={{"color":"#cfc8ee"}}>
            Perfil do GitHub: <a href="https://github.com/JonnyMarcus" target="_blank" rel="noopener noreferrer" style={{"color":"#a78bfa","textDecoration":"underline"}}>github.com/JonnyMarcus</a>
          </span>
        );
        break;
      case 'docker':
        output = <span style={{"color":"#cfc8ee"}}>Docker: Criação de contêineres, Dockerfiles, Docker Compose e padronização de ambientes de desenvolvimento e produção.</span>;
        break;
      case 'kubernetes':
      case 'k8s':
        output = <span style={{"color":"#cfc8ee"}}>Kubernetes: Orquestração e escalabilidade de contêineres, clusters e automação de deploys.</span>;
        break;
      case 'status':
        output = <span style={{"color":"#6ee7a0"}}>● Disponível para estágio em desenvolvimento de software / full stack</span>;
        break;
      default:
        output = <span style={{"color":"#f87171"}}>Comando não reconhecido: &quot;{trimmed}&quot;. Digite &quot;help&quot; para ver os comandos disponíveis.</span>;
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commandChips = [
    'about',
    'projects',
    'skills',
    'docker',
    'kubernetes',
    'experience',
    'education',
    'contact',
    'github',
    'status',
    'clear',
  ];

  return (
    <section className="card">
      <h2><em>07.</em>Terminal Interativo</h2>
      <div className="tm">
        <div className="tb">
          <i style={{"background":"#ff5f56"}}></i>
          <i style={{"background":"#ffbd2e"}}></i>
          <i style={{"background":"#27c93f"}}></i>
          <span style={{"marginLeft":"8px"}}>jonny@portfolio: ~</span>
        </div>
        <div className="term" ref={terminalRef} style={{"padding":"14px 16px","maxHeight":"280px","overflowY":"auto"}}>
          {history.map((item, index) => (
            <React.Fragment key={index}>
              <span className="g">jonny@portfolio:~$</span> {item.command}
              <br />
              {item.output}
              <br />
            </React.Fragment>
          ))}
          <div style={{"display":"flex","alignItems":"center","marginTop":"2px"}}>
            <span className="g" style={{"whiteSpace":"nowrap"}}>jonny@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Comando do terminal"
              style={{
                "background":"transparent",
                "border":"none",
                "outline":"none",
                "color":"#f1eeff",
                "fontFamily":"'JetBrains Mono', monospace",
                "fontSize":"13px",
                "marginLeft":"8px",
                "flex":1,
                "padding":0
              }}
              placeholder="digite um comando..."
            />
            <span className="cur">█</span>
          </div>
        </div>
      </div>
      <div className="chips">
        {commandChips.map((chip) => (
          <button
            key={chip}
            type="button"
            className="chip"
            onClick={() => executeCommand(chip)}
            style={{
              "cursor":"pointer",
              "border":"1px solid #3b2390",
              "background":"#1b1240",
              "color":"#d9d2ff",
              "padding":"4px 10px",
              "borderRadius":"8px",
              "fontSize":"12px",
              "fontFamily":"inherit"
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </section>
  );
}
