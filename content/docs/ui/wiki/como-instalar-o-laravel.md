Como instalar o Laravel

1-  Primeiramente precisa ter instalados os seguintes componentes:

*  PHP >= 7.1.3
*  OpenSSL PHP Extension
*  PDO PHP Extension
*  Mbstring PHP Extension
*  Tokenizer PHP Extension
*  XML PHP Extension
*  Ctype PHP Extension
*  JSON PHP Extension

Caso use o XAMPP já deve ter tudo isso.

2-  Instalar o Composer, disponível em: https://getcomposer.org

Caso queira criar um novo projeto, use o comando `composer create-project --prefer-dist laravel/laravel blog` ou `laravel new blog`. Onde está escrito "blog" pode colocar o nome do sei projeto.
Se quiser continuar um um projeto Laravel, siga os seguintes passos:

1.  Clonar o Projeto
2.  Execute o comando `composer install` na pasta do projeto.
3.  Certifique-se de ter o arquivo de configuração .env no seu projeto. Caso não tenha renomeie o arquivo .env.example para .env.
     Poder ser preciso editar o arquivo .env para o banco funcionar.


Para mais informações acesse https://laravel.com/docs/5.6.


