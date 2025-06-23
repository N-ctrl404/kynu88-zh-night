#!/bin/bash
# 每小时更新数据并同步到前端
cd /path/to/kynu88-zh-night/data-scraper
source venv/bin/activate
python scrape.py
python translate.py
cp translated_data.json ../public/data/translated_data.json