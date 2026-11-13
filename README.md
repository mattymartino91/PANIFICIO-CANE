# Panificio Pasticceria Cane

Sito statico in italiano, pronto per GitHub Pages.

## Anteprima

Estrai il pacchetto e apri `index.html` nel browser. Per una prova via HTTP, dalla cartella del sito esegui `python3 -m http.server 8000` e visita `http://localhost:8000`. Per la mappa e i font serve una connessione.

## Pubblicazione su GitHub Pages

1. Carica il contenuto del pacchetto nella radice del repository GitHub. Mantieni la cartella `assets` e i nomi dei file.
2. In **Settings → Pages → Build and deployment**, scegli **Deploy from a branch**.
3. Seleziona il branch che contiene i file, ad esempio `main`, scegli **/(root)** e salva.
4. Attendi che GitHub mostri l'indirizzo del sito nella stessa pagina.

[Guida di GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Aggiornare il catalogo

- In `catalogo.js`, inserisci l'indirizzo tra le virgolette di `emailCane`. Il sito lo mostrerà come link cliccabile.
- Compila il campo `descrizione` di ogni scheda quando hai il testo definitivo.
- Salva le nuove foto in `assets` e aggiungile alla lista `foto` della scheda, con il nome del file in `file` e una breve descrizione dell'immagine in `alt`. La prima foto sarà la copertina.
- Per aggiungere un prodotto, duplica una scheda nella categoria corrispondente e aggiorna nome, descrizione e foto.
