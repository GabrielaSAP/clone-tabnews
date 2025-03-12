# clone-tabnews
Projeto focado em estudar técnicas mais avançadas de programação para chegar à senioridade, mas não deixando de ser uma colinha legal também.

Arrumarei esse README como se fosse meu diário tech. Um passo a passo de como esse repositório está sendo criado, e o que estou aprendendo durante o desenvolvimento dele.

## Dia 1 - Docker
Diferenças entre **Hyper-V** e **WSL** para Windows:
- **Hyper-V:** tecnologia de máquina virtual onde permite a criação de várias máquinas virtuais com diferentes sistemas operacionais (Windows ou Linux), incluindo o gerenciamento manual dos recursos de hardware dessas máquinas;
- **WSL:** tecnologia de máquina virtual onde roda somente uma máquina virtual com o kernel do Linux e o gerenciamento dos recursos de hardware é feito automaticamente e abstraído do usuário (mais simples).

Diferenças entre **Docker Engine** e **Docker Desktop**:
- **Docker Engine:** criação, execução e gerenciamento de contêineres via linha de comando (cmd);
- **Docker Desktop:** Tem o Docker Engine + interface gráfica para facilitar as configurações, mas acaba se tornando mais pesado.

## Dias 1 e 2 - Criando um ambiente Linux e configurando Docker, Git e WSL VSCode no Ubuntu para rodar este projeto por lá
Já havia usado o Docker Desktop antes, mas fazer tudo via terminal e em um ambiente separado do meu pessoal foi muito satisfatório. Quanto mais aprendo, menos tenho necessidade de usar interfaces para trabalhar.

## Dia 2 - Aprendendo mais sobre Node.js + instalando dependências
Sempre usei os comandos do node sem ter tanta noção do que ele fazia até hoje. A criação e conhecimento do arquivo **.nvmrc** vai resolver muitos problemas de versão de node que já enfrentei ao longo da minha carreira.

Também foi instalado as dependências next, react e react-dom, além de incluir o node_modules no gitignore