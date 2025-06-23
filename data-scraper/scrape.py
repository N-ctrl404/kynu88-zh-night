import json
import requests
from bs4 import BeautifulSoup

BASE = "https://kynu88.com"

def fetch_regions():
    resp = requests.get(BASE)
    soup = BeautifulSoup(resp.text, "html.parser")
    regions = []
    for btn in soup.select("button.region-btn"):
        regions.append({
            "name_orig": btn.get_text(strip=True),
            "url": BASE + btn["onclick"].split("'")[1]
        })
    return regions

def fetch_providers(region):
    resp = requests.get(region["url"])
    soup = BeautifulSoup(resp.text, "html.parser")
    items = []
    for card in soup.select(".provider-card"):
        items.append({
            "name_orig": card.select_one(".name").get_text(strip=True),
            "desc_orig": card.select_one(".desc").get_text(strip=True),
            "detail_url": BASE + card.select_one("a")["href"]
        })
    return items

def main():
    data = {"regions": []}
    regs = fetch_regions()
    for r in regs:
        providers = fetch_providers(r)
        r["providers"] = providers
        data["regions"].append(r)
    with open("raw_data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()