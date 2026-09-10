LOWIS PLATTEN-ZUSCHNITTPLANER – V16 WEB-APP

Warum die Knöpfe auf dem iPhone im ChatGPT-/Datei-Fenster nicht reagieren
=========================================================================
Das ist keine normale Safari-Webseite, sondern eine Dateivorschau (Quick Look /
In-App-Vorschau). Dort werden lokale HTML-Dateien auf iPhone/iPad nicht zuverlässig
als vollständige JavaScript-Webanwendung ausgeführt.

Deshalb ist die universelle Lösung:
Die Anwendung als normale statische HTTPS-Webseite bereitstellen.

V16 ist genau dafür vorbereitet.

Benötigt keinen PHP-Server
==========================
Für den eigentlichen Schnittplaner werden nur statische Dateien benötigt:

- index.html
- manifest.webmanifest
- sw.js
- icon.svg

Diese vier Dateien können in einen beliebigen HTTPS-Webspace gelegt werden.

iPhone / iPad
=============
1. HTTPS-Link in Safari öffnen.
2. Alle Buttons funktionieren als normale Webanwendung.
3. Safari -> Teilen -> „Zum Home-Bildschirm“.
4. Danach erscheint der Zuschnittplaner als App-Symbol auf dem Gerät.
5. Nach dem ersten Laden kann die App durch den Service Worker auch offline
   weiter geöffnet werden.

Android / Chrome
================
Bei unterstützten Browsern erscheint eine Installationsmöglichkeit.
Danach kann der Planer ebenfalls wie eine App gestartet werden.

Windows / macOS
===============
Normal im Browser verwenden oder – je nach Browser – als Web-App installieren.

Zusätzlich neu
==============
- Der aktuelle Zuschnitt-Entwurf wird automatisch lokal auf dem jeweiligen
  Gerät gespeichert (localStorage).
- Nach Neuladen/Schließen bleiben Materialwahl und Zuschnittpositionen auf
  diesem Gerät erhalten.
- Keine Cloud-Synchronisation; die Daten verlassen das Gerät dadurch nicht.

Wichtig
=======
Der ChatGPT-Sandbox-Link selbst ist KEIN Webhosting. Für einen realen iPhone-Test
muss der entpackte V16-Ordner auf einem normalen HTTPS-Webspace liegen.

Der Schnittplaner benötigt dafür keine Datenbank und kein PHP.
