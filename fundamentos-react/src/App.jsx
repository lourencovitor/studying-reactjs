import React from "react";

import Primeiro from "./components/basicos/Primeiros";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

import "./App.css";

export default () => (
  <div className="App">
    <h1>Fundamento React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega" color="#FA8072">
        <Mega qtde={8} />
      </Card>
      <Card titulo="#12 - Contador" color="#00BFFF">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#6A5ACD">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8B3A3A">
        <IndiretaPai />
      </Card>
      <Card titulo="#9 - Comunicação Direta" color="#32CD32">
        <DiretaPai />
      </Card>
      <Card titulo="#8 - Renderização condicional" color="#FF4040">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Vitor" }} />
        {/* <UsuarioInfo usuario={{ email: "Vitor@teste.com" }} /> */}
      </Card>
      <Card titulo="#7 - Repetição Produtos" color="#87CEEB">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#6 - Repetição" color="#00CDCD">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#5 - Componente com Filhos" color="#FF69B4">
        <Familia sobrenome="Santos">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Lucas" />
        </Familia>
      </Card>
      <Card titulo="#4 - Aleatorio" color="	#836FFF">
        <Aleatorio min={1} max={8} />
      </Card>
      <Card titulo="#3 - Fragmentos" color="#1E90FF">
        <Fragmento />
      </Card>
      <Card titulo="#2 - Com parametros" color="#20B2AA">
        <ComParametro titulo="Situação do aluno" aluno="Vitor" nota={9.5} />
      </Card>
      <Card titulo="#1 - Primeiro Component" color="#90EE90">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
