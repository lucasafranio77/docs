# Softwares necessários no servidor

- Java JDK 8
```
$ sudo apt-get install openjdk-8-jdk
```

# Instalação do Jenkins

```
$ wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
$ sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
$ sudo apt-get update
$ sudo apt-get install jenkins
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