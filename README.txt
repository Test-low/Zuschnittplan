LOWIS Zuschnittplaner V52

V52: Einzelmaterial im Längenzuschnitt etwas kompakter dargestellt: geringere Abstände, kompaktere Rohlängen-Auswahl, Materialvorschau und Restgrenze nebeneinander auf breiten Bildschirmen sowie flachere Fertiglängen-Tabelle. Projektmodus und Berechnungslogik bleiben unverändert.
V51: Drei auswählbare Optimierungsarten im Plattenzuschnitt: Materialoptimal, Schnell sägen und Serienfreundlich. Alle Modi minimieren zuerst zwingend die Anzahl ganzer Platten. Materialoptimal bevorzugt danach große zusammenhängende Restflächen, Schnell sägen möglichst wenige Streifen und Sägeeinstellungen, Serienfreundlich möglichst viele identische Plattenzuschnitte. Furnierrichtung bleibt in allen Modi zwingend und die gewählte Optimierung wird im Browser-Entwurf sowie in bearbeitbaren PDF-Plänen gespeichert.

LOWIS Zuschnittplaner V49

V49: Projektmodus wie Einzelmaterial aufgebaut: Planname + PDF-Plan laden statt lokaler Projektverwaltung. Automatischer Browser-Entwurf bleibt als Schutz bestehen. PDFs verwenden echte deutsche Umlaute und die Materialübersicht lautet „Lagerlänge … | Stückzahl … | Fertigteile …“. Einzelne Zuschnittmuster heißen „Einzelstange“ bzw. „2× identisch“. Bearbeitbare PDF-Pläne bleiben erhalten.
V47: Deutlichere Materialtrennung im Projekt-Längenzuschnitt-PDF. Jeder neue Materialtyp erhält einen breiten Materialbalken, stärkere Trennlinien und Material/Dimension werden an jedem Rohstück wiederholt.

LOWIS ZUSCHNITTPLANER - V44

GitHub Pages:
1. Alle Dateien aus diesem Ordner/ZIP in das bestehende Repository hochladen.
2. Gleichnamige Dateien ersetzen.
3. Enthalten: index.html, manifest.webmanifest, sw.js, icon.svg.

Cache-Verhalten:
- index.html wird online zuerst vom Server geladen; Cache nur als Offline-Fallback.
- Service Worker wird ohne HTTP-Cache registriert und aktiv auf Updates geprüft.

V44 - PDF-/Papieroptimierung:
- "Stueckliste CSV" wurde bei Platten- und Laengenzuschnitt zu "Stueckliste PDF".
- "Stueckliste PDF" erzeugt nur die kompakte Stueckliste als PDF.
- "PDF erstellen" erzeugt Stueckliste + Zuschnittplan in einer gemeinsamen PDF.
- Kurze Stuecklisten belegen keine eigene Seite mehr: Der erste Zuschnitt beginnt direkt darunter.
- Seiten werden fortlaufend gepackt, bevor eine neue A4-Seite erzeugt wird (Ziel: etwa 80-90 % Seitennutzung, soweit Geometrie/Lesbarkeit das zulassen).
- Laengenzuschnitt-Balken und Materialgruppen fliessen direkt unter die Stueckliste und weiter ueber die Seiten.
- Plattenzuschnitte werden dynamisch in den verbleibenden Seitenplatz skaliert und kombiniert.
- PDF bleibt immer hell und druckfreundlich, unabhaengig vom Darkmode.
- CSV-Erzeugung bleibt intern fuer die E-Mail-Anhaenge erhalten.

V44: Sondermaß-Eingabe ergänzt. Platten: Bezeichnung, Höhe cm, Breite cm, Stärke mm. Längenzuschnitt: Höhe cm, Breite cm, Länge cm; auch im Projektmodus und in gespeicherten Projekten.


V47: Portable PDF-Pläne. Neu erzeugte PDFs enthalten die Eingabedaten und können über „PDF-Plan laden“ wieder geöffnet und bearbeitet werden. Zusätzlich klarere Bezeichnungen im Projekt-Längenzuschnitt.
