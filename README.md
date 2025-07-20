# 🧱 Simple Proof-of-Work Blockchain

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen)](https://nodejs.org)
[![Status](https://img.shields.io/badge/status-learning-blue)]()
[![Made by Vinicius](https://img.shields.io/badge/made%20by-Vinicius%20Pereira-red)]()

> Projeto educacional para explorar e entender a arquitetura e os processos por trás de uma Blockchain com algoritmo de consenso Proof-of-Work, usando JavaScript e Node.js.

---

## 📚 Sumário

- [📦 Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🔐 Funcionamento da Blockchain](#-funcionamento-da-blockchain)
- [⛏️ Protocolo de Consenso: Proof-of-Work](#️-protocolo-de-consenso-proof-of-work)
- [🔄 Rede Peer-to-Peer](#-rede-peer-to-peer)
- [💳 Carteira e Transações](#-carteira-e-transações)
- [📡 API REST](#-api-rest)
- [🚀 Como Executar](#-como-executar)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

---

## 📦 Sobre o Projeto

Este é um protótipo funcional e didático de uma **Blockchain com algoritmo Proof-of-Work (PoW)** que inclui:

- Criação de blocos e conexão com blocos anteriores.
- Geração de hash criptografado usando SHA256.
- Bloco gênesis (bloco inicial).
- Criação de uma **API REST** para comunicação com a blockchain.
- Implementação de um **servidor P2P** para mineradores.
- Validação e sincronização de blockchains entre peers.
- Simulação de uma **carteira de transações**.
- Criação de objetos de transação e pool de transações (mempool).

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **Express** – API HTTP
- **crypto-js** – Criptografia SHA256
- **WebSocket** – Comunicação entre pares (P2P)

---

## 🏗️ Estrutura do Projeto

```bash
📁 blockchain/
 ┣ 📄 block.js             ← Classe do Bloco
 ┣ 📄 blockchain.js        ← Classe principal da Blockchain
 ┣ 📄 transaction.js       ← Modelo de transação
 ┣ 📄 transactionPool.js   ← Pool de transações pendentes
 ┣ 📄 wallet.js            ← Lógica da carteira
 ┣ 📄 p2pServer.js         ← Servidor Peer-to-Peer
 ┗ 📄 apiServer.js         ← Servidor da API REST


---

## 🔗 Funcionalidades

- ✅ Criação de blocos com dados encadeados por hash
- ✅ Bloco genesis fixo e validado
- ✅ Algoritmo de mineração Proof-of-Work
- ✅ Validação da blockchain (estrutura e integridade)
- ✅ Servidor HTTP com rotas de API
- ✅ Rede peer-to-peer para sincronização de blocos
- ✅ Carteiras com chaves públicas e privadas (criptografia)
- ✅ Transações assinadas com validação de saldo
- ✅ Pool de transações (mempool)
- ✅ Mineração de blocos contendo as transações pendentes
- ✅ Atualização automática da blockchain entre os peers

---

## 📡 API REST - Endpoints

| Método | Rota               | Descrição                                  |
|--------|--------------------|--------------------------------------------|
| GET    | `/blocks`          | Retorna todos os blocos da blockchain      |
| POST   | `/transact`        | Cria nova transação                        |
| GET    | `/transactions`    | Lista as transações pendentes na mempool  |
| GET    | `/mine`            | Inicia mineração de um novo bloco         |
| GET    | `/balance`         | Mostra o saldo atual da carteira local    |
| GET    | `/public-key`      | Retorna a chave pública da carteira local |

---

## 🧪 Como Executar Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/simple-blockchain.git
cd simple-blockchain


