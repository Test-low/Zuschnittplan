LOWIS ZUSCHNITTPLANER – V34

GitHub Pages:
1. Alle Dateien aus diesem Ordner/ZIP in das bestehende Repository hochladen.
2. Gleichnamige Dateien ersetzen.
3. Enthalten: index.html, manifest.webmanifest, sw.js, icon.svg.

Cache-Verhalten ab V31:
- Die index.html wird bei normalem Online-Aufruf immer zuerst vom Server geladen.
- Der Cache dient für die Seite nur noch als Offline-Fallback.
- Der Service Worker wird ohne HTTP-Cache registriert und bei Seitenstart auf Updates geprüft.

Neu in V34:
- Im Projektmodus des Längenzuschnitts ist die Grenze Kundenrest/Lagerrest frei einstellbar.
- Standardwert bleibt 200 cm.
- Die Grenze wird pro lokal gespeichertem Projekt mitgespeichert und beim Laden wiederhergestellt.
- Die Projektgrenze gilt für KVH 1302 cm und BSH 1202 cm; andere Rohlängen bleiben Komplettverkauf.
- Die gewählte Grenze wird in Ergebnis, CSV, PDF und E-Mail-Anfrage übernommen.
