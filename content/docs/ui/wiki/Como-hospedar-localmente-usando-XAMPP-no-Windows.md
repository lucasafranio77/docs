#Como hospedar localmente o site da Infocorp no Windows usando XAMPP

* 1-Baixe e instale o XAMPP

https://www.apachefriends.org/pt_br/index.html

* 2-Acesse o diretório onde está instalado o XAMPP e edite o arquivo httpd-vhosts.conf

O arquivo pode ser encontrado em: C:\xampp\apache\conf\extra\httpd-vhosts.conf

* 3- No final do arquivo httpd-vhosts.conf insira o texto abaixo. 

```
<VirtualHost *:80>
    DocumentRoot "C:/Projetos/infocorp/public"
    ServerAdmin admin@localhost
    ServerName infocorp.local

    <Directory "C:/Projetos/infocorp/public">
	Options Indexes FollowSymLinks


	AllowOverride all


	Require local

    </Directory>
</VirtualHost>
```

* 4-Onde ta escrito “C:/Projetos/infocorp/public” coloque o diretório onde o projeto do site da Infocorp foi clonado . exemplo: sitedainfocorp/public. “infocorp.local” é o endereço que vc vai digitar no navegador para acessar o site.

* 5-Edite o arquivo hosts localizado em:

C:\Windows\System32\drivers\etc\hosts

* 6-No final do arquivo adicione  “127.0.0.1 infocorp.local”

* 7-Abra o navegador e acesse “infocorp.local”, então o site da Infocorp deve aparecer.

