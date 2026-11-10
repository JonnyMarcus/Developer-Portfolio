import React from "react";

export default function Portfolios() {
  return (
    <section id="portifolios">
      <div className="row" style={{ marginBottom: "14px" }}>
        <h2 style={{ margin: "0", fontSize: "22px" }}>
          <em
            style={{
              fontStyle: "normal",
              color: "#a78bfa",
              marginRight: "10px",
            }}
          >
            09.
          </em>
          Portfólios
        </h2>
        <a
          href="https://github.com/JonnyMarcus?tab=repositories"
          style={{ color: "#fff", fontSize: "13px" }}
        >
          Ver todos no GitHub
        </a>
      </div>
      <div className="grid g2" style={{ gap: "20px" }}>
        <article className="card">
          <img
            src="/assets/49445cfbac9c1896d01403995dd8f0a1.gif"
            alt="Explorador de pastas por disciplina e código C sendo compilado"
            style={{
              width: "100%",
              height: "170px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h2 style={{ fontSize: "18px" }}>Portfólio da Faculdade</h2>
          <p>Reúne trabalhos e exercícios da minha graduação na UNIFEI.</p>
          <div className="chips">
            <span className="chip">C</span>
            <span className="chip">UNIFEI</span>
          </div>
          <div className="row">
            <a
              href="https://github.com/JonnyMarcus/Portifolio_Faculdade"
              style={{ color: "#cfc8ee" }}
            >
              Ver no GitHub
            </a>
            <a
              className="btn"
              href="https://github.com/JonnyMarcus/Portifolio_Faculdade"
              style={{ padding: "8px 16px" }}
            >
              Acessar
            </a>
          </div>
        </article>
        <article className="card">
          <img
            src="/assets/5a8e559f4ede95268d04fe33c49d7a0a.gif"
            alt="Página web sendo montada nas cores da byron"
            style={{
              width: "100%",
              height: "170px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h2 style={{ fontSize: "18px" }}>Portfólio byron</h2>
          <p>Meu portfólio como membro da byron, empresa júnior da UNIFEI.</p>
          <div className="chips">
            <span className="chip">HTML</span>
            <span className="chip">byron</span>
          </div>
          <div className="row">
            <a
              href="https://github.com/JonnyMarcus/Portifolio_byron"
              style={{ color: "#cfc8ee" }}
            >
              Ver no GitHub
            </a>
            <a
              className="btn"
              href="https://github.com/JonnyMarcus/Portifolio_byron"
              style={{ padding: "8px 16px" }}
            >
              Acessar
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
