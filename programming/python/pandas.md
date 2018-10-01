# Pandas 🐼

## Notes

* [`pandas.io.json.json_normalize`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.io.json.json_normalize.html) is a function to _normalize_ structured JSON into a flat `dataframe`. Useful for working with data that comes from an JSON API.

## Snippets

### Connect to a SQL Database

```py
import pandas as pd
import numpy as np
from sqlalchemy import create_engine

engine = create_engine("postgresql:///database")

df = pd.read_sql_query("SELECT * FROM table;", con=engine)

df.head()
```

#### SQLite

```py
import pandas as pd
import sqlite

conn = sqlite3.connect("database.sqlite")
df = pd.read_sql_query("SELECT * FROM table_name;", conn)

df.head()
```

### Python compatible column names with [slugify](https://pypi.python.org/pypi/awesome-slugify)

```py
from slugify import slugify

df.columns = [slugify(c, separator="_", to_lower=True) for c in df.columns]
```



