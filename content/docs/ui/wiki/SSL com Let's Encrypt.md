# Softwares necessários no servidor

- Git
```
$ sudo apt-get install git
```
- Apache 2
```
$ sudo apt-get install apache2
```

# Instalação do Let's Encrypt

```
$ git clone https://github.com/letsencrypt/letsencrypt
$ cd letsencrypt
$ ./letsencrypt-auto --help
```

# Utilização da Ferramenta
A ferramenta utiliza diversos plugins que podem ser usados para obter e instalar os certificados. Como estamos utilizando o plugin Apache, ele automatiza tanto a obtenção quanto a instalação e configuração do certificado no servidor:
```
$ cd letsencrypt
$ ./letsencrypt-auto --apache
```
ou:
```
$ cd letsencrypt
$ ./letsencrypt-auto --apache -d seusite.com
```
Logo em seguida é solicitado um email para recuperação da chave e se deseja redirecionar todo o tráfego para HTTPS.

# Renovação do Certificado
Para revogar um determinado certificado, entre na pasta do letsencrypt e utilize:
```
$ cd letsencrypt
$ sudo ./letsencrypt-auto --renew-by-default
```

# Fonte
https://letsencrypt.org/