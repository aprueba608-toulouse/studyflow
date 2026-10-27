import os, re

print('=== ALL ASSETS WITH SVG IDS & DESCRIPTIONS ===')
for f in sorted(os.listdir('assets')):
    if f.endswith('.svg'):
        p = os.path.join('assets', f)
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            txt = fp.read()
        ids = re.findall(r'id=["\']([^"\']+)["\']', txt)
        # Check what paths/d attributes exist
        paths = re.findall(r'd=["\']([^"\']+)["\']', txt)
        print(f"FILE: {f}")
        print(f"  IDs: {ids}")
        if len(paths) > 0:
            print(f"  Sample path: {paths[0][:60]}...")
        print()
