import os
import glob
import re

files = glob.glob('src/pages/*.jsx') + glob.glob('src/pages/*.tsx')

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We want to replace absolute positioning that is causing clipped/invisible images with a more robust flex container
    pattern = r'<div className="absolute[^"]*pointer-events-none z-0">\s*<img[^>]*src=\{([^}]+)\}[^>]*alt="([^"]+)"[^>]*className="w-full h-full object-contain[^"]*"[^>]*/>\s*</div>'
    replacement = r'<div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end z-0 pr-2">\n          <img src={\1} alt="\2" className="w-full h-auto max-h-[140px] object-contain object-right" />\n        </div>'
    
    new_content = re.sub(pattern, replacement, content)
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print("Patched " + f)
