---
title: Web Scraping in Python
parent: programming--python
---

These are my notes on <dfn>Web Scraping in Python</dfn>

## Libraries

-   cloudflare-scrape - a Python library to bypass Cloudflare's anti-bot page - [:octopus:](https://github.com/Anorov/cloudflare-scrape "cloudflare-scrape on GitHub") [:snake:](https://pypi.python.org/pypi/cfscrape/ "cfscrape on PyPi")
-   [Requests-HTML][1] - Combines [Requests][2] and [PyQuery][3] to make parsing HTML (e.g. scraping the web) as simple and intuitive as possible - [:octopus:][4] [:snake:][5]

## Snippets

### Scrape a web page behind a login

```python
from requests_html import HTMLSession

session = HTMLSession()

login_page = session.post(
  "https://example.com/login.php",
  data={
    "username": "myles",
    "password": "areallygoodpassword"
  }
)

if not login_page.ok:
  raise Exception

secret_page = session.get(
  "https://example.com/admin/index.php",
  cookies=login_page.cookies
)

if not secret_page.pk:
  raise Exception
```

### Loop though a Description List element

```python
from pyquery import PyQuery as pq

doc = pq("""<dl>
    <dt>First name</dt>
    <dd>Dolores</dd>
    <dt>Last name</dt>
    <dd>Abernathy</dd>
    <dt>ID number</dt>
    <dd>CH465517080</dd>
    <dt>Status</dt>
    <dd>Conscious</dd>
    <dt>Park</dt>
    <dd>Westworld</dd>
    <dt>Narrative Role</dt>
    <dd>Rancher's daughter<dd>
</dl>""")

data = {}

for dt_el, dd_el in zip(*(iter(doc.find("dt, dd")),) * 2):
    data[dt_el.text] = dd_el.text
```

[1]: https://html.python-requests.org/ "HTML Parsing for Humans"

[2]: https://python-requests.org/

[3]: https://pythonhosted.org/pyquery/

[4]: https://github.com/kennethreitz/requests-html "Requests-HTML on GitHub"

[5]: https://pypi.org/project/requests-html/ "Requests-HTML on PyPi"
