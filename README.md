# ELEVC • Sorteios

Uma plataforma web para participação em sorteios e acompanhamento de ganhadores.

## Descrição

Este projeto é um site estático para a ELEVC, oferecendo aos usuários a possibilidade de participar de sorteios, visualizar prêmios e acompanhar os últimos ganhadores em tempo real. O design é responsivo, com um menu hambúrguer para dispositivos móveis.

## Funcionalidades

- **Sorteios Ativos**: Lista de sorteios disponíveis para participação.
- **Últimos Ganhadores**: Visualização dos ganhadores recentes com detalhes dos prêmios.
- **Contador Regressivo**: Cronômetro para o próximo sorteio diário às 18h.
- **Transparência Legal**: Seção dedicada à conformidade e auditoria.
- **Perfil da Embaixadora**: Informações sobre a influenciadora associada.
- **Design Responsivo**: Layout adaptável para desktop e mobile, com menu hambúrguer no mobile.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização com variáveis CSS para temas consistentes.
- **JavaScript (ES6+)**: Funcionalidades interativas, como renderização dinâmica de listas e contador.

## Estrutura do Projeto

```
/
├── index.html              # Página principal
├── package.json            # Configurações do projeto (scripts e dependências)
├── README.md               # Este arquivo
├── src/
│   ├── assets/
│   │   └── images/         # Diretório para imagens (ex: logo ELEVC)
│   ├── css/
│   │   └── style.css       # Arquivo de estilos CSS
│   └── js/
│       └── script.js       # Scripts JavaScript para funcionalidades
└── public/
    └── index.html          # Versão pública ou build da página (possivelmente duplicada)
```

## Como Executar

Este é um projeto estático, então não requer servidor ou build complexo.

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` diretamente em qualquer navegador web moderno.
3. Para desenvolvimento, edite os arquivos em `src/` e recarregue a página.

## Desenvolvimento

- Use um editor como VS Code para editar HTML, CSS e JS.
- O projeto usa CSS Grid e Flexbox para layout responsivo.
- JavaScript manipula o DOM para renderizar listas dinâmicas e interações.

## Contribuição

Sinta-se à vontade para contribuir com melhorias. Abra issues ou pull requests no repositório.

## Licença

Este projeto está sob a licença ISC.