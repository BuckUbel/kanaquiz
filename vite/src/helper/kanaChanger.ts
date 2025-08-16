// TypeScript
// Datei: KanaTransliterator.ts

import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";

type PreferKana = "hiragana" | "katakana";

function buildKanaToRomajiMap(): Map<string, string> {
  const map = new Map<string, string>();

  const addGroup = (group: Record<string, string[]>) => {
    for (const [kana, romajiList] of Object.entries(group)) {
      // Nimm den ersten Romaji-Eintrag als Standard
      map.set(kana, romajiList[0]);
    }
  };

  for (const type of Object.keys(SimpleKanaDictionary) as Array<keyof typeof SimpleKanaDictionary>) {
    const groups = SimpleKanaDictionary[type];
    for (const group of Object.values(groups)) {
      addGroup(group as Record<string, string[]>);
    }
  }

  return map;
}

function buildRomajiToKanaMap(prefer: PreferKana = "hiragana"): Map<string, string> {
  // Wir füllen zuerst die bevorzugte Schrift, danach die alternative – so gewinnt die Präferenz.
  const order: Array<keyof typeof SimpleKanaDictionary> =
    prefer === "hiragana" ? ["hiragana", "katakana", "katakana_ext"] : ["katakana", "katakana_ext", "hiragana"];

  const map = new Map<string, string>();

  for (const type of order) {
    const groups = SimpleKanaDictionary[type];
    for (const group of Object.values(groups)) {
      for (const [kana, romajiList] of Object.entries(group as Record<string, string[]>)) {
        for (const r of romajiList) {
          const key = r.toLowerCase();
          if (!map.has(key)) {
            map.set(key, kana);
          }
        }
      }
    }
  }

  return map;
}

function buildRegexAlternation(sortedKeys: string[]): RegExp {
  // Escape für Regex-Metazeichen, dann Alternation bauen
  const escaped = sortedKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp(escaped.join("|"), "g");
}

/**
 * Kana → Romaji
 * - Ersetzt Hiragana, Katakana und Katakana-Extensions per Regex in einem Durchlauf.
 */
export function kanaToRomaji(input: string): string {
  const map = buildKanaToRomajiMap();

  // Längste Kana zuerst (z. B. きゃ vor き)
  const keys = Array.from(map.keys()).sort((a, b) => b.length - a.length);
  const regex = buildRegexAlternation(keys);

  return input.replace(regex, (m) => map.get(m) ?? m);
}

/**
 * Romaji → Kana
 * - Ersetzt Romaji-Fragmente per Regex mit bevorzugter Schrift (hiragana/katakana).
 * - Standard: hiragana
 */
export function romajiToKana(input: string, prefer: PreferKana = "hiragana"): string {
  const map = buildRomajiToKanaMap(prefer);

  // Längste Romaji-Sequenzen zuerst (z. B. "kyo" vor "k" / "yo")
  const keys = Array.from(map.keys()).sort((a, b) => b.length - a.length);
  const regex = buildRegexAlternation(keys);

  return input.toLowerCase().replace(regex, (m) => map.get(m.toLowerCase()) ?? m);
}

// Kleine Helfer für schnellen Gebrauch
export const toRomaji = kanaToRomaji;
export const toHiragana = (s: string) => romajiToKana(s, "hiragana");
export const toKatakana = (s: string) => romajiToKana(s, "katakana");
