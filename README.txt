LOWIS ZUSCHNITTPLANER - V40

GitHub Pages:
1. Alle Dateien aus diesem Ordner/ZIP in das bestehende Repository hochladen.
2. Gleichnamige Dateien ersetzen.
3. Enthalten: index.html, manifest.webmanifest, sw.js, icon.svg.

Cache-Verhalten:
- index.html wird online zuerst vom Server geladen; Cache nur als Offline-Fallback.
- Service Worker wird ohne HTTP-Cache registriert und aktiv auf Updates geprüft.

V40 - PDF-/Papieroptimierung:
- "Stueckliste CSV" wurde bei Platten- und Laengenzuschnitt zu "Stueckliste PDF".
- "Stueckliste PDF" erzeugt nur die kompakte Stueckliste als PDF.
- "PDF erstellen" erzeugt Stueckliste + Zuschnittplan in einer gemeinsamen PDF.
- Kurze Stuecklisten belegen keine eigene Seite mehr: Der erste Zuschnitt beginnt direkt darunter.
- Seiten werden fortlaufend gepackt, bevor eine neue A4-Seite erzeugt wird (Ziel: etwa 80-90 % Seitennutzung, soweit Geometrie/Lesbarkeit das zulassen).
- Laengenzuschnitt-Balken und Materialgruppen fliessen direkt unter die Stueckliste und weiter ueber die Seiten.
- Plattenzuschnitte werden dynamisch in den verbleibenden Seitenplatz skaliert und kombiniert.
- PDF bleibt immer hell und druckfreundlich, unabhaengig vom Darkmode.
- CSV-Erzeugung bleibt intern fuer die E-Mail-Anhaenge erhalten.
