A ideia desse tutorial é dar uma boa ideia de **como escrever uma wiki** e a sua importância.

É importante se documentar para que possa ter uma compreensão e entendimento do projeto, então busque escrever de uma maneira que qualquer pessoa da equipe possa compreender o que você queira falar.

A documentação usada para fazer a wiki é em [Markdown](https://gitlab.com/help/user/markdown), e é interessante que buscasse escrever usando todos as funções que o markdown dá.

Para você clonar e acessar a wiki do projeto, você seguinte passo, copia o https do projeto e adiciona **.wiki** no final:

```
link do projeto é esse:
https://gitlab.com/infocorp/wiki.git

e foi adicionado o .wiki no final dele e assim você acessará somente a wiki daquele projeto, segue o exemplo abaixo: 

git clone https://gitlab.com/infocorp/wiki.wiki.git
```

Para adicionar os arquivos no repositório, use :
```
git add .
```
Commite os códigos com as suas alterações e as descrições dela :
```
git commit -m 'Descrição do que o commit faz'
```

Dê o comando abaixo para que possa ser enviado as adições/alterações para o repositório
```
git push
```
E caso tenha alguma alteração sido feita no repositório, e você queira atualizar no seu diretório local, use o comando abaixo
```
git pull
```


### **Links Uteis**

* [Regras do Markdown - GitLab](https://gitlab.com/help/user/markdown)
* [Write the Docs - boas práticas para se escrever uma boa documentação](http://www.writethedocs.org/guide/)