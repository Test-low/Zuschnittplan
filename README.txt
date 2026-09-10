LOWIS ZUSCHNITTPLANER – V31

GitHub Pages:
1. Alle Dateien aus diesem Ordner/ZIP in das bestehende Repository hochladen.
2. Gleichnamige Dateien ersetzen.
3. Enthalten: index.html, manifest.webmanifest, sw.js, icon.svg.

Cache-Verhalten ab V31:
- Die index.html wird bei normalem Online-Aufruf immer zuerst vom Server geladen.
- Der Cache dient für die Seite nur noch als Offline-Fallback.
- Der Service Worker wird ohne HTTP-Cache registriert und bei Seitenstart auf Updates geprüft.
- Dadurch sollen neue GitHub-Versionen nach dem Deployment ohne wiederholtes Strg+F5 erscheinen.

Hinweis beim einmaligen Wechsel von V30 auf V31:
Ein bereits aktiver alter V30-Service-Worker kann die erste normale Aktualisierung noch abfangen.
Nach dem Hochladen V31 einmal Strg+F5 verwenden oder den alten Service Worker abmelden. Danach greift die neue Update-Strategie.

V32: E-Mail-Anfrage nun auch fuer Laengenzuschnitt inkl. PDF und CSV.
