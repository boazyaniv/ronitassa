
import json
import os
import sys
from pathlib import Path
from datetime import datetime, timedelta

def main():
    try:
        base_path = Path('/Users/boaz.y/dev/ronitassa/website')
        data_path = base_path / 'src/data/products.json'
        
        with open(data_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        products = []
        for category in data['categories']:
            for product in category['products']:
                image_path = product.get('image', '')
                if not image_path:
                    continue
                    
                # image_path is like /images/products/foo.png
                # absolute path is base_path / public / images / products / foo.png
                rel_path = image_path.lstrip('/')
                full_path = base_path / 'public' / rel_path
                
                status = "missing"
                if full_path.exists():
                    # Check if modified in the last 1 hour
                    mtime = datetime.fromtimestamp(full_path.stat().st_mtime)
                    if datetime.now() - mtime < timedelta(hours=1):
                         status = "done"
                    else:
                        status = "old"
                
                products.append({
                    "id": product['id'],
                    "name": product['name'],
                    "description": product['description'],
                    "image_path": str(full_path),
                    "status": status,
                    "rel_path": image_path
                })

        # Filter for pending (missing or old)
        pending = [p for p in products if p['status'] != 'done']
        
        print(json.dumps(pending, ensure_ascii=False, indent=2))
        
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
