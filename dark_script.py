import re
import sys

def convert_to_dark_mode(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = {
        r'bg-white(\b(?!/))': r'bg-white dark:bg-slate-800', # match bg-white but not bg-white/20
        r'bg-slate-50\b': r'bg-slate-50 dark:bg-slate-900',
        r'bg-slate-100\b': r'bg-slate-100 dark:bg-slate-800',
        r'text-slate-900\b': r'text-slate-900 dark:text-white',
        r'text-slate-800\b': r'text-slate-800 dark:text-slate-100',
        r'text-slate-700\b': r'text-slate-700 dark:text-slate-200',
        r'text-slate-600\b': r'text-slate-600 dark:text-slate-300',
        r'text-slate-500\b': r'text-slate-500 dark:text-slate-400',
        r'border-slate-200\b': r'border-slate-200 dark:border-slate-700',
        r'border-slate-100\b': r'border-slate-100 dark:border-slate-800',
    }

    # The issue with global replace is that it will also replace classes that shouldn't be replaced,
    # or replace classes multiple times if we run it again.
    # To prevent double replacement (e.g. bg-white dark:bg-slate-800 -> bg-white dark:bg-slate-800 dark:bg-slate-800),
    # we should check if the dark class is already present.
    
    for pattern, replacement in replacements.items():
        # Only replace if not followed by " dark:"
        safe_pattern = pattern + r'(?! dark:)'
        content = re.sub(safe_pattern, replacement, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    convert_to_dark_mode('c:\\Users\\HUAWEI\\OneDrive\\Bureau\\dr.soukaina\\index.html')
