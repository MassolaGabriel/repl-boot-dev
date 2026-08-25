# Pokedex REPL

REPL interativo de linha de comando para uma Pokedex, desenvolvido em TypeScript com Node.js.

## Requisitos

- [Node.js](https://nodejs.org/) v22.15.0 (definido no `.nvmrc`)

## Instalação

```bash
npm install
```

## Uso

Para iniciar o REPL:

```bash
npm run dev
```

Ou compile e execute separadamente:

```bash
npm run build
npm start
```

### Comandos disponíveis

| Comando | Descrição                    |
| ------- | ---------------------------- |
| `help`  | Exibe a mensagem de ajuda    |
| `exit`  | Encerra a Pokedex            |

## Estrutura do projeto

```
src/
├── main.ts                       # Ponto de entrada da aplicação
├── repl.ts                       # Loop principal do REPL e limpeza de input
└── commands/
    ├── command.ts                # Tipo CLICommand
    ├── command_registry.ts       # Registro dos comandos disponíveis
    ├── command_help.ts           # Comando help
    └── command_exit.ts           # Comando exit
```

## Adicionando novos comandos

1. Crie um arquivo em `src/commands/` (ex.: `command_map.ts`) exportando uma função com a assinatura `(commands: Record<string, CLICommand>) => void`.
2. Registre o comando em `getCommands()` em `src/commands/command_registry.ts`.

## Testes

```bash
npm test
```

## Licença

ISC
