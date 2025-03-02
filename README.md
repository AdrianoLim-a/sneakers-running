
# 🏃 Sneakers Running

Sneakers Running é um projeto desenvolvido para criar uma experiência online interativa para a venda de tênis esportivos. O sistema oferece funcionalidades como catálogo de produtos, carrinho de compras, cadastro de usuários, recuperação de senha via e-mail e salvamento de dados de compras em um banco de dados.

Este projeto utiliza tecnologias modernas como **AngularJS** no frontend e **Spring Boot** no backend.

---

## 🎯 Objetivos

✅ Oferecer um catálogo dinâmico de tênis esportivos.  
✅ Permitir que os usuários gerenciem um carrinho de compras e finalizem pedidos.  
✅ Facilitar o cadastro e login de usuários.  
✅ Implementar recuperação de senha com envio de e-mail.  
✅ Garantir o armazenamento seguro de dados de compra em um banco de dados.  

---

## 🔥 Funcionalidades do Sistema

- 🏷️ **Catálogo de Produtos:** Exibição de todos os modelos disponíveis, com detalhes como preço e descrição.  
- 🛒 **Carrinho de Compras:** Adicione produtos, visualize o total e finalize a compra.  
- 👤 **Cadastro de Usuários:** Registre-se, faça login e acompanhe suas compras.  
- 🔐 **Esqueci a Senha:** Recuperação de acesso por e-mail.  
- 💾 **Banco de Dados:** Salvamento seguro de informações de pedidos e usuários.  

---

## 🚀 Tecnologias Utilizadas

### Frontend

[![AngularJS](https://img.shields.io/badge/AngularJS-DD0031?style=for-the-badge&logo=angularjs&logoColor=white)](https://angular.io/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)  

### Backend

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/)  
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)  

---

## 📂 Estrutura do Projeto

```
/sneakers-running
│-- frontend/  # Código-fonte do frontend desenvolvido em AngularJS
│-- backend/   # Código-fonte do backend desenvolvido em Java
```

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Instalar o Node.js

Certifique-se de que o **Node.js** está instalado. Caso contrário, faça o download:

🔗 [Baixar Node.js](https://nodejs.org/)

### 2️⃣ Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/AdrianoLim-a/Repositorio_web.git
```

### 3️⃣ Configurar o Frontend (AngularJS)

Instale o Angular CLI, caso ainda não tenha:

```bash
npm install -g @angular/cli
```

Navegue até a pasta do frontend e instale as dependências:

```bash
cd frontend
npm install
```

### 4️⃣ Configurar o Backend (Java)

Importe o projeto backend em sua IDE favorita (**IntelliJ, Eclipse, etc.**).  
Configure as variáveis de ambiente e o banco de dados conforme o arquivo **application.properties**.

---

## 🗄️ Configuração do Banco de Dados (MySQL)

Crie o banco de dados MySQL utilizando o MySQL Workbench 8.0:

```sql
CREATE DATABASE loja;
```

---

## 🚀 Executando o Projeto

### 🌐 Iniciar o Frontend

No diretório do frontend, execute:

```bash
ng serve
```

Acesse o frontend no navegador: [http://localhost:4200](http://localhost:4200)

### 💻 Iniciar o Backend

Execute o backend pela sua IDE ou terminal:

```bash
mvn spring-boot:run
```

---

## 🏪 Adicionando Produtos ao Estoque

Após configurar o backend e o banco de dados, é necessário adicionar produtos ao estoque. Para isso, siga os passos abaixo:

1️⃣ Acesse o banco de dados **loja**.  
2️⃣ Insira os produtos manualmente via SQL ou utilizando uma API criada no backend.

Insira os produtos manualmente via SQL ou utilizando uma API criada no backend.

Exemplo de inserção manual via SQL:

```bash
INSERT INTO produto(codigo, nome, descritivo, valor, valor_Promo, estoque, destaque) VALUES
(1, 'Tenis Sport', 'O Tênis de Corrida oferece conforto e desempenho para suas corridas. Com amortecimento responsivo e design leve, é perfeito para corredores em busca de performance e conforto.', 100, 90, 1, 1),
(2, 'Tenis Air Force', 'O Tênis Air Force Preto combina estilo e conforto em um design clássico. Feito com material durável e uma sola resistente, é perfeito para qualquer ocasião. Seja casual ou sofisticado, este tênis é uma escolha      elegante para o dia a dia.', 500, 450, 10, 1),
(3, 'Tenis Original', 'O Tênis Adidas Originals Gazelle Amarelo é uma escolha vibrante e elegante para quem busca estilo urbano. Com seu design clássico e conforto duradouro, é perfeito para destacar-se com autenticidade e             
modernidade.', 300, 290, 10, 1),
(4, 'Tenis Luma', 'O Tênis Puma Suede é um clássico atemporal. Com seu design icônico e conforto duradouro, é uma escolha elegante para qualquer look casual. Feito com materiais de qualidade, oferece estilo e versatilidade para o dia a    dia.', 250, 290, 10, 1),
(5, 'Vans Old School', 'O Tênis Vans Old Skool é um clássico da marca. Com seu design icônico e conforto, é perfeito para qualquer look casual. Feito com materiais de qualidade, oferece estilo e versatilidade para o dia a dia.', 150,      140, 5, 1),
(6, 'Tenis Mizuno Casual City', 'O Tênis Mizuno Casual City é uma escolha elegante para quem busca estilo urbano. Com seu design moderno e conforto duradouro, é perfeito para destacar-se com autenticidade e modernidade.', 200, 190, 8,      1),
(7, 'Nike SB Chronos', 'O Tênis Nike SB Chronos é uma escolha vibrante e elegante para quem busca estilo urbano. Com seu design moderno e conforto, é perfeito para destacar-se com autenticidade e modernidade.', 180, 170, 6, 1),
(8, 'Adidas Lite Racer', 'O Tênis Adidas Lite Racer é um clássico da marca. Com seu design icônico e conforto, é perfeito para qualquer look casual. Feito com materiais de qualidade, oferece estilo e versatilidade', 200, 210, 7, 1),
(9, 'Converse All Star', 'O Tênis Converse All Star é um clássico atemporal. Com seu design icônico e conforto duradouro, é uma escolha versátil para qualquer look casual. Feito com materiais de qualidade, oferece estilo e       
personalidade para o dia a dia.', 180, 170, 8, 1);
```

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto! 🚀  
Caso tenha sugestões ou encontre problemas, abra uma **issue** ou envie um **pull request**. 

## 📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Adriano%20Lima-blue)](https://www.linkedin.com/in/adriano-lima-da-silva-abbb6511a/)

---

💡 Desenvolvido por Adriano Lima 😊

