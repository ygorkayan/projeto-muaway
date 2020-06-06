import React from "react";
import "./CSS/Download.css"

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Downloads
      </div>
      <div className="ml-3 mr-3">
        <table class="table downloads-table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Arquivo</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Link(s) para download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MuAwaY 2.0</td>
              <td>Instalador completo do novo cliente</td>
              <td>285 MB</td>
              <td>[opção 1] [opção 2] [opção 3]</td>
            </tr>
          </tbody>
        </table>




        
        <table class="table downloads-table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Arquivo</th>
              <th scope="col">Descrição</th>
              <th scope="col">Link(s) para download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DirectX 9.0c End-User Runtime</td>
              <td>Para quem está com problema no DirectX</td>
              <td>[opção 1]</td>
            </tr>
            <tr>
              <td>Microsoft Visual C++ 2013 (x86)</td>
              <td>Para quem está com erro no jogo</td>
              <td>[opção 1]</td>
            </tr>
            <tr>
              <td>Microsoft Visual C++ 2013 (x64)</td>
              <td>Para quem está com erro no jogo</td>
              <td>[opção 1]</td>
            </tr>
          </tbody>
        </table>


        <table class="table downloads-table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Mínimo requerido</th>
              <th scope="col">Recomendado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>
              <td>Single Core - 1.0 Ghz</td>
              <td>Dual Core 1.5 Ghz (ou superior)</td>
            </tr>
            <tr>
              <td>RAM (Memória)</td>
              <td>512MB</td>
              <td>1GB (ou mais)</td>
            </tr>
            <tr>
              <td>OS (Sistema operacional)</td>
              <td>Windows XP SP3 (ou superior)	</td>
              <td>Windows 7 (ou superior)</td>
            </tr>
            <tr>
              <td>Placa de vídeo</td>
              <td>64MB / 64 Bits</td>
              <td>128MB / 128 Bits (ou superior)</td>
            </tr>
          </tbody>
        </table>






      </div>
    </div>
  );
};
