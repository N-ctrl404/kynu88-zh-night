import json
try:
    from googletrans import Translator
except ImportError:
    raise ImportError("未找到 googletrans 库，请先运行 'pip install googletrans==4.0.0-rc1' 安装。")

translator = Translator()

# 读取爬虫生成的原始数据
with open("raw_data.json", encoding="utf-8") as f:
    data = json.load(f)

# 对每个区域和提供者名称、描述做翻译
for region in data["regions"]:
    region["name_zh"] = translator.translate(region["name_orig"], dest="zh-cn").text
    for p in region["providers"]:
        p["name_zh"] = translator.translate(p["name_orig"], dest="zh-cn").text
        p["desc_zh"] = translator.translate(p["desc_orig"], dest="zh-cn").text

# 写入汉化后的结果
with open("translated_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
