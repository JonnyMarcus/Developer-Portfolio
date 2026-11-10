'use client';

import React, { useRef, useEffect } from 'react';

export default function Navbar() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute('open');
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="nav2">
      <a href="#inicio" style={{"textDecoration":"none","display":"flex","alignItems":"center","gap":"10px"}}>
        <span className="logo">[JM]</span>
        <b style={{"color":"#fff"}}>Jonny Marcus</b>
      </a>
      <nav className="dn" aria-label="Principal">
        <a className="on" href="#inicio">Início</a>
        <a href="#projetos">Projetos</a>
        <a href="#tec">Tecnologias</a>
        <a href="#sobre">Sobre</a>
        <a href="#exp">Experiência</a>
        <a href="#formacao">Formação</a>
        <a href="#github">GitHub</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="nav-actions" style={{"display":"flex","gap":"10px","alignItems":"center"}}>
        <a className="btn fill nav-cv" href="/assets/0e09aa335874597a4e5f4bce264aab6d.pdf" target="_blank" rel="noopener" style={{"padding":"8px 16px"}}>Currículo</a>
        <a className="btn nav-contact" href="#contato" style={{"padding":"8px 16px"}}>Contato</a>
      </div>
      <details className="mn" ref={detailsRef}>
        <summary aria-label="Abrir menu de navegação">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{"verticalAlign":"middle","marginRight":"4px"}}>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          Menu
        </summary>
        <div className="mnl">
          <a href="#inicio" onClick={handleLinkClick}>Início</a>
          <a href="#projetos" onClick={handleLinkClick}>Projetos</a>
          <a href="#tec" onClick={handleLinkClick}>Tecnologias</a>
          <a href="#sobre" onClick={handleLinkClick}>Sobre mim</a>
          <a href="#exp" onClick={handleLinkClick}>Experiência</a>
          <a href="#formacao" onClick={handleLinkClick}>Formação</a>
          <a href="#github" onClick={handleLinkClick}>GitHub</a>
          <a href="#contato" onClick={handleLinkClick}>Contato</a>
          <a href="/assets/0e09aa335874597a4e5f4bce264aab6d.pdf" target="_blank" rel="noopener" style={{"color":"#a78bfa","fontWeight":"600"}}>Currículo (PDF)</a>
        </div>
      </details>
    </header>
  );
}
