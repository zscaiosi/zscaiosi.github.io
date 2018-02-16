import * as React from 'react';
import './App.css';
import WhitePaper from './components/WhitePaperComponent';
import UML from './components/UMLComponent';

const logo = require('./assets/volunteer.svg');

class App extends React.Component {
  private paragraph1 = 'Se faz necessária, e talvez a única possível no momento, uma solução que utilize o conjunto de tecnologias web para possibilitar que um grupo de pessoas se reúnam remotamente em torno de uma pauta, tenham tempos de exposição de idéias equânimes e limitados e possam decidir quais exposições foram melhor elaboradas, para que ao fim da discussão possa ser criado um consenso em torno do tema tratado. É exatamente essa solução que o projeto Consensus oferece.';
  private paragraph2 = 'Para alcançar a sua finalidade o projeto deverá ser desenvolvido a partir de uma linguagem de programação e uma plataforma que comporte alta concorrência de processos, escalabilidade, fácil manutenção de código e comunicação em tempo real entre os usuários.s Para que os todos os requisitos sejam atingidos a escolha se deu pela linguagem de programação interpretada JavaScript e sua plataforma de execução em servidores Node.js, isso implica em utilizar uma variada gama de frameworks e bibliotecas Open Source que existem tanto para JavaScript quanto para Node.js.';

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CONSENSUS</h1>
          <h4 className="sub-title">Uma nova forma de assembléia</h4>
        </header>
        <section className="main-section">

          <section className="column-section">
          
            <section className="centered">
              <article className="description">
                <p className="p-text">
                  Consensus é um projeto <i> <a target="_blank" href="https://opensource.org/about"> Open Source </a></i> licenciado sob a <i title="GNU"> <a target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html">GNU General Public License</a> </i> destinado às pessoas que possam e queiram contribuir para uma nova forma de gerar debates, assembléias, reuniões e deliberações.  
                </p>
                <p className="p-text">
                  Uma das maiores barreiras encontradas para realizar assembléias deliberativas ou consultivas, debates de idéias e reuniões entre pessoas de uma maneira que seja efetiva, eficaz e eficiente é o esforço necessário para reunir, deslocar, e acomodar muitas pessoas de uma única vez para discutir um assunto de forma organizada e convergente, tanto no que tange a pauta quanto o que tange o fluxo das falas em torno dessa pauta.
                  Principalmente em assembléias deliberativas, onde o quorum e a assertividade são essenciais para que haja um desfecho convergente com a vontade geral dos interessados, as formas atuais de gestão tanto da logística quanto do tempo são extremamente limitantes, fazendo com que muitas vezes discussões importantes simplesmente não aconteçam.
                </p>
              </article>
            </section>

            <div className="whitepaper-container">
              <section className="centered">
                <WhitePaper title="Objetivo" paragraph={this.paragraph1} />
              </section>
              <section className="centered">
                <WhitePaper title="Requisitos" paragraph={this.paragraph2} />
              </section>
            </div>

            <section className="centered">
              <p className="p-text">
                O Diagrama de Estado dá uma idéia de como é um fluxo normal da aplicação.
              </p>
            </section>

            <section className="centered">
              <UML />
            </section>

            <section className="centered">
              <div className="spaced-icons">
                <span className="link-icon">
                  <i className="fab fa-github fa-5x"></i>
                  <a href="https://github.com/zscaiosi/consensus-frontend" target="_blank" >Front-End</a>
                </span>
                <span className="link-icon">
                  <i className="fab fa-github fa-5x"></i>
                  <a href="https://github.com/zscaiosi/consensus-backend" target="_blank" >Back-End</a>
                </span>
                <span className="link-icon">
                  <i className="far fa-compass fa-5x"></i>
                  <a href="https://docs.google.com/spreadsheets/d/19Uyy6afp8vrsGuWNZYCBTnUm_rYU2iD3beHBg0xfgEU/edit?usp=sharing" target="_blank" >SCRUM</a>
                </span>
              </div>
            </section>

          </section>

        </section>
        <div className="footer">
          <p>Autor: <a href="https://www.linkedin.com/in/zscaiosisaldanha" target="_blank">Caio Saldanha</a> </p>
          <p>Licensa: <a target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html">GNU General Public License</a> </p>
        </div>
      </div>
    );
  }
}

export default App;