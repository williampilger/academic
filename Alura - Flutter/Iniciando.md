# Curso de Flutter - Alura

Para iniciarmos, é necessário instalar o Flutter e uma IDE compatível, para isso veja a [página oficial do flutter](flutter.dev).

## Instalando o Flutter

No meu caso, estou usando o **Ubuntu 20.04 LTS**, e utilizarei o Visual Studio Code. Para instalar o flutter no linux, usei:

> sudo snap install flutter --classic

Após isso concluído, ao executar o flutter pela primeira vez, será baixado o programa, efetivamente, o que pode demorar um pouco dependendo da internet.
Você pode testar a instalação digitando:

> flutter doctor

## Instalando uma IDE

Instale uma das IDEs compatíveis:
- [Android Studio](https://developer.android.com/studio/?gclid=CjwKCAjwnf7qBRAtEiwAseBO_BobM1iO9FF-eUZvu8v2W8sswy17Xpowwpl2dfQ1kWxA-0tX02yuHhoCeb0QAvD_BwE)
- [Visual Studio Code](https://code.visualstudio.com/)
- [IntelliJ](https://www.jetbrains.com/idea/download/)

## Criando um emulador

Siga as [instruções disponíveis na página do flutter](https://developer.android.com/studio/run/managing-avds#createavd);

Ou crie rapidamente um emulador genérico usando o comando abaixo:

> flutter emulators --create [--name NOME_DO_EMULADOR]

## Criando o primeiro projeto

Depois de tudo instalado, abra um terminal, e:

- navegue até o diretório onde deseja salvar seu novo projeto;
- Crie o projeto usando `flutter create NOME_DO_PROJETO`. Isso pode demorar um pouco.

## Executando o projeto teste

Imediatamente após criar, já é possível executar esta aplicação, mas para isso é necessário ter um **emulador rodando** ou um **dispositivo android conectado via depuração USB**.
Para executar seu emulador, criado na etapa anterior, basta digitar `flutter emulators --launch <emulador_id>`.

Para executar a aplicação, use:

> cd pasta_do_seu_projeto

> flutter run

**lembre-se de estar no diretório da aplicação criada para que isso funcione.**
