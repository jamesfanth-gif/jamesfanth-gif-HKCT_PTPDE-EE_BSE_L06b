function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L6b: 'L6b HVAC Systems'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'HVAC Functions & Refrigeration Units',
    titleZh: '空調七大功能與製冷量單位 (TR, kW)',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">7 Core Functions of HVAC / MVAC (空調七大功能)</text>
        <g transform="translate(20, 45)">
          <rect x="0" y="0" width="140" height="32" fill="#1b4f72" rx="3"/>
          <text x="70" y="20" text-anchor="middle" font-size="10.5" fill="#fff">1. Cooling (降溫製冷)</text>
          <rect x="155" y="0" width="140" height="32" fill="#78281f" rx="3"/>
          <text x="225" y="20" text-anchor="middle" font-size="10.5" fill="#fff">2. Heating (供暖加熱)</text>
          <rect x="0" y="42" width="140" height="32" fill="#27ae60" rx="3"/>
          <text x="70" y="62" text-anchor="middle" font-size="10.5" fill="#fff">3. De-humidifying (除濕)</text>
          <rect x="155" y="42" width="140" height="32" fill="#d35400" rx="3"/>
          <text x="225" y="62" text-anchor="middle" font-size="10.5" fill="#fff">4. Humidifying (加濕)</text>
          <rect x="0" y="84" width="140" height="32" fill="#8e44ad" rx="3"/>
          <text x="70" y="104" text-anchor="middle" font-size="10.5" fill="#fff">5. Air Filtration (過濾)</text>
          <rect x="155" y="84" width="140" height="32" fill="#16a085" rx="3"/>
          <text x="225" y="104" text-anchor="middle" font-size="10.5" fill="#fff">6. Ventilation (通風)</text>
          <rect x="0" y="126" width="295" height="32" fill="#2c3e50" stroke="#f1c40f" rx="3"/>
          <text x="147" y="146" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">7. Air Distribution (合理氣流組織)</text>
        </g>
        <text x="170" y="245" text-anchor="middle" font-size="10" fill="#bdc3c7">Goal: Maintain Thermal Comfort &amp; Indoor Air Quality (IAQ)</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Common Refrigeration Energy Units (製冷量單位)</text>
        <rect x="20" y="50" width="300" height="90" fill="#1a252f" stroke="#f1c40f" rx="4"/>
        <text x="150" y="75" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">1 TR (Ton-Refrigeration) = 3.517 kW</text>
        <text x="150" y="100" text-anchor="middle" font-size="12" fill="#ecf0f1">1 TR = 12,000 Btu/hr = 3,024 kcal/hr</text>
        <text x="150" y="122" text-anchor="middle" font-size="10" fill="#bdc3c7">Rate of heat extraction per unit time</text>
        <rect x="20" y="155" width="300" height="90" fill="#111" stroke="#3498db" rx="4"/>
        <text x="150" y="178" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Mass-Rate vs Time-Rate of Refrigeration:</text>
        <text x="150" y="200" text-anchor="middle" font-size="9.5" fill="#5dade2">• Time-rate: kW, TR, Btu/hr (Total cooling duty)</text>
        <text x="150" y="222" text-anchor="middle" font-size="9.5" fill="#2ecc71">• Mass-rate: kJ/kg (Refrigeration effect per kg refrigerant)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Seven primary air-conditioning functions to maintain thermal comfort and IAQ, alongside time-rate refrigeration units (TR, kW, Btu/hr)',
    sections: [
      {
        title: 'Primary Functions of HVAC / MVAC / 空調七大核心功能',
        zh: '<p><strong>HVAC / MVAC</strong> 即供暖、通風與空氣調節系統 (Heating, Ventilating and Air-Conditioning / Mechanical Ventilation and Air-Conditioning)[cite: 7]。</p><p>其終極目標為<strong>提供並維持建築所需的熱舒適度 (Thermal Comfort) 與室內空氣品質 (Indoor Air Quality, IAQ)</strong>[cite: 7]：</p><ol><li>降溫製冷 (Cooling)[cite: 7]；</li><li>供暖升溫 (Heating)[cite: 7]；</li><li>加濕 (Humidifying)[cite: 7]；</li><li>除濕 (De-humidifying)[cite: 7]；</li><li>空氣過濾與淨化 (Air filtration / washing)[cite: 7]；</li><li>新風通風 (Ventilation)[cite: 7]；</li><li>氣流均勻分佈 (Air distribution)[cite: 7]。</li></ol>',
        en: '<p><strong>HVAC / MVAC</strong> systems encompass Heating, Ventilating, and Air-Conditioning[cite: 7].</p><p>Their primary mandate is <strong>to provide and maintain thermal comfort and acceptable indoor air quality (IAQ)</strong> via seven core processes[cite: 7]: Cooling, Heating, Humidifying, De-humidifying, Air filtration, Ventilation, and Air distribution[cite: 7].</p>'
      },
      {
        title: 'Refrigeration Units of Measurement / 製冷效應單位體系',
        zh: '<ul><li><strong>時間率 (Time-rate)</strong>：單位時間提取之熱量，常用單位包括<strong>冷噸 (Ton-refrigeration, TR)</strong>、<strong>千瓦 (kW)</strong>、<strong>英熱單位每小時 (Btu/hr)</strong> 及 <strong>大卡每小時 (kcal/hr)</strong>[cite: 7]。其中：<br>$$1\text{ TR} = 12000\text{ Btu/hr} \approx 3.517\text{ kW} \approx 3024\text{ kcal/hr}$$</li><li><strong>質量率 (Mass-rate)</strong>：每千克循環冷媒提取的熱量（$kJ/kg$）[cite: 7]。</li></ul>',
        en: '<ul><li><strong>Time-rate of refrigeration</strong>: Heat energy extracted per unit time, quantified in <strong>Ton-refrigeration (TR)</strong>, <strong>kW</strong>, <strong>Btu/hr</strong>, and <strong>kcal/hr</strong>[cite: 7] ($1\text{ TR} = 12000\text{ Btu/hr} \approx 3.517\text{ kW}$).</li><li><strong>Mass-rate</strong>: Heat extracted per unit mass of circulating refrigerant ($kJ/kg$)[cite: 7].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Basic Vapor Compression Refrigeration Cycle',
    titleZh: '蒸氣壓縮製冷四大件與熱力流向',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">The 4 Basic Components of Vapor Compression Refrigeration Cycle (四大部件與熱力轉移)</text>
      <!-- Evaporator (Indoor 3°C to 25°C Air) -->
      <g class="scada-unit" transform="translate(60, 45)">
        <rect x="0" y="0" width="160" height="70" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="4"/>
        <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">EVAPORATOR (蒸發器)</text>
        <text x="80" y="46" text-anchor="middle" font-size="9.5" fill="#5dade2">Low Temp &amp; Low Press (3°C)</text>
        <text x="80" y="62" text-anchor="middle" font-size="8.5" fill="#abebc6">Absorbs Q2 from Indoor 25°C Air</text>
      </g>
      <!-- Compressor (Work Input W) -->
      <g class="scada-unit" transform="translate(480, 45)">
        <rect x="0" y="0" width="160" height="70" fill="#34495e" stroke="#f1c40f" stroke-width="2" rx="4"/>
        <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">COMPRESSOR (壓縮機)</text>
        <text x="80" y="46" text-anchor="middle" font-size="9.5" fill="#f1c40f">Work Input W (電能輸入)</text>
        <text x="80" y="62" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Compresses vapor to High P &amp; T</text>
      </g>
      <!-- Condenser (Outdoor 46°C to 30°C Air) -->
      <g class="scada-unit" transform="translate(480, 185)">
        <rect x="0" y="0" width="160" height="70" fill="#78281f" stroke="#e74c3c" stroke-width="2" rx="4"/>
        <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">CONDENSER (冷凝器)</text>
        <text x="80" y="46" text-anchor="middle" font-size="9.5" fill="#f5b7b1">High Temp &amp; High Press (46°C)</text>
        <text x="80" y="62" text-anchor="middle" font-size="8.5" fill="#feca57">Rejects Q1 to Outdoor 30°C Air</text>
      </g>
      <!-- Expansion Device -->
      <g class="scada-unit" transform="translate(60, 185)">
        <rect x="0" y="0" width="160" height="70" fill="#7d6608" stroke="#f39c12" stroke-width="2" rx="4"/>
        <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">EXPANSION VALVE (膨脹閥)</text>
        <text x="80" y="46" text-anchor="middle" font-size="9.5" fill="#f1c40f">Throttles HP liquid to LP mixture</text>
        <text x="80" y="62" text-anchor="middle" font-size="8.5" fill="#abebc6">Regulates flow by cooling demand</text>
      </g>
      <!-- Connecting Piping Lines -->
      <path d="M 220 80 L 480 80" stroke="#00d2d3" stroke-width="4" class="flow-ref-lp"/>
      <text x="350" y="72" text-anchor="middle" font-size="9" fill="#00d2d3">Low P Vapour (低壓蒸氣 3°C)</text>
      <path d="M 560 115 L 560 185" stroke="#e74c3c" stroke-width="4" class="flow-ref-hp"/>
      <text x="595" y="150" text-anchor="middle" font-size="9" fill="#e74c3c">High P/T Vapour (46°C)</text>
      <path d="M 480 220 L 220 220" stroke="#e74c3c" stroke-width="4" class="flow-ref-hp"/>
      <text x="350" y="235" text-anchor="middle" font-size="9" fill="#f5b7b1">High P Subcooled Liquid (高壓液體)</text>
      <path d="M 140 185 L 140 115" stroke="#00d2d3" stroke-width="4" class="flow-ref-lp"/>
      <text x="95" y="150" text-anchor="middle" font-size="9" fill="#00d2d3">Low P/T Liquid Mixture</text>
      <line x1="40" y1="148" x2="680" y2="148" stroke="#7f8c8d" stroke-width="1.5" stroke-dasharray="6 3"/>
      <text x="250" y="143" font-size="9.5" fill="#00d2d3" font-weight="bold">LOW PRESSURE SIDE (低壓側)</text>
      <text x="440" y="160" font-size="9.5" fill="#e74c3c" font-weight="bold">HIGH PRESSURE SIDE (高壓側)</text>
    </svg>`,
    diagramCaption: 'Fig 2: Fundamental vapor compression refrigeration cycle mapping the 4 components, high/low pressure partition, and temperatures: Indoor 25°C air ➔ 3°C refrigerant ➔ Compressor ➔ 46°C refrigerant ➔ 30°C outdoor air',
    sections: [
      {
        title: 'The Four Fundamental Components / 製冷循環四大核心部件',
        zh: '<p>經典蒸氣壓縮式製冷循環由四大受壓部件組成[cite: 7]：</p><ol><li><strong>蒸發器 (Evaporator)</strong>：低溫低壓液態冷媒（約 3 °C）吸收室內空氣（約 25 °C）的熱量 $Q_2$ 汽化為低壓蒸氣，實現降溫除濕[cite: 7]；</li><li><strong>壓縮機 (Compressor)</strong>：消耗機械功 $W$，將低溫低壓冷媒蒸氣抽吸並壓縮成高溫高壓過熱蒸氣[cite: 7]；</li><li><strong>冷凝器 (Condenser)</strong>：高溫高壓冷媒（約 46 °C）向室外大氣（約 30 °C）或冷卻水釋放顯熱及全部汽化潛熱 $Q_1$，冷凝為高壓液體[cite: 7]；</li><li><strong>膨脹節流裝置 (Expansion device)</strong>：將高壓常溫冷媒液體節流降壓降溫，轉化為低溫低壓汽液兩相混合物，送入蒸發器開始下一循環[cite: 7]。</li></ol>',
        en: '<p>A standard vapor compression refrigeration machine comprises four essential components[cite: 7]:</p><ol><li><strong>Evaporator</strong>: Low-pressure liquid refrigerant (approx. 3 °C) absorbs heat $Q_2$ from indoor air (25 °C) and vapourizes[cite: 7];</li><li><strong>Compressor</strong>: Absorbs work $W$ to pump and compress low-pressure vapor into high-pressure, high-temperature superheated gas[cite: 7];</li><li><strong>Condenser</strong>: High-temperature refrigerant (46 °C) gives up sensible and latent heat $Q_1$ to outdoor ambient air (30 °C) or water, condensing into high-pressure liquid[cite: 7];</li><li><strong>Expansion Device</strong>: Throttles high-pressure liquid to low-pressure/temperature mixture based on cooling load[cite: 7].</li></ol>'
      },
      {
        title: 'Energy Balance Across the Cycle / 熱力學能量平衡',
        zh: '<p>熱能傳遞路徑：室內空氣熱量 $\\to$ 蒸發器冷媒 $\\to$ 壓縮機做功升級 $\\to$ 冷凝器冷媒 $\\to$ 室外空氣[cite: 7]。</p><div class="formula-block">Q_1 = Q_2 + W \quad \text{(冷凝器排熱 = 蒸發器吸熱 + 壓縮機電功)}</div>',
        en: '<p>Heat flow hierarchy: Indoor Air $\\to$ Evaporator Refrigerant $\\to$ Compressor Work $\\to$ Condenser Refrigerant $\\to$ Outdoor Sink[cite: 7].</p><div class="formula-block">Q_1 = Q_2 + W \quad \text{(Heat rejected = Heat absorbed + Compressor power)}</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Refrigerants Evolution & Montreal Protocol',
    titleZh: '冷媒環保演進：CFC 淘汰與新環保冷媒',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Refrigerant Evolution &amp; Environmental Protocols (冷媒環保替代路線)</text>
        <rect x="30" y="50" width="310" height="100" fill="#78281f" stroke="#c0392b" stroke-width="2" rx="4"/>
        <text x="185" y="75" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f5b7b1">Banned CFCs (蒙特利爾議定書 1986)</text>
        <text x="185" y="100" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">R-11  &amp;  R-12</text>
        <text x="185" y="120" text-anchor="middle" font-size="9.5" fill="#f5b7b1">• High Ozone Depletion Potential (ODP)</text>
        <text x="185" y="136" text-anchor="middle" font-size="9.5" fill="#f5b7b1">• Severe Greenhouse Warming Potential (GWP)</text>
        <rect x="360" y="50" width="310" height="100" fill="#145a32" stroke="#2ecc71" stroke-width="2" rx="4"/>
        <text x="515" y="75" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#abebc6">New Alternatives &amp; Remedial Measures</text>
        <text x="515" y="98" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">HFC: R-134a  |  HCFC: R-123</text>
        <text x="515" y="118" text-anchor="middle" font-size="10" fill="#f1c40f">Blends: R-410A, R-407C (Near-azeotropic)</text>
        <text x="515" y="138" text-anchor="middle" font-size="9.5" fill="#abebc6">Natural: R-717 (Ammonia / 氨) for chillers</text>
        <rect x="30" y="165" width="640" height="60" fill="#111" stroke="#f1c40f" rx="4"/>
        <text x="350" y="188" text-anchor="middle" font-size="10.5" fill="#fff">R-134a completely replaced R-12 in centrifugal chillers; R-410A replaced R-22 in VRV/splits.</text>
        <text x="350" y="210" text-anchor="middle" font-size="10" fill="#f1c40f">R-717 (Ammonia) has zero ODP and zero GWP with outstanding thermodynamic efficiency.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Timeline of refrigerants: CFC phase-out (R-11, R-12) under Montreal Protocol (1986) replaced by R-134a, R-123, blends (R-410A, R-407C), and R-717 ammonia',
    sections: [
      {
        title: 'Montreal Protocol & CFC Phase-Out / 蒙特利爾議定書與臭氧層破壞',
        zh: '<p>根據 1986 年《蒙特利爾議定書》及其後續修正案，傳統氯氟烴 (CFCs) <strong>R-11 與 R-12 已被全球強制禁用</strong>[cite: 7]。原因是其釋放的氯原子會劇烈破壞大氣臭氧層 (Ozone layer depletion)，並具有極高的全球變暖潛能 (GWP)[cite: 7]。</p>',
        en: '<p>Under the <strong>Montreal Protocol (1986)</strong>, fully halogenated chlorofluorocarbons <strong>R-11 and R-12 have been permanently banned</strong> due to severe ozone layer depletion (ODP) and greenhouse warming potential (GWP)[cite: 7].</p>'
      },
      {
        title: 'New Refrigerant Solutions / 新型環保冷媒',
        zh: '<ul><li><strong>R-134a</strong> (HFC)：零臭氧破壞，全面替代 R-12 廣泛應用於大型離心冷水機組和車載空調[cite: 7]；</li><li><strong>R-123</strong> (HCFC)：低 ODP，用於替換大型低壓離心冰機的 R-11[cite: 7]；</li><li><strong>混合冷媒 (Blends)</strong>：<strong>R-410A</strong> 及 <strong>R-407C</strong>，廣泛應用於分體機、VRV 多聯機及模塊風冷冷水機[cite: 7]；</li><li><strong>天然冷媒 R-717 (Ammonia / 氨)</strong>：熱力性能極高、零 ODP、零 GWP，在工業及大型水冷主機中廣受推薦[cite: 7]。</li></ul>',
        en: '<ul><li><strong>R-134a (HFC)</strong>: Zero ODP, direct replacement for R-12 in centrifugal chillers[cite: 7].</li><li><strong>R-123 (HCFC)</strong>: Low-pressure interim retrofit for R-11[cite: 7].</li><li><strong>Blends</strong>: <strong>R-410A and R-407C</strong> for VRV/VRF and split systems[cite: 7].</li><li><strong>R-717 (Ammonia)</strong>: Eco-friendly natural refrigerant used in large industrial chiller applications[cite: 7].</li></ul>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Comfort Air-Conditioning vs Industrial Applications',
    titleZh: '舒適空調評估指標 vs 特殊工藝空調',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Comfort AC: Human Factors (舒適空調)</text>
        <g transform="translate(20, 45)">
          <rect x="0" y="0" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="70" y="20" text-anchor="middle" font-size="10" fill="#fff">• Dry Bulb Temp</text>
          <rect x="155" y="0" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="225" y="20" text-anchor="middle" font-size="10" fill="#fff">• Relative Humidity</text>
          <rect x="0" y="40" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="70" y="60" text-anchor="middle" font-size="10" fill="#fff">• Air Velocity (風速)</text>
          <rect x="155" y="40" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="225" y="60" text-anchor="middle" font-size="10" fill="#fff">• Mean Radiant T (MRT)</text>
          <rect x="0" y="80" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="70" y="100" text-anchor="middle" font-size="10" fill="#fff">• Clothing &amp; Activity</text>
          <rect x="155" y="80" width="140" height="32" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="225" y="100" text-anchor="middle" font-size="10" fill="#fff">• Stratification (垂直溫差)</text>
        </g>
        <rect x="20" y="170" width="300" height="75" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="195" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Contaminants Control: Dusts, bacteria,</text>
        <text x="170" y="215" text-anchor="middle" font-size="9.5" fill="#bdc3c7">viruses, CO, H₂S, amines to ensure health.</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Industrial AC (工藝空調特定需求)</text>
        <rect x="20" y="45" width="300" height="42" fill="#1a252f" stroke="#f1c40f" rx="3"/>
        <text x="170" y="65" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">1. Cleanrooms (半導體晶片無塵室)</text>
        <text x="170" y="80" text-anchor="middle" font-size="8.5" fill="#f1c40f">Strict particulate filtration (ISO Classes 1-5)</text>
        <rect x="20" y="95" width="300" height="42" fill="#1a252f" stroke="#2ecc71" rx="3"/>
        <text x="170" y="115" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">2. Operating Theatres &amp; Pharma (手術室/製藥)</text>
        <text x="170" y="130" text-anchor="middle" font-size="8.5" fill="#2ecc71">Bacteria-free laminar airflow &amp; positive pressure</text>
        <rect x="20" y="145" width="300" height="42" fill="#1a252f" stroke="#00cec9" rx="3"/>
        <text x="170" y="165" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">3. Photographic Labs (膠卷與感光實驗室)</text>
        <text x="170" y="180" text-anchor="middle" font-size="8.5" fill="#00cec9">Ultra-stable dry bulb temperature control</text>
        <rect x="20" y="195" width="300" height="45" fill="#1a252f" stroke="#e74c3c" rx="3"/>
        <text x="170" y="215" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">4. Textile Plants (紡織廠)</text>
        <text x="170" y="230" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Must maintain very high humidity (prevent static/breakage)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Comparison: Comfort air conditioning parameters (PMV/PPD human comfort factors) vs Specialized industrial requirements (Cleanrooms, Operating theatres, Photo labs, Textile mills)',
    sections: [
      {
        title: 'Comfort Air-Conditioning Factors / 舒適性空調要素',
        zh: '<p>舒適空調旨在服務人體熱舒適感，取決於<strong>八大主要因素</strong>[cite: 7]：</p><ol><li>乾球溫度 (DBT)[cite: 7]；</li><li>相對濕度 (RH)[cite: 7]；</li><li>空氣流速與流動方式[cite: 7]；</li><li>周圍環境平均輻射溫度 (Mean Radiant Temperature, MRT)[cite: 7]；</li><li>服裝熱阻 (Clothing)[cite: 7]；</li><li>人體活動產熱量 (Metabolic activity)[cite: 7]；</li><li>垂直空氣溫度分層 (Temperature stratification)[cite: 7]；</li><li>空氣污染物濃度（粉塵、細菌、病毒、CO、H₂S、胺類）[cite: 7]。</li></ol>',
        en: '<p><strong>Comfort Air-Conditioning</strong> serves human thermal comfort, dictated by 8 factors[cite: 7]: Dry bulb temperature, Relative humidity, Air movement (velocity), Mean radiant temperature (MRT), Clothing, Human activity, Temperature stratification, and Contaminant concentrations (dust, bacteria, CO)[cite: 7].</p>'
      },
      {
        title: 'Industrial Air-Conditioning Applications / 特殊工藝空調典型案例',
        zh: '<ul><li><strong>積體電路 (IC) 製造</strong>：必須在潔淨室 (Clean rooms) 嚴格過濾微塵環境中進行[cite: 7]；</li><li><strong>醫院手術室與製藥廠</strong>：必須維持無菌、正壓層流氣流環境 (Bacteria-free operating theatres)[cite: 7]；</li><li><strong>攝影沖印實驗室</strong>：需要極為穩定的恆溫控制[cite: 7]；</li><li><strong>紡織車間 (Textile plants)</strong>：<strong>必須維持極高相對濕度環境</strong>，以消除靜電並防止紗線斷裂[cite: 7]。</li></ul>',
        en: '<ul><li><strong>Integrated Circuit fabrication</strong>: Strictly in "clean rooms"[cite: 7];</li><li><strong>Surgeries &amp; Pharmaceuticals</strong>: Must be conducted in "bacteria-free" operating theatres[cite: 7];</li><li><strong>Photographic laboratories</strong>: High stability in air temperature[cite: 7];</li><li><strong>Textile plants</strong>: <strong>Must maintain a very humid environment</strong> to prevent yarn snapping and static[cite: 7].</li></ul>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'The Four Sub-Systems of Central Air-Conditioning',
    titleZh: '中央空調四大子系統（風側/水側/冷媒側/加熱側）',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">The 4 Sub-Systems of Central Air-Conditioning (中央空調四大循環回路)</text>
      <!-- 1. Air Side -->
      <g class="scada-unit" transform="translate(40, 45)">
        <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#f1c40f" stroke-width="2" rx="6"/>
        <text x="150" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#f1c40f">1. AIR SIDE SYSTEM (空氣側系統)</text>
        <text x="20" y="48" font-size="9.5" fill="#ecf0f1">• AHU, PAU, FCU, Supply/Return Fans</text>
        <text x="20" y="68" font-size="9.5" fill="#ecf0f1">• Air ducts, filters, diffusers, grilles, dampers</text>
        <text x="20" y="88" font-size="8.5" fill="#bdc3c7">Conveys treated air to occupied building rooms</text>
      </g>
      <!-- 2. Water Side -->
      <g class="scada-unit" transform="translate(400, 45)">
        <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="150" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#3498db">2. WATER SIDE SYSTEM (水側系統)</text>
        <text x="20" y="48" font-size="9.5" fill="#ecf0f1">• Chilled Water Loop (7°C supply / 12°C return)</text>
        <text x="20" y="68" font-size="9.5" fill="#ecf0f1">• Condenser Water Loop (32°C to 37°C to Tower)</text>
        <text x="20" y="88" font-size="8.5" fill="#bdc3c7">Pumps, strainers, 2-way/3-way valves, F&amp;E tanks</text>
      </g>
      <!-- 3. Refrigerant Side -->
      <g class="scada-unit" transform="translate(40, 160)">
        <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="150" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">3. REFRIGERANT SIDE (製冷劑側)</text>
        <text x="20" y="48" font-size="9.5" fill="#ecf0f1">• Compressor (Centrifugal, Screw, Scroll)</text>
        <text x="20" y="68" font-size="9.5" fill="#ecf0f1">• Evaporator shell &amp; Condenser shell</text>
        <text x="20" y="88" font-size="8.5" fill="#bdc3c7">Closed thermodynamic vapor compression cycle</text>
      </g>
      <!-- 4. Heating Side -->
      <g class="scada-unit" transform="translate(400, 160)">
        <rect x="0" y="0" width="300" height="95" fill="#1a252f" stroke="#e67e22" stroke-width="2" rx="6"/>
        <text x="150" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">4. HEATING SIDE (加熱側系統)</text>
        <text x="20" y="48" font-size="9.5" fill="#ecf0f1">• Boilers (Hot water / Steam)</text>
        <text x="20" y="68" font-size="9.5" fill="#ecf0f1">• Electric heaters, heat exchangers (Calorifiers)</text>
        <text x="20" y="88" font-size="8.5" fill="#bdc3c7">Preheat coils, reheat coils, perimeter heating</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: The Four Main Sub-systems of a complete central HVAC plant: Air side, Water side, Refrigerant side, and Heating side',
    sections: [
      {
        title: 'Four Interconnected HVAC Loops / 四大子系統分工',
        zh: '<p>中央空調系統可高度概括為四大物理子迴路[cite: 7]：</p><ol><li><strong>空氣側 (Air Side)</strong>：包含新風取風口、初中效過濾器、冷熱盤管、加濕器、送排風機、保溫風管、風量調節閥及各類散流器[cite: 7]；</li><li><strong>水側 (Water Side)</strong>：包含冷凍水循環管路（供水 7 °C、回水 12 °C）、冷卻水管路（連接冷卻塔）、水泵、過濾器、閥門及膨脹水箱[cite: 7]；</li><li><strong>製冷劑側 (Refrigerant Side)</strong>：冰機本體內部的壓縮機、蒸發器管束、冷凝器管束及電子膨脹閥[cite: 7]；</li><li><strong>加熱側 (Heating Side)</strong>：熱水鍋爐、蒸汽鍋爐、電加熱棒、熱水循環泵與熱交換器[cite: 7]。</li></ol>',
        en: '<p>Central air-conditioning systems are divided into four primary sub-loops[cite: 7]:</p><ol><li><strong>Air side</strong>: AHU, PAU, FCU, fans, ductwork, dampers, diffusers[cite: 7];</li><li><strong>Water side</strong>: Chilled water and condenser water pumps, piping, valves, cooling towers[cite: 7];</li><li><strong>Refrigerant side</strong>: Chiller compressor, shell-and-tube evaporator/condenser, expansion device[cite: 7];</li><li><strong>Heating side</strong>: Boilers, calorifiers, heat exchangers, electric duct heaters[cite: 7].</li></ol>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Air-Side Components, AHU Architecture & Air Diffusers',
    titleZh: '風側末端、空氣處理機組 (AHU) 與各類送風格柵',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">AHU Internal Component Chain &amp; Diffuser Types (空調箱內組件時序與散流器)</text>
      <!-- AHU Box -->
      <g transform="translate(40, 45)">
        <rect x="0" y="0" width="380" height="120" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="6"/>
        <text x="190" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">Central AHU Internal Layout</text>
        <rect x="15" y="35" width="40" height="70" fill="#2c3e50" stroke="#f1c40f"/>
        <text x="35" y="75" text-anchor="middle" font-size="8.5" fill="#fff" transform="rotate(-90 35 75)">Filter</text>
        <rect x="75" y="35" width="40" height="70" fill="#78281f" stroke="#e74c3c"/>
        <text x="95" y="75" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 95 75)">Preheat</text>
        <rect x="135" y="35" width="50" height="70" fill="#1b4f72" stroke="#3498db"/>
        <text x="160" y="75" text-anchor="middle" font-size="8.5" fill="#fff" transform="rotate(-90 160 75)">Cooling Coil</text>
        <rect x="205" y="35" width="40" height="70" fill="#78281f" stroke="#e74c3c"/>
        <text x="225" y="75" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 225 75)">Reheat</text>
        <rect x="260" y="35" width="40" height="70" fill="#16a085" stroke="#2ecc71"/>
        <text x="280" y="75" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 280 75)">Humidifier</text>
        <circle cx="340" cy="70" r="22" fill="#34495e" stroke="#ecf0f1"/>
        <text x="340" y="74" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Fan</text>
      </g>
      <!-- Diffuser Types Box -->
      <g transform="translate(440, 45)">
        <rect x="0" y="0" width="260" height="215" fill="#1a252f" stroke="#f39c12" stroke-width="1.5" rx="6"/>
        <text x="130" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">Terminal Supply Outlets (散流器)</text>
        <text x="20" y="45" font-size="10" fill="#ecf0f1">• <strong>4-way Ceiling Diffuser</strong>: Standard square</text>
        <text x="20" y="70" font-size="10" fill="#ecf0f1">• <strong>Circular Diffuser</strong>: Architectural aesthetic</text>
        <text x="20" y="95" font-size="10" fill="#f1c40f">• <strong>Linear Slot Diffuser</strong>: For high-class</text>
        <text x="30" y="110" font-size="9" fill="#f1c40f">commercial offices with VAV systems</text>
        <text x="20" y="135" font-size="10" fill="#abebc6">• <strong>Air Boots</strong>: Transition plenum box connecting</text>
        <text x="30" y="150" font-size="9" fill="#abebc6">linear diffusers &amp; VAV flexible ducts</text>
        <text x="20" y="175" font-size="10" fill="#bdc3c7">• <strong>Perforated Diffuser</strong>: Uniform laminar flow</text>
        <text x="20" y="200" font-size="10" fill="#bdc3c7">• <strong>Air Louvres</strong>: Weatherproof intake/exhaust</text>
      </g>
      <path d="M 400 105 L 430 105" stroke="#f1c40f" stroke-width="4" class="flow-air"/>
      <rect x="40" y="180" width="380" height="80" fill="#111" stroke="#3498db" rx="4"/>
      <text x="230" y="202" text-anchor="middle" font-size="10" fill="#5dade2">Conditioned air travels via supply ducts ➔ Air boots ➔ Diffusers.</text>
      <text x="230" y="222" text-anchor="middle" font-size="10" fill="#ecf0f1">Used air returns through false ceiling plenums or return grilles to AHU.</text>
      <text x="230" y="242" text-anchor="middle" font-size="9.5" fill="#abebc6">Linear slot diffusers blend seamlessly with modern commercial ceiling grids.</text>
    </svg>`,
    diagramCaption: 'Fig 6: Air handling unit (AHU) internal component sequencing (Filter ➔ Preheater ➔ Cooling coil ➔ Reheat ➔ Humidifier ➔ Fan) and terminal diffusers',
    sections: [
      {
        title: 'AHU Internal Component Sequencing / 空調箱內部組件時序',
        zh: '<p>標準組合式空調箱 (AHU) 內部各功能段通常按氣流方向依序排列[cite: 7]：</p><ol><li>混合風段（新風 + 回風混合箱）[cite: 7]；</li><li>初中效空氣過濾器 (Air filter)[cite: 7]；</li><li>預熱盤管 (Preheat coil，選配)[cite: 7]；</li><li>冷凍水冷卻除濕盤管 (Cooling coil)[cite: 7]；</li><li>加熱/再熱盤管 (Reheat coil)[cite: 7]；</li><li>加濕器 (Humidifier)[cite: 7]；</li><li>送風風機段 (Supply air fan)[cite: 7]。</li></ol>',
        en: '<p>A standard <strong>Air Handling Unit (AHU)</strong> houses components in aerodynamic sequence[cite: 7]: Mixing plenum, Filters, Pre-heat coil, Chilled water cooling coil, Reheat coil, Humidifier, and Supply fan[cite: 7].</p>'
      },
      {
        title: 'Air Diffusers & Terminal Fittings / 送風散流器與空氣靴',
        zh: '<ul><li><strong>線槽型散流器 (Linear Slot Diffuser)</strong>：外觀極簡，<strong>最常與高檔甲級寫字樓的變風量 (VAV) 系統配合設計</strong>[cite: 7]；</li><li><strong>空氣靴 (Air Boots)</strong>：專門用來連接 VAV 系統保溫軟風管與天花線槽型散流器的過渡靜壓箱[cite: 7]；</li><li><strong>四通天花散流器 (4-way Ceiling Diffuser)</strong>：最經典的方形散流器，形成均勻的貼附射流[cite: 7]；</li><li><strong>圓形散流器 (Circular) 與孔板散流器 (Perforated)</strong>[cite: 7]。</li></ul>',
        en: '<ul><li><strong>Linear Slot Diffuser</strong>: Highly unobtrusive; <strong>commonly designed for VAV systems in high-class commercial offices</strong>[cite: 7].</li><li><strong>Air Boots</strong>: Transition plenum boxes connecting linear slot diffusers with upstream flexible ducting from VAV boxes[cite: 7].</li><li><strong>4-way Ceiling Diffusers</strong>, <strong>Circular Diffusers</strong>, and <strong>Perforated Diffusers</strong>[cite: 7].</li></ul>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Unitary Equipment: Window-Mounted Air Conditioners',
    titleZh: '多聯單元式設備：窗口式冷氣機特點與缺陷',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Window-Mounted Room Air Conditioner (窗口式冷氣機整體構造與利弊)</text>
        <!-- Wall dividing Room and Outdoor -->
        <rect x="230" y="45" width="20" height="135" fill="#7f8c8d"/>
        <text x="240" y="38" text-anchor="middle" font-size="9" fill="#bdc3c7">Wall</text>
        <!-- Indoor Side (Evaporator) -->
        <rect x="40" y="55" width="190" height="115" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="135" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">INDOOR SECTION</text>
        <rect x="55" y="95" width="25" height="60" fill="#2980b9"/>
        <text x="67" y="130" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 67 130)">Evaporator</text>
        <circle cx="150" cy="125" r="18" fill="#16a085"/>
        <text x="150" y="129" text-anchor="middle" font-size="8" fill="#fff">Supply Fan</text>
        <!-- Outdoor Side (Condenser + Compressor) -->
        <rect x="250" y="55" width="240" height="115" fill="#78281f" stroke="#e74c3c" rx="4"/>
        <text x="370" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OUTDOOR SECTION</text>
        <circle cx="300" cy="125" r="22" fill="#34495e"/>
        <text x="300" y="129" text-anchor="middle" font-size="8" fill="#fff">Compressor</text>
        <circle cx="370" cy="125" r="18" fill="#e67e22"/>
        <text x="370" y="129" text-anchor="middle" font-size="8" fill="#fff">Cooling Fan</text>
        <rect x="440" y="95" width="25" height="60" fill="#c0392b"/>
        <text x="452" y="130" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 452 130)">Condenser</text>
        <!-- Slotted condenser water slinger ring -->
        <text x="370" y="160" text-anchor="middle" font-size="8.5" fill="#feca57">Condensate mist thrown by fan</text>
        <!-- Summary Matrix -->
        <g transform="translate(505, 55)">
          <rect x="0" y="0" width="175" height="115" fill="#111" stroke="#e74c3c" rx="4"/>
          <text x="87" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#e74c3c">5 Major Disadvantages:</text>
          <text x="10" y="38" font-size="8.5" fill="#f5b7b1">1. High noise inside room</text>
          <text x="10" y="53" font-size="8.5" fill="#f5b7b1">2. Low energy efficiency</text>
          <text x="10" y="68" font-size="8.5" fill="#f5b7b1">3. Wide temperature swing</text>
          <text x="10" y="83" font-size="8.5" fill="#f5b7b1">4. No humidity control</text>
          <text x="10" y="98" font-size="8.5" fill="#f5b7b1">5. Outdoor water dripping</text>
        </g>
        <rect x="40" y="185" width="640" height="60" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="360" y="208" text-anchor="middle" font-size="10.5" fill="#fff">Self-contained, direct-expansion (DX) system mounted on window sill or wall opening. Low initial cost &amp; fast installation.</text>
        <text x="360" y="230" text-anchor="middle" font-size="10" fill="#f1c40f">Available as: Cooling only, Cooling with electric heater, or Reversible heat pump.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Window air conditioner layout: Self-contained direct-expansion unit mounted in wall/window aperture with key functional limitations',
    sections: [
      {
        title: 'Features & Operations / 窗口式冷氣機特點',
        zh: '<p><strong>窗口式冷氣機 (Window-mounted room air conditioner)</strong> 是一種將製冷四大部件高度集成在單一金屬機箱內的<strong>獨立自給式 (Self-contained) 直接蒸發 (DX) 設備</strong>[cite: 7]。</p><p>優點是<strong>初投資低 (low initial cost)、安裝極快 (quick installation)</strong>，每間房獨立由溫控器單獨開閉控制[cite: 7]。常見類型包含：單冷型 (Cooling only)、電熱供暖型 (Electric heater) 以及可逆熱泵型 (Reversed heat pump)[cite: 7]。</p>',
        en: '<p><strong>Window air-conditioners</strong> are self-contained direct-expansion (DX) unitary equipment with low initial cost and rapid installation[cite: 7]. Each room is an occupant-controlled zone[cite: 7]. Available as cooling-only, cooling with electric heater, or reversible heat pump[cite: 7].</p>'
      },
      {
        title: 'Five Inherent Drawbacks / 窗口機五大固有缺陷',
        zh: '<div class="key-point"><strong>窗口機五大缺點（Slide 63）：</strong><br>1. <strong>噪聲大 (Noisy)</strong>：壓縮機與室內僅隔薄金屬板，震動與噪聲直接傳入室內[cite: 7]；<br>2. <strong>能效偏低 (Low efficiency)</strong>[cite: 7]；<br>3. <strong>溫度波動劇烈 (Temperature swing)</strong>：傳統開關控制使室溫忽冷忽熱[cite: 7]；<br>4. <strong>無獨立濕度控制能力 (No humidity control)</strong>[cite: 7]；<br>5. <strong>冷凝水滴漏問題 (Probable water dripping problem)</strong>，易引發高空滴水投訴[cite: 7]。</div>',
        en: '<div class="key-point"><strong>Five Major Disadvantages (Slide 63):</strong><br>1. <strong>Noisy</strong> (compressor mounted right against occupied space)[cite: 7];<br>2. <strong>Low energy efficiency</strong>[cite: 7];<br>3. <strong>Temperature swing</strong> due to on-off thermostat cycling[cite: 7];<br>4. <strong>No precise humidity control</strong>[cite: 7];<br>5. <strong>Probable water dripping problem</strong> on building exteriors[cite: 7].</div>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Unitary Equipment: Split-Type Air Conditioners',
    titleZh: '分體式冷氣機結構、冷媒配管與降噪優勢',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Split-Type Room Air Conditioner Architecture (分體式冷氣機架構)</text>
        <!-- Indoor Unit -->
        <g transform="translate(40, 50)">
          <rect x="0" y="0" width="180" height="110" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="4"/>
          <text x="90" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">INDOOR UNIT (室內機)</text>
          <rect x="15" y="38" width="20" height="55" fill="#2980b9"/>
          <text x="25" y="70" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 25 70)">Evaporator</text>
          <circle cx="75" cy="65" r="14" fill="#16a085"/>
          <text x="75" y="69" text-anchor="middle" font-size="8" fill="#fff">Fan</text>
          <polygon points="120,60 140,60 130,75" fill="#f1c40f"/>
          <text x="130" y="90" text-anchor="middle" font-size="7.5" fill="#f1c40f">Expansion</text>
          <path d="M 90 95 L 90 130 L 0 130" stroke="#3498db" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="55" y="142" font-size="8" fill="#3498db">To Drain (Toilet/Kitchen)</text>
        </g>
        <!-- Refrigerant Piping connecting through wall -->
        <g transform="translate(230, 80)">
          <path d="M 0 0 L 220 0" stroke="#00d2d3" stroke-width="4" class="flow-ref-lp"/>
          <text x="110" y="-8" text-anchor="middle" font-size="8.5" fill="#00d2d3">Gas Suction Line (低壓氣管)</text>
          <path d="M 0 30 L 220 30" stroke="#e74c3c" stroke-width="4" class="flow-ref-hp"/>
          <text x="110" y="45" text-anchor="middle" font-size="8.5" fill="#e74c3c">Liquid Line (高壓液管)</text>
          <rect x="100" y="-25" width="20" height="85" fill="#7f8c8d" opacity="0.5"/>
          <text x="110" y="75" text-anchor="middle" font-size="8" fill="#bdc3c7">Masonry Wall</text>
        </g>
        <!-- Outdoor Unit -->
        <g transform="translate(460, 50)">
          <rect x="0" y="0" width="200" height="110" fill="#78281f" stroke="#e74c3c" stroke-width="2" rx="4"/>
          <text x="100" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">OUTDOOR UNIT (室外機)</text>
          <circle cx="50" cy="65" r="20" fill="#34495e"/>
          <text x="50" y="69" text-anchor="middle" font-size="8.5" fill="#fff">Compressor</text>
          <circle cx="110" cy="65" r="16" fill="#e67e22"/>
          <text x="110" y="69" text-anchor="middle" font-size="8" fill="#fff">Fan</text>
          <rect x="160" y="38" width="20" height="55" fill="#c0392b"/>
          <text x="170" y="70" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 170 70)">Condenser</text>
        </g>
        <rect x="40" y="195" width="620" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">Core Advantage: Compressor &amp; Condenser Fan relocated OUTDOORS ➔ Substantially QUIETER inside room!</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Units can be single-split (1:1) or multi-split (multiple indoor units linked to 1 outdoor condensing unit).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Split-type system layout: Outdoor condensing unit isolated from indoor fan-coil section by refrigerant piping, delivering low indoor acoustic noise',
    sections: [
      {
        title: 'Split-Type Architectural Concept / 分體機構造原理',
        zh: '<p><strong>分體式冷氣機 (Split type room air conditioner)</strong> 將蒸發器與冷凝部分徹底物理分離[cite: 7]：</p><ul><li><strong>室內機 (Indoor unit)</strong>：只包含蒸發器盤管、低噪音貫流/離心風扇及膨脹節流閥[cite: 7]；</li><li><strong>室外機 (Outdoor condensing unit)</strong>：包含高噪音的壓縮機、軸流風扇及冷凝器，安裝在建築外牆托架或天台[cite: 7]；</li><li>二者穿過牆體僅由<strong>一對保溫冷媒銅管（氣管與液管）</strong>以及控制電線連接[cite: 7]。</li></ul>',
        en: '<p><strong>Split-type air conditioners</strong> separate the evaporator section from the condensing unit section[cite: 7]:</p><ul><li><strong>Indoor unit</strong> houses the evaporator coil and quiet supply fan[cite: 7];</li><li><strong>Outdoor unit</strong> contains the noisy compressor and condenser coil[cite: 7];</li><li>Linked through walls solely by a pair of insulated copper refrigerant pipes and control cabling[cite: 7].</li></ul>'
      },
      {
        title: 'Key Advantages / 核心工程優勢',
        zh: '<div class="key-point"><strong>大幅降低室內噪音：</strong> 由於噪聲與震動源（壓縮機與冷凝風機）被移至室外，室內環境<strong>遠比窗口機安靜 (considerably quieter)</strong>[cite: 7]。形態靈活：可為 1 對 1 單分體，亦可為 1 台室外機拖帶多台室內機的「一拖多」多聯分體系統 (Multi-split)[cite: 7]。</div>',
        en: '<div class="key-point"><strong>Acoustic Advantage:</strong> Relocating the compressor outdoors makes split units <strong>considerably quieter than window air-conditioners</strong>[cite: 7]. Flexible: Ranges from single 1:1 split to multi-split (multiple indoor evaporators per 1 outdoor unit)[cite: 7].</div>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Variable Refrigerant Volume (VRV / VRF) Systems',
    titleZh: '變冷媒流量多聯機 (VRV/VRF) 架構與變頻一拖多',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">VRV / VRF (Variable Refrigerant Volume) System Architecture (變冷媒流量多聯機系統)</text>
        <!-- Outdoor Inverter Unit -->
        <g transform="translate(35, 60)">
          <rect x="0" y="0" width="130" height="100" fill="#78281f" stroke="#e74c3c" stroke-width="2" rx="4"/>
          <text x="65" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">VRV Outdoor</text>
          <text x="65" y="42" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Inverter Compressor</text>
          <text x="65" y="60" text-anchor="middle" font-size="8.5" fill="#f1c40f">Variable Speed</text>
          <text x="65" y="85" text-anchor="middle" font-size="9" fill="#abebc6">Roof Mounted</text>
        </g>
        <!-- Main Ref Line Header -->
        <path d="M 165 110 L 660 110" stroke="#f1c40f" stroke-width="5" class="flow-ref-hp"/>
        <text x="380" y="100" text-anchor="middle" font-size="9.5" fill="#f1c40f" font-weight="bold">Refrigerant Distribution Pipe Network (分歧管冷媒網絡)</text>
        <!-- Indoor Units (up to 16) -->
        <g transform="translate(210, 130)">
          <rect x="0" y="0" width="80" height="40" fill="#1b4f72" stroke="#3498db" rx="3"/>
          <text x="40" y="24" text-anchor="middle" font-size="8.5" fill="#fff">FXYF (4-Way)</text>
          <path d="M 40 -20 L 40 0" stroke="#00d2d3" stroke-width="2.5"/>
        </g>
        <g transform="translate(320, 130)">
          <rect x="0" y="0" width="80" height="40" fill="#1b4f72" stroke="#3498db" rx="3"/>
          <text x="40" y="24" text-anchor="middle" font-size="8.5" fill="#fff">FXYD (Duct)</text>
          <path d="M 40 -20 L 40 0" stroke="#00d2d3" stroke-width="2.5"/>
        </g>
        <g transform="translate(430, 130)">
          <rect x="0" y="0" width="80" height="40" fill="#1b4f72" stroke="#3498db" rx="3"/>
          <text x="40" y="24" text-anchor="middle" font-size="8.5" fill="#fff">FXYA (Wall)</text>
          <path d="M 40 -20 L 40 0" stroke="#00d2d3" stroke-width="2.5"/>
        </g>
        <g transform="translate(540, 130)">
          <rect x="0" y="0" width="90" height="40" fill="#1b4f72" stroke="#3498db" rx="3"/>
          <text x="45" y="24" text-anchor="middle" font-size="8.5" fill="#fff">FXYB (Concealed)</text>
          <path d="M 45 -20 L 45 0" stroke="#00d2d3" stroke-width="2.5"/>
        </g>
        <rect x="35" y="195" width="635" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="218" text-anchor="middle" font-size="11" fill="#f1c40f" font-weight="bold">Bridges Unitary and Central AC Systems · Connectable up to 16 Indoor Units per Outdoor System</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Inverter compressor modulates refrigerant mass flow rate directly matching terminal partial cooling loads.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Variable Refrigerant Volume (VRV/VRF) system: One outdoor inverter condensing unit precisely modulates refrigerant flow across up to 16 mixed indoor units',
    sections: [
      {
        title: 'VRV / VRF System Concept / 變冷媒流量多聯機概念',
        zh: '<p><strong>變冷媒流量系統 (VRV / VRF - Variable Refrigerant Volume / Flow)</strong> 是一種介於單元式空調與中央空調之間的先進中型空調形式[cite: 7]。</p><p>其特徵在於：<strong>單台室外變頻冷凝機組最多可同時連接達 16 台各類型室內機 (Connectable to max. 16 indoor units)</strong>（如天花嵌入四面出風型 FXYF、暗裝風管型 FXYD、掛壁型 FXYA 等）[cite: 7]。</p>',
        en: '<p><strong>VRV / VRF systems</strong> represent an advanced technology situated <em>"between"</em> unitary and central systems[cite: 7].</p><p>A single modular outdoor condensing unit can connect to a <strong>maximum of 16 indoor units</strong> of diverse types (ceiling cassette, ducted, wall-mounted, floor-standing)[cite: 7].</p>'
      },
      {
        title: 'Inverter Modulation & Energy Savings / 變頻調節與節能優勢',
        zh: '<p>室外機搭載變頻壓縮機 (Inverter compressor) 與電子膨脹閥 (EEV)，直接根據各房間溫控器的實際負荷<strong>即時精確改變冷媒循環流量</strong>，部分負荷能效比極高，且免除了龐大的冷凍水管道與水泵機房[cite: 7]。</p>',
        en: '<p>Outdoor inverter compressors continuously modulate refrigerant flow to match instantaneous zone demands[cite: 7]. Eliminates massive water piping, pumps, and water treatment equipment while providing exceptional part-load efficiency[cite: 7].</p>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Central All-Water Systems (FCU + Chiller)',
    titleZh: '中央全水系統：風機盤管 (FCU) 與冷水機組',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">All-Water Central System: Only Chilled Water Piped into Space (全水系統架構)</text>
        <!-- Central Plant -->
        <rect x="40" y="55" width="140" height="120" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="110" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Central Plant Room</text>
        <text x="110" y="105" text-anchor="middle" font-size="9.5" fill="#5dade2">Liquid Chiller(s)</text>
        <circle cx="110" cy="140" r="14" fill="#16a085"/>
        <text x="110" y="144" text-anchor="middle" font-size="8" fill="#fff">Pump</text>
        <!-- Chilled water piping loop -->
        <path d="M 180 85 L 640 85" stroke="#00d2d3" stroke-width="4" class="flow-chw"/>
        <text x="300" y="75" font-size="9" fill="#00d2d3">Chilled Water Supply Main</text>
        <path d="M 640 155 L 180 155" stroke="#2e86de" stroke-width="4" class="flow-chw"/>
        <text x="300" y="170" font-size="9" fill="#2e86de">Chilled Water Return Main</text>
        <!-- FCUs in conditioned spaces -->
        <g transform="translate(420, 95)">
          <rect x="0" y="0" width="85" height="50" fill="#1a252f" stroke="#2ecc71" rx="3"/>
          <text x="42" y="22" text-anchor="middle" font-size="8.5" fill="#fff">FCU 1</text>
          <text x="42" y="38" text-anchor="middle" font-size="7" fill="#abebc6">Coil + Fan</text>
          <path d="M 42 -10 L 42 0 M 42 50 L 42 60" stroke="#00d2d3" stroke-width="2"/>
        </g>
        <g transform="translate(540, 95)">
          <rect x="0" y="0" width="85" height="50" fill="#1a252f" stroke="#2ecc71" rx="3"/>
          <text x="42" y="22" text-anchor="middle" font-size="8.5" fill="#fff">FCU 2</text>
          <text x="42" y="38" text-anchor="middle" font-size="7" fill="#abebc6">Coil + Fan</text>
          <path d="M 42 -10 L 42 0 M 42 50 L 42 60" stroke="#00d2d3" stroke-width="2"/>
        </g>
        <rect x="40" y="195" width="620" height="50" fill="#111" stroke="#3498db" rx="4"/>
        <text x="350" y="217" text-anchor="middle" font-size="10.5" fill="#5dade2" font-weight="bold">Only Chilled Water is Supplied to Conditioned Space for Handling ALL Cooling Loads</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Compact water pipes replace bulky air ducts. FCUs can be ceiling concealed or floor standing.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: All-water central system: Central liquid chillers circulate chemically-treated chilled water directly to distributed Fan Coil Units (FCUs)',
    sections: [
      {
        title: 'All-Water System Architecture / 全水系統構造與運作',
        zh: '<p><strong>全水系統 (All Water System)</strong> 由置於中央機房的一台或多台液體冷凍機 (Liquid chillers) 與分佈於建築各房間的大量<strong>風機盤管 (Fan Coil Units, FCUs)</strong> 組成[cite: 7]。</p><p>化學處理過的冷凍水進入冷凍機蒸發器放出顯熱降溫，隨後由水泵送至各房間 FCU 盤管，吸收室內空氣熱量後水溫升高，再流回冷凍機重新冷卻循環[cite: 7]。</p>',
        en: '<p>An <strong>All-Water System</strong> comprises central liquid chillers in a plant room and numerous <strong>fan coil units (FCUs)</strong> distributed throughout the building[cite: 7].</p><p>Chilled water absorbs heat from rooms across FCU coils and returns to the central chiller[cite: 7]. FCUs can be ceiling-mounted or floor-standing; exposed or concealed[cite: 7].</p>'
      },
      {
        title: 'Key Characteristic / 核心工程特徵',
        zh: '<div class="key-point"><strong>只有水管進入空調房間：</strong> <strong>Only Chilled Water Supplied to Conditioned Space for Handling all Cooling Loads</strong>[cite: 7]。由於水的體積比熱遠大於空氣，水管佔用天花吊頂空間極小，建築淨高利用率高[cite: 7]。新風通常由微型側牆開口引入或單獨配置小風管[cite: 7]。</div>',
        en: '<div class="key-point"><strong>Defining Principle:</strong> <strong>Only chilled water is piped into the occupied spaces</strong> to tackle the entire room cooling load[cite: 7]. Water pipes require vastly less spatial volume than air ducts[cite: 7].</div>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Central All-Air Systems: CAV vs VAV Systems',
    titleZh: '中央全空氣系統：定風量 (CAV) vs 變風量 (VAV Box)',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">All-Air Central System: Only Supply Air Supplied to Conditioned Space (全空氣系統)</text>
      <!-- Remote Plant AHU -->
      <g class="scada-unit" transform="translate(40, 45)">
        <rect x="0" y="0" width="150" height="120" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
        <text x="75" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">Remote AHU</text>
        <rect x="15" y="45" width="20" height="50" fill="#1b4f72"/>
        <text x="25" y="75" text-anchor="middle" font-size="8" fill="#fff" transform="rotate(-90 25 75)">Coil</text>
        <circle cx="85" cy="70" r="18" fill="#34495e"/>
        <text x="85" y="74" text-anchor="middle" font-size="8.5" fill="#fff">Fan</text>
      </g>
      <!-- Massive Supply Air Duct -->
      <path d="M 190 75 L 660 75" stroke="#f1c40f" stroke-width="8" class="flow-air"/>
      <text x="360" y="65" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">Main Supply Air Duct (所有冷量由空氣承擔)</text>
      <!-- Return Air Duct -->
      <path d="M 660 145 L 190 145" stroke="#3498db" stroke-width="6" class="flow-air"/>
      <text x="360" y="160" text-anchor="middle" font-size="10" fill="#5dade2">Return Air Duct</text>
      <!-- VAV Terminal Box Detail -->
      <g class="scada-unit" transform="translate(480, 85)">
        <rect x="0" y="0" width="160" height="50" fill="#111" stroke="#f1c40f" rx="3"/>
        <text x="80" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#f1c40f">VAV Terminal Box</text>
        <text x="80" y="38" text-anchor="middle" font-size="8" fill="#ecf0f1">Modulating Damper + Reheat</text>
      </g>
      <rect x="40" y="180" width="620" height="85" fill="#111" stroke="#1abc9c" rx="4"/>
      <text x="350" y="202" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">CAV vs VAV Operational Distinction:</text>
      <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#ecf0f1"><strong>CAV (Constant Air Volume)</strong>: Airflow is constant; supply air temperature is modulated by chilled water flow.</text>
      <text x="350" y="242" text-anchor="middle" font-size="9.5" fill="#f1c40f"><strong>VAV (Variable Air Volume)</strong>: Supply air temperature is kept constant; airflow rate is throttled by VAV damper to meet load.</text>
    </svg>`,
    diagramCaption: 'Fig 11: All-air central system architecture: Remote AHU supplies conditioned air; comparison of CAV (constant flow, variable temp) vs VAV (variable flow, constant temp with terminal VAV boxes)',
    sections: [
      {
        title: 'All-Air System Concept / 全空氣系統特點',
        zh: '<p><strong>全空氣系統 (All Air System)</strong> 中，所有空氣處理設備（AHU）均置於遠離房間的空調機房內[cite: 7]。</p><div class="key-point"><strong>只有風管進入房間：</strong> <strong>Only Supply Air Supplied to Conditioned Space for Handling all Cooling Loads</strong>[cite: 7]。室內無任何水管或冷媒管，杜絕了室內漏水和冷凝水發霉風險，室內空氣品質 (IAQ) 最佳，但風管尺寸龐大[cite: 7]。</div>',
        en: '<p>In an <strong>All-Air System</strong>, all air handling equipment is located remotely in plant rooms[cite: 7].</p><div class="key-point"><strong>Core Definition:</strong> <strong>Only conditioned air is delivered into the rooms</strong> to handle the entire heating and cooling burden[cite: 7]. Zero water pipes in ceilings, but requires substantial duct space[cite: 7].</div>'
      },
      {
        title: 'CAV vs VAV System Comparison / 定風量 (CAV) vs 變風量 (VAV)',
        zh: '<ul><li><strong>定風量系統 (Constant Air Volume, CAV)</strong>：送風量保持恆定[cite: 7]。部分負荷時，透過<strong>調節冷卻盤管的冷凍水流量來改變送風溫度</strong>以維持室溫[cite: 7]。低負荷時風機功耗無法下降，能耗較高。</li><li><strong>變風量系統 (Variable Air Volume, VAV)</strong>：AHU 輸出的<strong>送風溫度保持恆定（如 13 °C）</strong>[cite: 7]。各房間支管上裝設<strong>變風量箱 (VAV Box)</strong>，透過內部電動馬達調節風閥開度，<strong>直接改變送入房間的風量</strong>來適應負荷增減[cite: 7]。配合風機變頻調速，節能顯著，是現代甲級寫字樓的絕對主流[cite: 7]。</li></ul>',
        en: '<ul><li><strong>CAV (Constant Air Volume)</strong>: Airflow is constant; part-load demand is satisfied by <strong>altering chilled water flow to modulate supply air temperature</strong>[cite: 7].</li><li><strong>VAV (Variable Air Volume)</strong>: Supply air temperature is kept constant; the <strong>airflow rate is dynamically throttled</strong> by motorized VAV box dampers to match room load[cite: 7]. Huge fan energy savings.</li></ul>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Central Air-Water Systems (PAU + FCU) & Future PEM',
    titleZh: '空氣-水系統（初級新風機 PAU + FCU）與個人環境模組',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Air-Water System (PAU + FCU) &amp; Personal Environmental Module (PEM)</text>
      <!-- Central PAU -->
      <g class="scada-unit" transform="translate(40, 45)">
        <rect x="0" y="0" width="140" height="90" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
        <text x="70" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1abc9c">Central PAU</text>
        <text x="70" y="38" text-anchor="middle" font-size="8" fill="#bdc3c7">(Primary Air Unit)</text>
        <text x="70" y="60" text-anchor="middle" font-size="8.5" fill="#f1c40f">Treats 100% Outdoor Air</text>
        <text x="70" y="78" text-anchor="middle" font-size="8.5" fill="#abebc6">Handles Ventilation Load</text>
      </g>
      <!-- Primary Air Duct -->
      <path d="M 180 75 L 360 75 L 360 60 L 400 60" stroke="#f1c40f" stroke-width="4" class="flow-air"/>
      <text x="270" y="65" font-size="8.5" fill="#f1c40f">Primary Air Duct (新風管)</text>
      <!-- Chilled Water Pipe -->
      <path d="M 40 160 L 400 160" stroke="#00d2d3" stroke-width="4" class="flow-chw"/>
      <text x="220" y="150" font-size="8.5" fill="#00d2d3">Chilled Water Pipe (Handles Space Sensible Load)</text>
      <!-- Terminal FCU with mixing box -->
      <g class="scada-unit" transform="translate(400, 45)">
        <rect x="0" y="0" width="130" height="130" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="4"/>
        <text x="65" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Terminal FCU</text>
        <rect x="15" y="30" width="100" height="25" fill="#2c3e50"/>
        <text x="65" y="46" text-anchor="middle" font-size="7.5" fill="#f1c40f">Mixing Box (新回風混合)</text>
        <rect x="15" y="65" width="40" height="50" fill="#2980b9"/>
        <text x="35" y="95" text-anchor="middle" font-size="7.5" fill="#fff" transform="rotate(-90 35 95)">Coil</text>
        <circle cx="85" cy="90" r="14" fill="#16a085"/>
        <text x="85" y="94" text-anchor="middle" font-size="7" fill="#fff">Fan</text>
      </g>
      <!-- Future PEM Module -->
      <g class="scada-unit" transform="translate(560, 45)">
        <rect x="0" y="0" width="130" height="130" fill="#7d6608" stroke="#f1c40f" stroke-width="2" rx="4"/>
        <text x="65" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">PEM Workstation</text>
        <text x="65" y="42" text-anchor="middle" font-size="7.5" fill="#f1c40f">Task-Ambient Conditioning</text>
        <text x="65" y="65" text-anchor="middle" font-size="7" fill="#fff">• Local temp control</text>
        <text x="65" y="80" text-anchor="middle" font-size="7" fill="#fff">• Desk airflow nozzle</text>
        <text x="65" y="95" text-anchor="middle" font-size="7" fill="#fff">• Radiant foot warmer</text>
        <text x="65" y="110" text-anchor="middle" font-size="7" fill="#fff">• Acoustic masking</text>
      </g>
      <rect x="40" y="195" width="650" height="70" fill="#111" stroke="#1abc9c" rx="4"/>
      <text x="365" y="218" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">Air-Water Formula: Primary Air (PAU) handles 100% Ventilation + Chilled Water (FCU) handles Space Sensible Cooling</text>
      <text x="365" y="238" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Duct sizes are reduced by ~70% compared to all-air systems. Occupant personal environment modules optimize individual comfort.</text>
    </svg>`,
    diagramCaption: 'Fig 12: Air-Water system layout (central PAU treats fresh air, local FCU handles space sensible load) alongside future Personal Environmental Modules (PEM)',
    sections: [
      {
        title: 'Air-Water System Architecture / 空氣-水系統協同機制',
        zh: '<p><strong>空氣-水系統 (Air Water System)</strong> 是兼具全水與全空氣優勢的高性能折衷方案[cite: 7]：</p><ul><li><strong>初級新風處理機組 (PAU - Primary Air Unit)</strong>：在集中機房內將 100% 室外新鮮空氣進行深冷、除濕與過濾處理，專門<strong>承擔全部室內新風換氣負荷 (Ventilation loads)</strong>[cite: 7]；</li><li>處理後的新風（Primary air）經較小的新風管送至各房間<strong>風機盤管 (FCU) 的混合箱 (mixing box)</strong>，與室內回風混合後穿過 FCU 盤管[cite: 7]；</li><li><strong>冷凍水系統</strong>：送至各 FCU 盤管，<strong>承擔室內剩餘的大部分顯熱負荷 (Space sensible cooling load)</strong>[cite: 7]。風管尺寸比全空氣系統縮減約 70%，天花空間要求低[cite: 7]。</li></ul>',
        en: '<p>An <strong>Air-Water System</strong> combines air and hydronic benefits[cite: 7]:</p><ul><li><strong>Primary Air Units (PAU)</strong> treat 100% outdoor air to handle <strong>ventilation and latent fresh air loads</strong>[cite: 7];</li><li>Conditioned "primary air" is piped to the mixing box of terminal <strong>Fan Coil Units (FCUs)</strong>[cite: 7];</li><li><strong>Chilled water</strong> piped to FCU coils handles the remaining <strong>space sensible cooling loads</strong>[cite: 7]. Slashes duct sizes by ~70% compared to all-air designs[cite: 7].</li></ul>'
      },
      {
        title: 'Future Trend: Personal Environments (PEM) / 工位微環境模組',
        zh: '<p>現代綠色辦公建築的未來趨勢是<strong>工位個人環境模組 (Personal Environmental Modules, PEM / Task-Ambient Conditioning)</strong>[cite: 7]：由員工在個人辦公桌上自主獨立調節<strong>出風溫度、微風風速、腿部輻射散熱、桌面照明亮度以及背景噪聲遮蔽 (background noise masking)</strong>，配合紅外人體感應器實現無人時自動節能[cite: 7]。</p>',
        en: '<p><strong>Personal Environmental Modules (PEM)</strong> represent the cutting edge in task-ambient conditioning[cite: 7]: Individual desktop control over <strong>air temperature, air velocity nozzles, radiant foot heating, task lighting, and acoustic background masking</strong>[cite: 7].</p>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L06b)
// ==========================================
const mcData = [
  {
    question: "Which of the following is NOT one of the seven primary functions of air conditioning listed in Lecture 6b?",
    options: [
      "Cooling and heating",
      "Humidifying and de-humidifying",
      "Air filtration, ventilation, and air-distribution",
      "Direct conversion of flue gas to electricity"
    ],
    answer: 3,
    explanation: "Slide 5 lists the 7 functions: cooling, heating, humidifying, de-humidifying, air filtration/washing, ventilation, and air-distribution.",
    lesson: "L6b"
  },
  {
    question: "What is the equivalent cooling rate of ONE Ton-Refrigeration (1 TR) in kilowatts (kW) and Btu/hr?",
    options: [
      "1.000 kW and 3,412 Btu/hr",
      "3.517 kW and 12,000 Btu/hr",
      "4.185 kW and 14,200 Btu/hr",
      "10.00 kW and 34,120 Btu/hr"
    ],
    answer: 1,
    explanation: "Slide 6: 1 TR is mathematically equivalent to 12,000 Btu/hr or approximately 3.517 kW.",
    lesson: "L6b"
  },
  {
    question: "What are the FOUR basic components comprising the fundamental vapor compression refrigeration cycle?",
    options: [
      "Furnace, Boiler, Chimney, Radiator",
      "Evaporator, Compressor, Condenser, Expansion device",
      "Fan, Duct, Diffuser, Louvre",
      "Primary pump, Secondary pump, Decoupler, Cooling tower"
    ],
    answer: 1,
    explanation: "Slide 7: The four fundamental components are Evaporator, Compressor, Condenser, and Expansion device.",
    lesson: "L6b"
  },
  {
    question: "In the basic summer cooling refrigeration cycle shown in Slide 8, what are the representative refrigerant temperatures at evaporator and condenser?",
    options: [
      "-20 °C in evaporator and 100 °C in condenser",
      "3 °C in evaporator and 46 °C in condenser",
      "12 °C in evaporator and 30 °C in condenser",
      "25 °C in evaporator and 30 °C in condenser"
    ],
    answer: 1,
    explanation: "Slide 8: Refrigerant is at 3 °C in the evaporator (absorbing heat from 25 °C indoor air) and 46 °C in the condenser (rejecting heat to 30 °C outdoor air).",
    lesson: "L6b"
  },
  {
    question: "According to the Montreal Protocol (1986), which popular CFC refrigerants were banned due to ozone depletion and global warming?",
    options: ["R-134a and R-410A", "R-11 and R-12", "R-717 and R-123", "Water and Glycol"],
    answer: 1,
    explanation: "Slide 10: R-11 and R-12 are fully halogenated CFCs banned under the Montreal Protocol (1986).",
    lesson: "L6b"
  },
  {
    question: "Which of the following is an environmentally friendly, zero-ODP HFC refrigerant that replaced R-12 in centrifugal chillers?",
    options: ["R-11", "R-134a", "R-22", "R-113"],
    answer: 1,
    explanation: "Slide 10: R-134a is an HFC refrigerant introduced to replace R-12 with zero ozone depletion potential.",
    lesson: "L6b"
  },
  {
    question: "What chemical compound is designated as refrigerant R-717?",
    options: ["Carbon dioxide", "Ammonia", "Propane", "Water vapor"],
    answer: 1,
    explanation: "Slide 10: R-717 is ammonia, an efficient natural refrigerant commonly used in industrial and chiller applications.",
    lesson: "L6b"
  },
  {
    question: "Which of the following industrial facilities specifically requires a VERY HUMID air environment?",
    options: [
      "Integrated circuit cleanrooms",
      "Textile manufacturing plants",
      "Photographic processing darkrooms",
      "Hospital surgical suites"
    ],
    answer: 1,
    explanation: "Slide 13: Textile plants must maintain a very humid environment to prevent static electricity and thread breakage.",
    lesson: "L6b"
  },
  {
    question: "What is the primary air conditioning requirement for operating theatres and pharmaceutical factories?",
    options: [
      "Very high air velocity (> 10 m/s) to blow dust away",
      "Bacteria-free, sterile environment with positive pressurization and laminar filtration",
      "Near-zero relative humidity (< 5% RH)",
      "Direct seawater cooling loops inside the room"
    ],
    answer: 1,
    explanation: "Slide 13: Surgeries and pharmaceuticals must be performed in 'bacteria-free' sterile operating theatres.",
    lesson: "L6b"
  },
  {
    question: "What are the FOUR main sub-systems that constitute a complete central air conditioning plant?",
    options: [
      "Supply, Return, Exhaust, Relief",
      "Air side, Water side, Refrigerant side, Heating side",
      "Window, Split, Packaged, VRV",
      "Boiler, Chiller, Pump, Tower"
    ],
    answer: 1,
    explanation: "Slide 14: Air-conditioning systems are divided into four main functional component groups: Air side, Water side, Refrigerant side, and Heating side.",
    lesson: "L6b"
  },
  {
    question: "Which air distribution outlet is COMMONLY designed for VAV systems in high-class commercial offices?",
    options: [
      "4-way ceiling diffuser",
      "Linear slot diffuser",
      "Circular ceiling cone",
      "External weatherproof louvre"
    ],
    answer: 1,
    explanation: "Slide 40: Linear slot diffusers are commonly designed for VAV systems in high-class offices due to their clean architectural integration.",
    lesson: "L6b"
  },
  {
    question: "What is the function of an AIR BOOT in a commercial ceiling air distribution system?",
    options: [
      "To house the refrigerant expansion needle valve",
      "To connect linear slot diffusers with upstream flexible ducts from VAV boxes",
      "To collect condensate runoff from the cooling tower",
      "To vent flue gases out of the plant room"
    ],
    answer: 1,
    explanation: "Slide 43: Air boots are transition plenum boxes used to connect linear diffusers and flexible ducts from the VAV duct system.",
    lesson: "L6b"
  },
  {
    question: "Which of the following is a recognized disadvantage of WINDOW-MOUNTED room air conditioners?",
    options: [
      "Excessively high initial purchase cost",
      "Extremely long and complex refrigerant field piping runs",
      "High indoor noise, temperature swings, and outdoor water dripping",
      "Inability to operate on residential electrical supply"
    ],
    answer: 2,
    explanation: "Slide 62 lists the cons of window ACs: noisy, low efficiency, temperature swings, no humidity control, and water dripping.",
    lesson: "L6b"
  },
  {
    question: "Why is a SPLIT-TYPE room air conditioner considerably quieter inside the occupied space than a window AC?",
    options: [
      "It uses water instead of refrigerant to cool the room",
      "The noisy compressor and condenser fan sections are placed outdoors, separated by walls",
      "Its evaporator fan is completely omitted",
      "It operates strictly on direct current with no motor"
    ],
    answer: 1,
    explanation: "Slide 69: Condensing units (compressor and fan) are placed outdoors, separated by masonry walls, making indoor evaporators considerably quieter.",
    lesson: "L6b"
  },
  {
    question: "Packaged unitary ducted air conditioning systems are most suitable for which application?",
    options: [
      "High-rise 65-storey commercial office towers",
      "Cafeterias, fast food shops, canteens, and small sports centres",
      "Semiconductor sub-micron cleanrooms",
      "Hospital isolation wards"
    ],
    answer: 1,
    explanation: "Slide 74: Packaged units are larger and ducted, most suitable for cafeterias, fast food shops, canteens, and small sports centres.",
    lesson: "L6b"
  },
  {
    question: "In a Variable Refrigerant Volume (VRV / VRF) system, one outdoor condensing unit can connect up to a MAXIMUM of how many indoor units?",
    options: ["2 indoor units", "4 indoor units", "8 indoor units", "16 indoor units"],
    answer: 3,
    explanation: "Slide 76: VRV systems are connectable to a maximum of 16 indoor units per outdoor unit.",
    lesson: "L6b"
  },
  {
    question: "How does a VRV / VRF system modulate its cooling capacity to match individual room loads?",
    options: [
      "By opening and closing high-pressure steam bypass valves",
      "By varying the mass flow rate of circulating refrigerant via inverter-driven compressors and electronic expansion valves",
      "By throttling water flow across a primary-secondary decoupler",
      "By reversing fan rotation in the ceiling cassette"
    ],
    answer: 1,
    explanation: "Slide 75-76: VRV systems modulate capacity by directly varying the volume/mass flow of circulating refrigerant to match instantaneous zone demands.",
    lesson: "L6b"
  },
  {
    question: "Which central air conditioning system category is characterized by piping ONLY chilled water to terminal units (FCUs) across the building?",
    options: [
      "Direct Expansion (DX) system",
      "All-Water system",
      "All-Air system",
      "Air-Water system"
    ],
    answer: 1,
    explanation: "Slide 84-85: An All-Water system circulates only chilled water to Fan Coil Units (FCUs) distributed all over the building to handle all cooling loads.",
    lesson: "L6b"
  },
  {
    question: "What is a major technical drawback of large DIRECT EXPANSION (DX) central systems?",
    options: [
      "Water leaks into ceiling tiles",
      "Difficult refrigerant piping design, risk of costly refrigerant leaks, and distance limits between indoor unit and condensing unit",
      "Requirement for massive cooling tower make-up water tanks",
      "Inability to provide heating"
    ],
    answer: 1,
    explanation: "Slide 83: DX drawbacks include difficult refrigerant piping, expensive leaks, and maximum distance limitations between indoor units and condensing units.",
    lesson: "L6b"
  },
  {
    question: "In an ALL-AIR system, where are all the air handling equipment (AHUs) located?",
    options: [
      "Inside the occupied room directly under the windows",
      "Mounted exposed on external building facades",
      "In remote central plant rooms, with conditioned air ducted to the spaces",
      "Attached directly to each ceiling linear slot diffuser"
    ],
    answer: 2,
    explanation: "Slide 88: In all-air systems, all air handling equipment is located in remote plant rooms, and air is supplied through ducts.",
    lesson: "L6b"
  },
  {
    question: "What is the key operational difference between a Constant Air Volume (CAV) and a Variable Air Volume (VAV) all-air system?",
    options: [
      "CAV uses steam; VAV uses electricity",
      "CAV maintains constant airflow and varies supply air temperature; VAV maintains constant supply air temperature and varies airflow rate",
      "CAV varies airflow; VAV varies water flow",
      "CAV requires no fan; VAV requires no chiller"
    ],
    answer: 1,
    explanation: "Slide 88: CAV keeps air volume constant and varies supply air temperature; VAV keeps supply air temperature constant and varies airflow rate to match instantaneous demand.",
    lesson: "L6b"
  },
  {
    question: "What is the function of the motorized modulating damper inside a VAV TERMINAL BOX?",
    options: [
      "To throttle chilled water flow into the central plant",
      "To vary the volume of primary air entering the zone in response to a room thermostat",
      "To generate high-pressure steam for humidification",
      "To bypass condenser water to the cooling tower"
    ],
    answer: 1,
    explanation: "Slide 90-95: The modulating damper inside a VAV box throttles the volume of 13 °C primary air into the zone as the room cooling load fluctuates.",
    lesson: "L6b"
  },
  {
    question: "In a central AIR-WATER system, what is the specific role of the Primary Air Unit (PAU)?",
    options: [
      "It cools the chiller condenser water",
      "It treats 100% outdoor air for ventilation and delivers primary air to FCU mixing boxes",
      "It replaces the boiler in winter",
      "It extracts seawater from the harbour"
    ],
    answer: 1,
    explanation: "Slide 96-97: Special AHUs called PAUs treat outdoor air and deliver 'primary air' to terminal FCU mixing boxes to handle ventilation loads.",
    lesson: "L6b"
  },
  {
    question: "How is the thermal load shared in an AIR-WATER system?",
    options: [
      "100% handled by primary air ducts",
      "100% handled by chilled water pipes",
      "Ventilation/latent load handled by primary air (PAU); remaining space sensible load handled by chilled/hot water (FCU)",
      "Shared equally between the cooling tower and the expansion tank"
    ],
    answer: 2,
    explanation: "Slide 96-97: Ventilation is handled by primary air from the central PAU, while space sensible cooling/heating is handled by chilled/heating water in the FCU.",
    lesson: "L6b"
  },
  {
    question: "Personal Environmental Modules (PEM) in modern office buildings provide occupants with local workstation control over:",
    options: [
      "Chiller condensing water flow rate",
      "Refrigerant expansion valve superheat",
      "Air temperature, airflow velocity, radiant heat, lighting, and acoustic background masking",
      "Boiler gas firing rate"
    ],
    answer: 2,
    explanation: "Slide 100: PEM provides individual occupant control for air temperature, air flow, radiant heat, lighting, and background noise masking.",
    lesson: "L6b"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L06b)
// ==========================================
const shortData = [
  {
    type: "compare",
    lesson: "L6b",
    question: "Compare WINDOW-MOUNTED air conditioners, SPLIT-TYPE air conditioners, and VRV/VRF systems regarding: (a) physical equipment arrangement, (b) acoustic noise level inside the occupied room, (c) maximum number of indoor units served per system, and (d) typical building application.",
    modelAnswer: "(a) Physical Equipment Arrangement:\n• Window AC: Self-contained single unit housing evaporator, compressor, condenser, and fans inside one metal box mounted in a wall/window aperture[cite: 7].\n• Split AC: Split into two sections; indoor evaporator unit separated from outdoor condensing unit (compressor + condenser) by insulated copper refrigerant piping[cite: 7].\n• VRV/VRF: Modular central outdoor condensing unit with inverter compressor connected via branch piping to multiple indoor units across different zones[cite: 7].\n\n(b) Acoustic Noise Level in Occupied Room:\n• Window AC: High / Noisy; compressor and outdoor fan vibrations radiate directly into the room[cite: 7].\n• Split AC: Considerably quieter; primary noise sources (compressor, condenser fan) are located outdoors[cite: 7].\n• VRV/VRF: Very quiet; whisper-quiet indoor units with variable electronic expansion valves; noisy compressors situated remotely on the roof[cite: 7].\n\n(c) Maximum Indoor Units Served:\n• Window AC: Exactly 1 zone (1:1 self-contained)[cite: 7].\n• Split AC: Typically 1 indoor unit per outdoor unit (or 2-4 in small multi-split)[cite: 7].\n• VRV/VRF: Up to 16 indoor units connected to a single outdoor system[cite: 7].\n\n(d) Typical Application:\n• Window AC: Residential apartments, temporary site offices, budget retrofits[cite: 7].\n• Split AC: Residential bedrooms/living rooms, small retail shops, server rooms[cite: 7].\n• VRV/VRF: Multi-zone commercial offices, boutique hotels, high-end residential villas, schools[cite: 7].",
    tips: "Structure across the 4 criteria: Physical layout, Noise, Max indoor units (1 vs 1 vs 16), and Typical application[cite: 7]."
  },
  {
    type: "trace",
    lesson: "L6b",
    question: "Trace the thermodynamic cycle of a Vapor Compression Refrigeration System (Slide 8–9). Describe what happens to the refrigerant in: (1) Evaporator, (2) Compressor, (3) Condenser, and (4) Expansion Valve, stating representative pressures, temperatures, and heat exchanges.",
    modelAnswer: "1. Evaporator (Heat Absorption Q2):\n• State: Low-pressure, low-temperature liquid-vapor mixture enters at approx. 3 °C[cite: 7].\n• Action: Absorbs heat Q2 from indoor room air (25 °C), causing the refrigerant to evaporate at constant low pressure into low-temperature saturated/superheated vapor[cite: 7].\n\n2. Compressor (Mechanical Work Input W):\n• State: Low-pressure vapor enters from evaporator[cite: 7].\n• Action: Consumes electrical power W to compress the vapor, discharging it as high-pressure, high-temperature superheated gas into the discharge line (approx. 46 °C or higher)[cite: 7].\n\n3. Condenser (Heat Rejection Q1):\n• State: High-pressure, high-temperature gas enters[cite: 7].\n• Action: Cools and condenses by giving up sensible heat and all latent heat of vaporization Q1 to outdoor ambient air (30 °C) or cooling water, exiting as high-pressure subcooled liquid[cite: 7].\n\n4. Expansion Device (Throttling / Metering):\n• State: High-pressure liquid enters[cite: 7].\n• Action: Throttles the liquid through an orifice/needle, causing an abrupt drop in pressure and temperature via isenthalpic expansion, producing a cold liquid-vapor mixture ready to absorb heat in the evaporator[cite: 7].\n\nEnergy Balance: Q1 = Q2 + W (Heat rejected at condenser equals heat absorbed at evaporator plus compressor mechanical work)[cite: 7].",
    tips: "Explicitly trace the 4 states, state pressures (high vs low), temperatures (3°C evap vs 46°C cond), and the Q1 = Q2 + W balance[cite: 7]."
  },
  {
    type: "compare",
    lesson: "L6b",
    question: "Compare Constant Air Volume (CAV) and Variable Air Volume (VAV) all-air central air-conditioning systems. (a) Explain how each system regulates room temperature under fluctuating part-load conditions. (b) Explain why VAV systems offer dramatic fan energy savings. (c) What is the purpose of adding an electric reheat coil to a VAV terminal box?",
    modelAnswer: "(a) Part-Load Temperature Regulation:\n• CAV (Constant Air Volume): Airflow volume delivered to the room remains 100% CONSTANT[cite: 7]. When room cooling load decreases, the central cooling coil modulates chilled water flow to RAISE the supply air temperature, preventing overcooling[cite: 7].\n• VAV (Variable Air Volume): Central AHU delivers conditioned air at a CONSTANT low temperature (typically 12–14 °C)[cite: 7]. When room load decreases, a motorized damper inside the local VAV box THROTTLES the airflow volume (m³/s) entering the zone[cite: 7].\n\n(b) VAV Energy Savings Mechanism:\n• Fan Affinity Laws dictate that fan power varies with the cube of airflow: W ∝ V³[cite: 6].\n• Because VAV reduces airflow during part-load hours (which represent >80% of annual operating hours), AHU supply fans equipped with variable frequency drives (VFD) run at lower speeds, cutting annual fan electrical consumption by 30% to 50% compared to CAV systems[cite: 6, 7].\n\n(c) VAV Box with Electric Reheat:\n• Prevents overcooling during periods of high humidity and low sensible load[cite: 7].\n• Ensures minimum ventilation air velocity: When airflow is throttled to its allowable minimum (e.g. 30% to maintain fresh air standards), the electric heater tempers the supply air so the room does not become chilly[cite: 7].",
    tips: "CAV = constant flow / variable temp; VAV = constant temp / variable flow; Fan energy scales cubically (W ∝ V³); Reheat prevents overcooling at minimum ventilation stops[cite: 6, 7]."
  },
  {
    type: "explain",
    lesson: "L6b",
    question: "In an AIR-WATER central air-conditioning system (Slide 96–97): (a) Explain the division of thermal loads between the Primary Air Unit (PAU) and the Fan Coil Units (FCUs). (b) Describe how primary air is routed into the FCU. (c) Discuss TWO major engineering advantages of this system over an All-Air system.",
    modelAnswer: "(a) Division of Thermal Loads:\n• Primary Air Unit (PAU): Handles 100% of the outdoor ventilation air intake[cite: 7]. It deep-cools, filters, and dehumidifies fresh outdoor air, absorbing the entire fresh air ventilation load and outdoor latent humidity load[cite: 7].\n• Fan Coil Units (FCUs): Distributed in individual rooms, piped to central chilled water[cite: 7]. They handle the internal space sensible heat load (heat generated by occupants, computers, solar radiation, and lighting)[cite: 7].\n\n(b) Routing of Primary Air:\n• Treated primary air from the PAU is conveyed through insulated ducts and injected directly into the MIXING BOX (mixing plenum) of each ceiling-mounted or floor-standing FCU[cite: 7].\n• There, fresh primary air blends with recirculated room air before passing across the chilled water coil and discharging into the room[cite: 7].\n\n(c) Engineering Advantages over All-Air Systems:\n1. Massive Space Savings in Ceilings: Water carries heat ~3500 times more densely than air. Because FCUs handle space sensible loads hydronically, primary air ducts only need to carry fresh air (~20% to 30% of all-air duct volume), reducing ceiling duct void heights significantly[cite: 4, 7].\n2. Independent Zone Control: Every room FCU possesses its own 2-way valve and thermostat, allowing localized temperature control without cross-zone air contamination or expensive reheat[cite: 4, 7].",
    tips: "Explain PAU = ventilation/latent load, FCU = space sensible load, primary air routes into FCU mixing box, and highlight ~70% duct size reduction[cite: 7]."
  },
  {
    type: "scenario",
    lesson: "L6b",
    question: "A high-rise commercial office building employs a central water-cooled chiller plant (Slide 15, 80). Trace the heat energy flow through the FOUR distinct fluid loops: (1) Indoor Air Loop, (2) Chilled Water Loop, (3) Refrigerant Loop, and (4) Condenser Water Loop, explaining how heat extracted from tenant spaces is ultimately rejected into the atmosphere.",
    modelAnswer: "Heat flows sequentially through four closed thermal loops to reach the outdoor atmosphere[cite: 7]:\n\n1. Indoor Air Loop (Room to AHU/FCU):\n• Tenant heat (occupants, computers, solar radiation) warms room air to ~25 °C[cite: 7].\n• Fans draw this warm room air across the cooling coil of an AHU or FCU, transferring space heat into the chilled water circulating inside the coil tubes[cite: 7]. Cooled air (13 °C) is blown back into tenant spaces[cite: 7].\n\n2. Chilled Water Loop (AHU/FCU to Chiller Evaporator):\n• Chilled water enters cooling coils at 7 °C, absorbs heat from the airstream, and warms to 12 °C[cite: 4, 7].\n• Chilled water pumps circulate this 12 °C water back to the central plant into the chiller shell-and-tube EVAPORATOR, transferring heat across copper tubes to the cold refrigerant[cite: 4, 7].\n\n3. Refrigerant Loop (Evaporator to Condenser via Compressor):\n• Liquid refrigerant boiling at ~3 °C inside the evaporator absorbs heat from the 12 °C water and turns into vapor[cite: 7].\n• The compressor draws this vapor, adds mechanical electrical work W, and discharges high-pressure, high-temperature gas (~46 °C) into the CONDENSER[cite: 7].\n\n4. Condenser Water Loop (Chiller Condenser to Cooling Tower):\n• Condenser water pumps circulate water from the cooling tower at ~32 °C through the chiller condenser tubes, absorbing heat from the 46 °C refrigerant (causing refrigerant to condense into liquid) and warming to ~37 °C[cite: 4, 7].\n• The 37 °C water is pumped to the roof COOLING TOWER, sprayed over PVC fills where evaporative cooling transfers the heat into ambient air, which exhausts to the outdoor atmosphere[cite: 4, 7].",
    tips: "Trace all 4 loops in sequence: (1) Room air to coil, (2) Chilled water 7-12°C to evaporator, (3) Refrigerant 3-46°C across compressor, (4) Condenser water 32-37°C to cooling tower[cite: 4, 7]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態空調系統圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your engineering analysis here / 喺度輸入你的分析與推導答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握空調與製冷四大系統架構的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細工程分析與解釋。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫製冷循環溫度狀態、VRV系統特性與CAV/VAV差異。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習空調架構相應主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
