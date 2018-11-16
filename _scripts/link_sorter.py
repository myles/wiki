"""Markdown Link List Sorter."""
import re
import unittest
from pathlib import Path

import click

LINKS_REGEX = re.compile(r'^[-|\*]\s+\[.+\]\(.+\).*$')


def sort_links(lines):
    """Sort links in alphabetical proper order."""
    blocks = []
    last_indent = None

    for line in lines:
        s_line = line.lstrip()
        indent = len(line) - len(s_line)

        match = LINKS_REGEX.match(line)

        if match:
            if indent == last_indent:
                blocks[-2].append(line)
            else:
                blocks.append([line])

            last_indent = indent
        else:
            blocks.append([line])
            last_indent = None

    return [
        "".join(sorted(block))
        for block in blocks
    ]


class TestSortLinks(unittest.TestCase):

    def setUp(self):
        self.example = """# Heading

This is the <dfn>defninition</dfn>.

## Links

*   [B Link](https://example.com/)
-   [A Link](https://example.com/) by First Last, 29 January 2018.
- [C Link](https://example.com/)
* [A1 Link](https://example.com/)
-   This is just a some text
-   [0 Link](https://example.com/) by First Last, 29 January 2018."""

        self.answer = """# Heading

This is the <dfn>defninition</dfn>.

## Links

-   [A Link](https://example.com/) by First Last, 29 January 2018.
* [A1 Link](https://example.com/)
*   [B Link](https://example.com/)
- [C Link](https://example.com/)
-   This is just a some text
-   [0 Link](https://example.com/) by First Last, 29 January 2018."""

    def test_sort(self):
        assert sort_links(self.example.split('\n')) == self.answer


@click.command()
def cli():
    root_path = Path(__file__).absolute().parents[1]

    exclude_paths = (
        str(root_path.joinpath("node_modules/")),
        str(root_path.joinpath(".git/")),
        str(root_path.joinpath("SUMMARY.md")),
    )

    for md_file_path in root_path.rglob("*.md"):
        if str(md_file_path).startswith(exclude_paths):
            continue

        with md_file_path.open('r') as file_obj:
            blocks = sort_links(file_obj.readlines())

        with md_file_path.open('w+') as file_obj:
            file_obj.write("".join(blocks))


if __name__ == "__main__":
    cli()
