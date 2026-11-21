#!/usr/bin/env python3
"""Gera narrações naturais em Português de Portugal (Raquel - feminina e Duarte - masculina)
para todas as histórias em stories.json que tenham texto."""

import asyncio
import json
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent
CATALOG_PATH = ROOT / "stories.json"
AUDIO_DIR = ROOT / "audio"

VOICES = {
    "female": "pt-PT-RaquelNeural",
    "male": "pt-PT-DuarteNeural",
}


async def generate_for_story(story: dict) -> None:
    text = (story.get("text") or "").strip()
    if not text:
        return

    story_id = story["id"]
    AUDIO_DIR.mkdir(exist_ok=True)

    for gender, voice_name in VOICES.items():
        filename = f"{story_id}-{gender}.mp3"
        out_path = AUDIO_DIR / filename
        key = "audioFemaleUrl" if gender == "female" else "audioMaleUrl"
        if not out_path.exists() or out_path.stat().st_size == 0:
            clean_text = text.replace("—", "")
            communicate = edge_tts.Communicate(clean_text, voice=voice_name)
            await communicate.save(str(out_path))
            print(f"Gerado: {out_path.name} ({voice_name})")
        else:
            print(f"Já existe: {out_path.name}")
        story[key] = f"./audio/{filename}"

    story["audioType"] = "dual"


async def main() -> None:
    data = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    for story in data.get("stories", []):
        await generate_for_story(story)
    CATALOG_PATH.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print("stories.json atualizado com vozes PT-PT naturais (Raquel e Duarte).")


if __name__ == "__main__":
    asyncio.run(main())
