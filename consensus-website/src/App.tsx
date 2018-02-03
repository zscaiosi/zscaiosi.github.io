import * as React from 'react';
import './App.css';

const logo = require('./volunteer.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CONSENSUS</h1>
          <h4 className="sub-title">Uma nova forma de assembléia</h4>
        </header>
        <section className="centered">
          <article className="description">
            <p className="p-text">
              Consensus é um projeto <i> <a target="_blank" href="https://opensource.org/about"> Open Source </a></i> licenciado sob a <i title="GNU"> <a target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html">GNU General Public License</a> </i> destinado às pessoas que possam e queiram contribuir para uma nova forma de gerar debates, assembléias, reuniões e deliberações.  
            </p>
            <p className="p-text">
              Uma das maiores dificuldades em realizar assembléias de pessoas para deliberar ou debater determinado assunto é o esforço logístico que deve ser empreendido, quanto maior o número de pessoas, maior é esse esforço. <br/>
              Muitas vezes não só o esforço logístico é necessário, mas também um esforço de organização e gestão de conflitos durante a assembléia, pois frequentemente os participantes não respeitam o tempo de fala dos outros e/ou não conseguem manter suas falas conectadas com a pauta proposta.
            </p>
          </article>
        </section>
        <section className="centered">
          <p className="p-text">
            A plataforma pretende permitir que um usuário crie uma sala, envie o link para os participantes e então configure as regras da assembléia como quiser; os participantes podem, durante seu tempo de fala, expor suas argumentações a respeito de cada tópico da pauta.<br/>
            Por fim, os participantes votam nas falas mais relevantes e então pode-se ter uma deliberação a partir dos resultados das argumentações.
          </p>
        </section>
        <section className="centered">
          <p className="p-text">
            Para participar das Sprints do projeto acesse: <i> <a target="_blank" href="https://docs.google.com/spreadsheets/d/19Uyy6afp8vrsGuWNZYCBTnUm_rYU2iD3beHBg0xfgEU/edit?usp=sharing">Google Sheets</a></i>.
          </p>
        </section>
        <aside id="menu-area">
          <ul className="nav-menu">
            <li>Apresentação</li>
            <li>Código fonte</li>
            <li>Contato</li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;