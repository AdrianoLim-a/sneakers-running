

## Descrição do Projeto

Sneakers Running é um projeto desenvolvido para criar uma experiência online interativa para a venda de tênis esportivos. O sistema oferece funcionalidades como catálogo de produtos, carrinho de compras, cadastro de usuários, recuperação de senha via e-mail e salvamento de dados de compras em um banco de dados. 

Este projeto utiliza tecnologias modernas como AngularJS no frontend e Spring Boot no backend.

---

## Objetivos

- Oferecer um catálogo dinâmico de tênis esportivos.
- Permitir que os usuários gerenciem um carrinho de compras e finalizem pedidos.
- Facilitar o cadastro e login de usuários.
- Implementar recuperação de senha com envio de e-mail.
- Garantir o armazenamento seguro de dados de compra em um banco de dados.

---

## Funcionalidades do Sistema

- **Catálogo de Produtos:** Exibição de todos os modelos disponíveis, com detalhes como preço e descrição.
- **Carrinho de Compras:** Adicione produtos, visualize o total e finalize a compra.
- **Cadastro de Usuários:** Registre-se, faça login e acompanhe suas compras.
- **Esqueci a Senha:** Recuperação de acesso por e-mail.
- **Banco de Dados:** Salvamento seguro de informações de pedidos e usuários.

---

## Tecnologias Utilizadas

### Frontend
- **AngularJS:** Framework para desenvolvimento de interfaces dinâmicas.
- **TypeScript:** Linguagem para desenvolvimento seguro e escalável.
- **HTML/CSS e Bootstrap:** Estilização responsiva e atraente.

### Backend
- **Java:** Linguagem para desenvolvimento do backend.
- **Spring Boot:** Framework para construção de APIs RESTful.

---

## Estrutura do Projeto

- **frontend/:** Código-fonte do frontend desenvolvido em AngularJS.
- **backend/:** Código-fonte do backend desenvolvido em Java.

---

## Configuração do Ambiente

### 1. Clonar o Repositório
Clone o repositório para o seu ambiente local:
```bash
git clone https://github.com/AdrianoLim-a/Repositorio_web.git
```

2. Configurar o Frontend (AngularJS)
Instale o Angular CLI, caso ainda não tenha:
bash
Copiar código
```npm install -g @angular/cli```
Navegue até a pasta do frontend e instale as dependências:
bash
Copiar código


```cd frontend```



```npm install```



3. Configurar o Backend (Java)
Importe o projeto backend em sua IDE favorita (IntelliJ, Eclipse, etc.).
Configure as variáveis de ambiente e o banco de dados de acordo com o arquivo application.properties.

---

4. Executar o Projeto
Frontend
No diretório do frontend, execute:

bash 

Copiar código

```ng serve```



Acesse o frontend no navegador através do endereço: http://localhost:4200.

Backend
Execute o backend pela sua IDE ou terminal:

bash

Copiar código

```mvn spring-boot:run```

