# Web Scraping in Python

These are my notes on <dfn>Web Scraping in Python</dfn>

## Libraries

-   [Requests-HTML](https://html.python-requests.org/ "HTML Parsing for Humans") - Combines [Requests](https://python-requests.org/) and [PyQuery](https://pythonhosted.org/pyquery/) to make parsing HTML (e.g. scraping the web) as simple and intuitive as possible - [🐙](https://github.com/kennethreitz/requests-html "Requests-HTML on GitHub") [🐍](https://pypi.org/project/requests-html/ "Requests-HTML on PyPi")

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
