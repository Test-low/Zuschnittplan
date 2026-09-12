
"use strict";


const THEME_STORAGE_KEY="lowis-zuschnittplaner-theme";
const systemThemeQuery=window.matchMedia("(prefers-color-scheme: dark)");

function getSavedThemeChoice(){
  const saved=localStorage.getItem(THEME_STORAGE_KEY);
  return ["light","dark"].includes(saved) ? saved : "dark";
}

function effectiveTheme(choice){
  return choice==="system" ? (systemThemeQuery.matches ? "dark" : "light") : choice;
}

function applyTheme(choice,save=true){
  if(!["system","light","dark"].includes(choice)) choice="dark";
  const effective=effectiveTheme(choice);

  document.documentElement.dataset.theme=effective;
  document.documentElement.dataset.themeChoice=choice;

  document.querySelectorAll(".theme-option").forEach(btn=>{
    const active=btn.dataset.themeChoice===choice;
    btn.classList.toggle("active",active);
    btn.setAttribute("aria-pressed",active ? "true" : "false");
  });

  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute("content",effective==="dark" ? "#2b3137" : "#f5f7f8");

  if(save) localStorage.setItem(THEME_STORAGE_KEY,choice);
}

document.querySelectorAll(".theme-option").forEach(btn=>{
  btn.addEventListener("click",()=>applyTheme(btn.dataset.themeChoice,true));
});

const onSystemThemeChanged=()=>{
  if(getSavedThemeChoice()==="system") applyTheme("system",false);
};
if(systemThemeQuery.addEventListener){
  systemThemeQuery.addEventListener("change",onSystemThemeChanged);
}else if(systemThemeQuery.addListener){
  systemThemeQuery.addListener(onSystemThemeChanged);
}

applyTheme(getSavedThemeChoice()==="system"?"dark":getSavedThemeChoice(),false);


// TESTDATEN. Später kann diese Funktion ihre Daten aus OPTI-NET erhalten.
const MATERIALS = [
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 625,
    "thickness": 12
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 625,
    "thickness": 15
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 625,
    "thickness": 18
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 625,
    "thickness": 22
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 625,
    "thickness": 25
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 15
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 18
  },
  {
    "group": "OSB",
    "edge": "mit Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 22
  },
  {
    "group": "OSB",
    "edge": "ohne Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 12
  },
  {
    "group": "OSB",
    "edge": "ohne Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 15
  },
  {
    "group": "OSB",
    "edge": "ohne Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 18
  },
  {
    "group": "OSB",
    "edge": "ohne Nut & Feder",
    "width": 2500,
    "height": 1250,
    "thickness": 22
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 1530,
    "height": 1530,
    "thickness": 3
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 1530,
    "height": 1530,
    "thickness": 4
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 1530,
    "height": 1530,
    "thickness": 5
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 6.5
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 9
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 12
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 15
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 18
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 21
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 9
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 12
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 15
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 18
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 21
  },
  {
    "group": "Birke Multiplex",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 40
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 9
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 12
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 15
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 18
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 21
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 12
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 15
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 18
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 3000,
    "height": 1500,
    "thickness": 21
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 4100,
    "height": 2020,
    "thickness": 15
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 4100,
    "height": 2020,
    "thickness": 18
  },
  {
    "group": "Siebfilm",
    "edge": "Standard",
    "width": 4100,
    "height": 2020,
    "thickness": 21
  },
  {
    "group": "Betonplan",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 4
  },
  {
    "group": "Betonplan",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 8
  },
  {
    "group": "Betonplan",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 21
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 4
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 6
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 8
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 10
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 12
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 15
  },
  {
    "group": "Rotholzsperrholz",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 18
  },
  {
    "group": "Elliottisperrholz",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 15
  },
  {
    "group": "Elliottisperrholz",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 18
  },
  {
    "group": "Elliottisperrholz",
    "edge": "Standard",
    "width": 2500,
    "height": 1250,
    "thickness": 20
  },
  {
    "group": "Pappelsperrholz",
    "edge": "Standard",
    "width": 2520,
    "height": 1720,
    "thickness": 4
  },
  {
    "group": "Pappelsperrholz",
    "edge": "Standard",
    "width": 2520,
    "height": 1720,
    "thickness": 6
  },
  {
    "group": "Spanplatte roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 10
  },
  {
    "group": "Spanplatte roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 12
  },
  {
    "group": "Spanplatte roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 16
  },
  {
    "group": "Spanplatte roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 19
  },
  {
    "group": "Spanplatte Miniperl weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 10
  },
  {
    "group": "Spanplatte Miniperl weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 13
  },
  {
    "group": "Spanplatte Miniperl weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 16
  },
  {
    "group": "Spanplatte Miniperl weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 19
  },
  {
    "group": "Spanplatte Seidenmatt weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 8
  },
  {
    "group": "Spanplatte Seidenmatt weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 16
  },
  {
    "group": "Spanplatte Seidenmatt weiß",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 19
  },
  {
    "group": "MDF roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 8
  },
  {
    "group": "MDF roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 10
  },
  {
    "group": "MDF roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 12
  },
  {
    "group": "MDF roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 16
  },
  {
    "group": "MDF roh",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 19
  },
  {
    "group": "MDF Grundierfolie",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 8
  },
  {
    "group": "MDF Grundierfolie",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 10
  },
  {
    "group": "MDF Grundierfolie",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 12
  },
  {
    "group": "MDF Grundierfolie",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 16
  },
  {
    "group": "MDF Grundierfolie",
    "edge": "Standard",
    "width": 2800,
    "height": 2070,
    "thickness": 19
  },
  {
    "group": "Hartfaser",
    "edge": "Standard",
    "width": 2440,
    "height": 1220,
    "thickness": 3.2
  },
  {
    "group": "Hartfaser",
    "edge": "Standard",
    "width": 2520,
    "height": 1720,
    "thickness": 3.2
  }
];

const KERF = 3;
let currentResult = null;
const $ = id => document.getElementById(id);

function uniq(arr){ return [...new Set(arr)]; }

const SPECIAL_PLATE_GROUP="Sondermaß";
function initGroups(){
  const groups=uniq(MATERIALS.map(m=>m.group));
  $("groupSelect").innerHTML=[...groups,SPECIAL_PLATE_GROUP].map(g=>`<option value="${g}">${g}</option>`).join("");
  if(groups.includes("OSB")) $("groupSelect").value="OSB";
  rebuildMaterialSelectors();
}

function rebuildMaterialSelectors(){
  const group = $("groupSelect").value;
  const special=group===SPECIAL_PLATE_GROUP;
  $("plateSpecialFields")?.classList.toggle("hidden",!special);
  $("plateCatalogSizeFields")?.classList.toggle("hidden",special);
  if(special){
    $("edgeField")?.classList.add("hidden");
    updateMaterialPreview();
    return;
  }
  const edges = uniq(MATERIALS.filter(m=>m.group===group).map(m=>m.edge));
  const oldEdge = $("edgeSelect").value;
  $("edgeSelect").innerHTML = edges.map(v=>`<option>${v}</option>`).join("");
  if(edges.includes(oldEdge)) $("edgeSelect").value = oldEdge;

  // Bei Materialien ohne Varianten muss der Kunde kein bedeutungsloses "Standard" auswählen.
  $("edgeField").classList.toggle("hidden", edges.length===1 && edges[0]==="Standard");

  rebuildFormats();
}

function rebuildFormats(){
  const group=$("groupSelect").value, edge=$("edgeSelect").value;
  const mats=MATERIALS.filter(m=>m.group===group && m.edge===edge);
  const formats=uniq(mats.map(m=>`${m.width}x${m.height}`));
  const old=$("formatSelect").value;
  $("formatSelect").innerHTML=formats.map(v=>{
    const [w,h]=v.split("x");
    return `<option value="${v}">${w} × ${h} mm</option>`;
  }).join("");
  if(formats.includes(old)) $("formatSelect").value=old;
  rebuildThicknesses();
}

function rebuildThicknesses(){
  const group=$("groupSelect").value, edge=$("edgeSelect").value, format=$("formatSelect").value;
  const mats=MATERIALS.filter(m=>m.group===group && m.edge===edge && `${m.width}x${m.height}`===format);
  const vals=uniq(mats.map(m=>m.thickness)).sort((a,b)=>a-b);
  const old=Number($("thicknessSelect").value);
  $("thicknessSelect").innerHTML=vals.map(v=>`<option value="${v}">${String(v).replace(".",",")}</option>`).join("");
  if(vals.includes(old)) $("thicknessSelect").value=String(old);
  updateMaterialPreview();
  syncV60PlateFormatControls();
}


function v60FormatParts(value){
  const [a,b]=String(value||"").split("x").map(Number);
  return {length:a||0,width:b||0};
}
function syncV60PlateFormatControls(){
  const lenSel=$("v60PlateLengthSelect"),widSel=$("v60PlateWidthSelect"),fmtSel=$("formatSelect");
  if(!lenSel||!widSel||!fmtSel)return;
  const special=$("groupSelect")?.value===SPECIAL_PLATE_GROUP;
  if(special)return;
  const values=[...fmtSel.options].map(o=>o.value).filter(Boolean);
  if(!values.length){lenSel.innerHTML="";widSel.innerHTML="";return;}
  const cur=v60FormatParts(fmtSel.value||values[0]);
  const lengths=uniq(values.map(v=>v60FormatParts(v).length));
  lenSel.innerHTML=lengths.map(v=>`<option value="${v}">${lengthFmt(v/10)}</option>`).join("");
  lenSel.value=String(lengths.includes(cur.length)?cur.length:lengths[0]);
  const widthVals=values.map(v=>({v,...v60FormatParts(v)})).filter(x=>x.length===Number(lenSel.value));
  widSel.innerHTML=widthVals.map(x=>`<option value="${x.width}" data-format="${x.v}">${lengthFmt(x.width/10)}</option>`).join("");
  const chosen=widthVals.find(x=>x.v===fmtSel.value)||widthVals[0];
  if(chosen)widSel.value=String(chosen.width);
  updateV64RawVeneerOptions();
}
function plateRawVeneerDirection(){
  return $("v60RawVeneerDisplay")?.value==="cross" ? "cross" : "long";
}
function updateV64RawVeneerOptions(){
  const raw=$("v60RawVeneerDisplay");
  if(!raw)return;
  const previous=plateRawVeneerDirection();
  const m=currentMaterial();
  if(!m)return;
  const longMm=m.isSpecial ? Number(m.heightCm||0)*10 : Number(m.width||0);
  const crossMm=m.isSpecial ? Number(m.widthCm||0)*10 : Number(m.height||0);
  const longText=longMm>0?`Längs (${lengthFmt(longMm/10)} cm)`:"Längs";
  const crossText=crossMm>0?`Quer (${lengthFmt(crossMm/10)} cm)`:"Quer";
  raw.innerHTML=`<option value="long">${longText}</option><option value="cross">${crossText}</option>`;
  raw.value=previous;
}
function applyV60PlateFormat(){
  const lenSel=$("v60PlateLengthSelect"),widSel=$("v60PlateWidthSelect"),fmtSel=$("formatSelect");
  if(!lenSel||!widSel||!fmtSel)return;
  const target=`${Number(lenSel.value)}x${Number(widSel.value)}`;
  if([...fmtSel.options].some(o=>o.value===target)){
    fmtSel.value=target;
    rebuildThicknesses();
    saveDraft();
  }
}

function currentMaterial(){
  const group=$("groupSelect").value;
  if(group===SPECIAL_PLATE_GROUP){
    const name=String($("plateSpecialName")?.value||"").trim();
    const heightCm=Number($("plateSpecialHeight")?.value)||0;
    const widthCm=Number($("plateSpecialWidth")?.value)||0;
    const thickness=Number($("plateSpecialThickness")?.value)||0;
    return {group:name?`Sondermaß – ${name}`:"Sondermaß",edge:"Standard",width:Math.round(widthCm*10*10)/10,height:Math.round(heightCm*10*10)/10,thickness,isSpecial:true,specialName:name,heightCm,widthCm};
  }
  const edge=$("edgeSelect").value, format=$("formatSelect").value, th=Number($("thicknessSelect").value);
  return MATERIALS.find(m=>m.group===group && m.edge===edge && `${m.width}x${m.height}`===format && m.thickness===th) || MATERIALS[0];
}

function updateMaterialPreview(){
  const m=currentMaterial();
  setTimeout(updateV64RawVeneerOptions,0);
  if(m.isSpecial){
    $("materialPreview").innerHTML=`<div class="tag">Sondermaß</div><strong>${escapeHtmlText(m.specialName||"Sondermaß")}</strong><small>Länge ${lengthFmt(m.heightCm||0)} cm · Breite ${lengthFmt(m.widthCm||0)} cm · Stärke ${String(m.thickness||0).replace(".",",")} mm</small>`;
    return;
  }
  $("materialPreview").innerHTML=
    `<div class="tag">Ausgewählte Lagerplatte</div>
     <strong>${m.group} ${String(m.thickness).replace(".",",")} mm · ${m.width} × ${m.height} mm</strong>
     <small>${m.edge==="Standard" ? "Lagerformat" : m.edge}</small>`;
}

function validatePlateSpecialMaterial(m){
  if(!m?.isSpecial)return "";
  if(!(m.heightCm>0)&&!(m.widthCm>0)&&!(m.thickness>0))return "Bitte Länge, Breite und Stärke für das Sondermaß eingeben.";
  if(!(m.heightCm>0))return "Bitte die Länge des Sondermaßes in cm eingeben.";
  if(!(m.widthCm>0))return "Bitte die Breite des Sondermaßes in cm eingeben.";
  if(!(m.thickness>0))return "Bitte die Stärke des Sondermaßes in mm eingeben.";
  return "";
}

function escapeHtmlText(value){
  return String(value??"")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}
function escapeAttr(value){ return escapeHtmlText(value); }
function pieceLabel(item){
  return item.name ? `Pos. ${item.pos} · ${item.name}` : `Pos. ${item.pos}`;
}
function calloutCode(index){ return String(index+1); }

function textApprox(text,size){
  return String(text).length * size * 0.56;
}

/*
  full    = Bezeichnung/Position + beide Kantenmaße im Teil
  compact = reduzierte Beschriftung + beide Kantenmaße im Teil
  measure = bei kleinen Teilen steht das Fertigmaß direkt im Teil.
            Es wird automatisch entlang der längeren sichtbaren Seite gedreht.
*/
function pieceLayoutMode(p,drawW,drawH){
  const label=pieceLabel(p.item)+(p.rotated?" ↻":"");
  const widthText=`${Math.round(p.w)} mm`;
  const heightText=`${Math.round(p.h)} mm`;

  const fullLabelSize=Math.max(7,Math.min(10,drawH/5,drawW/12));
  const fullDimSize=Math.max(7,Math.min(10,drawH/5,drawW/12));

  const fullFits =
    drawW >= Math.max(54, Math.min(230, textApprox(label, fullLabelSize) + 12)) &&
    drawW >= Math.max(34, textApprox(widthText, fullDimSize) + 10) &&
    drawH >= Math.max(26, textApprox(heightText, fullDimSize) * 0.72 + 10) &&
    drawH >= 34;

  if(fullFits) return "full";

  const compactFits =
    drawW >= Math.max(32, textApprox(widthText, 7) + 8) &&
    drawH >= Math.max(22, textApprox(heightText, 7) * 0.72 + 8) &&
    drawH >= 24;

  if(compactFits) return "compact";

  return "measure";
}

function tinyMeasureSpec(p,drawW,drawH){
  const text=`${Math.round(p.w)}×${Math.round(p.h)}`;
  const vertical=drawH>drawW;
  const along=vertical?drawH:drawW;
  const across=vertical?drawW:drawH;

  // So groß wie möglich. Ziel: Maße so lange wie technisch sinnvoll
  // direkt im Teil halten – auch bei sehr schmalen Streifen.
  const byLength=(along-3)/(Math.max(1,text.length)*0.55);
  const byThickness=Math.max(0,across-1.2);
  const font=Math.min(9,byLength,byThickness);

  return {
    text,
    vertical,
    font,
    readable:font>=4.4 && along>=14 && across>=5.4
  };
}

function platePosLabel(item){
  return String(item?.pos ?? "");
}

function plateCenterName(item){
  return String(item?.name||"").trim();
}

function plateNameSpec(item,drawW,drawH){
  const name=plateCenterName(item);
  if(!name) return {text:"",show:false,vertical:false,font:0};
  const vertical=drawH>drawW*1.18;
  const along=vertical?drawH:drawW;
  const across=vertical?drawW:drawH;
  const maxFont=Math.min(10.5, vertical? drawW*0.34 : drawH*0.36, (along-8)/(Math.max(1,name.length)*0.56));
  const font=Math.max(0, maxFont);
  return {text:name,show:font>=5.2 && along>=30 && across>=14,vertical,font:Math.min(11,font)};
}

function platePosSpec(item,drawW,drawH){
  const text=platePosLabel(item);
  const font=Math.max(5.4, Math.min(9.2, drawH*0.22, drawW*0.16));
  return {text,show:drawW>=12 && drawH>=10,font};
}

function plateDimReadable(text,span,thickness){
  const chars=Math.max(1,String(text).length);
  // Große Teile erhalten deutlich größere Maße. Bei schmalen/kleinen Teilen
  // schrumpft die Schrift automatisch, bleibt aber solange wie möglich im Teil.
  const bySpan=(span-8)/(chars*0.58);
  const byThickness=thickness*0.15;
  const font=Math.min(15,bySpan,byThickness);
  return {show:span>=14 && thickness>=8 && font>=4.2,font:Math.max(4.2,font)};
}

function veneerDirectionLabel(value){
  return value==="long"?"Längs":value==="cross"?"Quer":"Egal";
}

function needsPieceCallout(p,drawW,drawH){
  if(pieceLayoutMode(p,drawW,drawH)!=="measure") return false;
  return !tinyMeasureSpec(p,drawW,drawH).readable || !!p.item.name;
}

function describePartRow(tr){
  const w=String(tr.querySelector(".pw")?.value||"").trim();
  const h=String(tr.querySelector(".ph")?.value||"").trim();
  const q=String(tr.querySelector(".pq")?.value||"").trim();
  const name=String(tr.querySelector(".pname")?.value||"").trim();
  const bits=[];
  if(w && h) bits.push(`${w} × ${h} mm`);
  if(q) bits.push(`${q} Stk.`);
  if(name) bits.push(name);
  return bits.join(" · ");
}

function confirmRemoveRow(tr){
  const rows=[...$("partsBody").querySelectorAll("tr")];
  const pos=rows.indexOf(tr)+1;
  const detail=describePartRow(tr);
  const message=detail
    ? `Position ${pos} (${detail}) wirklich entfernen?`
    : `Position ${pos} wirklich entfernen?`;
  return window.confirm(message);
}

function removePartRow(tr,confirmFirst=true){
  if(!tr) return false;
  if(confirmFirst && !confirmRemoveRow(tr)) return false;
  tr.remove();
  saveDraft();
  return true;
}

function addPartRow(w="",h="",q=1,name="",focusNew=false,veneer="any"){
  const tr=document.createElement("tr");
  const veneerValue=["any","long","cross"].includes(veneer)?veneer:"any";
  tr.innerHTML=`
    <td class="v59-rowno"></td>
    <td><input class="pw" type="number" min="1" step="1" value="${w}"></td>
    <td><input class="ph" type="number" min="1" step="1" value="${h}"></td>
    <td><input class="pq" type="number" min="1" step="1" value="${q}"></td>
    <td><input class="pname" type="text" maxlength="80" placeholder="z. B. Küche" value="${escapeAttr(name)}"></td>
    <td><select class="pveneer" aria-label="Furnierrichtung"><option value="any" ${veneerValue==="any"?"selected":""}>Egal</option><option value="long" ${veneerValue==="long"?"selected":""}>Längs</option><option value="cross" ${veneerValue==="cross"?"selected":""}>Quer</option></select></td>
    <td><button class="icon-btn" type="button" title="Position löschen">×</button></td>`;
  tr.querySelector("button").addEventListener("click",()=>removePartRow(tr,true));
  $("partsBody").appendChild(tr);

  if(focusNew){
    requestAnimationFrame(()=>{
      const input=tr.querySelector(".pw");
      if(input){
        input.focus();
        input.select();
        tr.scrollIntoView({block:"nearest",behavior:"smooth"});
      }
    });
  }
  return tr;
}

function readPositions(){
  const rows=[...$("partsBody").querySelectorAll("tr")];
  const pos=[];
  rows.forEach((tr,i)=>{
    const name=String(tr.querySelector(".pname")?.value||"").trim();
    const w=Number(tr.querySelector(".pw").value);
    const h=Number(tr.querySelector(".ph").value);
    const q=Number(tr.querySelector(".pq").value);
    const veneer=String(tr.querySelector(".pveneer")?.value||"any");
    if(w>0 && h>0 && Number.isInteger(q) && q>0) pos.push({pos:i+1,name,w,h,q,veneer});
  });
  return pos;
}

function expandPositions(pos){
  const items=[];
  pos.forEach(p=>{
    for(let i=0;i<p.q;i++) items.push({pos:p.pos,name:p.name||"",w:p.w,h:p.h,q:p.q,veneer:p.veneer||"any",copy:i+1});
  });
  return items;
}

function rotationAllowed(){
  return true;
}

function validate(pos,m){
  if(!pos.length) return "Bitte mindestens eine vollständige Zuschnittposition eingeben.";
  const rawVeneer=plateRawVeneerDirection();
  for(const p of pos){
    const veneer=p.veneer||"any";
    let directAllowed=true,rotatedAllowed=true;
    if(veneer==="long"){
      directAllowed=rawVeneer==="long";
      rotatedAllowed=rawVeneer==="cross";
    }else if(veneer==="cross"){
      directAllowed=rawVeneer==="cross";
      rotatedAllowed=rawVeneer==="long";
    }
    const direct=directAllowed && p.w<=m.width && p.h<=m.height;
    const rotated=rotatedAllowed && p.h<=m.width && p.w<=m.height;
    if(!direct && !rotated){
      const direction=veneerDirectionLabel(veneer);
      return `Pos. ${p.pos}${p.name ? " · "+p.name : ""} (${p.w} × ${p.h} mm) passt mit Furnierrichtung ${direction} nicht auf die gewählte Platte ${m.width} × ${m.height} mm.`;
    }
  }
  return "";
}

/*
  Praxisnahes Streifen-/Guillotine-Packing.
  Teile können je nach Auswahl gedreht werden.
  axis=x: Streifen über die Plattenlänge, Teile im Streifen nacheinander.
  axis=y: transponierte Streifenstrategie.
*/
function orientations(item){
  const veneer=item.veneer||"any";
  const rawVeneer=plateRawVeneerDirection();
  if(veneer==="long") return rawVeneer==="long" ? [{w:item.w,h:item.h,rotated:false}] : [{w:item.h,h:item.w,rotated:true}];
  if(veneer==="cross") return rawVeneer==="long" ? [{w:item.h,h:item.w,rotated:true}] : [{w:item.w,h:item.h,rotated:false}];
  const out=[{w:item.w,h:item.h,rotated:false}];
  if(rotationAllowed() && item.w!==item.h) out.push({w:item.h,h:item.w,rotated:true});
  return out;
}

function pack(items,SW,SH,axis,sorter){
  const list=items.slice().sort(sorter);
  const sheets=[];
  const fresh=()=>({axis,strips:[],placements:[]});

  function stripSpan(sheet){
    if(!sheet.strips.length) return 0;
    return sheet.strips.reduce((a,s)=>a+s.size,0)+KERF*(sheet.strips.length-1);
  }

  for(const item of list){
    const candidates=[];

    for(let si=0;si<=sheets.length;si++){
      const sheet=si<sheets.length?sheets[si]:fresh();

      for(const o of orientations(item)){
        sheet.strips.forEach((st,ti)=>{
          if(axis==="x"){
            const x=st.used+(st.used>0?KERF:0);
            if(o.h<=st.size && x+o.w<=SW){
              candidates.push({
                si,ti,newStrip:false,x,y:st.offset,o,
                score:si*1e12+(st.size-o.h)*1e6+(SW-x-o.w)
              });
            }
          }else{
            const y=st.used+(st.used>0?KERF:0);
            if(o.w<=st.size && y+o.h<=SH){
              candidates.push({
                si,ti,newStrip:false,x:st.offset,y,o,
                score:si*1e12+(st.size-o.w)*1e6+(SH-y-o.h)
              });
            }
          }
        });

        const used=stripSpan(sheet);
        const off=sheet.strips.length?used+KERF:0;
        if(axis==="x" && o.w<=SW && off+o.h<=SH){
          candidates.push({
            si,ti:sheet.strips.length,newStrip:true,x:0,y:off,o,
            score:si*1e12+5e9+(SH-off-o.h)*1e4+(SW-o.w)
          });
        }
        if(axis==="y" && o.h<=SH && off+o.w<=SW){
          candidates.push({
            si,ti:sheet.strips.length,newStrip:true,x:off,y:0,o,
            score:si*1e12+5e9+(SW-off-o.w)*1e4+(SH-o.h)
          });
        }
      }
    }

    if(!candidates.length) return null;
    candidates.sort((a,b)=>a.score-b.score);
    const b=candidates[0];

    if(b.si===sheets.length) sheets.push(fresh());
    const sheet=sheets[b.si];

    if(b.newStrip){
      sheet.strips.push({
        offset:axis==="x"?b.y:b.x,
        size:axis==="x"?b.o.h:b.o.w,
        used:0,
        items:[]
      });
    }

    const st=sheet.strips[b.ti];
    const pl={
      item,
      x:b.x,y:b.y,
      w:b.o.w,h:b.o.h,
      rotated:b.o.rotated
    };
    st.items.push(pl);
    sheet.placements.push(pl);
    st.used=axis==="x"?pl.x+pl.w:pl.y+pl.h;
  }
  return sheets;
}

function stripSpanOf(sheet){
  if(!sheet.strips.length) return 0;
  return sheet.strips.reduce((a,s)=>a+s.size,0)+KERF*(sheet.strips.length-1);
}

/*
  Liefert die zusammenhängenden, nach dem Streifenschnitt praktisch
  weiterverwendbaren Rest-Rechtecke. Kleine Restflächen innerhalb eines
  Streifens werden nicht künstlich zu einem großen Rest zusammengerechnet.
*/
function restRectangles(sheet,SW,SH){
  const rects=[];

  if(sheet.axis==="x"){
    sheet.strips.forEach(st=>{
      const freeW=SW-st.used-(st.used>0?KERF:0);
      if(freeW>0 && st.size>0) rects.push({w:freeW,h:st.size});
    });

    const span=stripSpanOf(sheet);
    const freeH=SH-span-(sheet.strips.length?KERF:0);
    if(freeH>0) rects.push({w:SW,h:freeH});
  }else{
    sheet.strips.forEach(st=>{
      const freeH=SH-st.used-(st.used>0?KERF:0);
      if(freeH>0 && st.size>0) rects.push({w:st.size,h:freeH});
    });

    const span=stripSpanOf(sheet);
    const freeW=SW-span-(sheet.strips.length?KERF:0);
    if(freeW>0) rects.push({w:freeW,h:SH});
  }

  return rects;
}

const PLATE_OPTIMIZATION_MODES={
  material:{label:"Materialoptimal",help:"Minimale Plattenzahl, danach möglichst große und zusammenhängende Restflächen für den Kunden."},
  fast:{label:"Schnell sägen",help:"Minimale Plattenzahl, danach möglichst wenige Streifen und möglichst wenige unterschiedliche Sägeeinstellungen."},
  series:{label:"Serienfreundlich",help:"Minimale Plattenzahl, danach möglichst viele identische Plattenzuschnitte und wenige unterschiedliche Schnittbilder."}
};
function plateOptimizationMode(){
  const value=String($("plateOptimizationMode")?.value||"material");
  return PLATE_OPTIMIZATION_MODES[value]?value:"material";
}
function plateOptimizationLabel(mode){return (PLATE_OPTIMIZATION_MODES[mode]||PLATE_OPTIMIZATION_MODES.material).label;}
function updatePlateOptimizationHelp(){
  const el=$("plateOptimizationHelp");
  if(el)el.textContent=(PLATE_OPTIMIZATION_MODES[plateOptimizationMode()]||PLATE_OPTIMIZATION_MODES.material).help;
}
function fastCutMetrics(sheets){
  const setups=new Set();
  let strips=0;
  sheets.forEach(sheet=>{
    strips+=sheet.strips.length;
    sheet.strips.forEach(st=>{
      setups.add(`strip:${sheet.axis}:${Math.round(st.size*10)/10}`);
      st.items.forEach(pl=>setups.add(`cross:${sheet.axis}:${Math.round((sheet.axis==="x"?pl.w:pl.h)*10)/10}`));
    });
  });
  return {strips,setups:setups.size};
}
function seriesSheetSignature(sheet){
  // Serienfreundlich zählt nur wirklich identische Pläne mit denselben Positionen.
  // So bleibt die Beschriftung beim Gruppieren als „x× identisch schneiden“ eindeutig.
  return sheetSignature(sheet);
}
function seriesMetrics(sheets){
  const counts=new Map();
  sheets.forEach(sheet=>{const k=seriesSheetSignature(sheet);counts.set(k,(counts.get(k)||0)+1);});
  const values=[...counts.values()];
  return {
    uniquePlans:counts.size,
    repeatedSheets:values.reduce((sum,n)=>sum+Math.max(0,n-1),0),
    largestSeries:values.length?Math.max(...values):0,
    singletons:values.filter(n=>n===1).length
  };
}

function solutionMetrics(sheets,SW,SH){
  const boardArea=SW*SH;
  let concentration=0;
  let largest=0;
  let reusable=0;
  let shapeQuality=0;
  let fragments=0;
  let strips=0;

  sheets.forEach(sheet=>{
    strips+=sheet.strips.length;
    const rects=restRectangles(sheet,SW,SH);
    fragments+=rects.length;

    rects.forEach(r=>{
      const area=r.w*r.h;
      const f=area/boardArea;
      const shortSide=Math.min(r.w,r.h)/Math.min(SW,SH);

      // Quadratische Gewichtung belohnt wenige große Reststücke
      // deutlich stärker als viele kleine Restfetzen.
      concentration+=f*f;
      reusable+=f;
      largest=Math.max(largest,f);
      shapeQuality+=f*f*Math.max(0,Math.min(1,shortSide));
    });
  });

  return {
    sheets:sheets.length,
    concentration,
    largest,
    reusable,
    shapeQuality,
    fragments,
    strips
  };
}

function isBetterSolution(a,b,SW,SH,mode="material"){
  if(!a) return false;
  if(!b) return true;

  const A=solutionMetrics(a,SW,SH);
  const B=solutionMetrics(b,SW,SH);
  const eps=1e-10;

  // Für alle drei Betriebsarten gilt zwingend: niemals mehr ganze Platten verwenden.
  if(A.sheets!==B.sheets) return A.sheets<B.sheets;

  if(mode==="fast"){
    const AF=fastCutMetrics(a),BF=fastCutMetrics(b);
    if(AF.strips!==BF.strips) return AF.strips<BF.strips;
    if(AF.setups!==BF.setups) return AF.setups<BF.setups;
    if(A.fragments!==B.fragments) return A.fragments<B.fragments;
    if(Math.abs(A.concentration-B.concentration)>eps) return A.concentration>B.concentration;
    if(Math.abs(A.largest-B.largest)>eps) return A.largest>B.largest;
    return false;
  }

  if(mode==="series"){
    const AS=seriesMetrics(a),BS=seriesMetrics(b);
    if(AS.uniquePlans!==BS.uniquePlans) return AS.uniquePlans<BS.uniquePlans;
    if(AS.repeatedSheets!==BS.repeatedSheets) return AS.repeatedSheets>BS.repeatedSheets;
    if(AS.largestSeries!==BS.largestSeries) return AS.largestSeries>BS.largestSeries;
    if(AS.singletons!==BS.singletons) return AS.singletons<BS.singletons;
    if(A.strips!==B.strips) return A.strips<B.strips;
    if(Math.abs(A.concentration-B.concentration)>eps) return A.concentration>B.concentration;
    return false;
  }

  // Materialoptimal: bestehende Logik – minimale Plattenzahl, danach brauchbare große Restflächen.
  if(Math.abs(A.concentration-B.concentration)>eps) return A.concentration>B.concentration;
  if(Math.abs(A.largest-B.largest)>eps) return A.largest>B.largest;
  if(Math.abs(A.shapeQuality-B.shapeQuality)>eps) return A.shapeQuality>B.shapeQuality;
  if(Math.abs(A.reusable-B.reusable)>eps) return A.reusable>B.reusable;
  if(A.fragments!==B.fragments) return A.fragments<B.fragments;
  if(A.strips!==B.strips) return A.strips<B.strips;
  return false;
}

function cloneSheetForTrial(sheet){
  return {
    axis:sheet.axis,
    strips:sheet.strips.map(st=>({
      offset:st.offset,
      size:st.size,
      used:st.used,
      items:st.items.slice()
    })),
    placements:sheet.placements.slice()
  };
}

function applyCandidate(sheet,b,axis,item){
  if(b.newStrip){
    sheet.strips.push({
      offset:axis==="x"?b.y:b.x,
      size:axis==="x"?b.o.h:b.o.w,
      used:0,
      items:[]
    });
  }

  const st=sheet.strips[b.ti];
  const pl={
    item,
    x:b.x,y:b.y,
    w:b.o.w,h:b.o.h,
    rotated:b.o.rotated
  };
  st.items.push(pl);
  sheet.placements.push(pl);
  st.used=axis==="x"?pl.x+pl.w:pl.y+pl.h;
}

/*
  Zweite Packstrategie:
  - keine starre Bevorzugung von "Platte 1, Platte 2, ..."
  - vorhandene, bereits gut gefüllte Platten werden bevorzugt
  - innerhalb einer Platte wird die Variante gewählt, die größere
    zusammenhängende Restrechtecke übrig lässt
*/
function packConcentrated(items,SW,SH,axis,sorter,mode="material"){
  const list=items.slice().sort(sorter);
  const sheets=[];
  const fresh=()=>({axis,strips:[],placements:[]});

  for(const item of list){
    const candidates=[];

    for(let si=0;si<=sheets.length;si++){
      const isNewSheet=si===sheets.length;
      const sheet=isNewSheet?fresh():sheets[si];
      const usedPieceArea=sheet.placements.reduce((a,p)=>a+p.w*p.h,0);

      for(const o of orientations(item)){
        sheet.strips.forEach((st,ti)=>{
          if(axis==="x"){
            const x=st.used+(st.used>0?KERF:0);
            if(o.h<=st.size && x+o.w<=SW){
              candidates.push({si,ti,newStrip:false,x,y:st.offset,o,isNewSheet,usedPieceArea});
            }
          }else{
            const y=st.used+(st.used>0?KERF:0);
            if(o.w<=st.size && y+o.h<=SH){
              candidates.push({si,ti,newStrip:false,x:st.offset,y,o,isNewSheet,usedPieceArea});
            }
          }
        });

        const used=stripSpanOf(sheet);
        const off=sheet.strips.length?used+KERF:0;

        if(axis==="x" && o.w<=SW && off+o.h<=SH){
          candidates.push({
            si,ti:sheet.strips.length,newStrip:true,x:0,y:off,o,isNewSheet,usedPieceArea
          });
        }
        if(axis==="y" && o.h<=SH && off+o.w<=SW){
          candidates.push({
            si,ti:sheet.strips.length,newStrip:true,x:off,y:0,o,isNewSheet,usedPieceArea
          });
        }
      }
    }

    if(!candidates.length) return null;

    candidates.forEach(c=>{
      const base=c.isNewSheet?fresh():sheets[c.si];
      const trial=cloneSheetForTrial(base);
      applyCandidate(trial,c,axis,item);
      const m=solutionMetrics([trial],SW,SH);
      c.trialMetrics=m;
    });

    candidates.sort((a,b)=>{
      // Nie eine neue Platte anfangen, wenn das Teil noch auf eine vorhandene passt.
      if(a.isNewSheet!==b.isNewSheet) return a.isNewSheet?1:-1;

      // Bereits stärker belegte Platte zuerst: so werden Restflächen gebündelt.
      if(a.usedPieceArea!==b.usedPieceArea) return b.usedPieceArea-a.usedPieceArea;

      const A=a.trialMetrics, B=b.trialMetrics;
      const eps=1e-10;
      if(mode==="fast"){
        if(a.newStrip!==b.newStrip) return a.newStrip?1:-1;
        if(A.strips!==B.strips) return A.strips-B.strips;
        if(A.fragments!==B.fragments) return A.fragments-B.fragments;
      }
      if(Math.abs(A.concentration-B.concentration)>eps) return B.concentration-A.concentration;
      if(Math.abs(A.largest-B.largest)>eps) return B.largest-A.largest;
      if(Math.abs(A.shapeQuality-B.shapeQuality)>eps) return B.shapeQuality-A.shapeQuality;
      if(A.fragments!==B.fragments) return A.fragments-B.fragments;
      if(A.strips!==B.strips) return A.strips-B.strips;
      return 0;
    });

    const b=candidates[0];
    if(b.si===sheets.length) sheets.push(fresh());
    applyCandidate(sheets[b.si],b,axis,item);
  }

  return sheets;
}

/*
  Ein einzelnes Blatt möglichst voll packen, nicht passende Teile zunächst
  überspringen. Damit darf jede benötigte Platte ihre eigene sinnvolle
  Streifenrichtung (x oder y) bekommen.
*/
function packSingleSkipping(items,SW,SH,axis,sorter){
  const list=items.slice().sort(sorter);
  const sheet={axis,strips:[],placements:[]};
  const placed=new Set();

  for(const item of list){
    const candidates=[];

    for(const o of orientations(item)){
      sheet.strips.forEach((st,ti)=>{
        if(axis==="x"){
          const x=st.used+(st.used>0?KERF:0);
          if(o.h<=st.size && x+o.w<=SW){
            candidates.push({ti,newStrip:false,x,y:st.offset,o});
          }
        }else{
          const y=st.used+(st.used>0?KERF:0);
          if(o.w<=st.size && y+o.h<=SH){
            candidates.push({ti,newStrip:false,x:st.offset,y,o});
          }
        }
      });

      const used=stripSpanOf(sheet);
      const off=sheet.strips.length?used+KERF:0;
      if(axis==="x" && o.w<=SW && off+o.h<=SH){
        candidates.push({ti:sheet.strips.length,newStrip:true,x:0,y:off,o});
      }
      if(axis==="y" && o.h<=SH && off+o.w<=SW){
        candidates.push({ti:sheet.strips.length,newStrip:true,x:off,y:0,o});
      }
    }

    if(!candidates.length) continue;

    candidates.forEach(c=>{
      const trial=cloneSheetForTrial(sheet);
      applyCandidate(trial,c,axis,item);
      c.m=solutionMetrics([trial],SW,SH);
    });

    candidates.sort((a,b)=>{
      const eps=1e-10;
      if(Math.abs(a.m.concentration-b.m.concentration)>eps) return b.m.concentration-a.m.concentration;
      if(Math.abs(a.m.largest-b.m.largest)>eps) return b.m.largest-a.m.largest;
      if(Math.abs(a.m.shapeQuality-b.m.shapeQuality)>eps) return b.m.shapeQuality-a.m.shapeQuality;
      if(a.m.fragments!==b.m.fragments) return a.m.fragments-b.m.fragments;
      return a.m.strips-b.m.strips;
    });

    applyCandidate(sheet,candidates[0],axis,item);
    placed.add(item);
  }

  return {sheet,placed};
}

function packMixedAxes(items,SW,SH,sorter){
  let remaining=items.slice();
  const sheets=[];

  while(remaining.length){
    const options=[];

    for(const axis of ["x","y"]){
      const candidate=packSingleSkipping(remaining,SW,SH,axis,sorter);
      if(!candidate.placed.size) continue;

      const usedArea=candidate.sheet.placements.reduce((a,p)=>a+p.w*p.h,0);
      const metrics=solutionMetrics([candidate.sheet],SW,SH);
      options.push({...candidate,usedArea,metrics});
    }

    if(!options.length) return null;

    options.sort((a,b)=>{
      // Ein Blatt möglichst dicht belegen, damit spätere Blätter mehr großen Rest behalten.
      if(a.usedArea!==b.usedArea) return b.usedArea-a.usedArea;
      if(a.placed.size!==b.placed.size) return b.placed.size-a.placed.size;

      const eps=1e-10;
      if(Math.abs(a.metrics.concentration-b.metrics.concentration)>eps){
        return b.metrics.concentration-a.metrics.concentration;
      }
      if(Math.abs(a.metrics.largest-b.metrics.largest)>eps){
        return b.metrics.largest-a.metrics.largest;
      }
      return a.metrics.strips-b.metrics.strips;
    });

    const best=options[0];
    sheets.push(best.sheet);
    remaining=remaining.filter(item=>!best.placed.has(item));
  }

  return sheets;
}

function seededNumber(item,seed){
  let x=(item.pos*73856093)^(item.copy*19349663)^(item.w*83492791)^(item.h*2654435761)^seed;
  x=(x^(x>>>16))*2246822519;
  x=(x^(x>>>13))*3266489917;
  x=x^(x>>>16);
  return (x>>>0)/4294967295;
}

function optimize(items,SW,SH,mode="material"){
  const baseSorters=[
    (a,b)=>b.w*b.h-a.w*a.h,
    (a,b)=>b.h-a.h||b.w-a.w,
    (a,b)=>b.w-a.w||b.h-a.h,
    (a,b)=>Math.max(b.w,b.h)-Math.max(a.w,a.h),
    (a,b)=>Math.min(b.w,b.h)-Math.min(a.w,a.h)||b.w*b.h-a.w*a.h,
    (a,b)=>(b.w+b.h)-(a.w+a.h),
    (a,b)=>Math.abs(b.w-b.h)-Math.abs(a.w-a.h)||b.w*b.h-a.w*a.h
  ];

  // Zusätzliche deterministische Varianten verhindern, dass ein ungünstiger
  // Eingabereihenfolge-Zufall die Reststücke unnötig zerstückelt.
  const jitterSorters=[];
  for(let seed=1;seed<=8;seed++){
    jitterSorters.push((a,b)=>{
      const av=a.w*a.h*(0.82+0.36*seededNumber(a,seed));
      const bv=b.w*b.h*(0.82+0.36*seededNumber(b,seed));
      return bv-av;
    });
  }

  const sorters=baseSorters.concat(jitterSorters);
  let best=null;

  function consider(result){
    if(result && isBetterSolution(result,best,SW,SH,mode)) best=result;
  }

  // Bewährte V10-Strategie bleibt als Sicherheitsnetz enthalten.
  for(const axis of ["x","y"]){
    for(const sorter of baseSorters){
      consider(pack(items,SW,SH,axis,sorter));
    }
  }

  // Neue restorientierte Varianten.
  for(const axis of ["x","y"]){
    for(const sorter of sorters){
      consider(packConcentrated(items,SW,SH,axis,sorter,mode));
    }
  }

  // Zusätzlich dürfen verschiedene Platten unterschiedliche Streifenrichtungen haben.
  for(const sorter of sorters){
    consider(packMixedAxes(items,SW,SH,sorter));
  }

  /*
    Nachoptimierung:
    Teile, die in der aktuell letzten Platte liegen, werden in weiteren
    Versuchen bewusst früher einsortiert. Dadurch finden sie häufig noch Platz
    in vorherigen Platten und die letzte Platte behält einen größeren Rest.
  */
  for(let round=0;round<3 && best && best.length>1;round++){
    const lastItems=new Set(best[best.length-1].placements.map(p=>p.item));
    const pullLast=(a,b)=>{
      const al=lastItems.has(a)?0:1;
      const bl=lastItems.has(b)?0:1;
      if(al!==bl) return al-bl;
      return b.w*b.h-a.w*a.h;
    };

    const before=best;
    for(const axis of ["x","y"]){
      consider(pack(items,SW,SH,axis,pullLast));
      consider(packConcentrated(items,SW,SH,axis,pullLast,mode));
    }
    consider(packMixedAxes(items,SW,SH,pullLast));

    if(best===before) break;
  }

  // Zusätzliche gezielte Varianten für die beiden Werkstatt-Modi.
  if(mode==="fast"){
    const fastSorters=[
      (a,b)=>b.h-a.h||b.w-a.w,
      (a,b)=>b.w-a.w||b.h-a.h,
      (a,b)=>(b.w+b.h)-(a.w+a.h)
    ];
    for(const axis of ["x","y"]){
      for(const sorter of fastSorters){
        consider(pack(items,SW,SH,axis,sorter));
        consider(packConcentrated(items,SW,SH,axis,sorter,mode));
      }
    }
  }else if(mode==="series"){
    const seriesSorters=[
      (a,b)=>a.pos-b.pos||a.copy-b.copy,
      (a,b)=>b.w*b.h-a.w*a.h||a.pos-b.pos,
      (a,b)=>b.h-a.h||b.w-a.w||a.pos-b.pos
    ];
    for(const axis of ["x","y"]){
      for(const sorter of seriesSorters){
        consider(pack(items,SW,SH,axis,sorter));
        consider(packConcentrated(items,SW,SH,axis,sorter,mode));
      }
    }
    for(const sorter of seriesSorters) consider(packMixedAxes(items,SW,SH,sorter));
  }

  return best;
}

function makeSvg(sheet,no,SW,SH){
  const L=64,T=30,R=22,VW=930;
  const scale=(VW-L-R)/SW;
  const BW=SW*scale,BH=SH*scale;

  const infoPositions=[];
  const infoPosSet=new Set();
  sheet.placements.forEach(p=>{
    const nameSpec=plateNameSpec(p.item,p.w*scale,p.h*scale);
    const posSpec=platePosSpec(p.item,p.w*scale,p.h*scale);
    if((!nameSpec.show && p.item.name) || !posSpec.show){
      if(!infoPosSet.has(p.item.pos)){
        infoPosSet.add(p.item.pos);
        infoPositions.push(p.item.pos);
      }
    }
  });

  const legendExtra=infoPositions.length ? 38+infoPositions.length*16 : 0;
  const B=40+legendExtra;
  const VH=T+BH+B;
  const pid=`hatch-${no}`;

  let s=`<svg viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Schnittplan Platte ${no}">
    <defs>
      <pattern id="${pid}" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#8b8f8b" stroke-width="1.4"/>
      </pattern>
    </defs>
    <rect x="${L}" y="${T}" width="${BW}" height="${BH}" fill="url(#${pid})" stroke="#111" stroke-width="1.8"/>`;

  for(let i=0;i<sheet.strips.length-1;i++){
    const st=sheet.strips[i];
    if(sheet.axis==="x"){
      const y=T+(st.offset+st.size)*scale;
      s+=`<rect x="${L}" y="${y}" width="${BW}" height="${Math.max(0.9,KERF*scale)}" fill="#f3f3f3"/>`;
    }else{
      const x=L+(st.offset+st.size)*scale;
      s+=`<rect x="${x}" y="${T}" width="${Math.max(0.9,KERF*scale)}" height="${BH}" fill="#f3f3f3"/>`;
    }
  }

  sheet.strips.forEach(st=>{
    const a=st.items.slice().sort((p,q)=>sheet.axis==="x"?p.x-q.x:p.y-q.y);
    for(let i=0;i<a.length-1;i++){
      const p=a[i];
      if(sheet.axis==="x"){
        const x=L+(p.x+p.w)*scale;
        s+=`<rect x="${x}" y="${T+st.offset*scale}" width="${Math.max(0.9,KERF*scale)}" height="${st.size*scale}" fill="#f3f3f3"/>`;
      }else{
        const y=T+(p.y+p.h)*scale;
        s+=`<rect x="${L+st.offset*scale}" y="${y}" width="${st.size*scale}" height="${Math.max(0.9,KERF*scale)}" fill="#f3f3f3"/>`;
      }
    }
  });

  sheet.placements.forEach(p=>{
    const x=L+p.x*scale,y=T+p.y*scale,w=p.w*scale,h=p.h*scale;
    const nameSpec=plateNameSpec(p.item,w,h);
    const posSpec=platePosSpec(p.item,w,h);
    const widthText=String(Math.round(p.w));
    const heightText=String(Math.round(p.h));
    const topDim=plateDimReadable(widthText,w,h);
    const sideDim=plateDimReadable(heightText,h,w);

    s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" stroke="#111" stroke-width="1.25"/>`;

    if(posSpec.show){
      s+=`<text x="${x+Math.min(6,w*0.14)}" y="${y+Math.min(h-2, posSpec.font+2)}" text-anchor="start" font-family="Arial" font-size="${posSpec.font}" font-weight="700" fill="#111">${escapeHtmlText(posSpec.text)}</text>`;
    }

    if(nameSpec.show){
      if(nameSpec.vertical){
        s+=`<text x="${x+w/2}" y="${y+h/2}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="${nameSpec.font}" fill="#111" transform="rotate(90 ${x+w/2} ${y+h/2})">${escapeHtmlText(nameSpec.text)}</text>`;
      }else{
        s+=`<text x="${x+w/2}" y="${y+h/2}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="${nameSpec.font}" fill="#111">${escapeHtmlText(nameSpec.text)}</text>`;
      }
    }

    if(topDim.show){
      const topInset=Math.min(h*0.36,Math.max(11,topDim.font*1.35+3));
      s+=`<text x="${x+w/2}" y="${y+topInset}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="${topDim.font}" font-weight="600" fill="#111">${widthText}</text>`;
    }
    if(sideDim.show){
      const sideInset=Math.min(w*0.42,Math.max(10,sideDim.font*1.25+3));
      const sideX=x+w-sideInset;
      s+=`<text x="${sideX}" y="${y+h/2}" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="${sideDim.font}" font-weight="600" fill="#111" transform="rotate(90 ${sideX} ${y+h/2})">${heightText}</text>`;
    }
  });

  s+=`<text x="${L+BW/2}" y="${T-7}" text-anchor="middle" font-family="Arial" font-size="11" fill="#111">${SW}</text>
      <text x="${L+BW+14}" y="${T+BH/2}" text-anchor="middle" font-family="Arial" font-size="11" fill="#111" transform="rotate(90 ${L+BW+14} ${T+BH/2})">${SH}</text>`;

  if(infoPositions.length){
    const firstY=T+BH+48;
    s+=`<text x="${L}" y="${firstY}" text-anchor="start" font-family="Arial" font-size="10" font-weight="700" fill="#222">Zusatzinfo:</text>`;
    infoPositions.forEach((pos,index)=>{
      const p=sheet.placements.find(pl=>pl.item.pos===pos);
      const name=p.item.name ? ` · ${escapeHtmlText(p.item.name)}` : "";
      s+=`<text x="${L}" y="${firstY+16+index*16}" text-anchor="start" font-family="Arial" font-size="10" fill="#333">${p.item.pos} · ${p.item.w} × ${p.item.h} mm${name}</text>`;
    });
  }

  s+=`</svg>`;
  return s;
}

function cutSequence(sheet){
  const arr=[];
  if(sheet.axis==="x"){
    sheet.strips.forEach(st=>{
      arr.push(`${st.size} mm breiten Streifen über die Plattenlänge abtrennen.`);
      st.items.slice().sort((a,b)=>a.x-b.x).forEach(p=>arr.push(`Pos. ${p.item.pos} auf ${p.w} mm ablängen.`));
    });
  }else{
    sheet.strips.forEach(st=>{
      arr.push(`${st.size} mm breiten Querstreifen abtrennen.`);
      st.items.slice().sort((a,b)=>a.y-b.y).forEach(p=>arr.push(`Pos. ${p.item.pos} auf ${p.h} mm ablängen.`));
    });
  }
  return arr;
}

function setNotice(type,html){
  $("notice").className="notice"+(type?" "+type:"");
  $("notice").innerHTML=html;
}


function sheetSignature(sheet){
  const placements=sheet.placements.slice()
    .sort((a,b)=>a.y-b.y || a.x-b.x || a.item.pos-b.item.pos)
    .map(p=>`${p.item.pos}:${p.x},${p.y},${p.w},${p.h},${p.rotated?1:0}`)
    .join("|");
  const strips=sheet.strips
    .map(s=>`${s.offset},${s.size}`)
    .join("|");
  return `${sheet.axis}#${strips}#${placements}`;
}

function groupIdenticalSheets(sheets){
  const groups=[];
  const map=new Map();

  sheets.forEach((sheet,index)=>{
    const sig=sheetSignature(sheet);
    if(map.has(sig)){
      map.get(sig).count++;
      map.get(sig).sheetNumbers.push(index+1);
    }else{
      const g={sheet,count:1,sheetNumbers:[index+1]};
      map.set(sig,g);
      groups.push(g);
    }
  });

  return groups;
}

function render(result){
  const {m,pos,items,sheets,use}=result;
  const groupLabel=m.edge&&m.edge!=="Standard"?`${m.group} · ${m.edge}`:m.group;
  $("resultMaterial").textContent=`${groupLabel} · ${String(m.thickness).replace(".",",")} mm · ${lengthFmt(m.width/10)} × ${lengthFmt(m.height/10)} cm`;
  $("sumSheets").textContent=sheets.length;
  $("sumParts").textContent=items.length;
  $("sumUse").textContent=use.toFixed(1).replace(".",",")+" %";
  const totalArea=sheets.length*m.width*m.height;
  const usedArea=items.reduce((a,p)=>a+p.w*p.h,0);
  const restAreaM2=Math.max(0,(totalArea-usedArea)/1000000);
  $("sumRest").textContent=restAreaM2.toFixed(2).replace(".",",")+" m²";
  const sheetDetail=$("v60SumSheetsDetail");
  if(sheetDetail)sheetDetail.textContent=`Platte${sheets.length===1?"":"n"} (${lengthFmt(m.width/10)} × ${lengthFmt(m.height/10)} cm)`;

  const groups=groupIdenticalSheets(sheets);
  const tabs=groups.map((g,i)=>`<button class="v60-sheet-tab ${i===0?"active":""}" type="button" data-v60-sheet-tab="${i}">${g.count>1?`${g.count}× identisch`:`Platte ${g.sheetNumbers[0]}`}</button>`).join("");
  const views=groups.map((g,i)=>`<div class="v60-sheet-view ${i===0?"":"hidden"}" data-v60-sheet-view="${i}"><section class="sheet">${makeSvg(g.sheet,i+1,m.width,m.height)}<div class="plan-mobile-actions"><button class="btn btn-outline plan-open-btn" type="button" data-group-index="${i}">Plan groß ansehen</button></div></section></div>`).join("");
  const details=groups.map((g,i)=>{
    const used=g.sheet.placements.reduce((a,p)=>a+p.w*p.h,0),area=m.width*m.height,rest=Math.max(0,area-used),pct=area?used/area*100:0;
    const cuts=cutSequence(g.sheet).length;
    return `<div class="v60-sheet-detail ${i===0?"":"hidden"}" data-v60-sheet-detail="${i}"><h4>${g.count>1?`${g.count}× identischer Plan`:`Platte ${g.sheetNumbers[0]} – Details`}</h4><div class="v60-detail-row"><span>Plattenmaß</span><strong>${lengthFmt(m.width/10)} × ${lengthFmt(m.height/10)} cm</strong></div><div class="v60-detail-row"><span>Verwendete Fläche</span><strong>${(used/1000000).toFixed(2).replace(".",",")} m² (${pct.toFixed(1).replace(".",",")} %)</strong></div><div class="v60-detail-row"><span>Restfläche</span><strong>${(rest/1000000).toFixed(2).replace(".",",")} m² (${(100-pct).toFixed(1).replace(".",",")} %)</strong></div><div class="v60-detail-row"><span>Schnittschritte</span><strong>${cuts}</strong></div><div class="v60-detail-row"><span>Fertigteile auf dieser Platte</span><strong>${g.sheet.placements.length}</strong></div><div class="v60-detail-legend"><span><i></i> Fertigteile</span><span><i class="rest"></i> Restfläche</span></div></div>`;
  }).join("");
  $("sheets").innerHTML=`<div class="v60-sheet-tabs">${tabs}</div><div class="v60-plate-plan-layout"><div class="v60-plate-main">${views}</div><aside class="v60-plate-details">${details}</aside></div>`;

  $("pieceSummary").innerHTML=`<div class="summary-table-wrap"><table class="summary-table"><thead><tr><th>Pos.</th><th>Fertigmaß</th><th>Menge</th><th>Furnierrichtung</th><th>Bezeichnung</th></tr></thead><tbody>${pos.map(p=>`<tr><td>${p.pos}</td><td>${p.w} × ${p.h} mm</td><td>${p.q}</td><td>${veneerDirectionLabel(p.veneer)}</td><td>${escapeHtmlText(p.name||"–")}</td></tr>`).join("")}</tbody></table></div>`;
  $("resultArea").classList.remove("hidden");
}
function calculate(){
  saveDraft();
  const m=currentMaterial();
  const pos=readPositions();
  const specialErr=validatePlateSpecialMaterial(m);
  const err=specialErr||validate(pos,m);
  if(err){
    setNotice("error",err);
    $("resultArea").classList.add("hidden");
    return;
  }
  const items=expandPositions(pos);
  const optimizationMode=plateOptimizationMode();
  const sheets=optimize(items,m.width,m.height,optimizationMode);
  if(!sheets){
    setNotice("error","Für diese Eingaben konnte kein praktikabler Schnittplan erzeugt werden.");
    $("resultArea").classList.add("hidden");
    return;
  }
  const usedArea=items.reduce((a,p)=>a+p.w*p.h,0);
  const totalArea=sheets.length*m.width*m.height;
  const use=100*usedArea/totalArea;
  currentResult={m,pos,items,sheets,use,optimizationMode,rawVeneer:plateRawVeneerDirection()};
  render(currentResult);
  setNotice("success",`Berechnung abgeschlossen: <strong>${sheets.length} Platte${sheets.length===1?"":"n"}</strong> erforderlich. Optimierung: <strong>${plateOptimizationLabel(optimizationMode)}</strong>. Furnierrichtung: <strong>wird je Position berücksichtigt</strong>.`);$("notice").classList.add("hidden");
}

function loadExample(){
  $("partsBody").innerHTML="";
  // Kleinere, sofort verständliche Teststücke für 2500 x 1250.
  [
    [1200,600,2,"Küche"],
    [800,400,2,"Bad"],
    [500,300,3,"Hauswirtschaft"]
  ].forEach(x=>addPartRow(x[0],x[1],x[2],x[3]));
  calculate();
}

function clearParts(){
  $("partsBody").innerHTML="";
  addPartRow();
  try{localStorage.removeItem(DRAFT_KEY);}catch(_){}
  currentResult=null;
  $("resultArea").classList.add("hidden");
  setNotice("","Neue Maße eingeben und anschließend auf <strong>„Schnittplan berechnen“</strong> klicken.");
}

function csvCell(value){
  const s=String(value??"");
  return /[;"\r\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s;
}
function csvText(){
  if(!currentResult) return "";
  const m=currentResult.m;
  const rows=[
    ["Material",`${m.group} ${m.thickness} mm${m.edge!=="Standard" ? " "+m.edge : ""}`],
    ["Rohplatte",`${m.width} x ${m.height} mm`],
    ["Saegefuge","3 mm"],
    ["Furnierrichtung","Je Position berücksichtigt"],
    ["Plattenbedarf",currentResult.sheets.length],
    [],
    ["Pos.","Laenge mm","Breite mm","Menge","Furnierrichtung","Bezeichnung"],
    ...currentResult.pos.map(p=>[p.pos,p.w,p.h,p.q,veneerDirectionLabel(p.veneer),p.name||""])
  ];
  return rows.map(r=>r.map(csvCell).join(";")).join("\r\n");
}

function downloadCsv(){
  if(!currentResult) return;
  const blob=new Blob(["\ufeff"+csvText()],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="stueckliste-zuschnitt.csv";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
}

function openModal(text){
  $("modalText").textContent=text;
  $("modalBackdrop").classList.remove("hidden");
}
function closeModal(){ $("modalBackdrop").classList.add("hidden"); }


const DRAFT_KEY="lowis-zuschnittplaner-draft-v16";

function draftData(){
  return {
    planName:$("platePlanName")?.value||"",
    optimizationMode:plateOptimizationMode(),
    rawVeneer:plateRawVeneerDirection(),
    group:$("groupSelect").value,
    edge:$("edgeSelect").value,
    format:$("formatSelect").value,
    thickness:$("thicknessSelect").value,
    specialPlate:{name:$("plateSpecialName")?.value||"",height:$("plateSpecialHeight")?.value||"",width:$("plateSpecialWidth")?.value||"",thickness:$("plateSpecialThickness")?.value||""},
    parts:[...$("partsBody").querySelectorAll("tr")].map(tr=>({
      w:tr.querySelector(".pw")?.value||"",
      h:tr.querySelector(".ph")?.value||"",
      q:tr.querySelector(".pq")?.value||"1",
      veneer:tr.querySelector(".pveneer")?.value||"any",
      name:tr.querySelector(".pname")?.value||""
    }))
  };
}

function saveDraft(){
  try{
    localStorage.setItem(DRAFT_KEY,JSON.stringify(draftData()));
  }catch(_){}
}

function restoreDraft(){
  let d=null;
  try{ d=JSON.parse(localStorage.getItem(DRAFT_KEY)||"null"); }catch(_){}
  if(!d || !Array.isArray(d.parts)) return false;
  if($("platePlanName"))$("platePlanName").value=d.planName||"";
  if($("plateOptimizationMode"))$("plateOptimizationMode").value=PLATE_OPTIMIZATION_MODES[d.optimizationMode]?d.optimizationMode:"material";
  if($("v60RawVeneerDisplay"))$("v60RawVeneerDisplay").value=d.rawVeneer==="cross"?"cross":"long";
  updatePlateOptimizationHelp();
  if(d.specialPlate){
    if($("plateSpecialName"))$("plateSpecialName").value=d.specialPlate.name||"";
    if($("plateSpecialHeight"))$("plateSpecialHeight").value=d.specialPlate.height||"";
    if($("plateSpecialWidth"))$("plateSpecialWidth").value=d.specialPlate.width||"";
    if($("plateSpecialThickness"))$("plateSpecialThickness").value=d.specialPlate.thickness||"";
  }

  if(d.group && [...$("groupSelect").options].some(o=>o.value===d.group)){
    $("groupSelect").value=d.group;
    rebuildMaterialSelectors();

    if(d.group!==SPECIAL_PLATE_GROUP && d.edge && [...$("edgeSelect").options].some(o=>o.value===d.edge)){
      $("edgeSelect").value=d.edge;
      rebuildFormats();
    }
    if(d.group!==SPECIAL_PLATE_GROUP && d.format && [...$("formatSelect").options].some(o=>o.value===d.format)){
      $("formatSelect").value=d.format;
      rebuildThicknesses();
    }
    if(d.group!==SPECIAL_PLATE_GROUP && d.thickness && [...$("thicknessSelect").options].some(o=>o.value===String(d.thickness))){
      $("thicknessSelect").value=String(d.thickness);
    }
    updateMaterialPreview();
  }

  $("partsBody").innerHTML="";
  d.parts.forEach(p=>addPartRow(p.w,p.h,Number(p.q)||1,p.name||"",false,p.veneer||"any"));
  if(!d.parts.length) addPartRow();
  return true;
}

document.addEventListener("input",ev=>{
  if(ev.target.closest("#partsBody")) saveDraft();
});
document.addEventListener("change",ev=>{
  if(ev.target.closest(".left-panel")) setTimeout(saveDraft,0);
});

function syncV60ProjectDescriptionCount(){
  const input=$("v60ProjectDescription"),count=$("v60ProjectDescriptionCount");
  if(count)count.textContent=`${String(input?.value||"").length}/200`;
}
$("v60ProjectDescription")?.addEventListener("input",()=>{syncV60ProjectDescriptionCount();saveLengthDraft();});
$("v60PlateLengthSelect")?.addEventListener("change",()=>{const fmt=$("formatSelect");const widths=[...fmt.options].map(o=>o.value).filter(v=>v60FormatParts(v).length===Number($("v60PlateLengthSelect").value));const sel=$("v60PlateWidthSelect");sel.innerHTML=widths.map(v=>{const x=v60FormatParts(v);return `<option value="${x.width}">${lengthFmt(x.width/10)}</option>`;}).join("");applyV60PlateFormat();});
$("v60PlateWidthSelect")?.addEventListener("change",applyV60PlateFormat);
$("groupSelect").addEventListener("change",()=>{rebuildMaterialSelectors();syncV60PlateFormatControls();});
$("edgeSelect").addEventListener("change",()=>{rebuildFormats();syncV60PlateFormatControls();});
$("formatSelect").addEventListener("change",()=>{rebuildThicknesses();syncV60PlateFormatControls();});
$("thicknessSelect").addEventListener("change",()=>{updateMaterialPreview();syncV60PlateFormatControls();});
["plateSpecialName","plateSpecialHeight","plateSpecialWidth","plateSpecialThickness"].forEach(id=>$(id)?.addEventListener("input",()=>{updateMaterialPreview();saveDraft();}));
$("platePlanName")?.addEventListener("input",saveDraft);
$("plateOptimizationMode")?.addEventListener("change",()=>{updatePlateOptimizationHelp();saveDraft();currentResult=null;$("resultArea").classList.add("hidden");setNotice("","Optimierungsart geändert. Bitte den Schnittplan neu berechnen.");});
$("v60RawVeneerDisplay")?.addEventListener("change",()=>{saveDraft();currentResult=null;$("resultArea").classList.add("hidden");setNotice("","Furnierrichtung der Rohplatte geändert. Bitte den Schnittplan neu berechnen.");});

$("addPart").addEventListener("click",()=>{addPartRow("","",1,"",true);setTimeout(saveDraft,0);});
$("loadExample").addEventListener("click",()=>{loadExample();setTimeout(saveDraft,0);});
$("clearParts").addEventListener("click",clearParts);


function keyboardShortcutAllowed(ev){
  if(ev.ctrlKey || ev.metaKey || ev.altKey || ev.repeat) return false;

  const el=ev.target;
  if(!el) return true;
  if(el.isContentEditable) return false;

  const tag=String(el.tagName||"").toLowerCase();
  if(tag==="textarea" || tag==="select") return false;

  if(tag==="input"){
    // In Text-, Mail-, Telefonfeldern usw. müssen + und - normal tippbar bleiben.
    // In den Zahlenfeldern der Zuschnittliste dienen sie als Schnellsteuerung.
    return el.type==="number" && !!el.closest("#partsBody");
  }
  return true;
}

document.addEventListener("keydown",ev=>{
  if(window.activePlannerMode && window.activePlannerMode!=="plate") return;
  if(!keyboardShortcutAllowed(ev)) return;

  const isPlus=ev.key==="+" || ev.code==="NumpadAdd";
  const isMinus=ev.key==="-" || ev.key==="−" || ev.code==="NumpadSubtract";

  if(isPlus){
    ev.preventDefault();
    addPartRow("","",1,"",true);
    saveDraft();
    return;
  }

  if(isMinus){
    ev.preventDefault();
    const rows=[...$("partsBody").querySelectorAll("tr")];
    const lastRow=rows[rows.length-1];
    if(!lastRow) return;
    removePartRow(lastRow,true);
  }
});


function openPlanModal(groupIndex){
  if(!currentResult) return;
  const groups=groupIdenticalSheets(currentResult.sheets);
  const g=groups[Number(groupIndex)];
  if(!g) return;

  const multi=g.count>1;
  $("planModalTitle").textContent=multi
    ? `${g.count}× identisch schneiden`
    : `Platte ${g.sheetNumbers[0]}`;

  $("planModalBody").innerHTML=makeSvg(
    g.sheet,
    Number(groupIndex)+1,
    currentResult.m.width,
    currentResult.m.height
  );

  $("planModal").classList.remove("hidden");
  $("planModal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function closePlanModal(){
  $("planModal").classList.add("hidden");
  $("planModal").setAttribute("aria-hidden","true");
  $("planModalBody").innerHTML="";
  document.body.style.overflow="";
}

document.addEventListener("click",ev=>{
  const btn=ev.target.closest(".plan-open-btn");
  if(btn) openPlanModal(btn.dataset.groupIndex);
  const tab=ev.target.closest("[data-v60-sheet-tab]");
  if(tab){
    const idx=tab.dataset.v60SheetTab;
    document.querySelectorAll("[data-v60-sheet-tab]").forEach(x=>x.classList.toggle("active",x===tab));
    document.querySelectorAll("[data-v60-sheet-view]").forEach(x=>x.classList.toggle("hidden",x.dataset.v60SheetView!==idx));
    document.querySelectorAll("[data-v60-sheet-detail]").forEach(x=>x.classList.toggle("hidden",x.dataset.v60SheetDetail!==idx));
  }
});

$("planModalClose").addEventListener("click",closePlanModal);

document.addEventListener("keydown",ev=>{
  if(ev.key==="Escape" && !$("planModal").classList.contains("hidden")){
    closePlanModal();
  }
});


let deferredInstallPrompt=null;

function isIOSDevice(){
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1);
}
function isStandaloneMode(){
  return window.matchMedia?.("(display-mode: standalone)")?.matches ||
         navigator.standalone===true;
}
function showRuntimeGuidance(){
  const notice=$("runtimeNotice");
  const bar=$("installBar");
  const installBtn=$("installAppBtn");
  const installText=$("installText");

  if(location.protocol==="file:"){
    notice.classList.remove("hidden");
    notice.innerHTML="<strong>Lokale Datei erkannt.</strong> Auf Windows/macOS kann das funktionieren. Auf iPhone/iPad öffnet die Dateien-/ChatGPT-Vorschau HTML jedoch häufig ohne vollständige JavaScript-Bedienung. Für iPhone/iPad diese Version deshalb über einen normalen HTTPS-Weblink in Safari öffnen.";
  }

  if(isStandaloneMode()){
    bar.classList.add("hidden");
    return;
  }

  if(isIOSDevice() && location.protocol.startsWith("http")){
    bar.classList.remove("hidden");
    installBtn.classList.add("hidden");
    installText.textContent="iPhone/iPad: In Safari auf Teilen tippen und „Zum Home-Bildschirm“ wählen. Danach startet der Planer wie eine App und bleibt auf dem Gerät hinterlegt.";
  }
}

window.addEventListener("beforeinstallprompt",ev=>{
  ev.preventDefault();
  deferredInstallPrompt=ev;
  $("installBar").classList.remove("hidden");
  $("installAppBtn").classList.remove("hidden");
  $("installText").textContent="Auf diesem Gerät kann der Zuschnittplaner installiert und wie eine App gestartet werden.";
});

$("installAppBtn").addEventListener("click",async()=>{
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  try{await deferredInstallPrompt.userChoice;}catch(_){}
  deferredInstallPrompt=null;
  $("installBar").classList.add("hidden");
});

window.addEventListener("appinstalled",()=>{
  $("installBar").classList.add("hidden");
});

if("serviceWorker" in navigator && location.protocol.startsWith("http")){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(reg=>reg.update()).catch(()=>{});
  });
}

$("calculate").addEventListener("click",calculate);
$("printPlan").addEventListener("click",createPlatePdf);
$("downloadCsv").addEventListener("click",createPlatePieceListPdf);


function pdfAscii(s){
  return String(s)
    .replace(/≥/g,">=").replace(/≤/g,"<=").replace(/→/g,"->")
    .replace(/[^\x20-\x7E\u00A0-\u00FF€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,"?");
}
function pdfEsc(s){
  const text=pdfAscii(s);
  const cp1252={"€":0x80,"‚":0x82,"ƒ":0x83,"„":0x84,"…":0x85,"†":0x86,"‡":0x87,"ˆ":0x88,"‰":0x89,"Š":0x8A,"‹":0x8B,"Œ":0x8C,"Ž":0x8E,"‘":0x91,"’":0x92,"“":0x93,"”":0x94,"•":0x95,"–":0x96,"—":0x97,"˜":0x98,"™":0x99,"š":0x9A,"›":0x9B,"œ":0x9C,"ž":0x9E,"Ÿ":0x9F};
  let out="";
  for(const ch of text){
    if(ch==="\\")out+="\\\\";
    else if(ch==="(")out+="\\(";
    else if(ch===")")out+="\\)";
    else{
      const code=ch.charCodeAt(0);
      const byte=cp1252[ch]??((code>=0x20&&code<=0x7E)||(code>=0xA0&&code<=0xFF)?code:null);
      if(byte===null)out+="?";
      else if(byte>=0x80)out+="\\"+byte.toString(8).padStart(3,"0");
      else out+=ch;
    }
  }
  return out;
}

function makePlatePieceListPdfBase64(result, customer){
  customer=Object.assign({name:"",company:"",email:"",phone:"",remarks:""},customer||{});
  const hasCustomer=Boolean(customer.name||customer.company||customer.email||customer.phone||customer.remarks);
  const pages=[];
  const t=(x,y,size,str,bold=false)=>`BT /F${bold?2:1} ${size} Tf ${x} ${y} Td (${pdfEsc(str)}) Tj ET\n`;
  const ln=(x1,y1,x2,y2)=>`${x1} ${y1} m ${x2} ${y2} l S\n`;
  const colX=[35,305],rowStep=12,bottom=44;
  let idx=0,pageNo=0;
  do{
    pageNo++;
    let c="0 G 0 g 0.55 w\n";
    c+=t(35,812,17,pageNo===1?"Platten-Zuschnitt - Stückliste":"Platten-Zuschnitt - Stückliste Fortsetzung",true);
    let y=792;
    if(pageNo===1){
      const planName=String($("platePlanName")?.value||"").trim();
      if(planName){c+=t(35,y,10.2,`Plan: ${planName}`,true);y-=15;}
      c+=t(35,y,9.2,`${result.m.group} ${result.m.thickness} mm - ${result.m.edge} | Rohplatte ${result.m.width} x ${result.m.height} mm | 3 mm Sägefuge | ${result.sheets.length} Platte${result.sheets.length===1?"":"n"}`);y-=14;
      c+=t(35,y,8.4,`Optimierung: ${plateOptimizationLabel(result.optimizationMode||"material")}`);y-=13;
      if(hasCustomer){c+=t(35,y,8.2,`Kunde: ${customer.name}${customer.company?" | "+customer.company:""}${customer.email?" | "+customer.email:""}${customer.phone?" | "+customer.phone:""}`);y-=13;}
      if(customer.remarks){const r=pdfAscii(customer.remarks).replace(/\s+/g," ").trim();c+=t(35,y,7.8,`Bemerkung: ${r.slice(0,140)}${r.length>140?" ...":""}`);y-=13;}
    }
    c+="0.86 G 0.35 w\n"+ln(35,y+2,560,y+2)+"0 G\n";y-=10;
    const rowsCap=Math.max(1,Math.floor((y-bottom)/rowStep));
    const chunk=result.pos.slice(idx,idx+rowsCap*2);
    const split=Math.ceil(chunk.length/2);
    chunk.forEach((pos,i)=>{
      const col=i>=split?1:0,row=col?i-split:i;
      let line=`P${pos.pos}  ${pos.q}x  ${pos.w} x ${pos.h} mm  | Furnier ${veneerDirectionLabel(pos.veneer)}${pos.name?"  "+pos.name:""}`;
      if(line.length>56)line=line.slice(0,53)+"...";
      c+=t(colX[col],y-row*rowStep,8.4,line);
    });
    idx+=chunk.length;
    pages.push(c);
    if(!chunk.length)break;
  }while(idx<result.pos.length);
  return buildSimplePdfBase64(pages,makePlatePortablePayload());
}

function makePlanPdfBase64(result, customer){
  customer=Object.assign({name:"",company:"",email:"",phone:"",remarks:""},customer||{});
  const hasCustomer=Boolean(customer.name||customer.company||customer.email||customer.phone||customer.remarks);
  const pages=[];
  const t=(x,y,size,str,bold=false)=>`BT /F${bold?2:1} ${size} Tf ${x} ${y} Td (${pdfEsc(str)}) Tj ET\n`;
  const tv=(x,y,size,str,bold=false)=>`BT /F${bold?2:1} ${size} Tf 0 1 -1 0 ${x} ${y} Tm (${pdfEsc(str)}) Tj ET\n`;
  const ln=(x1,y1,x2,y2)=>`${x1} ${y1} m ${x2} ${y2} l S\n`;
  const rc=(x,y,w,h,fill=false)=>`${x} ${y} ${w} ${h} re ${fill?"B":"S"}\n`;
  const bottom=42,rowStep=11.8,colX=[35,305];
  let page="",y=0,pageNo=0;

  const pushPage=()=>{if(page){pages.push(page);page="";}};
  const startPage=(kind="detail")=>{
    pushPage();pageNo++;
    page="0 G 0 g 0.55 w\n";
    if(kind==="main"){
      page+=t(35,812,17,"Platten-Zuschnittplan",true);
      y=793;
      const planName=String($("platePlanName")?.value||"").trim();
      if(planName){page+=t(35,y,10.2,`Plan: ${planName}`,true);y-=15;}
      page+=t(35,y,9.2,`${result.m.group} ${result.m.thickness} mm - ${result.m.edge} | Rohplatte ${result.m.width} x ${result.m.height} mm | 3 mm Sägefuge | ${result.sheets.length} Platte${result.sheets.length===1?"":"n"}`);y-=14;
      page+=t(35,y,8.4,`Optimierung: ${plateOptimizationLabel(result.optimizationMode||"material")}`);y-=13;
      if(hasCustomer){page+=t(35,y,8.2,`Kunde: ${customer.name}${customer.company?" | "+customer.company:""}${customer.email?" | "+customer.email:""}${customer.phone?" | "+customer.phone:""}`);y-=13;}
      if(customer.remarks){const r=pdfAscii(customer.remarks).replace(/\s+/g," ").trim();page+=t(35,y,7.8,`Bemerkung: ${r.slice(0,140)}${r.length>140?" ...":""}`);y-=13;}
    }else{
      page+=t(35,814,11.5,"Platten-Zuschnittplan - Fortsetzung",true);
      page+=t(510,814,7.2,`Seite ${pageNo}`);
      page+="0.86 G 0.35 w\n"+ln(35,804,560,804)+"0 G\n";
      y=790;
    }
  };

  const renderListChunk=(chunk,title=true)=>{
    if(title){page+=t(35,y,10,"Stückliste",true);y-=13;}
    const split=Math.ceil(chunk.length/2);
    chunk.forEach((pos,i)=>{
      const col=i>=split?1:0,row=col?i-split:i;
      let line=`P${pos.pos}  ${pos.q}x  ${pos.w} x ${pos.h} mm  | Furnier ${veneerDirectionLabel(pos.veneer)}${pos.name?"  "+pos.name:""}`;
      if(line.length>56)line=line.slice(0,53)+"...";
      page+=t(colX[col],y-row*rowStep,8.3,line);
    });
    y-=Math.ceil(chunk.length/2)*rowStep+8;
  };

  startPage("main");
  let posIndex=0;
  while(posIndex<result.pos.length){
    const left=result.pos.length-posIndex;
    const rowsNeeded=Math.ceil(left/2);
    const rowsWithDetail=Math.max(0,Math.floor((y-(bottom+225+12))/rowStep));
    if(rowsWithDetail>0 && rowsNeeded<=rowsWithDetail){
      const chunk=result.pos.slice(posIndex);
      renderListChunk(chunk,true);posIndex=result.pos.length;break;
    }
    const rowsFull=Math.max(1,Math.floor((y-bottom-10)/rowStep));
    const take=Math.min(left,rowsFull*2);
    renderListChunk(result.pos.slice(posIndex,posIndex+take),true);posIndex+=take;
    if(posIndex<result.pos.length)startPage("detail");
  }
  if(!result.pos.length){page+=t(35,y,10,"Stückliste: keine Positionen",true);y-=18;}

  const pdfGroups=groupIdenticalSheets(result.sheets);
  const plateNotes=(sh,sc)=>{
    const set=new Set(),items=[];
    sh.placements.forEach(pl=>{
      const nameSpec=plateNameSpec(pl.item,pl.w*sc,pl.h*sc);
      const posSpec=platePosSpec(pl.item,pl.w*sc,pl.h*sc);
      if((pl.item.name && !nameSpec.show) || !posSpec.show){
        if(!set.has(pl.item.pos)){set.add(pl.item.pos);items.push(pl.item.pos);}
      }
    });
    return items;
  };

  const drawGroup=(group,top,maxBlockH)=>{
    const sh=group.sheet;
    const heading=group.count>1?`${group.count}x identisch schneiden`:`Platte ${group.sheetNumbers[0]}`;
    const headH=28;
    const maxW=519;
    // zuerst grob skalieren, danach den Platz fuer kleine-Teile-Hinweise beruecksichtigen
    let sc=Math.min(maxW/result.m.width,Math.max(90,maxBlockH-48)/result.m.height);
    let info=plateNotes(sh,sc);
    const infoRows=Math.min(3,Math.max(0,Math.ceil(info.length/4)));
    const noteH=12+infoRows*7;
    sc=Math.min(maxW/result.m.width,Math.max(80,maxBlockH-headH-noteH)/result.m.height);
    info=plateNotes(sh,sc);
    const bw=result.m.width*sc,bh=result.m.height*sc;
    const bx=38,drawTop=top-headH,by=drawTop-bh;
    let out="";
    out+=t(35,top,12,heading,true);
    out+=t(35,top-13,7.4,`${result.m.width} x ${result.m.height} mm | ${result.m.group} ${result.m.thickness} mm | ${plateOptimizationLabel(result.optimizationMode||"material")}${group.count>1?` | Platten ${group.sheetNumbers.join(", ")}`:""}`);
    out+="0.96 g\n"+rc(bx,by,bw,bh,true)+"0 g\n";
    out+="0.80 G 0.32 w\n";
    for(let d=-bh;d<bw;d+=10)out+=ln(bx+d,by,bx+d+bh,by+bh);
    out+="0 G 0.62 w\n"+rc(bx,by,bw,bh,false);
    sh.placements.forEach(pl=>{
      const x=bx+pl.x*sc,y0=by+(result.m.height-(pl.y+pl.h))*sc,w=pl.w*sc,h=pl.h*sc;
      const nameSpec=plateNameSpec(pl.item,w,h);
      const posSpec=platePosSpec(pl.item,w,h);
      const topDim=plateDimReadable(String(Math.round(pl.w)),w,h);
      const sideDim=plateDimReadable(String(Math.round(pl.h)),h,w);
      out+="1 g\n"+rc(x,y0,w,h,true)+"0 g\n0.55 w\n"+rc(x,y0,w,h,false);
      if(posSpec.show){
        out+=t(x+Math.min(3.5,w*0.12),y0+h-Math.min(2.8+h*0.04,h-1.2),Math.max(5.8,Math.min(8,posSpec.font*0.92)),`${pl.item.pos}`,true);
      }
      if(nameSpec.show){
        const fs=Math.max(6,Math.min(9,nameSpec.font*0.9));
        if(nameSpec.vertical){
          out+=tv(x+w/2+fs*0.2,y0+Math.max(3,h/2-(textApprox(nameSpec.text,fs)/2)*0.62),fs,pdfAscii(nameSpec.text));
        }else{
          out+=t(x+Math.max(2,w/2-textApprox(nameSpec.text,fs)/2),y0+h/2-1.6,fs,pdfAscii(nameSpec.text));
        }
      }
      if(topDim.show){
        const fs=Math.max(4.2,Math.min(11.5,topDim.font*0.82));
        const inset=Math.min(h*0.34,Math.max(9,fs*1.3+3));
        out+=t(x+Math.max(1.5,w/2-textApprox(String(Math.round(pl.w)),fs)/2),y0+h-inset,fs,`${pl.w}`,true);
      }
      if(sideDim.show){
        const fs=Math.max(4.2,Math.min(11.5,sideDim.font*0.82));
        const inset=Math.min(w*0.42,Math.max(9,fs*1.25+3));
        const sx=x+w-inset;
        out+=tv(sx,y0+Math.max(2,h/2-(textApprox(String(Math.round(pl.h)),fs)/2)*0.62),fs,`${pl.h}`,true);
      }
    });
    let noteY=by-8;
    if(info.length){
      const details=info.map(pos=>{const pl=sh.placements.find(x=>x.item.pos===pos);return `P${pl.item.pos} ${pl.item.w}x${pl.item.h}${pl.item.name?" "+pl.item.name:""}${pl.rotated?" gedr.":""}`;});
      const chunks=[];let line="Kleine Teile: ";details.forEach(d=>{if((line+d).length>100){chunks.push(line.trim());line="";}line+=(line?" | ":"")+d;});if(line)chunks.push(line.trim());
      chunks.slice(0,3).forEach(x=>{out+=t(38,noteY,6.4,x);noteY-=8;});
    }
    out+=t(38,noteY,6.3,"Rest schraffiert | Positionsnummern entsprechen der Stückliste | Furnierrichtung laut Stückliste");noteY-=8;
    return {content:out,usedHeight:Math.min(maxBlockH,top-noteY+3)};
  };

  for(let gi=0;gi<pdfGroups.length;gi++){
    let remaining=y-bottom;
    const groupsLeft=pdfGroups.length-gi;
    if(remaining<215){startPage("detail");remaining=y-bottom;}
    let maxBlockH=remaining;
    if(groupsLeft>=2 && remaining>=445)maxBlockH=Math.min(320,(remaining-8)/2);
    const block=drawGroup(pdfGroups[gi],y,maxBlockH);
    page+=block.content;y-=block.usedHeight+8;
    if(gi<pdfGroups.length-1 && y-bottom<205)startPage("detail");
  }
  pushPage();
  return buildSimplePdfBase64(pages,makePlatePortablePayload());
}

function safePdfFilePart(value){
  return String(value||"")
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-zA-Z0-9_-]+/g,"-")
    .replace(/^-+|-+$/g,"")
    .slice(0,60);
}

function pdfTimestamp(){
  const d=new Date(),pad=n=>String(n).padStart(2,"0");
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

function openPdfBase64(base64,filename){
  const binary=atob(base64);
  const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
  const blob=new Blob([bytes],{type:"application/pdf"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.target="_blank";
  a.rel="noopener";
  a.download=filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),60000);
}

function createPlatePdf(){
  if(!currentResult){setNotice("error","Bitte zuerst einen Plattenzuschnitt berechnen.");return;}
  const plan=safePdfFilePart($("platePlanName")?.value||"");
  const filename=`Lowis-Plattenzuschnitt${plan?"-"+plan:""}-${pdfTimestamp()}.pdf`;
  openPdfBase64(makePlanPdfBase64(currentResult,null),filename);
}

function createPlatePieceListPdf(){
  if(!currentResult){setNotice("error","Bitte zuerst einen Plattenzuschnitt berechnen.");return;}
  const plan=safePdfFilePart($("platePlanName")?.value||"");
  const filename=`Lowis-Stueckliste-Plattenzuschnitt${plan?"-"+plan:""}-${pdfTimestamp()}.pdf`;
  openPdfBase64(makePlatePieceListPdfBase64(currentResult,null),filename);
}

function createLengthPdf(){
  if(!currentLengthResult){setLengthNotice("error","Bitte zuerst einen Längenzuschnitt berechnen.");return;}
  const project=currentLengthResult.mode==="project"?safePdfFilePart(currentLengthResult.projectName):safePdfFilePart($("lengthPlanName")?.value||"");
  const filename=`Lowis-Laengenzuschnitt${project?"-"+project:""}-${pdfTimestamp()}.pdf`;
  openPdfBase64(makeLengthPlanPdfBase64(currentLengthResult,null),filename);
}

function createLengthPieceListPdf(){
  if(!currentLengthResult){setLengthNotice("error","Bitte zuerst einen Längenzuschnitt berechnen.");return;}
  const project=currentLengthResult.mode==="project"?safePdfFilePart(currentLengthResult.projectName):safePdfFilePart($("lengthPlanName")?.value||"");
  const filename=`Lowis-Stueckliste-Laengenzuschnitt${project?"-"+project:""}-${pdfTimestamp()}.pdf`;
  openPdfBase64(makeLengthPieceListPdfBase64(currentLengthResult,null),filename);
}

function createCurrentPdf(){
  if(window.activePlannerMode==="length")createLengthPdf();
  else createPlatePdf();
}

function createCurrentPieceListPdf(){
  if(window.activePlannerMode==="length")createLengthPieceListPdf();
  else createPlatePieceListPdf();
}

function utf8Base64(str){
  return btoa(unescape(encodeURIComponent(str)));
}

function emlSafeHeader(str){
  return String(str).replace(/[\r\n]+/g," ").trim();
}

function makeEml(result, customer){
  const boundary="----=_Lowis_Schnittplan_"+Date.now();
  const ref="TEST-"+new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14);
  const subject=`TEST Platten-Zuschnittanfrage ${ref}`;
  const material=`${result.m.group} ${String(result.m.thickness).replace(".",",")} mm · ${result.m.width} × ${result.m.height} mm${result.m.edge!=="Standard" ? " · "+result.m.edge : ""}`;
  const grouped=groupIdenticalSheets(result.sheets);

  const text=[
    "Neue unverbindliche Platten-Zuschnittanfrage",
    "",
    `Referenz: ${ref}`,
    `Kunde: ${customer.name}`,
    customer.company ? `Firma: ${customer.company}` : "",
    `E-Mail: ${customer.email}`,
    customer.phone ? `Telefon: ${customer.phone}` : "",
    "",
    `Material: ${material}`,
    "Sägefuge: 3 mm fest",
    `Drehen: automatisch aktiv`,
    `Berechneter Plattenbedarf: ${result.sheets.length}`,
    `Unterschiedliche Schnittbilder: ${grouped.length}`,
    "",
    "Stückliste:",
    ...result.pos.map(p=>`Pos. ${p.pos}: ${p.q} × ${p.w} × ${p.h} mm | Furnierrichtung ${veneerDirectionLabel(p.veneer)}${p.name ? " · "+p.name : ""}`),
    customer.remarks ? "" : null,
    customer.remarks ? "Bemerkung:" : null,
    customer.remarks || null,
    "",
    "Schnittplan-PDF und CSV-Stückliste sind angehängt."
  ].filter(v=>v!==null).join("\r\n");

  const pdfB64=makePlanPdfBase64(result,customer);
  const csvB64=utf8Base64("\ufeff"+csvText());

  const headers=[
    "To: ",
    `Reply-To: ${emlSafeHeader(customer.email)}`,
    `Subject: =?UTF-8?B?${utf8Base64(subject)}?=`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    ""
  ];

  const parts=[
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    utf8Base64(text),

    `--${boundary}`,
    `Content-Type: application/pdf; name="schnittplan-${ref}.pdf"`,
    `Content-Disposition: attachment; filename="schnittplan-${ref}.pdf"`,
    "Content-Transfer-Encoding: base64",
    "",
    pdfB64.match(/.{1,76}/g).join("\r\n"),

    `--${boundary}`,
    `Content-Type: text/csv; charset="UTF-8"; name="stueckliste-${ref}.csv"`,
    `Content-Disposition: attachment; filename="stueckliste-${ref}.csv"`,
    "Content-Transfer-Encoding: base64",
    "",
    csvB64.match(/.{1,76}/g).join("\r\n"),

    `--${boundary}--`,
    ""
  ];

  return {ref,content:headers.concat(parts).join("\r\n")};
}

function downloadEml(content,filename){
  const blob=new Blob([content],{type:"message/rfc822"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
}

function sendRequest(ev){
  ev.preventDefault();
  if(!currentResult){
    setNotice("error","Bitte zuerst einen Schnittplan berechnen.");
    return;
  }

  const fd=new FormData(ev.currentTarget);
  const customer={
    name:String(fd.get("name")||"").trim(),
    company:String(fd.get("company")||"").trim(),
    email:String(fd.get("email")||"").trim(),
    phone:String(fd.get("phone")||"").trim(),
    remarks:String(fd.get("remarks")||"").trim()
  };

  if(!customer.name || !customer.email){
    setNotice("error","Bitte Name und E-Mail ausfüllen.");
    return;
  }

  const btn=$("sendRequestBtn");
  btn.disabled=true;
  btn.textContent="E-Mail wird erstellt …";

  try{
    const eml=makeEml(currentResult,customer);
    downloadEml(eml.content,`Lowis-Zuschnittanfrage-${eml.ref}.eml`);
    openModal(
      "Die fertige .eml-Datei wurde heruntergeladen. Öffne sie in Outlook, Thunderbird oder Windows Mail. "+
      "PDF-Schnittplan und CSV-Stückliste sind angehängt. Den Empfänger bitte im Mailprogramm eintragen. "+
      "Danach nur noch auf „Senden“ klicken."
    );
  }catch(err){
    setNotice("error","Die E-Mail-Datei konnte nicht erstellt werden: "+err.message);
  }finally{
    btn.disabled=false;
    btn.textContent="E-Mail-Anfrage erstellen";
  }
}



/* =========================================================
   GEMEINSAME OBERFLÄCHE / LÄNGENZUSCHNITT – V36
   ========================================================= */
window.activePlannerMode="plate";
let activeLengthMode="single";
const LENGTH_DRAFT_KEY="lowis-laengenzuschnitt-draft-v5";
const SAVED_PROJECTS_KEY="lowis-laengenzuschnitt-projects-v1";
let currentProjectId=null;
let currentLengthResult=null;
const LENGTH_KERF_CM=0.5;
const DEFAULT_REST_LIMIT_CM=200;
const singleRawSelection={};
const projectRawSelection={};
function lengthFmt(value){ return Number(value).toLocaleString("de-DE",{maximumFractionDigits:1}); }

const LENGTH_CATALOG={
  "KVH":{
    "4x6":[502],"4x10":[502],"4x16":[502],"4x20":[502],
    "6x8":[502,1302],"6x10":[1302],"6x12":[1302],"6x14":[1302],"6x16":[1302],"6x18":[1302],"6x20":[1302],
    "8x8":[1302],"8x10":[1302],"8x12":[1302],"8x14":[1302],"8x16":[1302],"8x20":[1302],"8x24":[1302],
    "10x10":[1302],"10x12":[1302],"10x16":[1302],"10x20":[1302],"10x24":[1302],
    "12x12":[1302],"12x16":[1302],"12x20":[1302],"12x24":[1302]
  },
  "BSH":{
    "6x12":[1202],"6x14":[1202],"6x16":[1202],"6x20":[1202],
    "8x12":[1202],"8x16":[1202],"8x20":[1202],"8x24":[1202],
    "10x10":[1202],"10x12":[1202],"10x16":[1202],"10x20":[1202],"10x24":[1202],
    "12x12":[1202],"12x16":[1202],"12x20":[1202],"12x24":[1202],"14x14":[1202]
  },
  "Bauholz":{
    "8x10":[300,350,400,450,500],
    "10x10":[400,500,600],"10x12":[400,500,600],"12x12":[400,500,600]
  },
  "Rahmen 40x60 mm":{"4x6":[300,400,500]},
  "Rahmen 40x60 mm gehobelt":{"4x6":[300,420,480]},
  "Rahmen 60x60 mm gehobelt":{"6x6":[300,420,480]},
  "Latten 24x48 mm":{"2,4x4,8":[200,300,400,500]},
  "Latten 31x52mm S10":{"3,1x5,2":[500]}
};
const SPECIAL_LENGTH_MATERIAL="Sondermaß";
const LENGTH_MATERIALS=[...Object.keys(LENGTH_CATALOG),SPECIAL_LENGTH_MATERIAL];

function lengthMaterialOrder(material){
  const i=LENGTH_MATERIALS.indexOf(material);
  return i>=0?i:999;
}
function lengthDimensionOrder(dimension){
  const d=parseDimension(dimension);
  return [d.w,d.h,String(dimension)];
}
function compareLengthMaterialDimension(a,b){
  const mr=lengthMaterialOrder(a.material)-lengthMaterialOrder(b.material);
  if(mr) return mr;
  const ad=lengthDimensionOrder(a.dimension),bd=lengthDimensionOrder(b.dimension);
  return (ad[0]-bd[0])||(ad[1]-bd[1])||String(ad[2]).localeCompare(String(bd[2]),"de");
}
function sortedLengthGroupsForPdf(groups){
  return (groups||[]).slice().sort(compareLengthMaterialDimension);
}
function sortedLengthPositionsForPdf(pos){
  return (pos||[]).slice().sort((a,b)=>compareLengthMaterialDimension(a,b)||(a.pos-b.pos));
}

function parseDimension(dim){
  const parts=String(dim).split("x").map(v=>Number(v.replace(",",".")));
  return {w:parts[0]||0,h:parts[1]||0};
}
function customDimensionKey(height,width){return `${Math.round(Number(height)*10)/10}x${Math.round(Number(width)*10)/10}`;}
function lengthDimensionText(material,dimension,obj=null){
  if(material===SPECIAL_LENGTH_MATERIAL){
    const d=parseDimension(dimension),h=Number(obj?.customHeight)||d.w,w=Number(obj?.customWidth)||d.h;
    return `Höhe ${lengthFmt(h)} cm · Breite ${lengthFmt(w)} cm`;
  }
  return `${dimension} cm`;
}
function lengthStockText(material,raws){return material===SPECIAL_LENGTH_MATERIAL?`Länge ${(raws||[]).map(v=>lengthFmt(v)).join(" / ")} cm`:`Rohlängen ${(raws||[]).map(v=>lengthFmt(v)).join(" / ")} cm`;}
function lengthPositionMaterialText(p){
  if(p.material===SPECIAL_LENGTH_MATERIAL)return `Sondermaß H ${lengthFmt(p.customHeight)} × B ${lengthFmt(p.customWidth)} cm · L ${lengthFmt(p.customStockLength)} cm`;
  return `${p.material} ${p.dimension} cm`;
}
function lengthGroupKey(material,dimension){return material+"||"+dimension;}
function catalogRaws(material,dimension){return ((LENGTH_CATALOG[material]||{})[dimension]||[]).slice();}
function isPartialSaleRaw(material,raw){return (material==="KVH"&&Number(raw)===1302)||(material==="BSH"&&Number(raw)===1202);}
function normalizeRestLimit(value){
  if(value===null||value===undefined||String(value).trim()==="") return DEFAULT_REST_LIMIT_CM;
  const n=Number(value);
  return Number.isFinite(n)&&n>=0 ? Math.round(n*10)/10 : DEFAULT_REST_LIMIT_CM;
}
function getProjectRestLimit(){
  return normalizeRestLimit($("projectRestLimit")?.value);
}
function getSingleRestLimit(){
  return normalizeRestLimit($("singleRestLimit")?.value);
}
function classifyLengthRest(material,raw,rest,restLimit=DEFAULT_REST_LIMIT_CM){
  rest=Math.max(0,Math.round(Number(rest)*10)/10);
  restLimit=normalizeRestLimit(restLimit);
  if(rest<=0.0001) return {customer:0,warehouse:0,type:"none",label:"Kein Rest"};
  if(isPartialSaleRaw(material,raw)){
    if(rest<restLimit) return {customer:rest,warehouse:0,type:"customer",label:`Kundenrest ${lengthFmt(rest)} cm`};
    return {customer:0,warehouse:rest,type:"warehouse",label:`Lagerrest ${lengthFmt(rest)} cm`};
  }
  return {customer:rest,warehouse:0,type:"customer",label:`Kundenrest ${lengthFmt(rest)} cm`};
}
function saleRuleText(material,raws,restLimit=DEFAULT_REST_LIMIT_CM){
  restLimit=normalizeRestLimit(restLimit);
  const limit=lengthFmt(restLimit);
  const special=raws.some(r=>isPartialSaleRaw(material,r));
  const normal=raws.some(r=>!isPartialSaleRaw(material,r));
  if(special&&!normal) return `Zuschnittverkauf: Rest < ${limit} cm zum Kunden, ab ${limit} cm Lagerrest.`;
  if(!special&&normal) return "Komplette Handelslänge wird verkauft; verbleibender Rest gehört zum Kunden.";
  return `502-cm-Länge komplett verkauft; bei 1302 cm gilt: Rest < ${limit} cm Kunde, ab ${limit} cm Lager.`;
}
function combinedSaleRuleText(groups,restLimit=DEFAULT_REST_LIMIT_CM){
  restLimit=normalizeRestLimit(restLimit);
  const limit=lengthFmt(restLimit);
  let special=false,normal=false;
  (groups||[]).forEach(g=>(g.raws||[]).forEach(r=>{if(isPartialSaleRaw(g.material,r)) special=true; else normal=true;}));
  if(special&&!normal) return `Zuschnittverkauf: Rest < ${limit} cm zum Kunden, ab ${limit} cm Lagerrest.`;
  if(!special&&normal) return "Komplette Handelslänge wird verkauft; verbleibender Rest gehört zum Kunden.";
  return `Restregel nur KVH 1302 / BSH 1202: < ${limit} cm Kunde, ab ${limit} cm Lager; andere Rohlängen = Komplettverkauf.`;
}
function ensureSelection(store,key,raws){
  const valid=new Set(raws.map(Number));
  if(!store[key]||![...store[key]].some(v=>valid.has(Number(v)))) store[key]=new Set(raws.map(Number));
  else store[key]=new Set([...store[key]].map(Number).filter(v=>valid.has(v)));
  return store[key];
}
function selectedLengthConfig(){
  const material=$("lengthMaterialSelect").value;
  if(material===SPECIAL_LENGTH_MATERIAL){
    const customHeight=Math.round((Number($("lengthSpecialHeight")?.value)||0)*10)/10;
    const customWidth=Math.round((Number($("lengthSpecialWidth")?.value)||0)*10)/10;
    const customLength=Math.round((Number($("lengthSpecialLength")?.value)||0)*10)/10;
    const dimension=customDimensionKey(customHeight,customWidth),allRaws=customLength>0?[customLength]:[];
    return {material,dimension,allRaws,raws:allRaws.slice(),w:customWidth,h:customHeight,key:`${material}||${dimension}||${customLength}`,customHeight,customWidth,customLength,isSpecial:true};
  }
  const dimension=$("lengthDimensionSelect").value;
  const allRaws=catalogRaws(material,dimension);
  const key=lengthGroupKey(material,dimension);
  const selected=ensureSelection(singleRawSelection,key,allRaws);
  const raws=allRaws.filter(r=>selected.has(Number(r)));
  const d=parseDimension(dimension);
  return {material,dimension,allRaws,raws,w:d.w,h:d.h,key};
}
function setPlannerMode(mode){
  mode=mode==="length"?"length":"plate";
  window.activePlannerMode=mode;
  $("platePlannerView").classList.toggle("hidden",mode!=="plate");
  $("lengthPlannerView").classList.toggle("hidden",mode!=="length");
  $("plannerTabPlate").classList.toggle("active",mode==="plate");
  $("plannerTabLength").classList.toggle("active",mode==="length");
  $("plannerTabPlate").setAttribute("aria-selected",String(mode==="plate"));
  $("plannerTabLength").setAttribute("aria-selected",String(mode==="length"));
  if(mode==="plate"){
    $("heroTitle").textContent="Platten-Zuschnittplaner";
    $("heroText").textContent="Material auswählen, Fertigmaße eingeben und einen optimierten Plattenzuschnitt berechnen. Priorität: möglichst wenige Platten und anschließend möglichst große, zusammenhängende Reststücke.";
  }else{
    $("heroTitle").textContent="Längen-Zuschnittplaner";
    $("heroText").textContent="Einzelmaterial oder mehrere Dimensionen in einem Projekt erfassen. Material und Rohlängen sind fest hinterlegt; die Sägefuge beträgt fest 0,5 cm.";
  }
  try{localStorage.setItem("lowis-active-planner",mode);}catch(_){ }
  window.scrollTo({top:0,behavior:"smooth"});
}
function setLengthMode(mode,save=true){
  activeLengthMode=mode==="project"?"project":"single";
  $("lengthModeSingle").classList.toggle("active",activeLengthMode==="single");
  $("lengthModeProject").classList.toggle("active",activeLengthMode==="project");
  $("lengthSingleConfig").classList.toggle("hidden",activeLengthMode!=="single");
  $("lengthSingleParts").classList.toggle("hidden",activeLengthMode!=="single");
  $("lengthSinglePlanNameWrap")?.classList.toggle("hidden",activeLengthMode!=="single");
  $("lengthProjectConfig").classList.toggle("hidden",activeLengthMode!=="project");
  $("lengthSinglePlanNameWrap")?.classList.toggle("hidden",activeLengthMode!=="single");
  $("lengthProjectPlanNameWrap")?.classList.toggle("hidden",activeLengthMode!=="project");
  if(activeLengthMode==="project") rebuildProjectRawSettings();
  $("lengthResultArea").classList.add("hidden");
  currentLengthResult=null;
  setLengthNotice("",activeLengthMode==="single"?"Gib Fertiglängen ein oder lade das Beispiel.":"Gib die Positionen des Projekts ein. Unterschiedliche Materialien und Dimensionen werden automatisch getrennt optimiert.");
  if(save) saveLengthDraft();
}

function rebuildLengthDimensions(preferred=""){
  const material=$("lengthMaterialSelect").value,special=material===SPECIAL_LENGTH_MATERIAL;
  $("lengthCatalogFields")?.classList.toggle("hidden",special);
  $("lengthSpecialFields")?.classList.toggle("hidden",!special);
  $("lengthStockDisclaimer")?.classList.toggle("hidden",special);
  if(special){updateLengthMaterial();return;}
  const dims=Object.keys(LENGTH_CATALOG[material]||{});
  $("lengthDimensionSelect").innerHTML=dims.map(d=>`<option value="${escapeAttr(d)}">${escapeHtmlText(d)}</option>`).join("");
  if(preferred&&dims.includes(preferred)) $("lengthDimensionSelect").value=preferred;
  updateLengthMaterial();
}
function renderRawButtons(targetId,material,dimension,store,onChange){
  const target=$(targetId);if(!target)return;
  const raws=catalogRaws(material,dimension),key=lengthGroupKey(material,dimension),selected=ensureSelection(store,key,raws);
  target.innerHTML=raws.map(r=>`<button type="button" class="raw-choice ${selected.has(Number(r))?"active":""}" data-raw="${r}" aria-pressed="${selected.has(Number(r))}">${lengthFmt(r)} cm</button>`).join("");
  target.querySelectorAll(".raw-choice").forEach(btn=>btn.addEventListener("click",()=>{
    const raw=Number(btn.dataset.raw),set=ensureSelection(store,key,raws);
    if(set.has(raw)){
      if(set.size===1){setLengthNotice("error","Mindestens eine Rohlänge muss berücksichtigt werden.");return;}
      set.delete(raw);
    }else set.add(raw);
    btn.classList.toggle("active",set.has(raw));btn.setAttribute("aria-pressed",String(set.has(raw)));
    onChange?.();saveLengthDraft();
  }));
}
function updateLengthMaterial(){
  const cfg=selectedLengthConfig();
  if(!cfg.isSpecial){
    renderRawButtons("lengthRawChoices",cfg.material,cfg.dimension,singleRawSelection,()=>{updateLengthPreview();});
    $("lengthRawChoiceNote").textContent=cfg.allRaws.length>1?"Anklicken zum Ein-/Ausschalten. Nur markierte Rohlängen fließen in die Optimierung ein.":"Für diese Dimension ist eine feste Rohlänge hinterlegt.";
  }
  updateLengthPreview();saveLengthDraft();
}
function updateLengthPreview(){
  const cfg=selectedLengthConfig();
  const raws=cfg.raws;
  if(cfg.isSpecial){
    $("lengthMaterialPreview").innerHTML=`<span class="tag">Sondermaß</span><strong>Höhe ${lengthFmt(cfg.customHeight)} cm · Breite ${lengthFmt(cfg.customWidth)} cm · Länge ${lengthFmt(cfg.customLength)} cm</strong><small>Sägefuge 0,5 cm · verbleibender Rest gehört zum Kunden.</small>`;
    return;
  }
  $("lengthMaterialPreview").innerHTML=`<span class="tag">Aktuelle Auswahl</span><strong>${escapeHtmlText(cfg.material)} · ${escapeHtmlText(cfg.dimension)} cm</strong><small>Berücksichtigte Rohlängen: ${raws.length?raws.map(lengthFmt).join(" / "):"keine"} cm · ${escapeHtmlText(saleRuleText(cfg.material,raws.length?raws:cfg.allRaws))}</small>`;
}

function addLengthPartRow(len="",q=1,name="",focus=false){
  const tr=document.createElement("tr");
  tr.innerHTML=`<td class="v59-rowno"></td><td><input class="ll" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeAttr(len)}"></td><td><input class="lq" type="number" min="1" step="1" inputmode="numeric" value="${escapeAttr(q)}"></td><td><input class="lname" type="text" value="${escapeAttr(name)}" placeholder="optional"></td><td><button class="icon-btn length-row-delete" type="button" aria-label="Position entfernen">×</button></td>`;
  $("lengthPartsBody").appendChild(tr);tr.querySelector(".length-row-delete").addEventListener("click",()=>removeLengthPartRow(tr,true));
  if(focus)setTimeout(()=>tr.querySelector(".ll")?.focus(),0);saveLengthDraft();
}
function removeLengthPartRow(tr,confirmIt){if(!tr)return;if(confirmIt&&!window.confirm("Letzte Position wirklich entfernen?"))return;tr.remove();if(!$("lengthPartsBody").children.length)addLengthPartRow();saveLengthDraft();}
function clearLengthParts(){$("lengthPartsBody").innerHTML="";addLengthPartRow();currentLengthResult=null;$("lengthResultArea").classList.add("hidden");setLengthNotice("","Neue Fertiglängen in cm eingeben und anschließend auf <strong>„Längenzuschnitt berechnen“</strong> klicken.");saveLengthDraft();}
function loadLengthExample(){$("lengthMaterialSelect").value="KVH";rebuildLengthDimensions("6x12");$("lengthPartsBody").innerHTML="";[[280,4,"Pfosten"],[215,4,"Riegel"],[120,8,"Strebe"]].forEach(x=>addLengthPartRow(x[0],x[1],x[2]));updateLengthPreview();calculateLengths();}
function readLengthPositions(){return [...$("lengthPartsBody").querySelectorAll("tr")].map((tr,i)=>({pos:i+1,len:Math.round((Number(tr.querySelector(".ll")?.value)||0)*10)/10,q:Math.round(Number(tr.querySelector(".lq")?.value)||0),name:String(tr.querySelector(".lname")?.value||"").trim()})).filter(p=>p.len>0||p.name);}
function expandLengthPositions(pos){const out=[];pos.forEach(p=>{for(let i=0;i<p.q;i++)out.push({len:p.len,pos:p.pos,name:p.name,instance:i+1});});return out;}

function projectMaterialOptions(selected){return LENGTH_MATERIALS.map(m=>`<option value="${escapeAttr(m)}" ${m===selected?"selected":""}>${escapeHtmlText(m)}</option>`).join("");}
function projectDimensionOptions(material,selected){return Object.keys(LENGTH_CATALOG[material]||{}).map(d=>`<option value="${escapeAttr(d)}" ${d===selected?"selected":""}>${escapeHtmlText(d)}</option>`).join("");}
function markProjectChanged(){saveLengthDraft();if(currentProjectId)setProjectStorageStatus("Änderungen am geöffneten Projekt noch nicht gespeichert.");}
function renderProjectRowFields(tr,material,dimension="",customHeight="",customWidth="",customLength=""){
  const dimCell=tr.querySelector(".project-row-dim"),rawCell=tr.querySelector(".project-row-raws");
  if(material===SPECIAL_LENGTH_MATERIAL){
    dimCell.innerHTML=`<div class="project-custom-dims"><div class="project-custom-field"><small>Höhe cm</small><input class="pcustom-h" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeAttr(customHeight)}"></div><div class="project-custom-field"><small>Breite cm</small><input class="pcustom-w" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeAttr(customWidth)}"></div></div>`;
    rawCell.innerHTML=`<div class="project-custom-field"><small>Länge cm</small><input class="pcustom-l" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeAttr(customLength)}"></div>`;
    tr.querySelectorAll(".pcustom-h,.pcustom-w,.pcustom-l").forEach(el=>el.addEventListener("input",markProjectChanged));
    return;
  }
  const dims=Object.keys(LENGTH_CATALOG[material]||{});if(!dims.includes(dimension))dimension=dims[0]||"";
  dimCell.innerHTML=`<select class="pdim">${projectDimensionOptions(material,dimension)}</select>`;
  dimCell.querySelector(".pdim")?.addEventListener("change",()=>{rebuildProjectRawSettings();markProjectChanged();});
  rebuildProjectRawSettings();
}
function addProjectPartRow(material="KVH",dimension="",len="",q=1,name="",focus=false,customHeight="",customWidth="",customLength=""){
  if(material!==SPECIAL_LENGTH_MATERIAL&&!LENGTH_CATALOG[material])material="KVH";
  const tr=document.createElement("tr");
  tr.innerHTML=`<td class="v59-rowno"></td><td><select class="pmat">${projectMaterialOptions(material)}</select></td><td class="project-row-dim"></td><td class="project-row-raws"></td><td><input class="plen" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeAttr(len)}"></td><td><input class="pqty" type="number" min="1" step="1" inputmode="numeric" value="${escapeAttr(q)}"></td><td><input class="pname2" type="text" value="${escapeAttr(name)}" placeholder="z. B. Sparren"></td><td><button class="icon-btn project-row-delete" type="button" aria-label="Position entfernen">×</button></td>`;
  $("projectPartsBody").appendChild(tr);
  renderProjectRowFields(tr,material,dimension,customHeight,customWidth,customLength);
  tr.querySelector(".pmat").addEventListener("change",()=>{const m=tr.querySelector(".pmat").value;renderProjectRowFields(tr,m,"","","","");rebuildProjectRawSettings();markProjectChanged();});
  tr.querySelector(".project-row-delete").addEventListener("click",()=>removeProjectPartRow(tr,true));
  if(focus)setTimeout(()=>tr.querySelector(".plen")?.focus(),0);rebuildProjectRawSettings();saveLengthDraft();
}
function removeProjectPartRow(tr,confirmIt){if(!tr)return;if(confirmIt&&!window.confirm("Letzte Position wirklich entfernen?"))return;tr.remove();if(!$("projectPartsBody").children.length)addProjectPartRow();rebuildProjectRawSettings();saveLengthDraft();}
function clearProjectParts(){$("projectPartsBody").innerHTML="";addProjectPartRow();currentLengthResult=null;$("lengthResultArea").classList.add("hidden");setLengthNotice("","Neue Projektpositionen eingeben und anschließend auf <strong>„Projekt berechnen“</strong> klicken.");saveLengthDraft();if(currentProjectId)setProjectStorageStatus("Änderungen am geöffneten Projekt noch nicht gespeichert.");}
function loadProjectExample(){
  $("projectPartsBody").innerHTML="";
  [["KVH","8x16",486,8,"Sparren"],["KVH","8x16",312,4,"Wechsel"],["KVH","10x20",620,2,"Pfette"],["KVH","12x24",780,1,"Firstpfette"],["BSH","12x24",940,2,"Träger"]].forEach(x=>addProjectPartRow(...x));
  rebuildProjectRawSettings();calculateProject();
}
function readProjectPositions(){
  return [...$("projectPartsBody").querySelectorAll("tr")].map((tr,i)=>{
    const material=tr.querySelector(".pmat")?.value||"";
    const base={pos:i+1,material,len:Math.round((Number(tr.querySelector(".plen")?.value)||0)*10)/10,q:Math.round(Number(tr.querySelector(".pqty")?.value)||0),name:String(tr.querySelector(".pname2")?.value||"").trim()};
    if(material===SPECIAL_LENGTH_MATERIAL){
      const customHeight=Math.round((Number(tr.querySelector(".pcustom-h")?.value)||0)*10)/10,customWidth=Math.round((Number(tr.querySelector(".pcustom-w")?.value)||0)*10)/10,customStockLength=Math.round((Number(tr.querySelector(".pcustom-l")?.value)||0)*10)/10;
      return {...base,dimension:customDimensionKey(customHeight,customWidth),customHeight,customWidth,customStockLength,isSpecial:true};
    }
    return {...base,dimension:tr.querySelector(".pdim")?.value||""};
  }).filter(p=>p.len>0||p.name||p.isSpecial&&(p.customHeight||p.customWidth||p.customStockLength));
}
function rebuildProjectRawSettings(){
  const rows=[...$("projectPartsBody").querySelectorAll("tr")];
  rows.forEach(tr=>{
    const material=tr.querySelector(".pmat")?.value||"";
    if(material===SPECIAL_LENGTH_MATERIAL)return;
    const dimension=tr.querySelector(".pdim")?.value||"";
    const cell=tr.querySelector(".project-row-raws");
    if(!cell)return;
    const raws=catalogRaws(material,dimension);
    if(!material||!dimension||!raws.length){cell.innerHTML='<span class="raw-choice-note">–</span>';return;}
    const key=lengthGroupKey(material,dimension);
    const selected=ensureSelection(projectRawSelection,key,raws);
    cell.innerHTML=`<div class="raw-choice-wrap">${raws.map(r=>`<button type="button" class="raw-choice ${selected.has(Number(r))?"active":""}" data-raw="${r}" aria-pressed="${selected.has(Number(r))}">${lengthFmt(r)} cm</button>`).join("")}</div><div class="raw-choice-note">${raws.length>1?"Anklicken zum Ein-/Ausschalten":"Feste Rohlänge"}</div>`;
    cell.querySelectorAll(".raw-choice").forEach(btn=>btn.addEventListener("click",()=>{
      const raw=Number(btn.dataset.raw),set=ensureSelection(projectRawSelection,key,raws);
      if(set.has(raw)){
        if(set.size===1){setLengthNotice("error","Mindestens eine Rohlänge je Material/Dimension muss berücksichtigt werden.");return;}
        set.delete(raw);
      }else set.add(raw);
      rebuildProjectRawSettings();markProjectChanged();
    }));
  });
}

function greedyPack(items,raws,kerf,variant=0){
  let ordered=items.slice();if(variant===0)ordered.sort((a,b)=>b.len-a.len||a.pos-b.pos);
  if(variant===1){ordered.sort((a,b)=>b.len-a.len||a.pos-b.pos);const alt=[];let i=0,j=ordered.length-1;while(i<=j){alt.push(ordered[i++]);if(i<=j)alt.push(ordered[j--]);}ordered=alt;}
  if(variant>=2){ordered.sort((a,b)=>{const ha=((Math.round(a.len*10)*1103515245+a.pos*12345+variant*7919)>>>0)%100000;const hb=((Math.round(b.len*10)*1103515245+b.pos*12345+variant*7919)>>>0)%100000;const bucket=Math.floor((b.len-a.len)/25);return bucket!==0?b.len-a.len:ha-hb;});}
  const bars=[];
  for(let idx=0;idx<ordered.length;idx++){
    const item=ordered[idx],need=item.len+kerf;let best=null;
    for(let bi=0;bi<bars.length;bi++){const b=bars[bi],rem=b.raw-b.used;if(need<=rem+1e-9){const after=rem-need;if(!best||after<best.after)best={bi,after};}}
    if(best){const b=bars[best.bi];b.pieces.push(item);b.used+=need;continue;}
    let choice=null;const future=ordered.slice(idx+1);
    for(const raw of raws){if(need>raw+1e-9)continue;let rem=raw-need;const fs=future.slice().sort((a,b)=>b.len-a.len);for(const f of fs){const fn=f.len+kerf;if(fn<=rem+1e-9)rem-=fn;}const score=rem*10+raw/100000;if(!choice||score<choice.score)choice={raw,score};}
    if(!choice)return null;bars.push({raw:choice.raw,used:need,pieces:[item]});
  }return bars;
}
function improveBars(bars,raws,kerf,material,restLimit=DEFAULT_REST_LIMIT_CM){
  const all=bars.flatMap(b=>b.pieces);let best=bars;
  const score=bs=>{const totalRaw=bs.reduce((a,b)=>a+b.raw,0);let customerRest=0,warehouseRest=0;bs.forEach(b=>{const c=classifyLengthRest(material,b.raw,b.raw-b.used,restLimit);customerRest+=c.customer;warehouseRest+=c.warehouse;});return totalRaw*1000000+bs.length*10000+customerRest*10-warehouseRest*0.01;};
  let bestScore=score(best);for(let v=0;v<30;v++){const cand=greedyPack(all,raws,kerf,v);if(!cand)continue;const sc=score(cand);if(sc<bestScore){best=cand;bestScore=sc;}}return best;
}
function optimizeLengths(items,raws,kerf,material,restLimit=DEFAULT_REST_LIMIT_CM){const first=greedyPack(items,raws,kerf,0);return first?improveBars(first,raws,kerf,material,restLimit):null;}
function lengthPatternKey(bar,material,restLimit=DEFAULT_REST_LIMIT_CM){const cls=classifyLengthRest(material,bar.raw,bar.raw-bar.used,restLimit);return bar.raw+"|"+cls.type+"|"+bar.pieces.map(p=>`${p.len}:${p.pos}:${p.name}`).join("|");}
function groupLengthBars(bars,material,restLimit=DEFAULT_REST_LIMIT_CM){const map=new Map();bars.forEach((bar,i)=>{const k=lengthPatternKey(bar,material,restLimit);if(!map.has(k))map.set(k,{bar,count:0,numbers:[]});const g=map.get(k);g.count++;g.numbers.push(i+1);});return [...map.values()];}
function renderLengthBar(bar,index,count,material,restLimit=DEFAULT_REST_LIMIT_CM){
  const raw=bar.raw,kerf=LENGTH_KERF_CM;let offset=0,pieces="";
  bar.pieces.forEach(p=>{const left=100*offset/raw,width=100*p.len/raw,showName=width>14&&p.name;pieces+=`<div class="length-piece" style="left:${left}%;width:${width}%" title="Pos. ${p.pos}: ${lengthFmt(p.len)} cm${p.name?" – "+escapeHtmlText(p.name):""}"><span>${lengthFmt(p.len)} cm${showName?`<small>${escapeHtmlText(p.name)}</small>`:""}</span></div>`;offset+=p.len;const kw=Math.max(.12,100*kerf/raw);pieces+=`<div class="length-kerf" style="left:${100*offset/raw}%;width:${kw}%"></div>`;offset+=kerf;});
  const rest=Math.max(0,Math.round((raw-offset)*10)/10),cls=classifyLengthRest(material,raw,rest,restLimit),restLeft=100*offset/raw;
  const restWord=cls.type==="warehouse"?"Lagerrest":cls.type==="customer"?"Kundenrest":"Rest";
  const restHtml=rest>0?`<div class="length-rest ${cls.type}" style="left:${restLeft}%;width:${100*rest/raw}%"><span class="length-rest-label">${restWord}<br>${lengthFmt(rest)} cm</span></div>`:"";
  const seq=bar.pieces.map(p=>`${lengthFmt(p.len)} cm${p.name?" "+escapeHtmlText(p.name):""}`).join(" + ");
  return `<div class="length-bar-card"><div class="length-bar-head"><div><strong>${count>1?count+" × identisch":"Einzelstange"}</strong><div class="length-bar-meta">Lagerlänge ${lengthFmt(raw)} cm</div></div><div class="length-bar-badge">${lengthFmt(raw)} cm</div></div><div class="length-track">${pieces}${restHtml}</div><div class="length-ruler"><span>0</span><span>${lengthFmt(raw)} cm</span></div><div class="length-sequence"><strong>Schnittfolge:</strong> ${seq}</div></div>`;
}
function summarizeBars(material,bars,restLimit=DEFAULT_REST_LIMIT_CM){let customerRest=0,warehouseRest=0,totalRaw=0;bars.forEach(b=>{totalRaw+=b.raw;const c=classifyLengthRest(material,b.raw,b.raw-b.used,restLimit);customerRest+=c.customer;warehouseRest+=c.warehouse;});return {customerRest:Math.round(customerRest*10)/10,warehouseRest:Math.round(warehouseRest*10)/10,totalRaw};}
function renderSingleSummary(pos){$("lengthPieceSummary").innerHTML=`<div class="summary-table-wrap"><table class="summary-table"><thead><tr><th>Pos.</th><th>Länge</th><th>Menge</th><th>Bezeichnung</th></tr></thead><tbody>${pos.map(p=>`<tr><td>${p.pos}</td><td>${lengthFmt(p.len)} cm</td><td>${p.q}</td><td>${escapeHtmlText(p.name||"–")}</td></tr>`).join("")}</tbody></table></div>`;}
function renderProjectSummary(pos){$("lengthPieceSummary").innerHTML=`<div class="summary-table-wrap"><table class="summary-table"><thead><tr><th>Pos.</th><th>Material</th><th>Dimension / Sondermaß</th><th>Fertiglänge</th><th>Menge</th><th>Bezeichnung</th></tr></thead><tbody>${pos.map(p=>`<tr><td>${p.pos}</td><td>${escapeHtmlText(p.material)}</td><td>${escapeHtmlText(p.material===SPECIAL_LENGTH_MATERIAL?`H ${lengthFmt(p.customHeight)} × B ${lengthFmt(p.customWidth)} cm · L ${lengthFmt(p.customStockLength)} cm`:`${p.dimension} cm`)}</td><td>${lengthFmt(p.len)} cm</td><td>${p.q}</td><td>${escapeHtmlText(p.name||"–")}</td></tr>`).join("")}</tbody></table></div>`;}
function setLengthNotice(type,html){$("lengthNotice").className="notice"+(type?" "+type:"");$("lengthNotice").innerHTML=html;}
function updateLengthStats(groups,totalParts){let bars=0,customer=0,warehouse=0;groups.forEach(g=>{bars+=g.bars.length;const s=summarizeBars(g.material,g.bars,g.restLimit);customer+=s.customerRest;warehouse+=s.warehouseRest;});$("lengthSumBars").textContent=bars;$("lengthSumParts").textContent=totalParts;$("lengthSumCustomerRest").textContent=lengthFmt(customer)+" cm";$("lengthSumWarehouseRest").textContent=lengthFmt(warehouse)+" cm";}
function calculateLengths(){
  saveLengthDraft();const cfg=selectedLengthConfig(),raws=cfg.raws,pos=readLengthPositions();
  if(cfg.isSpecial&&(!(cfg.customHeight>0)||!(cfg.customWidth>0)||!(cfg.customLength>0))){setLengthNotice("error","Bitte beim Sondermaß Höhe, Breite und Länge in cm vollständig eingeben.");return;}
  if(!raws.length){setLengthNotice("error",cfg.isSpecial?"Bitte die Länge des Sondermaßes eingeben.":"Bitte mindestens eine Rohlänge aktivieren.");return;}if(!pos.length){setLengthNotice("error","Bitte mindestens eine Fertiglänge eingeben.");return;}if(pos.some(p=>p.len<=0||p.q<=0)){setLengthNotice("error","Länge und Stückzahl müssen größer als 0 sein.");return;}
  const maxRaw=Math.max(...raws),tooLong=pos.find(p=>p.len+LENGTH_KERF_CM>maxRaw+1e-9);if(tooLong){setLengthNotice("error",`Pos. ${tooLong.pos} mit ${lengthFmt(tooLong.len)} cm passt inklusive Sägefuge nicht in die Länge ${lengthFmt(maxRaw)} cm.`);return;}
  const restLimit=getSingleRestLimit();
  const items=expandLengthPositions(pos),bars=optimizeLengths(items,raws,LENGTH_KERF_CM,cfg.material,restLimit);if(!bars){setLengthNotice("error","Für diese Eingaben konnte kein Längenzuschnitt erzeugt werden.");return;}
  const sum=summarizeBars(cfg.material,bars,restLimit),group={material:cfg.material,dimension:cfg.dimension,raws,pos,items,bars,restLimit,customHeight:cfg.customHeight,customWidth:cfg.customWidth,customStockLength:cfg.customLength};currentLengthResult={mode:"single",planName:String($("lengthPlanName")?.value||"").trim(),restLimit,groups:[group],pos,items};
  const patterns=groupLengthBars(bars,cfg.material,restLimit);const title=cfg.isSpecial?`Sondermaß · ${lengthDimensionText(cfg.material,cfg.dimension,cfg)}`:`${cfg.material} ${String(cfg.dimension).replace("x"," × ")} cm`;
  const stockLabel=cfg.isSpecial?"Lagerlänge":"Lagerlänge"; const stockSummary=`${stockLabel} ${raws.map(lengthFmt).join(" / ")} cm`;
  $("lengthBars").innerHTML=`<div class="length-group"><div class="length-group-title"><div><h3>${escapeHtmlText(title)}</h3></div></div><div class="v60-length-summary-line"><span>${stockSummary}</span><span>Stückzahl ${bars.length}</span><span>Fertigteile ${items.length}</span></div>${patterns.map((g,i)=>renderLengthBar(g.bar,i+1,g.count,cfg.material,restLimit)).join("")}</div>`;
  $("lengthResultTitle").textContent="Ergebnis";$("lengthResultMaterial").textContent="";updateLengthStats([group],items.length);$("v60LengthStat1Label").textContent="Stückzahl";$("v60LengthStat1Sub").textContent="Rohlinge";renderSingleSummary(pos);$("lengthResultArea").classList.remove("hidden");setLengthNotice("success",`Berechnung abgeschlossen: <strong>${bars.length} Rohstück${bars.length===1?"":"e"}</strong>.`);$("lengthNotice").classList.add("hidden");
}
function calculateProject(){
  saveLengthDraft();const pos=readProjectPositions();if(!pos.length){setLengthNotice("error","Bitte mindestens eine Projektposition eingeben.");return;}if(pos.some(p=>p.len<=0||p.q<=0)){setLengthNotice("error","Fertiglänge und Stückzahl müssen größer als 0 sein.");return;}
  const badSpecial=pos.find(p=>p.material===SPECIAL_LENGTH_MATERIAL&&(!(p.customHeight>0)||!(p.customWidth>0)||!(p.customStockLength>0)));if(badSpecial){setLengthNotice("error",`Pos. ${badSpecial.pos}: Beim Sondermaß bitte Höhe, Breite und Länge in cm vollständig eingeben.`);return;}
  const restLimit=getProjectRestLimit();
  const by=new Map();for(const p of pos){const key=p.material===SPECIAL_LENGTH_MATERIAL?`${SPECIAL_LENGTH_MATERIAL}||${p.customHeight}||${p.customWidth}||${p.customStockLength}`:lengthGroupKey(p.material,p.dimension);if(!by.has(key))by.set(key,{material:p.material,dimension:p.dimension,pos:[],customHeight:p.customHeight,customWidth:p.customWidth,customStockLength:p.customStockLength});by.get(key).pos.push(p);}
  const groups=[];for(const [key,g] of by){
    let raws;if(g.material===SPECIAL_LENGTH_MATERIAL)raws=[g.customStockLength];else{const allRaws=catalogRaws(g.material,g.dimension),set=ensureSelection(projectRawSelection,key,allRaws);raws=allRaws.filter(r=>set.has(Number(r)));}
    if(!raws.length){setLengthNotice("error",`${escapeHtmlText(g.material)} ${escapeHtmlText(g.dimension)} cm: Bitte mindestens eine Länge aktivieren.`);return;}
    const maxRaw=Math.max(...raws),tooLong=g.pos.find(p=>p.len+LENGTH_KERF_CM>maxRaw+1e-9);if(tooLong){setLengthNotice("error",`Pos. ${tooLong.pos}: ${lengthFmt(tooLong.len)} cm passt inklusive Sägefuge nicht in ${lengthFmt(maxRaw)} cm.`);return;}
    const items=expandLengthPositions(g.pos),bars=optimizeLengths(items,raws,LENGTH_KERF_CM,g.material,restLimit);if(!bars){setLengthNotice("error",`Für ${escapeHtmlText(g.material)} konnte kein Zuschnitt erzeugt werden.`);return;}groups.push({...g,raws,items,bars,restLimit});
  }
  const projectName=String($("projectName")?.value||"").trim();const description=String($("v60ProjectDescription")?.value||"").trim();currentLengthResult={mode:"project",projectName,description,restLimit,groups,pos,items:groups.flatMap(g=>g.items)};
  const woodIcon=`<svg class="v60-wood-icon" viewBox="0 0 64 44" aria-hidden="true"><path d="M7 15 29 3l28 12-22 13L7 15Z" fill="#f1b664"/><path d="m7 15 28 13v13L7 28V15Z" fill="#de9141"/><path d="m35 28 22-13v13L35 41V28Z" fill="#efaa55"/><path d="M18 14c7-4 13-5 23-2M22 20c7-4 14-5 23-2" fill="none" stroke="#bc7638" stroke-width="1.2" opacity=".7"/></svg>`;
  $("lengthBars").innerHTML=groups.map(g=>{const patterns=groupLengthBars(g.bars,g.material,restLimit),dim=g.material===SPECIAL_LENGTH_MATERIAL?lengthDimensionText(g.material,g.dimension,g):`${g.dimension} cm`,raw=`${g.raws.map(lengthFmt).join(" / ")} cm`;return `<div class="length-group v60-project-material"><div class="v60-project-group-head">${woodIcon}<div class="v60-project-group-copy"><strong>MATERIAL: ${escapeHtmlText(g.material.toUpperCase())}</strong><span>Dimension: ${escapeHtmlText(dim)} &nbsp; | &nbsp; Rohlänge: ${escapeHtmlText(raw)} &nbsp; | &nbsp; Positionen: ${g.pos.length} &nbsp; | &nbsp; Fertigteile: ${g.items.length}</span></div><span class="v60-project-chevron">⌄</span></div>${patterns.map((x,i)=>renderLengthBar(x.bar,i+1,x.count,g.material,restLimit)).join("")}</div>`;}).join("");
  $("lengthResultTitle").textContent="Ergebnis – Materialweise optimiert";$("lengthResultMaterial").textContent="";updateLengthStats(groups,currentLengthResult.items.length);$("lengthSumBars").textContent=pos.length;$("v60LengthStat1Label").textContent="Positionen";$("v60LengthStat1Sub").textContent="gesamt";renderProjectSummary(pos);$("lengthResultArea").classList.remove("hidden");setLengthNotice("success",`Projekt berechnet: <strong>${groups.length} Material-/Dimensionsgruppe${groups.length===1?"":"n"}</strong>.`);$("lengthNotice").classList.add("hidden");
}
function lengthCsvText(){
  if(!currentLengthResult)return "";const r=currentLengthResult,restLimit=normalizeRestLimit(r.restLimit),rows=[["Modus",r.mode==="project"?"Projekt / mehrere Dimensionen":"Einzelmaterial"]];if(r.mode==="project"&&r.projectName)rows.push(["Projektname",r.projectName]);rows.push(["Saegefuge","0,5 cm / 5 mm"],["Restgrenze",`${lengthFmt(restLimit)} cm`],["Restregel",`Nur KVH 1302 cm und BSH 1202 cm: unter ${lengthFmt(restLimit)} cm Kundenrest, ab ${lengthFmt(restLimit)} cm Lagerrest. Andere Rohlängen werden komplett verkauft.`],[]);
  if(r.mode==="project")rows.push(["Pos.","Material","Dimension / Sondermass","Fertiglaenge cm","Menge","Bezeichnung"],...r.pos.map(p=>[p.pos,p.material,p.material===SPECIAL_LENGTH_MATERIAL?`H ${lengthFmt(p.customHeight)} x B ${lengthFmt(p.customWidth)} cm | L ${lengthFmt(p.customStockLength)} cm`:p.dimension,p.len,p.q,p.name||""]),[]);else rows.push(["Pos.","Laenge cm","Menge","Bezeichnung"],...r.pos.map(p=>[p.pos,p.len,p.q,p.name||""]),[]);
  r.groups.forEach(g=>{rows.push([g.material===SPECIAL_LENGTH_MATERIAL?`Sondermass H ${lengthFmt(g.customHeight)} x B ${lengthFmt(g.customWidth)} cm`:`${g.material} ${g.dimension} cm`],[g.material===SPECIAL_LENGTH_MATERIAL?"Laenge":"Rohlaengen",g.raws.join(" / ")+" cm"],["Rohstueck","Rohlaenge cm","Zuschnitte","Restart","Rest cm"]);g.bars.forEach((b,i)=>{const c=classifyLengthRest(g.material,b.raw,b.raw-b.used,g.restLimit??restLimit);rows.push([i+1,b.raw,b.pieces.map(p=>p.len).join(" + "),c.type==="warehouse"?"Lagerrest":c.type==="customer"?"Kundenrest":"kein Rest",c.customer+c.warehouse]);});rows.push([]);});
  return rows.map(row=>row.map(csvCell).join(";")).join("\r\n");
}
function downloadLengthCsv(){if(!currentLengthResult)return;const blob=new Blob(["\ufeff"+lengthCsvText()],{type:"text/csv;charset=utf-8"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=currentLengthResult.mode==="project"?"stueckliste-projekt-laengenzuschnitt.csv":"stueckliste-laengenzuschnitt.csv";document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);}


function makePlatePortablePayload(){
  return {format:"LOWIS-ZUSCHNITTPLAN",version:1,kind:"plate",savedAt:new Date().toISOString(),planName:String($("platePlanName")?.value||"").trim(),state:draftData()};
}
function makeLengthPortablePayload(){
  const mode=activeLengthMode;
  if(mode==="project"){
    const rows=currentProjectRows();
    return {format:"LOWIS-ZUSCHNITTPLAN",version:1,kind:"length",mode:"project",savedAt:new Date().toISOString(),planName:String($("projectName")?.value||"").trim(),description:String($("v60ProjectDescription")?.value||"").trim(),restLimit:getProjectRestLimit(),projectParts:rows,projectRaws:relevantProjectSelections(rows)};
  }
  return {format:"LOWIS-ZUSCHNITTPLAN",version:1,kind:"length",mode:"single",savedAt:new Date().toISOString(),planName:String($("lengthPlanName")?.value||"").trim(),material:$("lengthMaterialSelect")?.value||"KVH",dimension:$("lengthDimensionSelect")?.value||"",singleSpecial:{height:$("lengthSpecialHeight")?.value||"",width:$("lengthSpecialWidth")?.value||"",length:$("lengthSpecialLength")?.value||""},restLimit:getSingleRestLimit(),singleRaws:serializeSelections(singleRawSelection),parts:[...($("lengthPartsBody")?.querySelectorAll("tr")||[])].map(tr=>({len:tr.querySelector(".ll")?.value||"",q:tr.querySelector(".lq")?.value||"1",name:tr.querySelector(".lname")?.value||""}))};
}
function base64Utf8Decode(value){
  const binary=atob(value),bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
  return new TextDecoder("utf-8").decode(bytes);
}
async function readPortablePayloadFromPdf(file){
  const bytes=new Uint8Array(await file.arrayBuffer());
  let text="";
  for(let i=0;i<bytes.length;i+=32768){
    const chunk=bytes.subarray(i,Math.min(i+32768,bytes.length));
    text+=String.fromCharCode(...chunk);
  }
  const match=text.match(/\/LowisPlanData\s*\(([^)]*)\)/);
  if(!match)throw new Error("Diese PDF enthält keine bearbeitbaren LOWIS-Plan-Daten. Bitte eine PDF verwenden, die mit Version 47 oder neuer erzeugt wurde.");
  const payload=JSON.parse(base64Utf8Decode(match[1]));
  if(!payload||payload.format!=="LOWIS-ZUSCHNITTPLAN")throw new Error("Die eingebetteten Plandaten konnten nicht erkannt werden.");
  return payload;
}
function applyPlatePortablePayload(payload){
  if(typeof navigateV56==="function") navigateV56("plate",false);
  if(payload.kind!=="plate")throw new Error("Diese PDF gehört zum Längenzuschnitt, nicht zum Plattenzuschnitt.");
  const d=payload.state||{};
  if($("platePlanName"))$("platePlanName").value=payload.planName||d.planName||"";
  if($("plateOptimizationMode"))$("plateOptimizationMode").value=PLATE_OPTIMIZATION_MODES[d.optimizationMode]?d.optimizationMode:"material";
  updatePlateOptimizationHelp();
  if(d.specialPlate){$("plateSpecialName").value=d.specialPlate.name||"";$("plateSpecialHeight").value=d.specialPlate.height||"";$("plateSpecialWidth").value=d.specialPlate.width||"";$("plateSpecialThickness").value=d.specialPlate.thickness||"";}
  if(d.group&&[...$("groupSelect").options].some(o=>o.value===d.group)){$("groupSelect").value=d.group;rebuildMaterialSelectors();if(d.group!==SPECIAL_PLATE_GROUP){if(d.edge&&[...$("edgeSelect").options].some(o=>o.value===d.edge)){$("edgeSelect").value=d.edge;rebuildFormats();}if(d.format&&[...$("formatSelect").options].some(o=>o.value===d.format)){$("formatSelect").value=d.format;rebuildThicknesses();}if(d.thickness&&[...$("thicknessSelect").options].some(o=>o.value===String(d.thickness)))$("thicknessSelect").value=String(d.thickness);}updateMaterialPreview();}
  $("partsBody").innerHTML="";(Array.isArray(d.parts)?d.parts:[]).forEach(x=>addPartRow(x.w,x.h,Number(x.q)||1,x.name||"",false,x.veneer||"any"));if(!$("partsBody").children.length)addPartRow();
  setPlannerMode("plate");currentResult=null;$("resultArea").classList.add("hidden");saveDraft();calculate();
}
function applyLengthPortablePayload(payload){
  if(payload.kind!=="length")throw new Error("Diese PDF gehört zum Plattenzuschnitt, nicht zum Längenzuschnitt.");
  if(typeof navigateV56==="function") navigateV56(payload.mode==="project"?"project":"length",false);
  setPlannerMode("length");
  if(payload.mode==="project"){
    Object.keys(projectRawSelection).forEach(k=>delete projectRawSelection[k]);restoreSelections(projectRawSelection,payload.projectRaws||{});
    $("projectPartsBody").innerHTML="";(Array.isArray(payload.projectParts)?payload.projectParts:[]).forEach(r=>addProjectPartRow(r.material,r.dimension,r.len,Number(r.q)||1,r.name||"",false,r.customHeight||"",r.customWidth||"",r.customLength||""));if(!$("projectPartsBody").children.length)addProjectPartRow();
    $("projectName").value=payload.planName||"";if($("v60ProjectDescription"))$("v60ProjectDescription").value=payload.description||"";syncV60ProjectDescriptionCount();$("projectRestLimit").value=normalizeRestLimit(payload.restLimit);currentProjectId=null;rebuildProjectRawSettings();setLengthMode("project",false);calculateProject();setProjectStorageStatus("PDF-Plan geladen. Änderungen können wieder als neue PDF gespeichert werden.");
  }else{
    Object.keys(singleRawSelection).forEach(k=>delete singleRawSelection[k]);restoreSelections(singleRawSelection,payload.singleRaws||{});
    if($("lengthPlanName"))$("lengthPlanName").value=payload.planName||"";if(payload.material===SPECIAL_LENGTH_MATERIAL||LENGTH_CATALOG[payload.material])$("lengthMaterialSelect").value=payload.material||"KVH";
    if(payload.singleSpecial){$("lengthSpecialHeight").value=payload.singleSpecial.height||"";$("lengthSpecialWidth").value=payload.singleSpecial.width||"";$("lengthSpecialLength").value=payload.singleSpecial.length||"";}
    $("singleRestLimit").value=normalizeRestLimit(payload.restLimit);rebuildLengthDimensions(payload.dimension||"");$("lengthPartsBody").innerHTML="";(Array.isArray(payload.parts)?payload.parts:[]).forEach(x=>addLengthPartRow(x.len,Number(x.q)||1,x.name||""));if(!$("lengthPartsBody").children.length)addLengthPartRow();setLengthMode("single",false);updateLengthMaterial();calculateLengths();
  }
  saveLengthDraft();
}
async function importPortablePdf(file,targetKind){
  if(!file)return;
  try{const payload=await readPortablePayloadFromPdf(file);if(targetKind==="plate")applyPlatePortablePayload(payload);else applyLengthPortablePayload(payload);}
  catch(err){if(targetKind==="plate")setNotice("error",escapeHtmlText(err.message));else setLengthNotice("error",escapeHtmlText(err.message));}
}

async function importPortablePdfAuto(file){
  if(!file)return;
  const isPdf=file.type==="application/pdf" || String(file.name||"").toLowerCase().endsWith(".pdf");
  if(!isPdf){
    const msg="Bitte eine PDF-Datei ablegen.";
    if(window.activePlannerMode==="length")setLengthNotice("error",msg);else setNotice("error",msg);
    return;
  }
  try{
    const payload=await readPortablePayloadFromPdf(file);
    if(payload.kind==="plate")applyPlatePortablePayload(payload);
    else if(payload.kind==="length")applyLengthPortablePayload(payload);
    else throw new Error("Der PDF-Plantyp konnte nicht erkannt werden.");
  }catch(err){
    const msg=escapeHtmlText(err?.message||"PDF-Plan konnte nicht geladen werden.");
    if(window.activePlannerMode==="length")setLengthNotice("error",msg);else setNotice("error",msg);
  }
}

let pdfDragDepth=0;
function hasDraggedFiles(ev){
  return Array.from(ev.dataTransfer?.types||[]).includes("Files");
}
function showPdfDropOverlay(){
  const overlay=$("pdfDropOverlay");
  if(overlay){overlay.classList.add("active");overlay.setAttribute("aria-hidden","false");}
}
function hidePdfDropOverlay(){
  const overlay=$("pdfDropOverlay");
  if(overlay){overlay.classList.remove("active");overlay.setAttribute("aria-hidden","true");}
}
document.addEventListener("dragenter",ev=>{
  if(!hasDraggedFiles(ev))return;
  ev.preventDefault();pdfDragDepth++;showPdfDropOverlay();
});
document.addEventListener("dragover",ev=>{
  if(!hasDraggedFiles(ev))return;
  ev.preventDefault();if(ev.dataTransfer)ev.dataTransfer.dropEffect="copy";showPdfDropOverlay();
});
document.addEventListener("dragleave",ev=>{
  if(!hasDraggedFiles(ev))return;
  pdfDragDepth=Math.max(0,pdfDragDepth-1);if(pdfDragDepth===0)hidePdfDropOverlay();
});
document.addEventListener("drop",async ev=>{
  if(!hasDraggedFiles(ev))return;
  ev.preventDefault();pdfDragDepth=0;hidePdfDropOverlay();
  const files=Array.from(ev.dataTransfer?.files||[]);
  const pdf=files.find(f=>f.type==="application/pdf" || String(f.name||"").toLowerCase().endsWith(".pdf"));
  if(!pdf){
    const msg="Bitte eine PDF-Datei ablegen.";
    if(window.activePlannerMode==="length")setLengthNotice("error",msg);else setNotice("error",msg);
    return;
  }
  await importPortablePdfAuto(pdf);
});
document.addEventListener("dragend",()=>{pdfDragDepth=0;hidePdfDropOverlay();});
window.addEventListener("blur",()=>{pdfDragDepth=0;hidePdfDropOverlay();});

function buildSimplePdfBase64(pages,portablePayload=null){
  const objects=[null];
  const add=o=>{objects.push(o);return objects.length-1;};
  const f1=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
  const f2=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
  const contentIds=pages.map(pg=>add(`<< /Length ${pg.length} >>\nstream\n${pg}endstream`));
  const pagesId=add("");
  const pageIds=contentIds.map(cid=>add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R >> >> /Contents ${cid} 0 R >>`));
  objects[pagesId]=`<< /Type /Pages /Kids [${pageIds.map(id=>`${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;
  const catalog=add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  let infoId=null;
  if(portablePayload){
    const encoded=utf8Base64(JSON.stringify(portablePayload));
    infoId=add(`<< /Producer (LOWIS Zuschnittplaner) /LowisPlanVersion (1) /LowisPlanData (${encoded}) >>`);
  }
  let pdf="%PDF-1.4\n",offsets=[0];
  for(let i=1;i<objects.length;i++){offsets[i]=pdf.length;pdf+=`${i} 0 obj\n${objects[i]}\nendobj\n`;}
  const xref=pdf.length;
  pdf+=`xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for(let i=1;i<objects.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
  pdf+=`trailer\n<< /Size ${objects.length} /Root ${catalog} 0 R${infoId?` /Info ${infoId} 0 R`:""} >>\nstartxref\n${xref}\n%%EOF`;
  return btoa(unescape(encodeURIComponent(pdf)));
}

function makeLengthPieceListPdfBase64(result,customer){
  customer=Object.assign({name:"",company:"",email:"",phone:"",remarks:""},customer||{});
  const hasCustomer=Boolean(customer.name||customer.company||customer.email||customer.phone||customer.remarks);
  const pages=[];
  const listPositions=result.mode==="project"?sortedLengthPositionsForPdf(result.pos):result.pos;
  const t=(x,y,size,str,bold=false)=>`BT /F${bold?2:1} ${size} Tf ${x} ${y} Td (${pdfEsc(str)}) Tj ET\n`;
  const ln=(x1,y1,x2,y2)=>`${x1} ${y1} m ${x2} ${y2} l S\n`;
  const restLimit=normalizeRestLimit(result.restLimit);
  const totalBars=result.groups.reduce((a,g)=>a+g.bars.length,0);
  const totalCustomer=result.groups.reduce((a,g)=>a+summarizeBars(g.material,g.bars,g.restLimit??restLimit).customerRest,0);
  const totalWarehouse=result.groups.reduce((a,g)=>a+summarizeBars(g.material,g.bars,g.restLimit??restLimit).warehouseRest,0);
  const colX=[35,305],rowStep=13.5,bottom=44;
  let idx=0,pageNo=0;
  do{
    pageNo++;let c="0 G 0 g 0.55 w\n";
    c+=t(35,812,18,pageNo===1?"Längen-Zuschnitt - Stückliste":"Längen-Zuschnitt - Stückliste Fortsetzung",true);
    let y=790;
    if(pageNo===1){
      if(result.mode==="project"&&result.projectName){c+=t(35,y,10.7,`Plan: ${result.projectName}`,true);y-=16;}
      else if(result.mode==="single"&&String($("lengthPlanName")?.value||"").trim()){c+=t(35,y,10.7,`Plan: ${String($("lengthPlanName").value).trim()}`,true);y-=16;}
      c+=t(35,y,9.3,`Sägefuge 0,5 cm | Stückzahl ${totalBars} | Fertigteile ${result.items.length} | Kundenrest ${lengthFmt(totalCustomer)} cm | Lagerrest ${lengthFmt(totalWarehouse)} cm | Restgrenze ${lengthFmt(restLimit)} cm`);y-=16;
      if(hasCustomer){c+=t(35,y,9,`Kunde: ${customer.name}${customer.company?" | "+customer.company:""}${customer.email?" | "+customer.email:""}${customer.phone?" | "+customer.phone:""}`);y-=15;}
      if(customer.remarks){const r=pdfAscii(customer.remarks).replace(/\s+/g," ").trim();c+=t(35,y,8.7,`Bemerkung: ${r.slice(0,128)}${r.length>128?" ...":""}`);y-=15;}
    }
    c+="0.86 G 0.35 w\n"+ln(35,y+2,560,y+2)+"0 G\n";y-=12;
    const rowsCap=Math.max(1,Math.floor((y-bottom)/rowStep));
    const chunk=listPositions.slice(idx,idx+rowsCap*2),split=Math.ceil(chunk.length/2);
    chunk.forEach((pos,i)=>{
      const col=i>=split?1:0,row=col?i-split:i;
      let line=result.mode==="project"?`P${pos.pos} ${pos.q}x ${lengthPositionMaterialText(pos)} | ${lengthFmt(pos.len)} cm${pos.name?" "+pos.name:""}`:`P${pos.pos} ${pos.q}x ${lengthFmt(pos.len)} cm${pos.name?" "+pos.name:""}`;
      if(line.length>47)line=line.slice(0,44)+"...";
      c+=t(colX[col],y-row*rowStep,9.3,line);
    });
    idx+=chunk.length;pages.push(c);if(!chunk.length)break;
  }while(idx<listPositions.length);
  return buildSimplePdfBase64(pages,makeLengthPortablePayload());
}

function makeLengthPlanPdfBase64(result,customer){
  customer=Object.assign({name:"",company:"",email:"",phone:"",remarks:""},customer||{});
  const hasCustomer=Boolean(customer.name||customer.company||customer.email||customer.phone||customer.remarks);
  const pages=[];
  const t=(x,y,size,str,bold=false)=>`BT /F${bold?2:1} ${size} Tf ${x} ${y} Td (${pdfEsc(str)}) Tj ET\n`;
  const ln=(x1,y1,x2,y2)=>`${x1} ${y1} m ${x2} ${y2} l S\n`;
  const rc=(x,y,w,h,fill=false)=>`${x} ${y} ${w} ${h} re ${fill?"B":"S"}\n`;
  const tWarehouse=(x,y,size,str)=>{
    const text=pdfAscii(str);
    const word="Lagerrest";
    const idx=text.indexOf(word);
    if(idx<0) return t(x,y,size,text);
    const before=text.slice(0,idx),after=text.slice(idx+word.length);
    const wx=x+textApprox(before,size);
    const ww=textApprox(word,size);
    let out="";
    if(before)out+=t(x,y,size,before);
    out+=t(wx,y,size,word,true);
    out+="0 G 0.65 w\n"+ln(wx,y-1.5,wx+ww,y-1.5)+"0 G 0.5 w\n";
    if(after)out+=t(wx+ww,y,size,after);
    return out;
  };
  const wrapWords=(text,maxChars)=>{
    const words=pdfAscii(text).split(/\s+/).filter(Boolean),lines=[];let line="";
    words.forEach(word=>{
      const next=line?line+" "+word:word;
      if(next.length>maxChars&&line){lines.push(line);line=word;}else line=next;
    });
    if(line)lines.push(line);
    return lines.length?lines:[""];
  };
  const restLimit=normalizeRestLimit(result.restLimit);
  const pdfGroups=result.mode==="project"?sortedLengthGroupsForPdf(result.groups):result.groups;
  const pdfPositions=result.mode==="project"?sortedLengthPositionsForPdf(result.pos):result.pos;
  const totalBars=result.groups.reduce((a,g)=>a+g.bars.length,0);
  const totalCustomer=result.groups.reduce((a,g)=>a+summarizeBars(g.material,g.bars,g.restLimit??restLimit).customerRest,0);
  const totalWarehouse=result.groups.reduce((a,g)=>a+summarizeBars(g.material,g.bars,g.restLimit??restLimit).warehouseRest,0);
  const bottom=42,rowStep=13.5,colX=[35,305];
  let page="",y=0,pageNo=0;
  const pushPage=()=>{if(page){pages.push(page);page="";}};
  const startPage=(kind="detail")=>{
    pushPage();pageNo++;page="0 G 0 g 0.5 w\n";
    if(kind==="main"){
      page+=t(35,812,18,result.mode==="project"?"Projekt-Längenzuschnitt":"Längen-Zuschnittplan",true);y=789;
      if(result.mode==="project"&&result.projectName){page+=t(35,y,11,`Plan: ${result.projectName}`,true);y-=16;}
      else if(result.mode==="single"&&String($("lengthPlanName")?.value||"").trim()){page+=t(35,y,11,`Plan: ${String($("lengthPlanName").value).trim()}`,true);y-=16;}
      page+=t(35,y,9.2,`Sägefuge 0,5 cm | Stückzahl ${totalBars} | Fertigteile ${result.items.length} | Kundenrest ${lengthFmt(totalCustomer)} cm | Lagerrest ${lengthFmt(totalWarehouse)} cm | Restgrenze ${lengthFmt(restLimit)} cm`);y-=16;
      if(hasCustomer){page+=t(35,y,9,`Kunde: ${customer.name}${customer.company?" | "+customer.company:""}${customer.email?" | "+customer.email:""}${customer.phone?" | "+customer.phone:""}`);y-=15;}
      if(customer.remarks){const r=pdfAscii(customer.remarks).replace(/\s+/g," ").trim();page+=t(35,y,8.7,`Bemerkung: ${r.slice(0,128)}${r.length>128?" ...":""}`);y-=15;}
    }else{
      page+=t(35,814,12,result.mode==="project"?(result.projectName?`Plan ${result.projectName} - Fortsetzung`:"Projekt-Längenzuschnitt - Fortsetzung"):"Längen-Zuschnittplan - Fortsetzung",true);
      page+=t(510,814,8.2,`Seite ${pageNo}`);page+="0.86 G 0.35 w\n"+ln(35,802,560,802)+"0 G\n";y=786;
    }
  };
  const renderListChunk=(chunk)=>{
    page+=t(35,y,11,"Stückliste",true);y-=15;
    const split=Math.ceil(chunk.length/2);
    chunk.forEach((pos,i)=>{
      const col=i>=split?1:0,row=col?i-split:i;
      let line=result.mode==="project"?`P${pos.pos} ${pos.q}x ${pos.material} ${pos.dimension} cm | ${lengthFmt(pos.len)} cm${pos.name?" "+pos.name:""}`:`P${pos.pos} ${pos.q}x ${lengthFmt(pos.len)} cm${pos.name?" "+pos.name:""}`;
      if(line.length>47)line=line.slice(0,44)+"...";
      page+=t(colX[col],y-row*rowStep,9.2,line);
    });
    y-=Math.ceil(chunk.length/2)*rowStep+10;
  };

  startPage("main");
  let posIndex=0;
  while(posIndex<pdfPositions.length){
    const left=pdfPositions.length-posIndex,rowsNeeded=Math.ceil(left/2);
    const rowsWithDetail=Math.max(0,Math.floor((y-(bottom+145))/rowStep));
    if(rowsWithDetail>0&&rowsNeeded<=rowsWithDetail){renderListChunk(pdfPositions.slice(posIndex));posIndex=pdfPositions.length;break;}
    const rowsFull=Math.max(1,Math.floor((y-bottom-12)/rowStep)),take=Math.min(left,rowsFull*2);
    renderListChunk(pdfPositions.slice(posIndex,posIndex+take));posIndex+=take;
    if(posIndex<pdfPositions.length)startPage("detail");
  }
  if(!pdfPositions.length){page+=t(35,y,11,"Stückliste: keine Positionen",true);y-=20;}

  const materialBanner=(material,continued=false)=>{
    const label=`MATERIAL: ${material}${continued?" - FORTSETZUNG":""}`;
    const bh=25,by=y-bh+5;
    page+="0.88 g\n"+rc(35,by,525,bh,true)+"0 g\n";
    page+="0 G 1.15 w\n"+rc(35,by,525,bh,false)+"0 G 0.5 w\n";
    page+=t(45,by+7.2,13.2,label,true);
    y=by-11;
  };

  const groupHeader=(group,continued=false)=>{
    const heading=group.material===SPECIAL_LENGTH_MATERIAL?`Sondermaß | Höhe ${lengthFmt(group.customHeight)} cm | Breite ${lengthFmt(group.customWidth)} cm`:`${group.material} ${group.dimension} cm`;
    page+=t(35,y,11.2,`${heading}${continued?" - Fortsetzung":""}`,true);y-=16;
    const usedRaws=[...new Set(group.bars.map(b=>Number(b.raw)))].sort((a,b)=>a-b);
    const rawText=usedRaws.map(v=>`${lengthFmt(v)} cm`).join(" / ");
    const meta=`Lagerlänge ${rawText} | Stückzahl ${group.bars.length} | Fertigteile ${group.items.length}`;
    const metaLines=wrapWords(meta,102).slice(0,2);
    metaLines.forEach(line=>{page+=tWarehouse(35,y,8.4,line);y-=11.5;});
    y-=3;
  };

  let previousPdfMaterial=null;
  pdfGroups.forEach((group,gidx)=>{
    const patterns=groupLengthBars(group.bars,group.material,group.restLimit??restLimit);
    const materialChanged=previousPdfMaterial===null || previousPdfMaterial!==group.material;
    const requiredTopSpace=materialChanged?125:76;
    if(y-bottom<requiredTopSpace)startPage("detail");
    if(gidx>0){
      if(materialChanged){
        // Materialwechsel maximal deutlich trennen.
        y-=10;
        page+="0 G 1.35 w\n"+ln(35,y+6,560,y+6)+"0 G 0.5 w\n";
        y-=10;
      }else{
        // Neue Dimension desselben Materials nur dezent trennen.
        page+="0.82 G 0.45 w\n"+ln(35,y+4,560,y+4)+"0 G 0.5 w\n";
        y-=6;
      }
    }
    if(materialChanged) materialBanner(group.material,false);
    groupHeader(group,false);
    patterns.forEach((pat,idx)=>{
      const bar=pat.bar,raw=bar.raw,rest=Math.max(0,Math.round((raw-bar.used)*10)/10),cls=classifyLengthRest(group.material,raw,rest,group.restLimit??restLimit);
      const seq=bar.pieces.map(x=>`${lengthFmt(x.len)} cm${x.name?" "+x.name:""}`).join(" + ");
      const restLabel=cls.type==="warehouse"?"Lagerrest":cls.type==="customer"?"Kundenrest":"Kein Rest";
      const seqText=`${seq}${rest?` | ${restLabel} ${lengthFmt(rest)} cm`:" | kein Rest"}`;
      const seqLines=wrapWords(`Schnittfolge: ${seqText}`,94).slice(0,3);
      const needed=14+15+10+seqLines.length*10.5+8;
      if(y-bottom<needed+8){startPage("detail");materialBanner(group.material,true);groupHeader(group,true);}

      const baseLabel=pat.count>1?`${pat.count}× identisch`:`Einzelstange`;
      page+=t(35,y,9.4,baseLabel,true);
      page+=tWarehouse(318,y,7.8,`Lagerlänge ${lengthFmt(raw)} cm | ${rest?`${restLabel} ${lengthFmt(rest)} cm`:"kein Rest"}`);
      y-=15;

      const bx=35,bw=525,bh=15,by=y-bh;
      page+="1 g\n"+rc(bx,by,bw,bh,true)+"0 g\n"+rc(bx,by,bw,bh,false);
      let off=0;
      bar.pieces.forEach(piece=>{
        const x=bx+bw*(off/raw),w=Math.max(.55,bw*(piece.len/raw));
        page+=rc(x,by,w,bh,false);
        const labelText=`${lengthFmt(piece.len)} cm`;
        if(w>30)page+=t(x+2.5,by+4.2,6.8,labelText,true);
        off+=piece.len+LENGTH_KERF_CM;
      });
      const restW=bw*(rest/raw);
      if(restW>0){const rx=bx+bw*((raw-rest)/raw);page+="0.93 g\n"+rc(rx,by,restW,bh,true)+"0 g\n"+rc(rx,by,restW,bh,false);}
      y=by-10;

      seqLines.forEach(line=>{page+=tWarehouse(39,y,7.2,line);y-=10.5;});
      y-=6;
    });
    previousPdfMaterial=group.material;
    y-=3;
  });
  pushPage();
  return buildSimplePdfBase64(pages,makeLengthPortablePayload());
}

function makeLengthEml(result,customer){
  const boundary="----=_Lowis_Laengenzuschnitt_"+Date.now();
  const ref="TEST-L-"+new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14);
  const subject=`TEST Laengen-Zuschnittanfrage ${ref}${result.mode==="project"&&result.projectName?" - "+result.projectName:""}`;
  const restLimit=normalizeRestLimit(result.restLimit);
  const totalBars=result.groups.reduce((a,g)=>a+g.bars.length,0);
  const text=[
    "Neue unverbindliche Laengen-Zuschnittanfrage","",`Referenz: ${ref}`,
    result.mode==="project"&&result.projectName?`Projekt: ${result.projectName}`:null,
    `Kunde: ${customer.name}`,customer.company?`Firma: ${customer.company}`:null,`E-Mail: ${customer.email}`,customer.phone?`Telefon: ${customer.phone}`:null,"",
    `Modus: ${result.mode==="project"?"Projekt / mehrere Dimensionen":"Einzelmaterial"}`,
    "Saegefuge: 0,5 cm / 5 mm fest",`Restgrenze: ${lengthFmt(restLimit)} cm`,`Berechnete Rohstuecke: ${totalBars}`,`Fertigteile gesamt: ${result.items.length}`,"",
    "Materialgruppen:",...result.groups.map(g=>{const s=summarizeBars(g.material,g.bars,g.restLimit??restLimit);const label=g.material===SPECIAL_LENGTH_MATERIAL?`Sondermass Hoehe ${lengthFmt(g.customHeight)} cm | Breite ${lengthFmt(g.customWidth)} cm | Laenge ${g.raws.map(lengthFmt).join(" / ")} cm`:`${g.material} ${g.dimension} cm | Rohlaengen ${g.raws.map(lengthFmt).join(" / ")} cm`;return `${label} | ${g.bars.length} Rohstueck(e) | Kundenrest ${lengthFmt(s.customerRest)} cm | Lagerrest ${lengthFmt(s.warehouseRest)} cm`;}),"",
    "Stueckliste:",...result.pos.map(p=>result.mode==="project"?`Pos. ${p.pos}: ${p.q} x ${lengthPositionMaterialText(p)} | ${lengthFmt(p.len)} cm${p.name?" | "+p.name:""}`:`Pos. ${p.pos}: ${p.q} x ${lengthFmt(p.len)} cm${p.name?" | "+p.name:""}`),
    customer.remarks?"":null,customer.remarks?"Bemerkung:":null,customer.remarks||null,"","Laengenzuschnitt-PDF und CSV-Stueckliste sind angehaengt."
  ].filter(v=>v!==null).join("\r\n");
  const pdfB64=makeLengthPlanPdfBase64(result,customer);
  const csvB64=utf8Base64("\ufeff"+lengthCsvText());
  const headers=["To: ",`Reply-To: ${emlSafeHeader(customer.email)}`,`Subject: =?UTF-8?B?${utf8Base64(subject)}?=`,`Date: ${new Date().toUTCString()}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${boundary}"`,""];
  const parts=[
    `--${boundary}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: base64","",utf8Base64(text),
    `--${boundary}`,`Content-Type: application/pdf; name="laengenzuschnitt-${ref}.pdf"`,`Content-Disposition: attachment; filename="laengenzuschnitt-${ref}.pdf"`,"Content-Transfer-Encoding: base64","",pdfB64.match(/.{1,76}/g).join("\r\n"),
    `--${boundary}`,`Content-Type: text/csv; charset="UTF-8"; name="stueckliste-${ref}.csv"`,`Content-Disposition: attachment; filename="stueckliste-${ref}.csv"`,"Content-Transfer-Encoding: base64","",csvB64.match(/.{1,76}/g).join("\r\n"),`--${boundary}--`,""
  ];
  return {ref,content:headers.concat(parts).join("\r\n")};
}

function sendLengthRequest(ev){
  ev.preventDefault();
  if(!currentLengthResult){setLengthNotice("error","Bitte zuerst einen Laengenzuschnitt berechnen.");return;}
  const fd=new FormData(ev.currentTarget),customer={name:String(fd.get("name")||"").trim(),company:String(fd.get("company")||"").trim(),email:String(fd.get("email")||"").trim(),phone:String(fd.get("phone")||"").trim(),remarks:String(fd.get("remarks")||"").trim()};
  if(!customer.name||!customer.email){setLengthNotice("error","Bitte Name und E-Mail ausfuellen.");return;}
  const btn=$("lengthSendRequestBtn");btn.disabled=true;btn.textContent="E-Mail wird erstellt …";
  try{
    const eml=makeLengthEml(currentLengthResult,customer);
    downloadEml(eml.content,`Lowis-Laengenzuschnittanfrage-${eml.ref}.eml`);
    openModal("Die fertige .eml-Datei wurde heruntergeladen. Oeffne sie in Outlook, Thunderbird oder Windows Mail. Laengenzuschnitt-PDF und CSV-Stueckliste sind angehaengt. Den Empfaenger bitte im Mailprogramm eintragen. Danach nur noch auf Senden klicken.");
  }catch(err){setLengthNotice("error","Die E-Mail-Datei konnte nicht erstellt werden: "+err.message);}
  finally{btn.disabled=false;btn.textContent="E-Mail-Anfrage erstellen";}
}

function serializeSelections(store){const out={};Object.entries(store).forEach(([k,v])=>out[k]=[...v]);return out;}
function restoreSelections(store,data){if(!data||typeof data!=="object")return;Object.entries(data).forEach(([k,v])=>{if(Array.isArray(v))store[k]=new Set(v.map(Number));});}
function saveLengthDraft(){
  try{localStorage.setItem(LENGTH_DRAFT_KEY,JSON.stringify({mode:activeLengthMode,material:$("lengthMaterialSelect")?.value||"KVH",dimension:$("lengthDimensionSelect")?.value||"",singlePlanName:$("lengthPlanName")?.value||"",singleSpecial:{height:$("lengthSpecialHeight")?.value||"",width:$("lengthSpecialWidth")?.value||"",length:$("lengthSpecialLength")?.value||""},singleRestLimit:getSingleRestLimit(),projectName:$("projectName")?.value||"",projectDescription:$("v60ProjectDescription")?.value||"",projectRestLimit:getProjectRestLimit(),singleRaws:serializeSelections(singleRawSelection),projectRaws:serializeSelections(projectRawSelection),parts:[...($("lengthPartsBody")?.querySelectorAll("tr")||[])].map(tr=>({len:tr.querySelector(".ll")?.value||"",q:tr.querySelector(".lq")?.value||"1",name:tr.querySelector(".lname")?.value||""})),projectParts:[...($("projectPartsBody")?.querySelectorAll("tr")||[])].map(tr=>({material:tr.querySelector(".pmat")?.value||"KVH",dimension:tr.querySelector(".pdim")?.value||"",customHeight:tr.querySelector(".pcustom-h")?.value||"",customWidth:tr.querySelector(".pcustom-w")?.value||"",customLength:tr.querySelector(".pcustom-l")?.value||"",len:tr.querySelector(".plen")?.value||"",q:tr.querySelector(".pqty")?.value||"1",name:tr.querySelector(".pname2")?.value||""}))}));}catch(_){ }
}
function restoreLengthDraft(){
  let d=null;try{d=JSON.parse(localStorage.getItem(LENGTH_DRAFT_KEY)||"null");}catch(_){ }if(!d)return false;restoreSelections(singleRawSelection,d.singleRaws);restoreSelections(projectRawSelection,d.projectRaws);
  if(d.material===SPECIAL_LENGTH_MATERIAL||LENGTH_CATALOG[d.material])$("lengthMaterialSelect").value=d.material;
  if($("lengthPlanName"))$("lengthPlanName").value=d.singlePlanName||"";
  if(d.singleSpecial){if($("lengthSpecialHeight"))$("lengthSpecialHeight").value=d.singleSpecial.height||"";if($("lengthSpecialWidth"))$("lengthSpecialWidth").value=d.singleSpecial.width||"";if($("lengthSpecialLength"))$("lengthSpecialLength").value=d.singleSpecial.length||"";}
  if($("singleRestLimit"))$("singleRestLimit").value=normalizeRestLimit(d.singleRestLimit);
  rebuildLengthDimensions(d.dimension||"");$("lengthPartsBody").innerHTML="";(Array.isArray(d.parts)?d.parts:[]).forEach(p=>addLengthPartRow(p.len,Number(p.q)||1,p.name||""));if(!$("lengthPartsBody").children.length)addLengthPartRow();
  $("projectPartsBody").innerHTML="";(Array.isArray(d.projectParts)?d.projectParts:[]).forEach(p=>addProjectPartRow(p.material,p.dimension,p.len,Number(p.q)||1,p.name||"",false,p.customHeight||"",p.customWidth||"",p.customLength||""));if(!$("projectPartsBody").children.length)addProjectPartRow();if($("projectName"))$("projectName").value=d.projectName||"";if($("v60ProjectDescription"))$("v60ProjectDescription").value=d.projectDescription||"";syncV60ProjectDescriptionCount();if($("projectRestLimit"))$("projectRestLimit").value=normalizeRestLimit(d.projectRestLimit);currentProjectId=null;rebuildProjectRawSettings();setLengthMode(d.mode||"single",false);updateLengthMaterial();return true;
}

function projectId(){
  if(window.crypto&&typeof window.crypto.randomUUID==="function")return window.crypto.randomUUID();
  return "p-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9);
}
function getSavedProjects(){
  try{
    const data=JSON.parse(localStorage.getItem(SAVED_PROJECTS_KEY)||"[]");
    return Array.isArray(data)?data.filter(p=>p&&p.id&&typeof p.name==="string"):[];
  }catch(_){return [];}
}
function putSavedProjects(projects){
  try{localStorage.setItem(SAVED_PROJECTS_KEY,JSON.stringify(projects));return true;}catch(_){
    setLengthNotice("error","Projekt konnte im Browser nicht gespeichert werden. Prüfe, ob lokaler Speicher blockiert oder voll ist.");return false;
  }
}
function currentProjectRows(){
  return [...($('projectPartsBody')?.querySelectorAll('tr')||[])].map(tr=>({
    material:tr.querySelector('.pmat')?.value||'KVH',
    dimension:tr.querySelector('.pdim')?.value||'',
    customHeight:tr.querySelector('.pcustom-h')?.value||'',
    customWidth:tr.querySelector('.pcustom-w')?.value||'',
    customLength:tr.querySelector('.pcustom-l')?.value||'',
    len:tr.querySelector('.plen')?.value||'',
    q:tr.querySelector('.pqty')?.value||'1',
    name:tr.querySelector('.pname2')?.value||''
  }));
}
function relevantProjectSelections(rows){
  const out={};
  (rows||[]).forEach(r=>{
    if(r.material===SPECIAL_LENGTH_MATERIAL)return;
    const key=lengthGroupKey(r.material,r.dimension);
    if(projectRawSelection[key])out[key]=[...projectRawSelection[key]];
  });
  return out;
}
function collectNamedProject(){
  const rows=currentProjectRows();
  return {
    id:currentProjectId||projectId(),
    name:String($('projectName')?.value||'').trim(),
    restLimit:getProjectRestLimit(),
    projectParts:rows,
    projectRaws:relevantProjectSelections(rows)
  };
}
function renderSavedProjects(preferredId=null){
  const select=$('projectSavedSelect'); if(!select)return;
  const list=getSavedProjects().sort((a,b)=>String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));
  $('projectSavedCount').textContent=String(list.length);
  if(!list.length){select.innerHTML='<option value="">Noch keine Projekte gespeichert</option>';select.disabled=true;}
  else{
    select.disabled=false;
    select.innerHTML=list.map(p=>`<option value="${escapeAttr(p.id)}">${escapeHtmlText(p.name)}${p.updatedAt?` · ${new Date(p.updatedAt).toLocaleDateString('de-DE')}`:''}</option>`).join('');
    const wanted=preferredId||currentProjectId;
    if(wanted&&list.some(p=>p.id===wanted))select.value=wanted;
  }
  ['projectLoad','projectRename','projectDelete'].forEach(id=>{if($(id))$(id).disabled=!list.length;});
}
function setProjectStorageStatus(text){if($('projectStorageStatus'))$('projectStorageStatus').textContent=text||'';}
function saveNamedProject(){
  const data=collectNamedProject();
  if(!data.name){$('projectName')?.focus();setProjectStorageStatus('Bitte zuerst einen Projektnamen eingeben.');return;}
  const projects=getSavedProjects();
  const now=new Date().toISOString();
  if(currentProjectId&&projects.some(p=>p.id!==currentProjectId&&p.name.trim().toLocaleLowerCase('de-DE')===data.name.toLocaleLowerCase('de-DE'))){
    setProjectStorageStatus('Dieser Projektname ist bereits vergeben. Bitte einen anderen Namen verwenden.');return;
  }
  let idx=projects.findIndex(p=>p.id===currentProjectId);
  if(idx<0){
    const same=projects.findIndex(p=>p.name.trim().toLocaleLowerCase('de-DE')===data.name.toLocaleLowerCase('de-DE'));
    if(same>=0){
      if(!window.confirm(`Ein Projekt mit dem Namen „${data.name}“ existiert bereits. Überschreiben?`))return;
      idx=same;data.id=projects[same].id;currentProjectId=data.id;
    }
  }
  if(idx>=0){data.createdAt=projects[idx].createdAt||now;data.updatedAt=now;projects[idx]=data;}
  else{data.createdAt=now;data.updatedAt=now;projects.push(data);currentProjectId=data.id;}
  if(!putSavedProjects(projects))return;
  currentProjectId=data.id;saveLengthDraft();renderSavedProjects(data.id);
  setProjectStorageStatus(`„${data.name}“ wurde lokal gespeichert.`);
}
function applyNamedProject(p){
  if(!p)return;
  Object.keys(projectRawSelection).forEach(k=>delete projectRawSelection[k]);
  restoreSelections(projectRawSelection,p.projectRaws||{});
  $('projectPartsBody').innerHTML='';
  const rows=Array.isArray(p.projectParts)?p.projectParts:[];
  rows.forEach(r=>addProjectPartRow(r.material,r.dimension,r.len,Number(r.q)||1,r.name||'',false,r.customHeight||'',r.customWidth||'',r.customLength||''));
  if(!$('projectPartsBody').children.length)addProjectPartRow();
  $('projectName').value=p.name||'';if($('projectRestLimit'))$('projectRestLimit').value=normalizeRestLimit(p.restLimit);currentProjectId=p.id||null;
  rebuildProjectRawSettings();setLengthMode('project',false);
  $('lengthResultArea').classList.add('hidden');currentLengthResult=null;saveLengthDraft();renderSavedProjects(currentProjectId);
  setProjectStorageStatus(`„${p.name}“ geladen.`);
}
function selectedSavedProject(){
  const id=$('projectSavedSelect')?.value;if(!id)return null;return getSavedProjects().find(p=>p.id===id)||null;
}
function loadNamedProject(){const p=selectedSavedProject();if(!p)return;applyNamedProject(p);}
function newNamedProject(){
  const hasData=String($('projectName')?.value||'').trim()||readProjectPositions().length>0;
  if(hasData&&!window.confirm('Aktuelles Projekt schließen und ein neues Projekt beginnen? Nicht gespeicherte Änderungen gehen dabei verloren.'))return;
  currentProjectId=null;Object.keys(projectRawSelection).forEach(k=>delete projectRawSelection[k]);
  $('projectName').value='';if($('projectRestLimit'))$('projectRestLimit').value=DEFAULT_REST_LIMIT_CM;$('projectPartsBody').innerHTML='';addProjectPartRow();rebuildProjectRawSettings();
  $('lengthResultArea').classList.add('hidden');currentLengthResult=null;setProjectStorageStatus('Neues Projekt.');saveLengthDraft();renderSavedProjects();
  $('projectName')?.focus();
}
function renameNamedProject(){
  const p=selectedSavedProject();if(!p)return;
  const next=window.prompt('Neuer Projektname:',p.name);if(next===null)return;const name=next.trim();if(!name)return;
  const projects=getSavedProjects();
  if(projects.some(x=>x.id!==p.id&&x.name.trim().toLocaleLowerCase('de-DE')===name.toLocaleLowerCase('de-DE'))){setProjectStorageStatus('Dieser Projektname existiert bereits.');return;}
  const idx=projects.findIndex(x=>x.id===p.id);if(idx<0)return;projects[idx].name=name;projects[idx].updatedAt=new Date().toISOString();
  if(!putSavedProjects(projects))return;
  if(currentProjectId===p.id)$('projectName').value=name;
  renderSavedProjects(p.id);saveLengthDraft();setProjectStorageStatus(`Projekt in „${name}“ umbenannt.`);
}
function deleteNamedProject(){
  const p=selectedSavedProject();if(!p)return;
  if(!window.confirm(`Gespeichertes Projekt „${p.name}“ wirklich löschen?`))return;
  const projects=getSavedProjects().filter(x=>x.id!==p.id);if(!putSavedProjects(projects))return;
  if(currentProjectId===p.id){currentProjectId=null;setProjectStorageStatus('Gespeicherte Version gelöscht. Der aktuell geöffnete Inhalt bleibt als ungespeichertes Projekt erhalten.');}
  else setProjectStorageStatus(`„${p.name}“ gelöscht.`);
  renderSavedProjects();saveLengthDraft();
}
function toggleSavedProjects(){
  const panel=$('projectSavedPanel'),btn=$('projectSavedToggle');const willOpen=panel.classList.contains('hidden');
  panel.classList.toggle('hidden',!willOpen);btn.setAttribute('aria-expanded',String(willOpen));if(willOpen)renderSavedProjects();
}

function lengthKeyboardAllowed(ev){if(ev.ctrlKey||ev.metaKey||ev.altKey||ev.repeat)return false;const el=ev.target;if(!el)return true;if(el.isContentEditable)return false;const tag=String(el.tagName||"").toLowerCase();if(tag==="textarea"||tag==="select")return false;if(tag==="input")return el.type==="number"&&!!el.closest(activeLengthMode==="project"?"#projectPartsBody":"#lengthPartsBody");return true;}
document.addEventListener("keydown",ev=>{if(window.activePlannerMode!=="length"||!lengthKeyboardAllowed(ev))return;const plus=ev.key==="+"||ev.code==="NumpadAdd",minus=ev.key==="-"||ev.key==="−"||ev.code==="NumpadSubtract";if(plus){ev.preventDefault();activeLengthMode==="project"?addProjectPartRow("KVH","","",1,"",true):addLengthPartRow("",1,"",true);return;}if(minus){ev.preventDefault();const body=$(activeLengthMode==="project"?"projectPartsBody":"lengthPartsBody"),rows=[...body.querySelectorAll("tr")];if(rows.length)(activeLengthMode==="project"?removeProjectPartRow:removeLengthPartRow)(rows[rows.length-1],true);}});

$("plateLoadPdf")?.addEventListener("click",()=>$("platePdfInput")?.click());
$("platePdfInput")?.addEventListener("change",async ev=>{const f=ev.target.files?.[0];await importPortablePdf(f,"plate");ev.target.value="";});
$("lengthLoadPdf")?.addEventListener("click",()=>$("lengthPdfInput")?.click());
$("lengthPdfInput")?.addEventListener("change",async ev=>{const f=ev.target.files?.[0];await importPortablePdf(f,"length");ev.target.value="";});
$("lengthPlanName")?.addEventListener("input",saveLengthDraft);
$("plannerTabPlate").addEventListener("click",()=>setPlannerMode("plate"));$("plannerTabLength").addEventListener("click",()=>setPlannerMode("length"));
$("lengthModeSingle").addEventListener("click",()=>setLengthMode("single"));$("lengthModeProject").addEventListener("click",()=>setLengthMode("project"));
$("lengthMaterialSelect").addEventListener("change",()=>rebuildLengthDimensions());$("lengthDimensionSelect").addEventListener("change",updateLengthMaterial);["lengthSpecialHeight","lengthSpecialWidth","lengthSpecialLength"].forEach(id=>$(id)?.addEventListener("input",()=>{updateLengthMaterial();}));$("lengthPartsBody").addEventListener("input",saveLengthDraft);$("projectPartsBody").addEventListener("input",saveLengthDraft);$("projectPartsBody").addEventListener("change",saveLengthDraft);
$("lengthAddPart").addEventListener("click",()=>addLengthPartRow("",1,"",true));$("lengthExample").addEventListener("click",loadLengthExample);$("lengthClear").addEventListener("click",clearLengthParts);$("lengthCalculate").addEventListener("click",calculateLengths);
$("projectAddPart").addEventListener("click",()=>addProjectPartRow("KVH","","",1,"",true));$("projectExample").addEventListener("click",loadProjectExample);$("projectClear").addEventListener("click",clearProjectParts);$("projectCalculate").addEventListener("click",calculateProject);
$("projectName")?.addEventListener("input",saveLengthDraft);$("singleRestLimit").addEventListener("input",()=>{if(Number($("singleRestLimit").value)<0)$("singleRestLimit").value=0;saveLengthDraft();$("lengthResultArea").classList.add("hidden");currentLengthResult=null;});$("projectRestLimit").addEventListener("input",()=>{if(Number($("projectRestLimit").value)<0)$("projectRestLimit").value=0;saveLengthDraft();$("lengthResultArea").classList.add("hidden");currentLengthResult=null;});
$("lengthDownloadCsv").addEventListener("click",createLengthPieceListPdf);$("lengthPrint").addEventListener("click",createLengthPdf);
rebuildLengthDimensions();if(!restoreLengthDraft()){addLengthPartRow();addProjectPartRow();setLengthMode("single",false);updateLengthPreview();}
try{setPlannerMode(localStorage.getItem("lowis-active-planner")||"plate");}catch(_){setPlannerMode("plate");}


$("requestForm").addEventListener("submit",sendRequest);
$("lengthRequestForm").addEventListener("submit",sendLengthRequest);

$("modalClose").addEventListener("click",closeModal);
$("modalPrint").addEventListener("click",createCurrentPdf);
$("modalCsv").addEventListener("click",createCurrentPieceListPdf);
$("modalBackdrop").addEventListener("click",ev=>{if(ev.target===$("modalBackdrop")) closeModal();});

initGroups();
syncV60PlateFormatControls();
syncV60ProjectDescriptionCount();
updatePlateOptimizationHelp();
setTimeout(()=>{try{syncV59OptimizationCards();}catch(_){ }},0);
if(!restoreDraft()) addPartRow();
showRuntimeGuidance();



/* V59: Auswahlkarten Plattenoptimierung + Projekt-PDF-Karte */
function syncV59OptimizationCards(){
  const value=String($("plateOptimizationMode")?.value||"material");
  document.querySelectorAll("[data-plate-opt]").forEach(btn=>btn.classList.toggle("active",btn.dataset.plateOpt===value));
}
document.querySelectorAll("[data-plate-opt]").forEach(btn=>btn.addEventListener("click",()=>{
  const select=$("plateOptimizationMode"); if(!select)return;
  select.value=btn.dataset.plateOpt||"material";
  select.dispatchEvent(new Event("change",{bubbles:true}));
  syncV59OptimizationCards();
}));
$("plateOptimizationMode")?.addEventListener("change",syncV59OptimizationCards);
$("v59ProjectPdfBtn")?.addEventListener("click",()=>$("lengthLoadPdf")?.click());
const v59ProjectDrop=$("v59ProjectPdfDrop");
if(v59ProjectDrop){
  ["dragenter","dragover"].forEach(type=>v59ProjectDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();v59ProjectDrop.classList.add("dragover");}));
  ["dragleave","dragend"].forEach(type=>v59ProjectDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();v59ProjectDrop.classList.remove("dragover");}));
  v59ProjectDrop.addEventListener("drop",async ev=>{ev.preventDefault();ev.stopPropagation();v59ProjectDrop.classList.remove("dragover");const f=[...(ev.dataTransfer?.files||[])].find(x=>x.type==="application/pdf"||String(x.name||"").toLowerCase().endsWith(".pdf"));if(f)await importPortablePdfAuto(f);});
}
syncV59OptimizationCards();

/* =========================================================
   V56 Navigation / Startseite / Anfrage
   ========================================================= */
let v56ActivePage="home";
let v56InquiryFiles=[];

function setV56NavActive(page){
  document.querySelectorAll(".v56-nav-item").forEach(btn=>btn.classList.toggle("active",btn.dataset.v56Page===page));
}
function setV56Visibility(el,show){ if(el) el.classList.toggle("hidden",!show); }
function navigateV56(page,scroll=true){
  if(!["home","plate","length","project","request"].includes(page)) page="home";
  v56ActivePage=page;
  document.body.dataset.v56Page=page;
  setV56NavActive(page);
  setV56Visibility($("v56HomePage"),page==="home");
  setV56Visibility($("v56RequestPage"),page==="request");
  const work=page==="plate"||page==="length"||page==="project";
  document.querySelector(".hero")?.classList.toggle("hidden",!work);
  if(page==="plate"){
    setPlannerMode("plate");
    $("heroTitle").textContent="Einzelmaterial – Plattenzuschnitt";
    $("heroText").textContent="Ein Material. Weniger Verschnitt. Mehr Möglichkeiten.";
  }else if(page==="length"){
    setPlannerMode("length");setLengthMode("single",false);
    $("heroTitle").textContent="Einzelmaterial – Längenzuschnitt";
    $("heroText").textContent="Ein Material. Weniger Verschnitt. Mehr Möglichkeiten.";
    if($("v59LengthPanelTitle")) $("v59LengthPanelTitle").textContent="Material und Parameter";
    if($("v59LengthResultSubhead")) $("v59LengthResultSubhead").textContent="Längenzuschnitt-Plan";
  }else if(page==="project"){
    setPlannerMode("length");setLengthMode("project",false);
    $("heroTitle").textContent="Projektmodus – Mehrere Materialien in einem Auftrag";
    $("heroText").textContent="Kombiniere verschiedene Materialien und Dimensionen in einem Projekt. Einfach. Übersichtlich. Effizient.";
    if($("v59LengthPanelTitle")) $("v59LengthPanelTitle").textContent="Projektdaten";
    if($("v59LengthResultSubhead")) $("v59LengthResultSubhead").textContent="Materialweise optimiert";
  }else{
    $("platePlannerView")?.classList.add("hidden");
    $("lengthPlannerView")?.classList.add("hidden");
  }
  try{localStorage.setItem("lowis-v56-page",page);}catch(_){ }
  if(scroll) window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".v56-nav-item").forEach(btn=>btn.addEventListener("click",()=>navigateV56(btn.dataset.v56Page)));
document.querySelectorAll("[data-v56-go]").forEach(btn=>btn.addEventListener("click",()=>navigateV56(btn.dataset.v56Go)));

$("v56HeroPdfBtn")?.addEventListener("click",()=>{
  if(v56ActivePage==="plate") $("plateLoadPdf")?.click();
  else $("lengthLoadPdf")?.click();
});
$("v56HomePdfBtn")?.addEventListener("click",()=>$("v56HomePdfInput")?.click());
$("v56HomePdfInput")?.addEventListener("change",async ev=>{
  const f=ev.target.files?.[0]; if(f) await importPortablePdfAuto(f); ev.target.value="";
});
const homeDrop=$("v56HomeDrop");
if(homeDrop){
  ["dragenter","dragover"].forEach(type=>homeDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();homeDrop.classList.add("dragover");if(ev.dataTransfer)ev.dataTransfer.dropEffect="copy";}));
  ["dragleave","dragend"].forEach(type=>homeDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();homeDrop.classList.remove("dragover");}));
  homeDrop.addEventListener("drop",async ev=>{ev.preventDefault();ev.stopPropagation();homeDrop.classList.remove("dragover");const f=[...(ev.dataTransfer?.files||[])].find(x=>x.type==="application/pdf"||String(x.name||"").toLowerCase().endsWith(".pdf"));if(f)await importPortablePdfAuto(f);});
}

function setV56Help(show){const el=$("v56HelpModal");if(!el)return;el.classList.toggle("hidden",!show);el.setAttribute("aria-hidden",show?"false":"true");}
$("v56HelpBtn")?.addEventListener("click",()=>setV56Help(true));
$("v56HelpClose")?.addEventListener("click",()=>setV56Help(false));
$("v56HelpModal")?.addEventListener("click",ev=>{if(ev.target===$("v56HelpModal"))setV56Help(false);});
document.addEventListener("keydown",ev=>{if(ev.key==="Escape")setV56Help(false);});

function v56FormatBytes(n){if(n<1024)return n+" B";if(n<1048576)return (n/1024).toFixed(1)+" KB";return (n/1048576).toFixed(1)+" MB";}
function renderV56InquiryFiles(){
  const box=$("v56InquiryFileList");if(!box)return;
  box.innerHTML=v56InquiryFiles.map((f,i)=>`<div class="v56-file-row"><span>${escapeHtmlText(f.name)} · ${v56FormatBytes(f.size)}</span><button type="button" data-remove-inquiry-file="${i}" aria-label="Datei entfernen">×</button></div>`).join("");
  box.querySelectorAll("[data-remove-inquiry-file]").forEach(btn=>btn.addEventListener("click",()=>{v56InquiryFiles.splice(Number(btn.dataset.removeInquiryFile),1);renderV56InquiryFiles();}));
}
function addV56InquiryFiles(files){
  for(const f of files){
    const ok=f.type==="application/pdf"||f.type==="image/jpeg"||f.type==="image/png"||/\.(pdf|jpe?g|png)$/i.test(f.name||"");
    if(ok&&f.size<=10*1024*1024)v56InquiryFiles.push(f);
  }
  renderV56InquiryFiles();
}
document.querySelectorAll("[data-inquiry-type]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-inquiry-type]").forEach(x=>x.classList.remove("active"));btn.classList.add("active");$("v56InquiryType").value=btn.dataset.inquiryType;}));
$("v56InquiryFileBtn")?.addEventListener("click",()=>$("v56InquiryFiles")?.click());
$("v56InquiryFiles")?.addEventListener("change",ev=>{addV56InquiryFiles([...(ev.target.files||[])]);ev.target.value="";});
const inquiryDrop=$("v56InquiryDrop");
if(inquiryDrop){
  ["dragenter","dragover"].forEach(type=>inquiryDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();inquiryDrop.classList.add("dragover");}));
  ["dragleave","dragend"].forEach(type=>inquiryDrop.addEventListener(type,ev=>{ev.preventDefault();ev.stopPropagation();inquiryDrop.classList.remove("dragover");}));
  inquiryDrop.addEventListener("drop",ev=>{ev.preventDefault();ev.stopPropagation();inquiryDrop.classList.remove("dragover");addV56InquiryFiles([...(ev.dataTransfer?.files||[])]);});
}
async function fileToBase64V56(file){const bytes=new Uint8Array(await file.arrayBuffer());let binary="";for(let i=0;i<bytes.length;i+=0x8000)binary+=String.fromCharCode(...bytes.subarray(i,i+0x8000));return btoa(binary);}
function wrap76V56(s){return (s.match(/.{1,76}/g)||[""]).join("\r\n");}
$("v56InquiryForm")?.addEventListener("submit",async ev=>{
  ev.preventDefault();const fd=new FormData(ev.currentTarget);const status=$("v56InquiryStatus");
  const name=String(fd.get("name")||"").trim(),email=String(fd.get("email")||"").trim(),subject=String(fd.get("subject")||"").trim(),message=String(fd.get("message")||"").trim();
  if(!name||!email||!subject||!message){if(status)status.textContent="Bitte alle Pflichtfelder ausfüllen.";return;}
  const btn=ev.currentTarget.querySelector("button[type=submit]");btn.disabled=true;btn.textContent="E-Mail wird erstellt …";
  try{
    const type=$("v56InquiryType")?.value||"Allgemein",company=String(fd.get("company")||"").trim(),phone=String(fd.get("phone")||"").trim();
    const boundary="----=_Lowis_Anfrage_"+Date.now();
    const body=[`Anfrageart: ${type}`,`Name: ${name}`,company?`Firma: ${company}`:"",`E-Mail: ${email}`,phone?`Telefon: ${phone}`:"","Nachricht:",message].filter(Boolean).join("\r\n");
    const lines=["To: info@lowis.de",`Reply-To: ${emlSafeHeader(email)}`,`Subject: =?UTF-8?B?${utf8Base64(subject)}?=`,`Date: ${new Date().toUTCString()}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary=\"${boundary}\"`,"",`--${boundary}`,`Content-Type: text/plain; charset=\"UTF-8\"`,"Content-Transfer-Encoding: base64","",wrap76V56(utf8Base64(body))];
    for(const f of v56InquiryFiles){const b64=await fileToBase64V56(f);lines.push(`--${boundary}`,`Content-Type: ${f.type||"application/octet-stream"}; name=\"${emlSafeHeader(f.name)}\"`,`Content-Disposition: attachment; filename=\"${emlSafeHeader(f.name)}\"`,`Content-Transfer-Encoding: base64`,"",wrap76V56(b64));}
    lines.push(`--${boundary}--`,"");downloadEml(lines.join("\r\n"),`LOWIS-Anfrage-${Date.now()}.eml`);if(status)status.textContent="E-Mail-Datei erstellt. Öffne sie im Mailprogramm und sende sie ab.";
  }catch(err){if(status)status.textContent="Die Anfrage konnte nicht erstellt werden: "+err.message;}finally{btn.disabled=false;btn.textContent="Anfrage als E-Mail erstellen";}
});

// Make old direct planner tabs route through the new page navigation as well.
$("plannerTabPlate")?.addEventListener("click",()=>navigateV56("plate",false));
$("plannerTabLength")?.addEventListener("click",()=>navigateV56("length",false));

// Start in last V56 section; new installations start on the home screen.
let initialV56="home";try{initialV56=localStorage.getItem("lowis-v56-page")||"home";}catch(_){ }
navigateV56(initialV56,false);
